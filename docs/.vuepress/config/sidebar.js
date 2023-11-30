module.exports = {
    '/98_demo/': sidebar_0(),
    '/99_demo/': sidebar_A(),
    '/01_md/': sidebar_p(),
}


function sidebar_p() {
    return [
        {
            title: '开篇',   // 必要的
            path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, //  可选的, 默认值是 true, 是否可以动态展开/关闭
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {title: "README", path: "README"},
                {title: "demo1的标题2", path: "part1_kaipian/demo2"},
            ]
        },
        {
            title: '深入',
            path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true,
            children: [
                {title: "深入demo2标题1", path: "part2_shenru/demo1"},
                {title: "深入demo2标题2", path: "part2_shenru/demo2"},
            ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
    ]
}

function sidebar_0() {
    return [
        {
            title: '简介',   // 必要的
            path: '98_demo/part1_kaipian/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, //  可选的, 默认值是 true, 是否可以动态展开/关闭
            sidebarDepth: 1,    // 可选的, 默认值是 1
        },
        {
            title: '开篇',   // 必要的
            path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, //  可选的, 默认值是 true, 是否可以动态展开/关闭
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {title: "demo1的标题1", path: "part1_kaipian/demo1"},
                {title: "demo1的标题2", path: "part1_kaipian/demo2"},
            ]
        },
        {
            title: '深入',
            path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true,
            children: [
                {title: "深入demo2标题1", path: "part2_shenru/demo1"},
                {title: "深入demo2标题2", path: "part2_shenru/demo2"},
            ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
    ]
}



function sidebar_A() {
    return [
        {
            title: '开篇',   // 必要的
            path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, //  可选的, 默认值是 true, 是否可以动态展开/关闭
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {title: "01标题", path: "01_first/01"},
                {title: "02标题", path: "01_first/02"},
            ]
        },
        {
            title: '深入',
            path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true,
            children: [
                {title: "03标题", path: "02_second/01"},
                {title: "04标题", path: "02_second/02"},
            ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
    ]
}
