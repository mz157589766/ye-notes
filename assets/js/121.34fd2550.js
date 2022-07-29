(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{510:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作"}},[s._v("#")]),s._v(" 1，准备工作")]),s._v(" "),a("h3",{attrs:{id:"_1-下载-kafka。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-kafka。"}},[s._v("#")]),s._v(" 1，下载 kafka。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.cnnic.cn/apache/kafka/0.11.0.2/kafka_2.11-0.11.0.2.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后上传到服务器。")]),s._v(" "),a("h3",{attrs:{id:"_2-基础镜像。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-基础镜像。"}},[s._v("#")]),s._v(" 2，基础镜像。")]),s._v(" "),a("p",[s._v("需要准备一个 jdk 镜像。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull eryajf/jdk:1.8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-创建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建镜像"}},[s._v("#")]),s._v(" 2，创建镜像")]),s._v(" "),a("h3",{attrs:{id:"_1-原料准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-原料准备。"}},[s._v("#")]),s._v(" 1，原料准备。")]),s._v(" "),a("p",[s._v("创建一个目录，有如下内容。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ls")]),s._v("\nDockerfile  kafka.tar  run.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("其中"),a("code",[s._v("kafka.tar")]),s._v("是在解压之后，重命名为"),a("code",[s._v("kafka")]),s._v("，然后再次打包而成，这样方便后续操作。")]),s._v(" "),a("h3",{attrs:{id:"_2-查看内容。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看内容。"}},[s._v("#")]),s._v(" 2，查看内容。")]),s._v(" "),a("p",[s._v("查看两个文件的内容。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" run.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'34s/^#//g'")]),s._v(" /opt/kafka/config/server.properties\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'63s/tmp/opt\\/kafka/g'")]),s._v(" /opt/kafka/config/server.properties\n/opt/kafka/bin/zookeeper-server-start.sh -daemon /opt/kafka/config/zookeeper.properties\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n/opt/kafka/bin/kafka-server-start.sh /opt/kafka/config/server.properties\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("服务通过"),a("code",[s._v("run.sh")]),s._v("进行初始化，里边简单配置了一下 kafka，然后启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" Dockerfile\nFROM eryajf/jdk:1.8\nMAINTAINER eryajf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("liqilong@edspay.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nENV "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")]),s._v(" en_US.UTF-8\nADD kafka.tar /opt\nADD   run.sh  /\nEXPOSE "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9092")]),s._v("\nENTRYPOINT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sh"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/run.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-构建镜像。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建镜像。"}},[s._v("#")]),s._v(" 3，构建镜像。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$docker")]),s._v(" build -t "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nSending build context to Docker daemon "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("236.7")]),s._v(" MB\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" FROM "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".112.69/public/jdk:1.8\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 88d717766e50\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" MAINTAINER eryajf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("liqilong@edspay.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Using cache\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ce9a81c38f6c\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ENV "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")]),s._v(" en_US.UTF-8\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Using cache\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" d8ed2ae6a64f\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ADD kafka.tar /opt\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 1e6337f7c14d\nRemoving intermediate container b1127716d99e\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ADD run.sh /\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 1ca96a5d1728\nRemoving intermediate container 4c5750914f16\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("/7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" EXPOSE "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9092")]),s._v("\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a62aca3a277d\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ce25e74f2acb\nRemoving intermediate container a62aca3a277d\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("/7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ENTRYPOINT "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c /run.sh\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 77536f76e370\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 9d368303d96e\nRemoving intermediate container 77536f76e370\nSuccessfully built 9d368303d96e\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"_3-启动验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动验证"}},[s._v("#")]),s._v(" 3，启动验证")]),s._v(" "),a("p",[s._v("启动一下刚刚构建的镜像。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$docker")]),s._v(" run -itd -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9092")]),s._v(":9092 --name aa "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nc49f55f91edf1c6ecdf2c37d842f250a562a55df164a51571cfc71747f330e13\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("进入镜像创建消息验证。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it aa "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\nsh-4.2"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd opt/kafka/bin")]),s._v("\nsh-4.2"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test")]),s._v("\nCreated topic "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nsh-4.2"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./kafka-topics.sh --list --zookeeper localhost:2181")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nsh-4.2"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./kafka-console-producer.sh --broker-list localhost:9092 --topic test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hello world\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hello eryajf\n然后退出一下这个终端，查看一下刚刚的消息\nsh-4.2"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning")]),s._v("\nUsing the ConsoleConsumer with old consumer is deprecated and will be removed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a future major release. Consider using the new consumer by passing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bootstrap-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" instead of "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zookeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".\nhello world\nhello eryajf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("可以看出，消息收发都是正常的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6845deaffabe4983.jpg",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_4-上传公用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-上传公用"}},[s._v("#")]),s._v(" 4，上传公用")]),s._v(" "),a("h3",{attrs:{id:"_1-阿里云。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-阿里云。"}},[s._v("#")]),s._v(" 1，阿里云。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" registry.cn-hangzhou.aliyuncs.com/eryajf/kafka:2.11\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push registry.cn-hangzhou.aliyuncs.com/eryajf/kafka:2.11\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-官方。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-官方。"}},[s._v("#")]),s._v(" 2，官方。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" eryajf/kafka:2.11\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push eryajf/kafka:2.11\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("有需要使用的，可以直接通过上边两个地址进行 pull 使用。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry.cn-hangzhou.aliyuncs.com/eryajf/kafka:2.11\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull eryajf/kafka:2.11\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用注意，其中将 kafka 的消息目录定义在了"),a("code",[s._v("/opt/kafka/kafka-logs")]),s._v("目录，需要持久化的，可以针对这个目录进行持久化！")])])}),[],!1,null,null,null);a.default=e.exports}}]);