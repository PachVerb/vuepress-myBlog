module.exports = {
    base: '/',
    title: 'PachVerb',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    description: 'pachverb个人站点，专注技术分享！',
    themeConfig:{
        logo:'/logo.png',
        nav:[
            { text: '首页', link: '/'},
            { 
              text: '日志', 
              items: [
                {
                  text: '技术',
                  link: '/technology/'
                },
                {
                  text: '随笔',
                  link: '/essay/'
                },
                {
                  text: '每日一点',
                  link: '/newday/'
                },
                {
                  text: '阅读',
                  link: '/reads/'
                },
              ]
            },
            { text: '标签', link: '/label/'},
            { text: '关于我', link: '/about/'},
            { text: 'Github', link: 'https://github.com/PachVerb/'}
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        repo: 'https://github.com/PachVerb',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: 'webcome your PR!',
        smoothScroll: true
    },
    extend: '@vuepress/theme-default',
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': ''
          }
        }
    }
}