(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{468:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("zabbix是什么，想必已经无需多言了，如果真的还不知道zabbix是什么的，那么烦请出门百度一波，然后再来这里。")]),s._v(" "),a("p",[s._v("这是zabbix系列分享的第一篇，就先来介绍一下怎么安装一台zabbix服务器。")]),s._v(" "),a("h2",{attrs:{id:"一-服务器初始化准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-服务器初始化准备。"}},[s._v("#")]),s._v(" 一，服务器初始化准备。")]),s._v(" "),a("p",[s._v("一般我的站点不特别强调的话，都是默认使用的系统都是CentOS 7。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl stop firewalld\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭防火墙")]),s._v("\nsystemctl disable firewalld\t        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机不自启")]),s._v("\nsetenforce "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#临时关闭SELinux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/SELINUX=enforcing/SELINUX=disabled/g"')]),s._v(" /etc/selinux/config\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭SELinux")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"二-安装lamp。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-安装lamp。"}},[s._v("#")]),s._v(" 二，安装LAMP。")]),s._v(" "),a("p",[s._v("此处使用rpm方式进行安装，一般情况下企业安装一些软件工具都是使用源码进行安装，但是安装zabbix的话，还是比较建议使用rpm的方式来进行安装的。")]),s._v(" "),a("h3",{attrs:{id:"_1-配置yum源并安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置yum源并安装。"}},[s._v("#")]),s._v(" 1，配置yum源并安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.163.com/.help/CentOS7-Base-163.repo\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载网络yum源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" CentOS7-Base-163.repo /etc/yum.repos.d/\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#移动到yum源下")]),s._v("\nyum clean all\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#清空缓存")]),s._v("\nyum makecache\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#建立其库")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mariadb mariadb-server httpd php php-mysql \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-启动相关服务并设置开机自启。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动相关服务并设置开机自启。"}},[s._v("#")]),s._v(" 2，启动相关服务并设置开机自启。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" httpd\nsystemctl restart httpd\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mariadb\nsystemctl restart mariadb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-初始化数据库。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化数据库。"}},[s._v("#")]),s._v(" 3，初始化数据库。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql_secure_installation\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("初始化的时候会让设置数据库的密码，这个地方可以设置一下，然后要记住密码是什么。")]),s._v(" "),a("h2",{attrs:{id:"三、安装-zabbix-程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、安装-zabbix-程序"}},[s._v("#")]),s._v(" 三、安装 Zabbix 程序")]),s._v(" "),a("h3",{attrs:{id:"_1-安装zabbix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装zabbix"}},[s._v("#")]),s._v(" 1，安装zabbix")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh http://repo.zabbix.com/zabbix/3.2/rhel/7/x86_64/zabbix-release-3.2-1.el7.noarch.rpm       \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import /etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX  \nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zabbix-server-mysql zabbix-web-mysql  zabbix-agent  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-配置数据库。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置数据库。"}},[s._v("#")]),s._v(" 2，配置数据库。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" zabbix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8_bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" zabbix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" zabbix"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zabbix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此处的密码可以自定义，我这里就直接用zabbix了。")]),s._v(" "),a("h3",{attrs:{id:"_3-读入数据库。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-读入数据库。"}},[s._v("#")]),s._v(" 3，读入数据库。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /usr/share/doc/zabbix-server-mysql-3.2.7/\nzcat create.sql.gz | mysql -uroot -p  zabbix\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将数据写入数据库之后，记得别忘了登陆数据库 show tables; 看一下。")]),s._v(" "),a("h3",{attrs:{id:"_4-配置zabbix。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置zabbix。"}},[s._v("#")]),s._v(" 4，配置zabbix。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/zabbix/zabbix_server.conf\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBHost")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zabbix\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBUser")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zabbix\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBPassword")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zabbix  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加密码（115行）")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_5-启动-zabbix-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-zabbix-服务"}},[s._v("#")]),s._v(" 5，启动 Zabbix 服务")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl start zabbix-server\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" zabbix-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果有报错，可能是iptables或者selinux没有搞定的问题，或者其他原因，请自查解决。")]),s._v(" "),a("h3",{attrs:{id:"_6-编辑-zabbix-前端-php-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-编辑-zabbix-前端-php-配置"}},[s._v("#")]),s._v(" 6，编辑 zabbix 前端 php 配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/httpd/conf.d/zabbix.conf\n\t\t\t\nphp_value max_execution_time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\nphp_value memory_limit 128M\nphp_value post_max_size 16M\nphp_value upload_max_filesize 2M\nphp_value max_input_time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\nphp_value always_populate_raw_post_data -1\nphp_value date.timezone Asia/Shanghai           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只改这一个地方，将时区改成上海")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_7-调整时间同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-调整时间同步"}},[s._v("#")]),s._v(" 7，调整时间同步")]),s._v(" "),a("p",[s._v("为了保证监控数据的准确性以及时效性，配置zabbix服务器与被监控主机的时间同步非常必要。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntp \nntpdate -u cn.pool.ntp.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("必要的话也可以将时间同步的命令写入到系统定时任务当中，这里不再赘述。")]),s._v(" "),a("h3",{attrs:{id:"_8-重启-apache-服务生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-重启-apache-服务生效"}},[s._v("#")]),s._v(" 8，重启 Apache 服务生效")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl restart httpd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_9-安装登陆。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-安装登陆。"}},[s._v("#")]),s._v(" 9，安装登陆。")]),s._v(" "),a("p",[s._v("在浏览器当中输入192.168.66.100/zabbix登陆安装")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e642a0ce06f759fd.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("1，修改一下"),a("code",[s._v("mysql的端口")]),s._v("—-》"),a("code",[s._v("用户密码zabbix")]),s._v(" —-》安装成功")]),s._v(" "),a("p",[s._v("2，登陆时默认用户"),a("code",[s._v("Admin")]),s._v("—》密码"),a("code",[s._v("zabbix")])]),s._v(" "),a("p",[s._v("3，登陆上去之后，先点击右上角小人头像，有一个language，选择Chinese—–》update更新，就是"),a("code",[s._v("中文")]),s._v("了")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7deecacbfd54ff6e.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("好了，一个zabbix服务就这么轻松装好啦，不要放松警惕，接下来会进入到其更详细的配置与介绍，请锁定本站，精彩继续。")])])}),[],!1,null,null,null);a.default=n.exports}}]);