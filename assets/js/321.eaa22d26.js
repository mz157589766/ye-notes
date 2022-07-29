(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{711:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-minikube-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-minikube-是什么"}},[s._v("#")]),s._v(" 1，Minikube 是什么？")]),s._v(" "),a("ul",[a("li",[s._v("Minikube 是一种方便在本地运行 Kubernetes 的工具。")]),s._v(" "),a("li",[s._v("Minikube 是可以在 VM 中运行单节点的 Kubernetes 集群。")]),s._v(" "),a("li",[s._v("Minikube 是为了开发或测试在本地启动一个节点的 kubernetes 集群。")])]),s._v(" "),a("p",[s._v("因为它安装非常简单，因此是个人用户入门学习 k8s 的一个不错选择。")]),s._v(" "),a("h2",{attrs:{id:"_2-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-特点"}},[s._v("#")]),s._v(" 2，特点")]),s._v(" "),a("p",[s._v("不能启动生产集群，没有高可用性的单节点机器。\n可以工作在 Windows,Linux,MacOS 下。")]),s._v(" "),a("h2",{attrs:{id:"_3-安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装。"}},[s._v("#")]),s._v(" 3，安装。")]),s._v(" "),a("p",[s._v("因为官方的源都在国外，因此下载等问题常常会让安装失败，这里选择使用阿里云的源来进行安装。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/baec88ab7eaee79c.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("本文所用系统以及软件：")]),s._v(" "),a("ul",[a("li",[s._v("CentOs：7.3")]),s._v(" "),a("li",[s._v("docker：17.12.1-ce")]),s._v(" "),a("li",[s._v("minikube：v0.30.0")]),s._v(" "),a("li",[s._v("kubectl：v1.12.1")])]),s._v(" "),a("h3",{attrs:{id:"_1-安装-docker。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-docker。"}},[s._v("#")]),s._v(" 1，安装 docker。")]),s._v(" "),a("p",[s._v("依旧配置成阿里源进行安装下载。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" docker-ce.repo /etc/yum.repos.d\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-17.12.1.ce-1.el7.centos\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("启动 docker。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-安装-kubectl。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-kubectl。"}},[s._v("#")]),s._v(" 2，安装 kubectl。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/yum.repos.d/kubernetes.repo")]),s._v("\n[kubernetes]\nname=Kubernetes\nbaseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=0\ngpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n     http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF")]),s._v("\n \n \nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubectl-1.12.2-0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"_3-配置-minikube。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置-minikube。"}},[s._v("#")]),s._v(" 3，配置 minikube。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -Lo minikube http://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/releases/v0.30.0/minikube-linux-amd64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" minikube /usr/local/bin/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-启动之。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动之。"}},[s._v("#")]),s._v(" 4，启动之。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("minikube start --registry-mirror"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.docker-cn.com --kubernetes-version v1.12.1 --vm-driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动完成之后，可以通过一些简单的命令查看是否成功。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost dashboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\nNAME       STATUS    ROLES     AGE       VERSION\nminikube   Ready     master    1h        v1.12.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);