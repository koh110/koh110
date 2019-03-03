import React from 'react'
import Wrapper from './WorkWrapper'
import Element from './LogElement'

const logs = [
  {
    title: 'Callback を撲滅せよ',
    date: '2018/12/25',
    url: 'https://techblog.yahoo.co.jp/javascript/nodejs/callback-to-promise/',
    img: 'https://s.yimg.jp/images/tecblog/website/v1/images/ogp.png',
    desc: 'CallbackをPromise化する手法について'
  },
  {
    title: 'おつかれさま、MYM 〜僕とMYMのフロントエンド戦争〜',
    date: '2018/12/25',
    url: 'https://techblog.yahoo.co.jp/advent-calendar-2018/thankyou-mym/',
    img: 'https://s.yimg.jp/images/tecblog/2018-2H/thankyou-mym/thankyoumym_ogp.png',
    desc: '内製チャットシステムMYMのフロントエンドの仕組みについて'
  },
  {
    title: '市ヶ谷Geek★Night #18 フロントエンド、マジ卍',
    date: '2018/03/26',
    url: 'https://ichigayageek.connpass.com/event/87792/',
    img: 'https://connpass-tokyo.s3.amazonaws.com/thumbs/e1/5d/e15d8c9a06f047d8e37080de466685d5.png',
    desc: 'Angularと私。自分がいなくなっても破綻しないようなフロントエンドを残すための試行錯誤について',
    doc: 'https://speakerdeck.com/koh110/angular-and-me'
  },
  {
    title: 'Bonfire Frontend #1',
    date: '2018/03/26',
    url: 'https://yj-meetup.connpass.com/event/58718/',
    img: 'https://connpass-tokyo.s3.amazonaws.com/thumbs/d1/28/d1284989fa5d17e979cd69f88d62cef1.png',
    desc: '僕の考えるフロントエンドエンジニアの生き残り方。技術的な話というよりエモな感じ',
    doc: 'https://speakerdeck.com/koh110/bonfire-frontend-number-1'
  },
  {
    title: 'デブサミ2018',
    date: '2018/02/16',
    url: 'https://codezine.jp/article/detail/10693',
    img: 'https://codezine.jp/static/images/article/10693/10693_og.jpg',
    desc: '「ヤフーを支える社内システム」ヤフーの情シスについて',
    doc: 'https://www.slideshare.net/techblogyahoo/devsumi-16a2'
  },
  {
    title: 'INSIDE FRONTEND',
    date: '2018/02/11',
    url: 'https://inside-frontend.com/#ama-c3-2',
    img: 'https://inside-frontend.com/stat/ogimage_issue_3.png',
    desc: 'コンポーネント座談会。React, Angular, Vueのコンポーネントをどう設計しているか。誘って頂いた。'
  },
  {
    title: 'Yahoo! JAPAN Tech Conference',
    date: '2018/01/27',
    url: 'https://techconference.yahoo.co.jp/2018/',
    img: 'https://s.yimg.jp/images/techconf/2018/images/ogp_image.png',
    desc: 'ヤフーのNode.js。ヤフーでなぜNode.jsを使うのか。どこで使われているのか。',
    doc: 'https://www.slideshare.net/techblogyahoo/yjtc18-a6-nodejs'
  },
  {
    title: '東京Node学園祭2017',
    date: '2017/11/25',
    url: 'https://nodefest.jp/2017/schedule.html',
    img: 'http://nodefest.jp/2017/img/ogimage.png',
    desc: 'スポンサートークの枠を使って採用とか放置してひたすらNode.jsで作ったシステムの話をしていた。',
    doc: 'https://speakerdeck.com/koh110/nodexue-yuan-ji-2017'
  },
  {
    title: 'Node.jsのコミッターを迎え、炎の特訓—Node.js社内勉強会はこうして始まった',
    date: '2017/10/13',
    url: 'https://linotice.tumblr.com/post/166348035844/20171013',
    img: 'https://66.media.tumblr.com/f1ea3ed85f4dcd19447186ab41f9771b/tumblr_inline_oxq22uRv9h1utbyrh_540.jpg',
    desc: '社内のNode.jsサポートチームのはなし'
  },
  {
    title: 'ヤフーの社内システムを紹介します',
    date: '2016/12/05',
    url: 'https://techblog.yahoo.co.jp/advent-calendar-2016/pozzy/',
    img: 'https://s.yimg.jp/images/tecblog/2016-2H/advent-image.png',
    desc: 'ヤフーの内製IoT社内システムの紹介'
  },
  {
    title: 'ES6時代のNode.js',
    date: '2015/12/02',
    url: 'https://techblog.yahoo.co.jp/javascript/nodejs/Node-es6/',
    img: 'https://i.yimg.jp/images/tecblog/2015-2H/advent_image.jpg',
    desc: 'Node.jsのES6対応について'
  }
]

const Log = () => {
  return (
    <Wrapper>
      <div>
        <h2>Log</h2>
        <div>いままで出たやつを忘れないようにするやつ</div>
        {logs.map((e, i) => (
          <Element key={`${i}-${e.title}`} {...e} />
        ))}
      </div>
    </Wrapper>
  )
}
export default Log
