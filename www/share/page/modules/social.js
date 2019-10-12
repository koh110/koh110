const initialState = {
  accounts: [{
    url: 'https://github.com/koh110',
    classNames: ['fa', 'fa-github']
  }, {
    url: 'https://www.facebook.com/kohta110',
    classNames: ['fa', 'fa-facebook-official']
  }, {
    url: 'https://twitter.com/koh110',
    classNames: ['fa', 'fa-twitter']
  }, {
    url: 'https://jp.linkedin.com/in/ito-kohta-24078410b',
    classNames: ['fa', 'fa-linkedin-square']
  }, {
    url: 'https://www.slideshare.net/kohta110',
    classNames: ['fa', 'fa-slideshare']
  }, {
    url: 'https://b.hatena.ne.jp/koh110/',
    classNames: ['hatena']
  }, {
    url: 'http://koh110.hatenablog.com/',
    classNames: ['hatena-blog']
  }, {
    url: 'https://qiita.com/koh110',
    classNames: ['qiita']
  }]
}

export default function reducer(state = initialState, action = {}) {
  return state
}
