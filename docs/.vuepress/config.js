module.exports = {
    base: '/',
    title: 'PachVerb',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    description: 'pachverb个人站点，专注技术分享！',
    themeConfig:{
        nav:[
            { text: '首页', link: '/'},
            { text: '日志', link: '/_logs/'},
            { text: '标签', link: '/label/'},
            { text: '关于我', link: '/about/'},
            { text: 'Github', link: 'https://github.com/PachVerb/'}
        ],
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