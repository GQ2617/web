import{_ as s,c as l,o as a,d as n}from"./app.c282a12f.js";const C=JSON.parse('{"title":"浏览器","description":"","frontmatter":{},"headers":[{"level":2,"title":"01-本地存储","slug":"_01-本地存储","link":"#_01-本地存储","children":[]},{"level":2,"title":"02-localStorage的限制","slug":"_02-localstorage的限制","link":"#_02-localstorage的限制","children":[]},{"level":2,"title":"03-浏览器输入URL之后发生了什么","slug":"_03-浏览器输入url之后发生了什么","link":"#_03-浏览器输入url之后发生了什么","children":[]},{"level":2,"title":"04-浏览器如何渲染页面的","slug":"_04-浏览器如何渲染页面的","link":"#_04-浏览器如何渲染页面的","children":[]},{"level":2,"title":"05-怎样理解重绘和回流","slug":"_05-怎样理解重绘和回流","link":"#_05-怎样理解重绘和回流","children":[]},{"level":2,"title":"06-事件循环","slug":"_06-事件循环","link":"#_06-事件循环","children":[]},{"level":2,"title":"07-垃圾回收机制","slug":"_07-垃圾回收机制","link":"#_07-垃圾回收机制","children":[]}],"relativePath":"Web/interview/前端进阶/浏览器.md"}'),o={name:"Web/interview/前端进阶/浏览器.md"},p=n(`<h1 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-hidden="true">#</a></h1><h2 id="_01-本地存储" tabindex="-1">01-本地存储 <a class="header-anchor" href="#_01-本地存储" aria-hidden="true">#</a></h2><ol><li>共同点：都是保存在浏览器端且同源的</li><li>区别： <ul><li>存储大小：cookie数据大小不能超过4k，sessionStorage和localStorage可以达到5M或更大</li><li>有效时间：localStorage存储持久数据，浏览器关闭后数据不丢失，除非主动删除数据；sessionStorage数据在当前浏览器窗口关闭后自动删除；cookie在设置的cookie过期时间之前一直有效</li><li>数据与服务器之间的交互方式：cookie的数据会自动地传递到服务器，服务器端也可以写cookie到客户端，sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存</li></ul></li><li>应用场景： <ul><li>标记用户与跟踪用户行为的情况，推荐使用cookie</li><li>适合长期保存在本地的数据，推荐使用localStorage</li><li>敏感账号一次性登录，推荐适用sessionsStorage</li><li>存储大量数据的情况、富文本编辑器保存的编辑历史等，推荐使用indexDB</li></ul></li></ol><h2 id="_02-localstorage的限制" tabindex="-1">02-localStorage的限制 <a class="header-anchor" href="#_02-localstorage的限制" aria-hidden="true">#</a></h2><ol><li>浏览器大小不同意，并且在IE8以上的版本才支持localStorage</li><li>浏览器会把localStorage的值类型限定为string类型，与常用的JSON对象需要做转换</li><li>localStorage在浏览器的隐私模式下是不可读取的</li><li>localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡</li><li>localStorage不能被爬虫抓取</li></ol><h2 id="_03-浏览器输入url之后发生了什么" tabindex="-1">03-浏览器输入URL之后发生了什么 <a class="header-anchor" href="#_03-浏览器输入url之后发生了什么" aria-hidden="true">#</a></h2><ol><li>URL解析</li><li>DNS查询</li><li>TCP连接</li><li>处理请求</li><li>接收响应</li><li>渲染页面</li></ol><h2 id="_04-浏览器如何渲染页面的" tabindex="-1">04-浏览器如何渲染页面的 <a class="header-anchor" href="#_04-浏览器如何渲染页面的" aria-hidden="true">#</a></h2><ol><li>HTML被HTML解析器解析为DOM树</li><li>CSS被CSS解析器解析为CSSOM树</li><li>结合DOM树和CSSOM树，生成一颗渲染树，这一过程被称为Attachment</li><li>回流：根据生成的渲染树，进行回流，得到节点的几何信息（位置、大小）</li><li>重绘：根据渲染树以及回流得到的几何信息，得到节点的绝对像素</li><li>将像素发送给GPU，展示在页面上</li></ol><h2 id="_05-怎样理解重绘和回流" tabindex="-1">05-怎样理解重绘和回流 <a class="header-anchor" href="#_05-怎样理解重绘和回流" aria-hidden="true">#</a></h2><ol><li>概念 <ul><li>回流：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置</li><li>重绘：当计算好盒子模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制</li></ul></li><li>触发时机 <ol><li>回流 <ul><li>添加或删除可见的DOM元素</li><li>元素的位置发生变化</li><li>元素的尺寸发生变化</li><li>内容发生变化</li><li>页面一开始渲染的时候</li><li>浏览器的窗口尺寸变化</li><li>获取某些属性(offset相关，scroll相关，client相关，getComputedStyle())</li></ul></li><li>重绘 <ul><li>颜色的改变</li><li>文本方向的改变</li><li>阴影的修改</li></ul></li></ol></li><li>优化 <ol><li>浏览器自己的优化 <ul><li>浏览器会维护1个队列，把所有会引起重绘和回流的操作放入这个队列，等队列中的操作到一定数量或到了一定的时间间隔，浏览器就会清空队列，进行一批处理，这样多次的重绘和回流就变成了一次</li></ul></li><li>用户所做优化 <ul><li>不要一条一条修改DOM样式，先定义好css的class，然后修改DOM的className</li><li>为动画的HTML元素，使用fixed或absolute的position</li><li>避免使用table布局，table中每个元素的大小及内容的改动，都会导致table的重新计算</li><li>避免使用CSS的JavaScript表达式</li></ul></li></ol></li></ol><h2 id="_06-事件循环" tabindex="-1">06-事件循环 <a class="header-anchor" href="#_06-事件循环" aria-hidden="true">#</a></h2><ol><li><p>概念</p><ul><li>JavaScript是一门单线程语言，意味着同一时间只能做一件事，但是这并不意味着单线程就是阻塞，而实现单线程非阻塞的方法就是事件循环</li><li>JavaScript中所有任务可以分为同步任务和异步任务，同步任务进入主线程，即主执行栈；异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行</li><li>异步任务可以细分为宏任务和微任务，宏任务执行时机是在当前宏任务执行完成后，查看微任务的事件队列，然后将里面的所有微任务依次执行完；微任务的执行时机是在主函数执行结束之后，当前宏任务结束之前</li></ul></li><li><p>常见的宏任务与微任务</p><ol><li>微任务 <ul><li>Promise.then()</li><li>MutationObserve</li><li>Object.observe</li><li>process.nextTick</li></ul></li><li>宏任务 <ul><li>setTimeOut/setInterVal</li><li>await</li><li>script(外层同步代码)</li><li>postMessage</li></ul></li></ol></li><li><p>async和await</p><ul><li>async用来声明一个异步方法，await用来等待异步方法执行，await阻塞后面的代码，即加入微任务队列</li></ul></li><li><p>实例分析</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async1 start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async1 end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">settimeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">async1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 结果是：script start、async1 start、async2、promise1、script end、async1 end、promise2、settimeout</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="_07-垃圾回收机制" tabindex="-1">07-垃圾回收机制 <a class="header-anchor" href="#_07-垃圾回收机制" aria-hidden="true">#</a></h2><ol><li><p>概述</p><ul><li>浏览器的JavaScript具有自动垃圾回收机制，也就是说，执行环境会负责管理代码执行过程中使用的内存</li><li>原理：垃圾收集器会定期找出那些不再继续使用的变量，然后释放其内存</li></ul></li><li><p>实现方式</p><ol><li><p>标记清除</p><ul><li><p>当变量进入环境时，就将这个变量标记为“进入环境”，当变量离开环境时，被标记为”离开环境“</p></li><li><p>垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">             </span><span style="color:#676E95;font-style:italic;">//被标记 ，进入环境 </span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">             </span><span style="color:#676E95;font-style:italic;">//被标记 ，进入环境</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;">//执行完毕 之后 a、b又被标离开环境，被回收。</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>引用计数</p><ul><li><p>引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1</p></li><li><p>如果同一个值又被赋给另一个变量，则该值的引用次数加1，相反，如果包含对这个值引用的变量又取得了另一个值，则这个值引用次数减1</p></li><li><p>当这个值的引用次数变为0时，就说明没办法再引用该值，因而就可以将占用的内存空间回收</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">        </span><span style="color:#676E95;font-style:italic;">//a的引用次数为0 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">         </span><span style="color:#676E95;font-style:italic;">//a的引用次数加1，为1 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">           </span><span style="color:#676E95;font-style:italic;">//a的引用次数再加1，为2</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">={};</span><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">//a的引用次数减1，为1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ol></li></ol>`,15),e=[p];function t(c,i,r,y,F,D){return a(),l("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
