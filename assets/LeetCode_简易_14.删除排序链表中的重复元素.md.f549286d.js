import{_ as s,c as a,o as n,d as l}from"./app.c282a12f.js";const i=JSON.parse('{"title":"删除排序链表中的重复元素","description":"","frontmatter":{},"headers":[{"level":2,"title":"01-题目描述","slug":"_01-题目描述","link":"#_01-题目描述","children":[{"level":3,"title":"1.1-题目","slug":"_1-1-题目","link":"#_1-1-题目","children":[]},{"level":3,"title":"1.2-示例","slug":"_1-2-示例","link":"#_1-2-示例","children":[]}]},{"level":2,"title":"02-题解","slug":"_02-题解","link":"#_02-题解","children":[{"level":3,"title":"2.1-Java解法","slug":"_2-1-java解法","link":"#_2-1-java解法","children":[]},{"level":3,"title":"2.2-JavaScript解法","slug":"_2-2-javascript解法","link":"#_2-2-javascript解法","children":[]}]}],"relativePath":"LeetCode/简易/14.删除排序链表中的重复元素.md"}'),p={name:"LeetCode/简易/14.删除排序链表中的重复元素.md"},o=l(`<h1 id="删除排序链表中的重复元素" tabindex="-1">删除排序链表中的重复元素 <a class="header-anchor" href="#删除排序链表中的重复元素" aria-hidden="true">#</a></h1><h2 id="_01-题目描述" tabindex="-1">01-题目描述 <a class="header-anchor" href="#_01-题目描述" aria-hidden="true">#</a></h2><h3 id="_1-1-题目" tabindex="-1">1.1-题目 <a class="header-anchor" href="#_1-1-题目" aria-hidden="true">#</a></h3><ul><li>给定一个已排序的链表的头 <code>head</code> ， <em>删除所有重复的元素，使每个元素只出现一次</em> 。返回 <em>已排序的链表</em> 。</li></ul><h3 id="_1-2-示例" tabindex="-1">1.2-示例 <a class="header-anchor" href="#_1-2-示例" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 示例1</span></span>
<span class="line"><span style="color:#A6ACCD;">输入：head </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 示例2</span></span>
<span class="line"><span style="color:#A6ACCD;">输入：head </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 提示</span></span>
<span class="line"><span style="color:#A6ACCD;">链表中节点数目在范围 [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">] 内</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> Node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">题目数据保证链表已经按升序 排列</span></span>
<span class="line"></span></code></pre></div><h2 id="_02-题解" tabindex="-1">02-题解 <a class="header-anchor" href="#_02-题解" aria-hidden="true">#</a></h2><h3 id="_2-1-java解法" tabindex="-1">2.1-Java解法 <a class="header-anchor" href="#_2-1-java解法" aria-hidden="true">#</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deleteDuplicates</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">head</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> cur </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                cur </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-2-javascript解法" tabindex="-1">2.2-JavaScript解法 <a class="header-anchor" href="#_2-2-javascript解法" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> deleteDuplicates </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">head</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">cur</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
