(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{655:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("简直有一些抑制不住激动的想要分享一下这个插件，当我真正体验了一下这个插件之后，就深深的感觉到幸福感大大的提升。")]),s._v(" "),a("p",[s._v("缘起就是在Jenkins的一个QQ群里，一个善心的哥们分享的这个插件，经过体验之后，特别来进行一次隆重分享。")]),s._v(" "),a("h2",{attrs:{id:"_1-介绍。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍。"}},[s._v("#")]),s._v(" 1，介绍。")]),s._v(" "),a("p",[s._v("插件名称："),a("code",[s._v("AnsiColor")]),s._v("。")]),s._v(" "),a("p",[s._v("此插件的主要功效就是可以给Jenkins的项目构建日志上色。")]),s._v(" "),a("p",[s._v("这一点对于我们日常运维工作来说，简直就是天使大姐降临一般的。")]),s._v(" "),a("p",[s._v("当我们越使用优秀合适的工具进行运维，就越趋近标准化的灵魂！")]),s._v(" "),a("h2",{attrs:{id:"_2-使用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用。"}},[s._v("#")]),s._v(" 2，使用。")]),s._v(" "),a("p",[s._v("用起来非常简单。")]),s._v(" "),a("p",[s._v("首先安装插件：系统管理—>插件管理—->可选插件 搜索AnsiColor下载安装即可。")]),s._v(" "),a("p",[s._v("其次在配置每个项目的时候，构建环境当中选中这个功能。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/147510fb65ebacf7.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("然后在构建过程中，"),a("code",[s._v("echo")]),s._v("内容的时候，加上"),a("code",[s._v("-e")]),s._v("属性即可对应显示。")]),s._v(" "),a("p",[s._v("最后，简单拉出来一个测试项目，然后进行一下验证看看情况。")]),s._v(" "),a("p",[s._v("在项目当中执行shell：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义颜色的变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RED_COLOR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\E[1;31m'")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#红")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GREEN_COLOR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\E[1;32m'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#绿")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("YELOW_COLOR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\E[1;33m'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#黄")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BLUE_COLOR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\E[1;34m'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#蓝")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\E[1;35m'")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#粉红")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\E[0m'")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#需要使用echo -e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RED_COLOR}")]),s._v("======red color======"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RES}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${YELOW_COLOR}")]),s._v("======yelow color======"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RES}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BLUE_COLOR}")]),s._v("======green color======"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RES}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GREEN_COLOR}")]),s._v("======green color======"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RES}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PINK}")]),s._v("======pink color======"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RES}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#######################################"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接把echo -e放到变量里面，使用的时候直接输出变量即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SETCOLOR_SUCCESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo -en '),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v('033[1;32m"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SETCOLOR_FAILURE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo -en '),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v('033[1;31m"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SETCOLOR_WARNING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo -en '),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v('033[1;33m"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SETCOLOR_NORMAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo -en '),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v('033[0;39m"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" ----成功了！-----  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SETCOLOR_SUCCESS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" ----失败了！-----  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SETCOLOR_FAILURE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" ----需注意！-----  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SETCOLOR_WARNING")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" ----正常的！-----  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SETCOLOR_NORMAL")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("看下执行结果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/aa5aa79885095972.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_3-参考链接方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考链接方面"}},[s._v("#")]),s._v(" 3，参考链接方面")]),s._v(" "),a("p",[s._v("插件官方链接：https://wiki.jenkins.io/display/JENKINS/AnsiColor+Plugin")]),s._v(" "),a("p",[s._v("插件GitHub地址：https://github.com/jenkinsci/ansicolor-plugin")]),s._v(" "),a("p",[s._v("参考的文章地址：https://www.jianshu.com/p/12083063957b")])])}),[],!1,null,null,null);a.default=e.exports}}]);