export default {
  title: "web前端",
  base: "/web/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],

  themeConfig: {
    // siteTitle: false,
    logo: "/logo.png",
    algolia: {
      appId: "FRTY16QQO9", // 需要替换
      apiKey: "3ca62b4f61d2f7ec5634e0b6f82aaf8f", // 需要替换
      indexName: "web-search", // 需要替换
      placeholder: "请输入关键词",
      buttonText: "搜索",
    },
    nav: [
      {
        text: "💡 面试专题",
        activeMatch: "/interview",
        link: "/interview/前端基础/HTML.md",
      },
      {
        text: "📦 函数工具库",
        activeMatch: "/tools",
        link: "/tools/函数相关/this指向.md",
      },
      {
        text: "🛠️ 开发问题集合",
        activeMatch: "/question",
        link: "/question/快速开发/HTML.md",
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/GQ2617" }],

    sidebar: {
      "/tools/": [
        {
          text: "函数相关",
          // collapsible: true,
          collapsed: true,
          items: [
            {
              text: "this指向",
              link: "/tools/函数相关/this指向.md",
            },
            {
              text: "防抖节流",
              link: "/tools/函数相关/防抖节流.md",
            },
          ],
        },
        {
          text: "数组相关",
          items: [
            {
              text: "数组去重",
              link: "/tools/数组相关/数组去重.md",
            },
            {
              text: "数组合并与切片",
              link: "/tools/数组相关/数组合并与切片.md",
            },
            {
              text: "数组分块",
              link: "/tools/数组相关/数组分块.md",
            },
            {
              text: "数组扁平化",
              link: "/tools/数组相关/数组扁平化.md",
            },
            {
              text: "删除数组中部分元素",
              link: "/tools/数组相关/删除数组中部分元素.md",
            },
            {
              text: "得到数组中部分元素",
              link: "/tools/数组相关/得到数组中部分元素.md",
            },
          ],
        },
        {
          text: "对象相关",
          items: [
            {
              text: "自定义new",
              link: "/tools/对象相关/自定义new.md",
            },
            {
              text: "自定义instanceof",
              link: "/tools/对象相关/自定义instanceof.md",
            },
            {
              text: "合并多个对象",
              link: "/tools/对象相关/合并多个对象.md",
            },
            {
              text: "对象或数组拷贝",
              link: "/tools/对象相关/对象或数组拷贝.md",
            },
          ],
        },
        {
          text: "字符串相关",
          items: [
            {
              text: "字符串倒序",
              link: "/tools/字符串相关/字符串倒序.md",
            },
            {
              text: "截取字符串",
              link: "/tools/字符串相关/截取字符串.md",
            },
          ],
        },
      ],
      "/interview/": [
        {
          text: "前端基础",
          items: [
            // SidebarItem
            {
              text: "HTML",
              link: "/interview/前端基础/HTML.md",
            },
            {
              text: "CSS",
              link: "/interview/前端基础/CSS.md",
            },
            {
              text: "JavaScript",
              link: "/interview/前端基础/JavaScript.md",
            },
          ],
        },
        {
          text: "前端进阶",
          items: [
            {
              text: "HTTP",
              link: "/interview/前端进阶/HTTP.md",
            },
            {
              text: "Node",
              link: "/interview/前端进阶/Node.md",
            },
            {
              text: "移动端",
              link: "/interview/前端进阶/移动端.md",
            },
            {
              text: "性能",
              link: "/interview/前端进阶/性能.md",
            },
          ],
        },
        {
          text: "前端框架",
          items: [
            {
              text: "Vue",
              link: "/interview/前端框架/Vue.md",
            },
            {
              text: "React",
              link: "/interview/前端框架/React.md",
            },
            {
              text: "Uniapp",
              link: "/interview/前端框架/Uniapp.md",
            },
            {
              text: "微信小程序",
              link: "/interview/前端框架/微信小程序.md",
            },
          ],
        },
        {
          text: "前端工具",
          items: [
            // SidebarItem
            {
              text: "Git",
              link: "/interview/前端工具/Git.md",
            },
            {
              text: "Webpack",
              link: "/interview/前端工具/Webpack.md",
            },
          ],
        },
      ],
      "/question/": [
        {
          text: "快速开发",
          items: [
            {
              text: "HTML",
              link: "/question/快速开发/HTML.md",
            },
            {
              text: "CSS",
              link: "/question/快速开发/CSS.md",
            },
            {
              text: "JavaScript",
              link: "/question/快速开发/JavaScript.md",
            },
          ],
        },
        {
          text: "框架",
          items: [
            {
              text: "Vue",
              link: "/question/框架/Vue.md",
            },
            {
              text: "React",
              link: "/question/框架/React.md",
            },
            {
              text: "微信小程序",
              link: "/question/框架/微信小程序.md",
            },
          ],
        },
        {
          text: "UI库",
          items: [
            {
              text: "Element-UI",
              link: "/question/UI库/Element-UI.md",
            },
            {
              text: "Ant-Design",
              link: "/question/UI库/Ant-Design.md",
            },
          ],
        },
      ],
    },
  },
};
