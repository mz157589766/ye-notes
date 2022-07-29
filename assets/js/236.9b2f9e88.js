(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{625:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当私服搭建完成之后，在使用的姿势上，也有一些需要注意的地方，这里记录一下工作中使用的姿势以及坑点。")]),s._v(" "),a("h3",{attrs:{id:"_1-go1-12。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-go1-12。"}},[s._v("#")]),s._v(" 1，go1.12。")]),s._v(" "),a("p",[s._v("一开始大家使用的golang版本是1.12，在这个版本中，go mod还不是一个官方默认的选项，不过也没有像新版本中引入sumdb的验证，因此在配置私服的时候，反而会比较纯粹简单了。")]),s._v(" "),a("p",[s._v("这里假设如下两个地址：")]),s._v(" "),a("ul",[a("li",[s._v("私服：nexus.eryajf.net")]),s._v(" "),a("li",[s._v("内网包：gitlab.eryajf.net")])]),s._v(" "),a("p",[s._v("在go1.12中，通过如下配置可以进行连接：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nexus.eryajf.net/repository/go-group/"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("那么无论在什么地方构建，应该都是可以高效且迅速完成的，此时无论是拉取外网的，GitHub的包，都是可以通过私服来完成的，同样内网在gitlab中的包，也能够通过私服代理拉到。")]),s._v(" "),a("h3",{attrs:{id:"_2-go1-14。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-go1-14。"}},[s._v("#")]),s._v(" 2，go1.14。")]),s._v(" "),a("p",[s._v("后来一部分小伙伴升级了go的版本到了1.14，这个时候，因为官方引入了sumdb的校验，这个校验的概念是所有公共的包都会在官方的sumdb中存有一份校验值，以防止一些恶意劫持篡改的情况发生，这本是一个好事儿，然而老问题又来了，官方的sumdb地址为："),a("a",{attrs:{href:"https://sum.golang.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("sum.golang.org"),a("OutboundLink")],1),s._v("，当我们构建的时候，连到这个地址去校验包，往往都是超时的。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Get https://sum.golang.org/lookup/xxxxxx: dial tcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("216.58")]),s._v(".200.49:443: i/o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("因此，我们得到第一步更新的配置(如下配置似乎也是许多地方推荐使用的配置方式，包括诸如goproxy.io官方文档)：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nexus.eryajf.net/repository/go-group/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GONOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab.eryajf.net"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GONOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab.eryajf.net"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPRIVATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab.eryajf.net"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sum.golang.google.cn"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("此处更新的配置中，最后一项是针对于校验时的问题解决的，sum.golang.google.cn也是一个国内的库，可供使用，有一些文章建议说设置 "),a("code",[s._v("export GOSUMDB=off")]),s._v("，这里并不推荐这么做，毕竟这层校验对安全来说，还是比较重要的。")]),s._v(" "),a("blockquote",[a("p",[s._v("但上边的配置也给后边的工作埋了一个坑。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0d230885e915a821.jpg",alt:""}})]),s._v(" "),a("p",[s._v("有一些问题往往都是在不同场景当中展现的，而我们又很难在一开始就把所有的情况都想到，这不，有小伙伴反馈说go版本升级之后，在测试环境(容器化环境，镜像为"),a("code",[s._v("golang:1.14.1")]),s._v(")发布的时候总是失败，失败的原因也很简单，就像下边所示：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("91mgo: gitlab.eryajf.net/test/admin-go@v1.0.3: reading gitlab.eryajf.net/test/admin-go/go.mod at revision v1.0.3: unknown revision v1.0.3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("看得出是在从本地拉包的时候失败了，这个时候没有其他错误，我一般都是先到私服当中搜索一下，发现这个包是在的，那就没有道理拉不下来呀，这个时候思绪也沉溺在环境的不一致上了，做了不少测试验证都没有得到答案，因为在外边构建非常顺利，而测试环境就是发不成功。")]),s._v(" "),a("p",[s._v("后来一个同学把代理配置改成如下样子，发现构建成功了：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nexus.eryajf.net/repository/go-group/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("off\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("成功了总还算是让人心情舒畅的，但是却没有想明白是为什么，为此，结合了几个开发大佬研讨许久，过程甚是酣畅，这里不多赘述，直接解密。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("原因：")]),s._v("因为上边配置中有一项是 "),a("code",[s._v('export GONOPROXY="gitlab.eryajf.net"')]),s._v("，那么编译的时候拉 "),a("code",[s._v("gitlab.eryajf.net/test/admin-go@v1.0.3")]),s._v("这个包的时候，就不再走私服，而是从容器直接去gitlab中拉包，而对应项目又是 "),a("code",[s._v("Private")]),s._v(" 类型的，这两者之间未做任何认证，自然是无法拉到，这一点解释了上边的报错。")])]),s._v(" "),a("p",[s._v("而本地之所以无法复现那个报错的原因应该是：当我拉包不通过代理，直接去gitlab拉包的时候，因为开发者本地都针对gitlab做过了认证，因此即便是直接去gitlab拉包也不会有问题，所以本地无法复现在容器中的那个错误。")]),s._v(" "),a("p",[s._v("于是有人提到说 "),a("code",[s._v("GONOPROXY")]),s._v("这个选项有了，是不是也就代表着不需要我们内部的私服了，直接将代理设置为公共的，然后将"),a("code",[s._v("GONOPROXY")]),s._v("设置为本地gitlab，不就完美解决了，这种方案的不科学性与上边一致，要想实现，恐怕需要如下条件才行：")]),s._v(" "),a("ul",[a("li",[s._v("除非是所有内网的包都设置为 "),a("code",[s._v("Public")]),s._v("类型，当然，出于安全性考虑，这种配置几乎不可能会采纳")]),s._v(" "),a("li",[s._v("或者是任何需要构建的地方，都加入一个基于所有私服包认证的key，这或许是一个可行的方案，却不是一个优雅的方案，事实上nexus的go私服也是基于key来拉取内部的包的，只不过是把认证的工作统一交给 "),a("code",[s._v("athens")]),s._v("来做了。")])]),s._v(" "),a("p",[s._v("因此，最终我们在go1.14版本中，采用了如下的代理配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nexus.eryajf.net/repository/go-group/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GONOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab.eryajf.net"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sum.golang.google.cn"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如上配置指明了我们所有的包都走私服代理进行拉取，但是内部域名下的包不走sumdb的校验，如果外部包需要校验，那么使用国内的地址 sum.golang.google.cn。")]),s._v(" "),a("p",[s._v("现在问题似乎都已经明朗了，或许可以再回头来审视一下上边添加的配置中几个选项的含义：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nexus.eryajf.net/repository/go-group/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GONOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab.eryajf.net"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GONOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab.eryajf.net"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPRIVATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitlab.eryajf.net"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sum.golang.google.cn"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("GO111MODULE")]),s._v(":Go语言提供了 GO111MODULE 这个环境变量来作为 Go modules 的开关，因为到1.14当中默认是on，因此可以不加了。")]),s._v(" "),a("li",[a("code",[s._v("GOPROXY")]),s._v("：表示设置go模块儿代理，同node我们经常使用淘宝源一样的，这里地址指向我们的私服地址。")]),s._v(" "),a("li",[a("code",[s._v("GONOPROXY")]),s._v("：用于配置不走代理的地址。")]),s._v(" "),a("li",[a("code",[s._v("GOPRIVATE")]),s._v("：表示此项配置中的地址将会作为GONOPROXY 和 GONOSUMDB 的默认值。")]),s._v(" "),a("li",[a("code",[s._v("GOSUMDB")]),s._v("：表示编译过程中go进行校验时的地址。")]),s._v(" "),a("li",[a("code",[s._v("GONOSUMDB")]),s._v("：表示此项中配置中的地址不进行校验，因为私服当中的包是无法也不能进行公有校验的。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);