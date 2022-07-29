(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{583:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("虚拟化基本上是一个企业里边必不可少的一项技能了，但是测试环境当中，虚拟化又是很简单的。")]),s._v(" "),a("h2",{attrs:{id:"一-安装-kvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-安装-kvm"}},[s._v("#")]),s._v(" 一，安装 KVM")]),s._v(" "),a("h3",{attrs:{id:"_1-验证-cpu-是否支持-kvm-如果结果中有-vmx-intel-或-svm-amd-字样-就说明-cpu-的支持的。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-验证-cpu-是否支持-kvm-如果结果中有-vmx-intel-或-svm-amd-字样-就说明-cpu-的支持的。"}},[s._v("#")]),s._v(" 1，验证 CPU 是否支持 KVM；如果结果中有 vmx（Intel）或 svm(AMD) 字样，就说明 CPU 的支持的。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(vmx|svm)'")]),s._v(" /proc/cpuinfo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6a1b8a9d6c9952b6.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_2-关闭-selinux-防火墙等。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-关闭-selinux-防火墙等。"}},[s._v("#")]),s._v(" 2，关闭 SELinux，防火墙等。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("setenforce "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭修改配置文件")]),s._v("\niptables -F\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables o\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" NetworkManager stop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" NetworkManager off\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-如果是最小化安装的-centos-的话-那么有一些基础工具没有-可以先安装一下。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如果是最小化安装的-centos-的话-那么有一些基础工具没有-可以先安装一下。"}},[s._v("#")]),s._v(" 3，如果是最小化安装的 CentOS 的话，那么有一些基础工具没有，可以先安装一下。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release net-tools "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-安装-kvm-及依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装-kvm-及依赖"}},[s._v("#")]),s._v(" 4，安装 KVM 及依赖")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" qemu-kvm libvirt virt-install bridge-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-验证安装结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证安装结果"}},[s._v("#")]),s._v(" 5，验证安装结果")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("lsmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" kvm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3918ac545699c2a2.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_6-开启-kvm-服务-设置开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-开启-kvm-服务-设置开机自启"}},[s._v("#")]),s._v(" 6，开启 KVM 服务，设置开机自启")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" libvirtd start\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" libvirtd on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_7-查看运行状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看运行状态"}},[s._v("#")]),s._v(" 7，查看运行状态")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" libvirtd status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/269c76b5ec41070d.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_8-配置网卡为网桥模式。配置前先备份一下网卡文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-配置网卡为网桥模式。配置前先备份一下网卡文件"}},[s._v("#")]),s._v(" 8，配置网卡为网桥模式。配置前先备份一下网卡文件")]),s._v(" "),a("p",[s._v("A， 创建 ifcfg-br0 文件，内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /backup\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/sysconfig/network-scripts/ /backup/ -a\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/network-scripts/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ifcfg-br0\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"br0"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Bridge"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"static"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.96.10"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个就是服务器的IP地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"255.255.255.0"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.96.100"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.96.101"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#IPV6INIT="yes"  ')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#IPV6_AUTOCONF="yes"  ')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DHCPV6C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("STP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DELAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("B， 替换 ifcfg-em1（就是服务器在用的第一个网卡）里边的内容为下边的")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("em1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BRIDGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"br0"')]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("C， 重启网络服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后 ifconfig 查看，发现多出了 br0 网卡，这个 br0 也成为了系统现在所使用的网卡。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/010d8bd0da19ae01.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"二-安装虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-安装虚拟机"}},[s._v("#")]),s._v(" 二，安装虚拟机")]),s._v(" "),a("h3",{attrs:{id:"_1-准备操作系统安装所需的镜像文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备操作系统安装所需的镜像文件"}},[s._v("#")]),s._v(" 1，准备操作系统安装所需的镜像文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/kvm/ios\n把想要安装的系统镜像拷到此目录之下。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-创建虚拟机文件存放的目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建虚拟机文件存放的目录"}},[s._v("#")]),s._v(" 2，创建虚拟机文件存放的目录")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/kvm/image\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-直接创建虚拟机。这里先创建一个模板虚拟机-方便以后直接克隆使用-而不需要再重复安装系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-直接创建虚拟机。这里先创建一个模板虚拟机-方便以后直接克隆使用-而不需要再重复安装系统"}},[s._v("#")]),s._v(" 3，直接创建虚拟机。这里先创建一个模板虚拟机，方便以后直接克隆使用，而不需要再重复安装系统")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("virt-install -name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("centos7_2H4G --ram "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" --vcpus"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --disk "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/kvm/image/centos7_2H4G.img,size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" --cdrom /home/kvm/ios/CentOS-7-x86_64-DVD-1611.iso --network "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bridge")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("br0 --graphics vnc,listen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0,port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6666")]),s._v(",keymap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("en_us --accelerate --force  --autostart  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("事实上创建的时候名字用 - n 就可以了，但是我当时不知道，这样创建了一个名字为 ame=centos7_2H4G 的虚拟机，等会儿再说说给虚拟机改名的事儿。")])]),s._v(" "),a("p",[s._v("简单说明下各选项的意义：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("-n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定创建虚拟机名称")]),s._v("\n--ram                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定内存大小")]),s._v("\n--vcpus                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定CPU个数")]),s._v("\n--disk path               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定虚拟机文件存储名称及位置")]),s._v("\nsize                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定虚拟机大小")]),s._v("\n--cdrom                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定镜像位置")]),s._v("\n--network bridge          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定网桥")]),s._v("\nvnc,listen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0,port   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定远程连接端口")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_4-直接远程连接安装操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-直接远程连接安装操作系统"}},[s._v("#")]),s._v(" 4，直接远程连接安装操作系统")]),s._v(" "),a("blockquote",[a("p",[s._v("1，使用 VNC 进行远程连接，如果是初次使用 vnc 可能会有问题，解决办法网上难找，不过在另外一个地方有记录"),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/55.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我解决"),a("OutboundLink")],1),s._v("。\n2，用 IP + 端口就能够登陆安装操作系统了。\n3，有时候安装完之后重启，会有找不到系统盘的报错，这个暂时无解，把刚才的虚拟机删掉，重新创建咯。\n4，装完操作系统，配置 IP 之类的，就可以直接远程连接使用了。")])]),s._v(" "),a("h3",{attrs:{id:"_5-刚才的安装好系统-关机-作为模板文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-刚才的安装好系统-关机-作为模板文件"}},[s._v("#")]),s._v(" 5，刚才的安装好系统，关机，作为模板文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ame")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("centos7_2H4G\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6-使用模板克隆出一个新的虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-使用模板克隆出一个新的虚拟机"}},[s._v("#")]),s._v(" 6，使用模板克隆出一个新的虚拟机")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("virt-clone -o 原虚拟机 -n 新虚拟机 -f 新img文件\nvirt-clone  -o CentOS7_2H4G -n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -f /home/kvm/image/test.img\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("1，以模板为蓝本创建一个名为 maopao(可自定义) 的虚拟机，新虚拟机文件位置为。\n2，创建完成之后，需要修改它的远程连接端口")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" edit "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n搜索/vnc\n端口更改成另外一个，yes要改成no，这个如果不改，则无法使用。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/84060e96bec5110f.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_7-启动新的虚拟机-vnc-远程连接-可以设置-ip-了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-启动新的虚拟机-vnc-远程连接-可以设置-ip-了"}},[s._v("#")]),s._v(" 7，启动新的虚拟机，vnc 远程连接，可以设置 IP 了")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" start "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 vnc 中使用宿主机 IP + 端口的方式访问。")]),s._v(" "),a("p",[s._v("现在，一个虚拟机的使用创建流程就是这样。")])])}),[],!1,null,null,null);a.default=n.exports}}]);