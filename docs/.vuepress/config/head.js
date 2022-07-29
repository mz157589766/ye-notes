// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: 'http://ypyun.ye2zy.work/1486071326-blogger-blog-blogspot-multimedia-media-internet-chating-message_79310.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '胤然胤然',
    },
  ],
  // ['meta', { name: 'baidu-site-verification', content: 'code-LTKHwOecxI' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
  ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
  // 搜索框添加快捷键
  ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
]
