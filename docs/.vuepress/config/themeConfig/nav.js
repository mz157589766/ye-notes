// nav
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '开发', link: '/ops/',
        items: [{text: 'Vue', link: '/pages/5164.html'},]
    },
    {
        text: '专题', link: '/topic/',
        items: []
    },
    {
        text: '生活', link: '/life/',
        items: [
            {text: '随写编年', link: '/pages/0301_Todo.html'},
            {text: '效率工具', link: '/pages/136.html'}
        ]
    },
    {
        text: '编程', link: '/code/',
        items: [
            {text: 'Vue', link: '/pages/5164.html'},
            {text: 'Shell', link: '/pages/531.html'}
        ]
    },
    {text: '关于', link: '/about/'},
    {
        text: '索引', link: '/categories/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ],
    },
    {
        text: '页面',
        link: '/friends/',
        items: [
            {
                items: [
                    {text: '友链', link: '/friends/'},
                    {text: '导航', link: '/nav/'},
                ]
            },
            {
                items: [
                    {text: 'json2go', link: 'http://public.eryajf.net/json2go'},
                    {text: '微信MD编辑', link: 'http://public.eryajf.net/md'},
                    {text: '国内镜像', link: 'http://public.eryajf.net/mirror'},
                    {text: '出口IP查询', link: 'http://ip.eryajf.net'},
                ]
            },
            {
                items: [
                    {text: 'ldapdoc', link: 'http://ldapdoc.eryajf.net'},
                    {text: 'HowToStartOpenSource', link: 'https://eryajf.github.io/HowToStartOpenSource'},
                    {text: 'vdoing-template', link: 'https://eryajf.github.io/vdoing-template/'},
                ]
            }
        ],
    },
    {text: '开往', link: 'https://travellings.link'},
]
