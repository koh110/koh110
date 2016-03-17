# install Node.js
nodejs_directory = "/usr/local/src/nodejs"

directory "#{nodejs_directory}" do
  owner "root"
  group "root"
  mode 0755
  action :create
end

nodejs_version = "4.4.0"

# http://nodejs.org/dist/v{#nodejs_version}/SHASUMS256.txt
remote_file "#{nodejs_directory}/nodejs-v#{nodejs_version}-linux-x64.tar.gz" do
  source "http://nodejs.org/dist/v#{nodejs_version}/node-v#{nodejs_version}-linux-x64.tar.gz"
  checksum "114a865effcff2783022ef0fcd30d1e51624d6c28140db0bdc662bcd0f850d8b"
  action :create_if_missing
end

bash "install-nodejs" do
  user "root"
  cwd "#{nodejs_directory}"
  code <<-"END"
set -exu -o pipefail

tar -C /usr/local --strip-components 1 -xaf nodejs-v#{nodejs_version}-linux-x64.tar.gz

echo -n "#{nodejs_version}" > #{nodejs_directory}/nodejs-install.done
   END
   not_if {
     ::File.exists?("#{nodejs_directory}/nodejs-install.done") &&
     ::File.open("#{nodejs_directory}/nodejs-install.done").read == nodejs_version
   }
end

# install nginx
nginx_directory = "/usr/local/src/nginx"

directory "#{nginx_directory}" do
  owner "root"
  group "root"
  mode 0755
  action :create
end

# Document Root
directory "/var/www/share/public" do
  recursive true
  mode 0755
  action :create
end

nginx_version = "1.9.12-1"

# http://nginx.org/en/linux_packages.html
remote_file "#{nginx_directory}/nginx_#{nginx_version}~wily_amd64.deb" do
  source [
    "http://nginx.org/packages/mainline/ubuntu/pool/nginx/n/nginx/",
    "nginx_#{nginx_version}~wily_amd64.deb"
  ].join("")
  action :create_if_missing
end

package "nginx" do
  source "#{nginx_directory}/nginx_#{nginx_version}~wily_amd64.deb"
  provider Chef::Provider::Package::Dpkg
  action :install
end

execute "test-nginx-configuration" do
  user "root"
  group "root"
  command "/usr/sbin/nginx -t -c /etc/nginx/nginx.conf"
  action :nothing
end

service "nginx" do
  supports :status => true, :restart => true, :reload => true
  action [:enable, :start]
end

file "/etc/nginx/nginx.conf" do
  owner "root"
  group "root"
  content <<-"EOF"
user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;

error_log /var/log/nginx.error.log warn;
pid       /var/run/nginx.pid;

events {
  use epoll;
  multi_accept on;
  worker_connections 2048;
}

http {
  include /etc/nginx/mime.types;

  log_format main '$request_time $remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for" $upstream_response_time';

  access_log /var/log/nginx/access.log main;
  charset utf-8;

  server {
    listen 80;

    root /var/www/share/public;
    index index.html;

    proxy_redirect off;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Path $request_uri;

    location / {
      try_files $uri /index.html;
      expires -1;
    }
  }
}
  EOF
notifies :run, "execute[test-nginx-configuration]", :delayed
notifies :reload, "service[nginx]", :delayed
end
