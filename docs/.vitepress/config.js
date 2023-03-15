export default {
  title: "Java&Web",
  base: "/web/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    // siteTitle: false,
    logo: "/logo.png",
    algolia: {
      appId: "FRTY16QQO9", // 需要替换
      apiKey: "3ca62b4f61d2f7ec5634e0b6f82aaf8f", // 需要替换
      indexName: "web-search", // 需要替换
      buttonText: "搜索文档",
      placeholder: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
          },
        },
      },
    },
    nav: [
      {
        text: "💡 web专题",
        items: [
          {
            text: "💡 面试专题",
            activeMatch: "/interview",
            link: "/interview/前端框架/Vue.md",
          },
          {
            text: "📦 函数工具库",
            activeMatch: "/tools",
            link: "/tools/函数相关/this指向.md",
          },
          {
            text: "🛠️ 开发问题集合",
            activeMatch: "/question",
            link: "/question/框架/Vue.md",
          },
        ],
      },
      {
        text: "💡 Java专题",
        items: [
          {
            text: "💡 面试专题",
            activeMatch: "/interview_java",
            link: "/interview_java/Java基础/Java基础.md",
          },
          {
            text: "🛠️ 开发问题集合",
            activeMatch: "/question_java",
            link: "/question_java/Java基础/Java基础.md",
          },
        ],
      },
      {
        text: "💡 计算机基础",
        items: [
          {
            text: "💡 计算机网络",
            activeMatch: "/computer",
            link: "/computer/计算机网络/计算机网络(一).md",
          },
          {
            text: "📦 操作系统",
            activeMatch: "/computer",
            link: "/computer/操作系统/操作系统(一).md",
          },
          {
            text: "🛠️ 数据结构及算法",
            activeMatch: "/computer",
            link: "/computer/数据结构及算法/哈希.md",
          },
          {
            text: "💡 设计模式",
            activeMatch: "/computer",
            link: "/computer/设计模式/设计模式.md",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/GQ2617/web" },
      { icon: "facebook", link: "https://github.com/GQ2617/web" },
      { icon: "twitter", link: "https://github.com/GQ2617/web" },
    ],

    sidebar: {
      // web
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
              text: "数组系列方法",
              link: "/tools/数组相关/数组系列方法.md",
            },
            {
              text: "数组去重",
              link: "/tools/数组相关/数组去重.md",
            },
            {
              text: "数组合并与切片",
              link: "/tools/数组相关/数组合并与切片.md",
            },

            {
              text: "数组扁平化",
              link: "/tools/数组相关/数组扁平化.md",
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
              text: "深/浅拷贝",
              link: "/tools/对象相关/深浅拷贝.md",
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
          text: "前端进阶",
          items: [
            {
              text: "HTTP",
              link: "/interview/前端进阶/HTTP.md",
            },
            {
              text: "浏览器",
              link: "/interview/前端进阶/浏览器.md",
            },
            // {
            //   text: "Node",
            //   link: "/interview/前端进阶/Node.md",
            // },
            // {
            //   text: "移动端",
            //   link: "/interview/前端进阶/移动端.md",
            // },
            {
              text: "性能",
              link: "/interview/前端进阶/性能.md",
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

      // java
      "/interview_java": [
        {
          text: "Java语言",
          items: [
            {
              text: "基础",
              link: "/interview_java/Java基础/Java基础.md",
            },
            {
              text: "集合类",
              link: "/interview_java/Java基础/集合类.md",
            },
            {
              text: "多线程",
              link: "/interview_java/Java基础/多线程.md",
            },
            {
              text: "IO",
              link: "/interview_java/Java基础/IO.md",
            },
            {
              text: "JVM",
              link: "/interview_java/Java基础/JVM.md",
            },
          ],
        },
        {
          text: "数据库",
          items: [
            {
              text: "SQL",
              link: "/interview_java/数据库/SQL.md",
            },
            {
              text: "索引",
              link: "/interview_java/数据库/索引.md",
            },
            {
              text: "事务",
              link: "/interview_java/数据库/事务.md",
            },
            {
              text: "优化",
              link: "/interview_java/数据库/优化.md",
            },
          ],
        },
        {
          text: "SSM",
          items: [
            {
              text: "Spring",
              link: "/interview_java/SSM/Spring.md",
            },
            {
              text: "Spring MVC",
              link: "/interview_java/SSM/Spring_MVC.md",
            },
            {
              text: "MyBatis",
              link: "/interview_java/SSM/MyBatis.md",
            },
            {
              text: "Spring Boot",
              link: "/interview_java/SSM/Spring_Boot.md",
            },
          ],
        },
        {
          text: "微服务",
          items: [
            {
              text: "Redis",
              link: "/interview_java/微服务/Redis.md",
            },
            {
              text: "消息队列",
              link: "/interview_java/微服务/消息队列.md",
            },
            {
              text: "分布式",
              link: "/interview_java/微服务/分布式.md",
            },
          ],
        },
      ],
      "/question_java": [
        {
          text: "Java基础",
          items: [
            {
              text: "Java基础",
              link: "/question_java/Java基础/Java基础.md",
            },
          ],
        },
        {
          text: "数据库",
          items: [
            {
              text: "数据库",
              link: "/question_java/数据库/数据库.md",
            },
          ],
        },
        {
          text: "SSM",
          items: [
            {
              text: "SSM",
              link: "/question_java/SSM/SSM.md",
            },
          ],
        },
        {
          text: "微服务",
          items: [
            {
              text: "微服务",
              link: "/question_java/微服务/微服务.md",
            },
          ],
        },
      ],

      // computer
      "/computer": [
        {
          text: "计算机网络",
          items: [
            {
              text: "计算机网络(一)",
              link: "/computer/计算机网络/计算机网络(一).md",
            },
            {
              text: "计算机网络(二)",
              link: "/computer/计算机网络/计算机网络(二).md",
            },
            {
              text: "计算机网络(三)",
              link: "/computer/计算机网络/计算机网络(三).md",
            },
          ],
        },
        {
          text: "操作系统",
          items: [
            {
              text: "操作系统(一)",
              link: "/computer/操作系统/操作系统(一).md",
            },
            {
              text: "操作系统(二)",
              link: "/computer/操作系统/操作系统(二).md",
            },
            {
              text: "操作系统(三)",
              link: "/computer/操作系统/操作系统(三).md",
            },
          ],
        },
        {
          text: "数据结构及算法",
          items: [
            {
              text: "哈希",
              link: "/computer/数据结构及算法/哈希.md",
            },
            {
              text: "树",
              link: "/computer/数据结构及算法/树.md",
            },
            {
              text: "排序",
              link: "/computer/数据结构及算法/排序.md",
            },
            {
              text: "堆与栈",
              link: "/computer/数据结构及算法/堆与栈.md",
            },
            {
              text: "高级算法",
              link: "/computer/数据结构及算法/高级算法.md",
            },
          ],
        },
        {
          text: "设计模式",
          items: [
            {
              text: "设计模式",
              link: "/computer/设计模式/设计模式.md",
            },
          ],
        },
      ],
    },
  },
};
