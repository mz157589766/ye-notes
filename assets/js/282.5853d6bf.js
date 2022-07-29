(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{672:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("先来简述一下需求以及思路吧：")]),s._v(" "),t("p",[s._v("我这边拉代码编译以及准备工作都是基于"),t("code",[s._v("Jenkinsfile")]),s._v("完成，然后再基于"),t("code",[s._v("ansible-playbook")]),s._v("进行构建或者回滚，在调用"),t("code",[s._v("playbook")]),s._v("的时候会将提取出来的变量传进去，其中一个变量定义了项目打包之后的jar包的绝对路径。不同项目可能这个路径规范不一致，即便是同一项目，可能也会时常变更版本(比如"),t("code",[s._v("admin-0.0.1.jar")]),s._v("，下次可能会是"),t("code",[s._v("admin-0.0.2.jar")]),s._v(")，从而无法写成固定的变量。")]),s._v(" "),t("p",[s._v("比较容易的一个办法是利用通配符来匹配这个包，那么可以定义成 "),t("code",[s._v("project_file=$WORKSPACE/${project}/target/${project}-*.jar")]),s._v("，以使得这个变量具有更强的兼容性。")]),s._v(" "),t("p",[s._v("但是当我兴致冲冲地将在全局"),t("code",[s._v("environment")]),s._v("区块中声明了如上变量后，便立刻点击了构建。然而却发现程序并没有解析通配符，传递下去的值变成了"),t("code",[s._v("admin-*.jar")]),s._v("，于是我开始寻觅能够解决这一尴尬的方案。")]),s._v(" "),t("p",[s._v("一开始打算直接在调用ansible之前声明这个变量，然而发现总是会失败，也许是我声明的方式不大对吧，后来还是在"),t("a",{attrs:{href:"https://www.jenkins.io/zh/doc/book/pipeline/jenkinsfile/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("看到了一个优雅的方案，官方示例如下：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("pipeline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any \n    environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 returnStdout")]),s._v("\n        CC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                returnStdout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                script"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo \"clang\"'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""')])]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 returnStatus")]),s._v("\n        EXIT_STATUS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                returnStatus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                script"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exit 1'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""')])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stages "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Example'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                DEBUG_FLAGS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-g'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'printenv'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("我赶忙创建一个项目运行一下看，果不其然，在环境变量中，"),t("code",[s._v("CC=clang")]),s._v("，"),t("code",[s._v("EXIT_STATUS=1")]),s._v("，一例惊醒梦中人，我于是定义了如下变量：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义项目编译完成之后的包文件")]),s._v("\n    project_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""${sh(returnStdout: true, script: "echo ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("WORKSPACE")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("project")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/target/")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("project")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('-*.jar")}"""')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("其中project定义在全局的变量中。")]),s._v(" "),t("p",[s._v("最后果然输出了自己想要的内容。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/43351899888b2176.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("经过几个项目的体验，简单总结有如下几个注意点：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("1，此声明不要放在开头的全局变量中，而应该在具体构建的stage中，不然变量的值将会是上次构建的包名，而非当次包名。示例如下：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'部署<向左'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义项目编译完成之后的包文件")]),s._v("\n      project_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""${sh(returnStdout: true, script: "echo ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("WORKSPACE")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("project")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/target/")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("project")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('-*.jar")}"""')])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  when "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      environment name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mode'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("ansible_base")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      script "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                    \n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\'\'\n              ansible-playbook -i ./deploy_hosts/${JOB_NAME}_hosts --tags "deploy,${project}" site.yml -e "project"=$project -e "_version"=${_version} -e "JOB_NAME"=${JOB_NAME} -e "remote_host"=${remote_host} -e "server_port"=${server_port} -e project_env=${project_env} -e project_user=${project_user} -e start_Xms=${start_Xms} -e start_Xmx=${start_Xmx} -e "project_file"=${project_file}\n              \'\'\'')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              Reason "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"项目部署步骤出错"')])]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("2，有一个奇怪的坑是，当我将变量传给playbook时，如果project_file这个变量靠前，则后边的变量会被忽略(暂未经过更多验证)，于是就把这个变量放在最后传了。")])]),s._v(" "),t("li",[t("p",[s._v("3，后来又集成进来一项参数，就是Java应用的启动参数，这个特殊之处在于中间有空格，尝试了许多种方案，最终发现这个方案能够保证参数不是断开的。但是使用过程中始终发现会有问题，事实上那篇文章地下有说明，使用"),t("code",[s._v(".trim()")]),s._v("方法可以避开：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("        environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义项目编译完成之后的包文件")]),s._v("\n              project_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""${sh(returnStdout: true, script: "echo ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("jar_file")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('").trim()}"""')])]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定服务启动参数， .trim() 去除末尾的空格")]),s._v("\n              start_params"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"""${sh(returnStdout: true, script: "echo ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("start_param")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('").trim()}"""')])]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);