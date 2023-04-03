export default {
  title: "Full Stack",
  base: "/web/",
  head: [["link", { rel: "icon", href: "/web/favicon.ico" }]],

  themeConfig: {
    // siteTitle: false,
    // 目录层级
    outline: [1, 3],
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
        text: "💡 指南",
        activeMatch: "/Guide",
        link: "/Guide/guide.md",
      },
      {
        text: "💡 web专题",
        items: [
          {
            text: "💡 函数工具库",
            activeMatch: "/tools",
            link: "/Web/tools/函数相关/this指向.md",
          },
          {
            text: "📦 面试专题",
            activeMatch: "/interview",
            link: "/Web/interview/前端框架/Vue.md",
          },
          {
            text: "🛠️ 开发问题集合",
            activeMatch: "/question",
            link: "/Web/question/框架/Vue.md",
          },
        ],
      },
      {
        text: "💡 Java专题",
        items: [
          {
            text: "💡 学习笔记",
            activeMatch: "/note_java",
            link: "/Java/note_java/基础阶段/JavaSE.md",
          },
          {
            text: "📦 面试专题",
            activeMatch: "/interview_java",
            link: "/Java/interview_java/Java基础/Java基础.md",
          },

          {
            text: "🛠️ 开发问题集合",
            activeMatch: "/question_java",
            link: "/Java/question_java/Java基础/Java基础.md",
          },
        ],
      },
      {
        text: "💡 计算机基础",
        activeMatch: "/Computer",
        link: "/Computer/计算机网络/计算机网络(一).md",
      },
      {
        text: "💡 LeetCode算法",
        activeMatch: "/LeetCode",
        link: "/LeetCode/简易/1.两数之和.md",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/GQ2617/web" },
      { icon: "facebook", link: "https://github.com/GQ2617/web" },
      { icon: "twitter", link: "https://twitter.com/w26177" },
    ],

    sidebar: {
      "/Guide/guide": [
        {
          text: "Web专题",
          items: [
            {
              text: "函数工具库",
              activeMatch: "/tools",
              link: "/Web/tools/函数相关/this指向.md",
            },
            {
              text: "面试专题",
              activeMatch: "/interview",
              link: "/Web/interview/前端框架/Vue.md",
            },
            {
              text: "开发问题集合",
              activeMatch: "/question",
              link: "/Web/question/框架/Vue.md",
            },
          ],
        },
        {
          text: "Java专题",
          items: [
            {
              text: "学习笔记",
              activeMatch: "/note_java",
              link: "/Java/note_java/基础阶段/JavaSE.md",
            },
            {
              text: "面试专题",
              activeMatch: "/interview_java",
              link: "/Java/interview_java/Java基础/Java基础.md",
            },

            {
              text: "开发问题集合",
              activeMatch: "/question_java",
              link: "/Java/question_java/Java基础/Java基础.md",
            },
          ],
        },
        {
          text: "计算机基础",
          items: [
            {
              text: "计算机网路",
              activeMatch: "/note_java",
              link: "/Java/note_java/基础阶段/JavaSE.md",
            },
            {
              text: "操作系统",
              activeMatch: "/interview_java",
              link: "/Java/interview_java/Java基础/Java基础.md",
            },

            {
              text: "数据结构",
              activeMatch: "/question_java",
              link: "/Java/question_java/Java基础/Java基础.md",
            },
          ],
        },
        {
          text: "LeetCode",
          items: [
            {
              text: "题目描述",
              activeMatch: "/note_java",
              link: "/Java/note_java/基础阶段/JavaSE.md",
            },
            {
              text: "Java解法",
              activeMatch: "/interview_java",
              link: "/Java/interview_java/Java基础/Java基础.md",
            },

            {
              text: "JavaScript解法",
              activeMatch: "/question_java",
              link: "/Java/question_java/Java基础/Java基础.md",
            },
          ],
        },
      ],

      // web
      "/Web/tools/": [
        {
          text: "函数相关",
          // collapsible: true,
          collapsed: true,
          items: [
            {
              text: "this指向",
              link: "/Web/tools/函数相关/this指向.md",
            },
            {
              text: "防抖节流",
              link: "/Web/tools/函数相关/防抖节流.md",
            },
          ],
        },
        {
          text: "数组相关",
          items: [
            {
              text: "数组系列方法",
              link: "/Web/tools/数组相关/数组系列方法.md",
            },
            {
              text: "数组去重",
              link: "/Web/tools/数组相关/数组去重.md",
            },
            {
              text: "数组合并与切片",
              link: "/Web/tools/数组相关/数组合并与切片.md",
            },

            {
              text: "数组扁平化",
              link: "/Web/tools/数组相关/数组扁平化.md",
            },
          ],
        },
        {
          text: "对象相关",
          items: [
            {
              text: "自定义new",
              link: "/Web/tools/对象相关/自定义new.md",
            },
            {
              text: "自定义instanceof",
              link: "/Web/tools/对象相关/自定义instanceof.md",
            },
            {
              text: "合并多个对象",
              link: "/Web/tools/对象相关/合并多个对象.md",
            },
            {
              text: "深/浅拷贝",
              link: "/Web/tools/对象相关/深浅拷贝.md",
            },
          ],
        },
        {
          text: "字符串相关",
          items: [
            {
              text: "字符串倒序",
              link: "/Web/tools/字符串相关/字符串倒序.md",
            },
            {
              text: "截取字符串",
              link: "/Web/tools/字符串相关/截取字符串.md",
            },
          ],
        },
      ],
      "/Web/interview/": [
        {
          text: "前端基础",
          items: [
            // SidebarItem
            {
              text: "HTML",
              link: "/Web/interview/前端基础/HTML.md",
            },
            {
              text: "CSS",
              link: "/Web/interview/前端基础/CSS.md",
            },
            {
              text: "JavaScript",
              link: "/Web/interview/前端基础/JavaScript.md",
            },
          ],
        },
        {
          text: "前端框架",
          items: [
            {
              text: "Vue",
              link: "/Web/interview/前端框架/Vue.md",
            },
            {
              text: "React",
              link: "/Web/interview/前端框架/React.md",
            },
            {
              text: "微信小程序",
              link: "/Web/interview/前端框架/微信小程序.md",
            },
          ],
        },
        {
          text: "前端进阶",
          items: [
            {
              text: "HTTP",
              link: "/Web/interview/前端进阶/HTTP.md",
            },
            {
              text: "浏览器",
              link: "/Web/interview/前端进阶/浏览器.md",
            },
            // {
            //   text: "Node",
            //   link: "/Web/interview/前端进阶/Node.md",
            // },
            // {
            //   text: "移动端",
            //   link: "/Web/interview/前端进阶/移动端.md",
            // },
            {
              text: "性能",
              link: "/Web/interview/前端进阶/性能.md",
            },
          ],
        },
        {
          text: "前端工具",
          items: [
            // SidebarItem
            {
              text: "Git",
              link: "/Web/interview/前端工具/Git.md",
            },
            {
              text: "Webpack",
              link: "/Web/interview/前端工具/Webpack.md",
            },
          ],
        },
      ],
      "/Web/question/": [
        {
          text: "快速开发",
          items: [
            {
              text: "HTML",
              link: "/Web/question/快速开发/HTML.md",
            },
            {
              text: "CSS",
              link: "/Web/question/快速开发/CSS.md",
            },
            {
              text: "JavaScript",
              link: "/Web/question/快速开发/JavaScript.md",
            },
          ],
        },
        {
          text: "框架",
          items: [
            {
              text: "Vue",
              link: "/Web/question/框架/Vue.md",
            },
            {
              text: "React",
              link: "/Web/question/框架/React.md",
            },
            {
              text: "微信小程序",
              link: "/Web/question/框架/微信小程序.md",
            },
          ],
        },
        {
          text: "UI库",
          items: [
            {
              text: "Element-UI",
              link: "/Web/question/UI库/Element-UI.md",
            },
            {
              text: "Ant-Design",
              link: "/Web/question/UI库/Ant-Design.md",
            },
          ],
        },
      ],

      // java
      "/Java/interview_java": [
        {
          text: "Java基础",
          items: [
            {
              text: "基础",
              link: "/Java/interview_java/Java基础/Java基础.md",
            },
            {
              text: "集合类",
              link: "/Java/interview_java/Java基础/集合类.md",
            },
            {
              text: "多线程",
              link: "/Java/interview_java/Java基础/多线程.md",
            },
            {
              text: "IO",
              link: "/Java/interview_java/Java基础/IO.md",
            },
            {
              text: "JVM",
              link: "/Java/interview_java/Java基础/JVM.md",
            },
          ],
        },
        {
          text: "数据库",
          items: [
            {
              text: "SQL",
              link: "/Java/interview_java/数据库/SQL.md",
            },
            {
              text: "索引",
              link: "/Java/interview_java/数据库/索引.md",
            },
            {
              text: "事务",
              link: "/Java/interview_java/数据库/事务.md",
            },
            {
              text: "优化",
              link: "/Java/interview_java/数据库/优化.md",
            },
          ],
        },
        {
          text: "SSM",
          items: [
            {
              text: "Spring",
              link: "/Java/interview_java/SSM/Spring.md",
            },
            {
              text: "Spring MVC",
              link: "/Java/interview_java/SSM/Spring_MVC.md",
            },
            {
              text: "MyBatis",
              link: "/Java/interview_java/SSM/MyBatis.md",
            },
            {
              text: "Spring Boot",
              link: "/Java/interview_java/SSM/Spring_Boot.md",
            },
          ],
        },
        {
          text: "微服务",
          items: [
            {
              text: "Redis",
              link: "/Java/interview_java/微服务/Redis.md",
            },
            {
              text: "消息队列",
              link: "/Java/interview_java/微服务/消息队列.md",
            },
            {
              text: "分布式",
              link: "/Java/interview_java/微服务/分布式.md",
            },
          ],
        },
      ],
      "/Java/note_java": [
        {
          text: "基础阶段",
          items: [
            {
              text: "JavaSE",
              link: "/Java/note_java/基础阶段/JavaSE.md",
            },
            {
              text: "MySQL",
              link: "/Java/note_java/基础阶段/MySQL.md",
            },
            {
              text: "JDBC",
              link: "/Java/note_java/基础阶段/JDBC.md",
            },
          ],
        },
        {
          text: "提升阶段",
          items: [
            {
              text: "JavaEE",
              link: "/Java/note_java/提升阶段/JavaEE.md",
            },
            {
              text: "Spring",
              link: "/Java/note_java/提升阶段/Spring.md",
            },
            {
              text: "SpringMVC",
              link: "/Java/note_java/提升阶段/SpringMVC.md",
            },
            {
              text: "MyBatis",
              link: "/Java/note_java/提升阶段/MyBatis.md",
            },
            {
              text: "SSM整合",
              link: "/Java/note_java/提升阶段/SSM整合.md",
            },
          ],
        },
        {
          text: "进阶阶段",
          items: [
            {
              text: "SpringBoot",
              link: "/Java/note_java/进阶阶段/SpringBoot.md",
            },
            {
              text: "SpringCloud",
              link: "/Java/note_java/进阶阶段/SpringCloud.md",
            },
          ],
        },
        {
          text: "设计模式",
          items: [
            {
              text: "设计原则",
              link: "/Java/note_java/设计模式/设计模式六大原则.md",
            },
            {
              text: "设计模式",
              link: "/Java/note_java/设计模式/23种设计模式.md",
            },
          ],
        },
      ],
      "Java/question_java": [
        {
          text: "Java基础",
          items: [
            {
              text: "Java基础",
              link: "/Java/question_java/Java基础/Java基础.md",
            },
          ],
        },
        {
          text: "数据库",
          items: [
            {
              text: "数据库",
              link: "/Java/question_java/数据库/数据库.md",
            },
          ],
        },
        {
          text: "SSM",
          items: [
            {
              text: "SSM",
              link: "/Java/question_java/SSM/SSM.md",
            },
          ],
        },
        {
          text: "微服务",
          items: [
            {
              text: "微服务",
              link: "/Java/question_java/微服务/微服务.md",
            },
          ],
        },
      ],

      // computer
      "/Computer": [
        {
          text: "计算机网络",
          items: [
            {
              text: "计算机网络(一)",
              link: "/Computer/计算机网络/计算机网络(一).md",
            },
            {
              text: "计算机网络(二)",
              link: "/Computer/计算机网络/计算机网络(二).md",
            },
            {
              text: "计算机网络(三)",
              link: "/Computer/计算机网络/计算机网络(三).md",
            },
          ],
        },
        {
          text: "操作系统",
          items: [
            {
              text: "操作系统(一)",
              link: "/Computer/操作系统/操作系统(一).md",
            },
            {
              text: "操作系统(二)",
              link: "/Computer/操作系统/操作系统(二).md",
            },
            {
              text: "操作系统(三)",
              link: "/Computer/操作系统/操作系统(三).md",
            },
          ],
        },
        {
          text: "数据结构及算法",
          items: [
            {
              text: "哈希",
              link: "/Computer/数据结构及算法/哈希.md",
            },
            {
              text: "树",
              link: "/Computer/数据结构及算法/树.md",
            },
            {
              text: "排序",
              link: "/Computer/数据结构及算法/排序.md",
            },
            {
              text: "堆与栈",
              link: "/Computer/数据结构及算法/堆与栈.md",
            },
            {
              text: "高级算法",
              link: "/Computer/数据结构及算法/高级算法.md",
            },
          ],
        },
      ],

      // leetcode
      "/LeetCode": [
        {
          text: "简易",
          items: [
            {
              text: "1. 两数之和",
              link: "/LeetCode/简易/1.两数之和",
            },
            {
              text: "2. 回文数",
              link: "/LeetCode/简易/2.回文数",
            },
            {
              text: "3. 罗马数字转整数",
              link: "/LeetCode/简易/3.罗马数字转整数",
            },
            {
              text: "4. 最长公共前缀",
              link: "/LeetCode/简易/4.最长公共前缀",
            },
            {
              text: "5. 有效的括号",
              link: "/LeetCode/简易/5.有效的括号",
            },
            {
              text: "6. 删除有序数组中的重复项",
              link: "/LeetCode/简易/6.删除有序数组中的重复项",
            },
            {
              text: "7. 移除元素",
              link: "/LeetCode/简易/7.移除元素",
            },
            {
              text: "8. 搜索插入位置",
              link: "/LeetCode/简易/8.搜索插入位置",
            },
            {
              text: "9. 最后一个单词的长度",
              link: "/LeetCode/简易/9.最后一个单词的长度",
            },
            {
              text: "10. 加一",
              link: "/LeetCode/简易/10.加一",
            },
            {
              text: "11. 二进制求和",
              link: "/LeetCode/简易/11.二进制求和",
            },
            {
              text: "12. x的平方根",
              link: "/LeetCode/简易/12.x的平方根",
            },
            {
              text: "13. 爬楼梯",
              link: "/LeetCode/简易/13.爬楼梯",
            },
            {
              text: "14. 删除排序链表中的重复元素",
              link: "/LeetCode/简易/14.删除排序链表中的重复元素",
            },
            {
              text: "15. 合并两个有序数组",
              link: "/LeetCode/简易/15.合并两个有序数组",
            },
            {
              text: "16. 二叉树的中序遍历",
              link: "/LeetCode/简易/16.二叉树的中序遍历",
            },
            {
              text: "17. 相同的树",
              link: "/LeetCode/简易/17.相同的树",
            },
            {
              text: "18. 对称二叉树",
              link: "/LeetCode/简易/18.对称二叉树",
            },
            {
              text: "19. 二叉树的最大深度",
              link: "/LeetCode/简易/19.二叉树的最大深度",
            },
            {
              text: "20. 二叉树的最小深度",
              link: "/LeetCode/简易/20.二叉树的最小深度",
            },
          ],
        },
        {
          text: "中等",
          items: [
            {
              text: "1. 两数相加",
              link: "/LeetCode/中等/1.两数相加",
            },
            {
              text: "2. 无重复字符的最长子串",
              link: "/LeetCode/中等/2.无重复字符的最长子串",
            },
            {
              text: "3. 最长回文子串",
              link: "/LeetCode/中等/3.最长回文子串",
            },
            {
              text: "4. N 字形变换",
              link: "/LeetCode/中等/4.N字形变换",
            },
            {
              text: "5. 整数反转",
              link: "/LeetCode/中等/5.整数反转",
            },
          ],
        },
        {
          text: "困难",
          items: [
            {
              text: "1. 寻找两个正序数组的中位数",
              link: "/LeetCode/简易/1.寻找两个正序数组的中位数",
            },
            {
              text: "2. 正则表达式匹配",
              link: "/LeetCode/简易/2.正则表达式匹配",
            },
            {
              text: "3. 合并K个升序链表",
              link: "/LeetCode/简易/3.合并K个升序链表",
            },
            {
              text: "4. K 个一组翻转链表",
              link: "/LeetCode/简易/4.K 个一组翻转链表",
            },
            {
              text: "5. 串联所有单词的子串",
              link: "/LeetCode/简易/5.串联所有单词的子串",
            },
            {
              text: "6. 最长有效括号",
              link: "/LeetCode/简易/6. 最长有效括号",
            },
            {
              text: "7. 解数独",
              link: "/LeetCode/简易/7.解数独",
            },
            {
              text: "8. 缺失的第一个正数",
              link: "/LeetCode/简易/8.缺失的第一个正数",
            },
          ],
        },
      ],
    },
  },
};
