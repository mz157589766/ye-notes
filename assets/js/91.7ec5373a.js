(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{483:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("日常工作中，我们会用到"),s("code",[a._v("w")]),a._v("这个命令来查看主机的登录用户以及一些负载信息。")]),a._v(" "),s("h2",{attrs:{id:"_1-执行。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行。"}},[a._v("#")]),a._v(" 1，执行。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@fbtest4 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# w")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(":46:07 up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("161")]),a._v(" days,  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(":01,  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" users,  load average: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.07")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.02")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.00")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v("     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT\nalading  pts/1    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".96.235   Tue09    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(":14m  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".18s  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".18s -bash\nalading  pts/2    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".96.153   Tue10    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(":12m  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".47s  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".40s "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f catalina.out\nroot     pts/3    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".96.218   Tue16    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".00s  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".03s  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(".00s w\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("这里我们可以看到有哪些用户以及主机登陆了这台机器，以及他们的登陆时间等等详细信息。但这些不是今天想要说的。")]),a._v(" "),s("h2",{attrs:{id:"_2-详解load-average。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-详解load-average。"}},[a._v("#")]),a._v(" 2，详解load average。")]),a._v(" "),s("h3",{attrs:{id:"_1-load-average的定义。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-load-average的定义。"}},[a._v("#")]),a._v(" 1，load average的定义。")]),a._v(" "),s("p",[a._v("我们来看第一行里的："),s("code",[a._v("load average: 0.07, 0.02, 0.00")]),a._v("。")]),a._v(" "),s("p",[a._v("linux系统中的Load对当前CPU工作量的度量。简单的说是进程队列的长度。")]),a._v(" "),s("p",[a._v("Load Average 就是一段时间 (1 分钟、5分钟、15分钟) 内平均 Load 。")]),a._v(" "),s("p",[a._v("第一行的数据从前往后分别是1,5,15分钟的负载，注：linux系统是5秒钟进行一次Load采样。")]),a._v(" "),s("h3",{attrs:{id:"_2-load-average值的含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-load-average值的含义"}},[a._v("#")]),a._v(" 2，load average值的含义")]),a._v(" "),s("h4",{attrs:{id:"_1-单核处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-单核处理器"}},[a._v("#")]),a._v(" 1） 单核处理器")]),a._v(" "),s("p",[a._v("假设我们的系统是单CPU单内核的，把它比喻成是一条单向马路，把CPU任务比作汽车。当车不多的时候，load <1；当车占满整个马路的时候 load=1；当马路都站满了，而且马路外还堆满了汽车的时候，load>1")]),a._v(" "),s("h4",{attrs:{id:"_2-多核处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-多核处理器"}},[a._v("#")]),a._v(" 2） 多核处理器")]),a._v(" "),s("p",[a._v("我们经常会发现服务器Load > 1但是运行仍然不错，那是因为服务器是多核处理器（Multi-core）。\n假设我们服务器CPU是2核，那么将意味我们拥有2条马路，我们的Load = 2时，所有马路都跑满车辆。")]),a._v(" "),s("p",[s("code",[a._v("注")]),a._v("：查看cpu 核数命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("grep 'model name' /proc/cpuinfo | wc -l\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/29055f00af9ae0b8.jpg",alt:"img"}})]),a._v(" "),s("h3",{attrs:{id:"_3-什么样的load-average值要提高警惕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么样的load-average值要提高警惕"}},[a._v("#")]),a._v(" 3，什么样的Load average值要提高警惕")]),a._v(" "),s("ul",[s("li",[a._v("0.7 < load < 1: 此时是不错的状态，如果进来更多的汽车，你的马路仍然可以应付。")]),a._v(" "),s("li",[a._v("load = 1: 你的马路即将拥堵，而且没有更多的资源额外的任务，赶紧看看发生了什么吧。")]),a._v(" "),s("li",[a._v("load > 5: 非常严重拥堵，我们的马路非常繁忙，每辆车都无法很快的运行")])]),a._v(" "),s("h3",{attrs:{id:"_4-三种load值-应该看哪个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-三种load值-应该看哪个"}},[a._v("#")]),a._v(" 4，三种Load值，应该看哪个")]),a._v(" "),s("p",[a._v("通常我们先看15分钟load，如果load很高，再看1分钟和5分钟负载，查看是否有下降趋势。\n1分钟负载值 > 1，那么我们不用担心，但是如果15分钟负载都超过1，我们要赶紧看看发生了什么事情。所以我们要根据实际情况查看这三个值。")]),a._v(" "),s("p",[s("strong",[a._v("一般常规来说，理想的负载值是核心数*0.7")])]),a._v(" "),s("p",[a._v("本文参考：https://www.cnblogs.com/kaituorensheng/p/3602805.html")])])}),[],!1,null,null,null);s.default=r.exports}}]);