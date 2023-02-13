# Vue

## 01-v-model作用及实现原理

1. 回答示例

   1. 概述：v-model本质上是一个语法糖，可以用v-model指令在表单及元素上创建双向数据绑定

   - 它会根据控件类型自动选取正确的方法来更新元素
   - 它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理
   - v-model会忽略所有表单元素的value、checked、selected特性的初始值，而总是将Vue实例的数据作为数据来源。

2. 扩展

   1. 概述：v-model在内部为不同输入元素使用不同的属性并抛出不同的事件

   - text和textarea元素使用value属性和input事件
   - checkbox和radio使用checked属性和change事件
   - select字段将value作为prop并将change作为事件

3. 实现原理

   - v-model只是一个语法糖，真正实现靠的是：
     - v-bind:绑定响应式数据
     - 触发oninput事件并传递数据

## 02-Vue2.0双向绑定的缺陷

1. 回答示例

   1. 概述：Vue2.0的数据响应是通过Object.defineProperty()来劫持各个属性的setter和getter，但在有些情况下需要对其修补

   - Vue实例创建后，无法检测到对象属性的新增或删除，只能追踪到数据是否被修改
   - 不能监听数组的变化

2. 解析

   1. 对象
      - 当创建一个Vue实例后，将遍历所有的DOM对象，并为每个数据属性添加了get和set。get和set允许Vue观察数据的变更并触发更新。但是，如果在Vue实例化之后添加删除一个属性，不会被Vue处理
      - 解决：可以使用Vue.set/delete来解决不能监听属性的增加或删除的缺陷
   2. 数组
      - Vue在实现数组的响应式时，把无法监听数组的情况通过重写数组的7个方法来实现响应式，包括：push/pop/shift/unshift/splice/sort/reverse七个方法

## 03-Vue3.0实现数据双向绑定的方法

1. 回答示例
   - Vue3.0通过Proxy代理要实现响应式的数据
   - 相对于Vue2.0的defineProperty()的优势：
     - Proxy可以监听整个对象而非属性，可以直接监听数组的变化
     - Proxy新增了delete方法，并且set方法可以完成对添加属性的监测
     - Proxy有13种劫持操作

## 04-Vuex是什么，每个属性的作用

1. 回答示例
   1. Vuex是什么
      - Vuex是专门为Vuejs设计的状态管理工具，集中式存储管理应用的所有组件的状态
   2. 每个属性的作用
      - state：state是存储的单一状态，是存储的基本数据。
      - getters：getters是state的计算属性，对state的加工，是派生出来的数据。只有当它的依赖值发生改变才会被重新计算。
      - mutations：mutations提交更改数据，使用store.commit方法更改state存储的状态。
      - actions：actions可以包含任何异步操作，提交mutations，不会直接变更状态。
      - module：module是store分割的模块，每个模块拥有自己的state，getters，mutations，actions。
   3. 辅助函数
      - Vuex提供了mapState，mapGetters，mapMutations，mapActions等辅助函数处理store。

## 05-mutations和actions的区别

1. 回答示例：
   1. mutaions
      - 更改Vuex中store中状态的唯一方法。
      - 不能直接调用mutaions中的方法，只能通过store.commit触发
   2. actions
      - actions提交的是mutations，而不是直接变更状态
      - actions可以包含任意异步操作

## 06-Vue中的导航守卫

1. 回答示例
   1. 概念
      - 导航守卫主要用来通过跳转或取消的方式守卫导航
      - 导航守卫就是路由跳转过程中的一些钩子函数。这个函数可以在路由跳转的前中后等细小过程中操作一些其他的事
   2. 解析
      1. 全局路由守卫
         1. 全局前置守卫(router.beforeEach((to,from,next)=>{})
         2. 全局解析守卫(router.beforeResolve((to,from)=>{}))
         3. 全局后置守卫(router.afterEach((to,from)=>{})
      2. 路由独享的守卫(beforeEnter:(to,from)=>{})
      3. 组件内的守卫
         1. beforeRouteEnter((to,from,next)=>{next(vm=>{})})
            - 在渲染该组件对应路由被验证前调用
         2. beforeRouteUpdate((to,from)=>{})
            - 在当前路由改变，但是该组件被复用时调用
         3. beforeRouteLeave((to,from)=>{})
            - 在导航离开渲染该组件的对应路由时调用
   3. 完整的导航解析流程
      1. 导航被触发
      2. 在失活的组件里调用beforeRouteLeave守卫
      3. 调用全局的beforeEach守卫
      4. 在重用的组件里调用beforeRouteUpdate守卫
      5. 在路由配置里调用beforeEnter
      6. 解析异步路由组件
      7. 在被激活的组件里调用beforeRouteEnter
      8. 调用全局的beforeResolve守卫
      9. 导航被确认
      10. 调用全局的afterEach钩子
      11. 触发DOM更新
      12. 调用beforeRouteEnter守卫中传给next的回调函数，创建好的组件实例会作为回调函数的参数传入

## 07-HashRouter和HistoryRouter

1. 回答示例
   1. hash
      - 使用hash值来作为路由，通过hasChange事件来监听url的变化，hash不会被包括在HTTP请求中，不会请求服务器 。hash模式支持所有浏览器，使用和部署都比较简单
   2. history
      - url看起来更美观，依赖H5 History API 和服务器配置，部署时需要后端配合将所有访问都指向index.html，否则用户刷新页面，会导致404错误

## 08-组件通信的方式

1. 回答示例
   1. 父子组件通信
      1. props和$emit
         - 最常用的父子组件通信方式，父组件向子组件传递数据是通过prop传递的，子组件传递数据给父组件是通过$emit触发事件来完成的
      2. v-model
         - 父组件通过v-model传递值给子组件时，会自动传递一个value的prop属性，在子组件中通过this.$emit('input',val)自动修改v-model绑定的值
   2. 祖孙组件通信
      1. attrs和listeners
         - 用于解决在多层次嵌套情况下，父组件和子组件之间的通信
      2. provide和inject
         - 父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。
   3. 兄弟组件通信
      1. 中央事件总线
         - 新建一个Vue事件bus对象，通过bus.emit触发时间，bus.on监听触发的事件
   4. 全局组件通信
      6. vuex

## 09-异步加载在create钩子里实现的好处

1. 回答示例
   1. 能更快的获取到服务端数据，减少页面的loading时间
   2. 放在created中有助于一致性，引入ssr不支持beforeMunted,mounted钩子函数

## 10-Vue的钩子函数

1. 回答示例
   1. 生命周期经历的阶段和钩子函数
      - 实例化vue对象: new Vue()
      - 初始化事件和生命周期
      - beforeCreate：实例初始化之后，组件实例对象被创建了，但是属性还没有绑定
      - create：实例对象的属性有值了，但是DOM还没有生成，即data和computed已经执行，没有动态创建template属性对应的HTML元素
      - 检查是否有el属性，检查是否有template属性
      - beforeMounted：模板编译、数据挂载之前执行的钩子函数，即数据还没有挂载到页面上
      - 模板编译
      - mounted：模板编译完成，数据挂载完毕
      - beforeUpdate：组件更新之前执行的函数
      - updated：组件更新之后执行的函数
      - beforeDestroy：组件对象销毁之前
      - destroyed：组件销毁后

## 11-keep-alive组件

1. 回答示例
   1. 作用
      - 把不活动的组件实例保存到内存中，而不是直接销毁
      - 该组件不会渲染到真实DOM中，也不会出现在父组件链中
   2. 使用方式
      - 包裹要缓存的组件
      - 常用的两个属性：include和exclude，允许组件有条件的进行缓存(字符串或正则)。
   3. 使用细节
      - 设置keep-alive后，会多出activated和deactivated两个钩子，首次进入组件时，activated钩子在mounted之后，再次进入时没有创建前后、挂载前后的钩子了。
      - 缓存后想要获取数据，可以在beforeRouteEnter或activated中重新获取数据
   4. 原理
      - keep-alive的缓存并不是直接存储DOM结构，而是将DOM节点抽象成一个个VNode节点。
      - keep-alive返回的渲染函数内部会查找内嵌的组件对应的VNode,存储的VNode包含该组件，直接返回

## 12-Vue中$nextTick作用与原理

1. 回答示例：
   1. 作用
      - 为了可以获取更新后DOM
   2. 定义
      - Vue在更新DOM时是异步执行的。即修改数据时，视图不会立即更新，而是会监听数据变化，并缓存在同一事件循环中，等同一事件循环中的所有数据变化完成之后，在同一进行视图更新。为了确保得到更新后的DOM，所以设置了Vue.$nextTick，就是在下次DOM更新循环结束之后执行延迟回调
   3. 原理
      - 先定义一个callbacks用来存放所有的nextTick中的回调函数
      - 然后判断浏览器内核是否支持promise，如果支持，就用promise来触发回调函数
      - 不支持就再看看是否支持MutationObserver，这是一个监听DOM结构变化的接口，文本节点发生变化时，出发执行所有的回调函数
      - 都不支持，就采用setTimeOut来完成异步执行
   4. 场景
      - 双击编辑一条数据并自动聚焦

## 13-对虚拟DOM的理解

1. 回答示例：
   1. 概述
      - 虚拟DOM就是虚拟的DOM对象，本身是JavaScript对象，通过一个不同的属性描述一个视图结构
   2. 好处
      1. 将真实元素节点抽象为VNode，有效减少DOM操作，从而提高程序性能
         - 频繁操作DOM容易引起页面的重绘和回流，通过VNode进行中间处理，减少直接操作dom的次数，从而减少页面的重绘和回流，提高程序性能
      2. 方便实现跨平台
         - 同一VNode节点可以渲染成不同平台上的对应内容，比如：在浏览器中是DOM元素，在Native中是对应的控件
   3. 生成及转化过程
      - 在Vue中我们编写的template模板会被编译器compiler编译为渲染函数，在挂载阶段会调用render函数，返回的对象就是虚拟DOM，然后通过patch进一步转化为真实DOM
   4. 在后续diff中的作用
      - 挂载结束以后会进入更新流程，如果某些响应式数据发生变化，将会引起组件重新渲染，此时就会生成新的虚拟DOM，和上一次的渲染结果通过diff算法得到变化的地方，从而转换为最小量的操作，高效更新视图

## 14-对diff算法的理解

1. 回答示例
   1. 概述
      - vue中的diff算法称为patching算法，虚拟DOM转化为真实DOM就需要通过patch方法转换
      - 通过diff算法可以更精确的找到发生变化的地方并高效更新
      - 执行时刻：响应式数据变更会触发实例执行更新函数，更新函数会执行render函数获取最新的虚拟DOM，然后执行patch函数，传入新旧两次虚拟DOM，通过对比找到更新的地方，转化为对应的DOM操作
   2. patch过程（递归过程，深度优先，同层比较）
      - 没有新节点，直接触发旧节点的destroy钩子
      - 没有旧节点，说明是页面初始化的时候，不需要比较，直接全部创建
      - 新旧节点都有，判断是否是同类节点
        - 不同类节点
          - 删除重新创建
        - 同类节点
          - 文本节点，更新文本内容
          - 元素节点，递归更新子元素，同时更新元素属性
   3. diff算法比较流程
      - 同层级比较，循环从两边向中间靠拢
      - 四个索引代表的节点两两进行比较
        - 有相同节点复用旧节点作为真实节点。所处开始索引后移一位，结束索引前移一位
        - 不相同创建新节点作为真实节点，新节点开始索引后移一位
      - 退出循环
        - 新节点的开始索引大于结束索引，删除旧节点开始索引和结束索引之间的所有节点
        - 旧节点的开始素银大于结束索引，创建新节点开始索引和结束索引之间的所有节点

## 15-Vue列表中为什么加key

1. 回答示例：
   1. 概述
      - key是唯一标识，key的主要作用是为了高效的更新虚拟DOM
      - vue在patch过程中判断两个节点是否是相同节点，key是一个必要条件，如果不定义key值，key默认为undefined，此时vue会默认认为比较的两个节点是同一个，这就导致了频繁更新元素，使得patch过程比较低效
   2. index作为key的缺陷
      - 性能消耗：在前方加入或删除一条数据时，index的顺序会被打乱，导致新节点的key改变，从而导致页面上的数据被重新渲染
      - 数据错位：如果结构中包括输入类的DOM，会产生错误的DOM更新

## 16-Vue的响应式原理

1. 回答示例：
   1. 概述
      - Vue采用数据劫持结合发布者-订阅者模式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调

## 17-new Vue以后发生的事情

1. 回答示例
   1. 初始化Vue实例
   2. 初始化生命周期，对Vue实例内部的一些属性进行初始化
   3. 初始化实例上的一些自定义事件
   4. 触发生命周期钩子beforeCreate
   5. 初始化data和props之前完成依赖注入
   6. 完成data和props的初始化，同时对属性完成数据劫持，启用监听者对数据进行监听
   7. 解析依赖注入
   8. 触发生命周期钩子created
   9. 进入挂载阶段，将vue模板语法解析成虚拟DOM树，虚拟DOM树与数据完成双向绑定，触发beforeMounted
   10. 将虚拟DOM渲染为真实DOM，触发mounted钩子函数

## 18-解决首页白屏

1. 回答示例
   1. 路由懒加载
   2. cdn加速
   3. 配置webpack，分离不需要打包的库文件，减少打包后文件的大小
   4. 删除不必要的console.log
   5. 添加loading效果

## 19-computed和watch的区别

1. 回答示例
   1. computed
      - 依赖于其他的属性值，并且computed的值有缓存，只有当依赖的属性值发生变化时，下一次获取computed的值才会重新计算
   2. watch
      - 监视属性用于监测某个响应式数据的变化并执行副作用，没有返回值，但可以执行异步操作等复杂逻辑，每当监听的数据发生变化时都会执行

