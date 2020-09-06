const { description } = require('../../package')

module.exports = {
  base: '/vuepress-myBlog',
  title: 'PachVerb | 网络日志',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  theme: '@vuepress/theme-blog', 
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    globalPagination:{
      prevText:'上一頁', // Text for previous links.
      nextText:'下一頁', // Text for next links.
      lengthPerPage:'2', // Maximum number of posts per page.
      layout:'Pagination', // Layout for pagination page
    },
    nav:[
      { text: '首页', link: '/'},
      { text: '编程', link: '/programm/'},
      { text: '阅读', link: '/reads/'},
      { text: '标签', link: '/tag/'},
      { text: '关于我', link: '/about/'},
      { text: 'Github', link: 'https://github.com/PachVerb/'}
    ],
    directories: [
      {
        id: 'programm',
        dirname: 'programm',
        path: '/programm/',
        title: '编程',
        frontmatter:{ //Front matter for entry page.
          tag: 'programm'
        },
        itemPermalink: '/programm/:year/:month/:day/:slug',
      },
      { 
        id: 'reads',
        dirname: 'reads',
        path: '/reads/',
        title: '阅读',
        frontmatter:{ //Front matter for entry page.
          tag: 'read'
        },
        itemPermalink:  '/reads/:year/:month/:day/:slug',
      }
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
        layout: 'Tags',
        scopeLayout: 'Tag'
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          type: 'youtube',
          link: 'https://www.youtube.com/',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2020 PachVerb',
          link: '',
        },
      ],
    },
    comment: {
      service: 'vssue',
      owner: 'PachVerb',
      repo: 'vuepress-myBlog',
      clientId: 'd128fdf9c4722b45c458',
      clientSecret: 'eeba4b0e3be4029b247c32f4fe15bf2cd504bc45',
    },
    feed: {
      canonical_base: 'http://localhost:8097'
    }
  },
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/plugin-medium-zoom']
  ]
}
