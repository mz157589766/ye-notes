(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{730:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改配置文件"}},[s._v("#")]),s._v(" 1，修改配置文件")]),s._v(" "),a("p",[s._v("将下载的 kubernetes-server-linux-amd64.tar.gz 解压后，再解压其中的 kubernetes-src.tar.gz 文件。")]),s._v(" "),a("p",[s._v("dashboard 对应的目录是："),a("code",[s._v("cluster/addons/dashboard")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pwd")]),s._v("\n/home/k8s/k8s/kubernetes/cluster/addons/dashboard\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" dashboard-controller.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(",.orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改第33行镜像tag，并pull好自己定义的对应tag的镜像。")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" dashboard-controller.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改前后对比")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$diff")]),s._v(" dashboard-controller.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(",.orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n33c33\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("         image: cnych/kubernetes-dashboard-amd64:v1.8.3\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         image: k8s.gcr.io/kubernetes-dashboard-amd64:v1.8.3\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" dashboard-service.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(",.orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在第十一行添加一个labels，定义端口类型为NodePort。")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" dashboard-service.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改前后对比")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" dashboard-service.yaml.orig dashboard-service.yaml\n10a11\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   type: NodePort\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("指定端口类型为 NodePort，这样外界可以通过地址 nodeIP:nodePort 访问 dashboard。")])]),s._v(" "),a("h2",{attrs:{id:"_2-执行所有定义文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行所有定义文件"}},[s._v("#")]),s._v(" 2，执行所有定义文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.yaml\ndashboard-configmap.yaml  dashboard-controller.yaml  dashboard-rbac.yaml  dashboard-secret.yaml  dashboard-service.yaml\n$ kubectl create -f  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3-查看分配的-nodeport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看分配的-nodeport"}},[s._v("#")]),s._v(" 3，查看分配的 NodePort")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment kubernetes-dashboard  -n kube-system\nNAME                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nkubernetes-dashboard   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           15h\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" --namespace kube-system get pods -o wide\nNAME                                    READY     STATUS    RESTARTS   AGE       IP            NODE\ncoredns-77c989547b-j77lp                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          15h       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".84.3   kube-node1\ncoredns-77c989547b-t6mxc                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          15h       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".29.3   kube-node3\nkubernetes-dashboard-5bb8d4d76c-8kkwt   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          15h       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".84.5   kube-node1\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get svc kubernetes-dashboard -n kube-system\nNAME                   TYPE       CLUSTER-IP     EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        AGE\nkubernetes-dashboard   NodePort   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".147.2   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":8605/TCP   15h\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("dashboard pod 443 端口通过 NodePort 映射到 node 的 8605 端口。")])]),s._v(" "),a("p",[s._v("dashboard 的 --authentication-mode 支持 token、basic，默认为 token。如果使用 basic，则 kube-apiserver 必须配置 ‘--authorization-mode=ABAC’ 和 ‘--basic-auth-file’ 参数。")]),s._v(" "),a("h2",{attrs:{id:"_4-查看-dashboard-支持的命令行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看-dashboard-支持的命令行参数"}},[s._v("#")]),s._v(" 4，查看 dashboard 支持的命令行参数")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" --namespace kube-system -it kubernetes-dashboard-5bb8d4d76c-8kkwt  -- /dashboard --help\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/11/24 04:04:18 Starting overwatch\nUsage of /dashboard:\n      --alsologtostderr                   log to standard error as well as files\n      --apiserver-host string             The address of the Kubernetes Apiserver to connect to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" of protocol://address:port, e.g., http://localhost:8080. If not specified, the assumption is that the binary runs inside a Kubernetes cluster and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" discovery is attempted.\n      --authentication-mode stringSlice   Enables authentication options that will be reflected on login screen. Supported values: token, basic. Default: token.Note that basic option should only be used "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" apiserver has "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--authorization-mode=ABAC'")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--basic-auth-file'")]),s._v(" flags set. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --auto-generate-certificates        When "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" to true, Dashboard will automatically generate certificates used to serve HTTPS. Default: false.\n      --bind-address "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v("                   The IP address on "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to serve the --secure-port "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" all interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --default-cert-dir string           Directory path containing "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--tls-cert-file'")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--tls-key-file'")]),s._v(" files. Used also when auto-generating certificates flag is set. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/certs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --disable-settings-authorizer       When enabled, Dashboard settings page will not require user to be logged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" and authorized to access settings page.\n      --enable-insecure-login             When enabled, Dashboard login view will also be shown when Dashboard is not served over HTTPS. Default: false.\n      --heapster-host string              The address of the Heapster Apiserver to connect to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" of protocol://address:port, e.g., http://localhost:8082. If not specified, the assumption is that the binary runs inside a Kubernetes cluster and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" proxy will be used.\n      --insecure-bind-address "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v("          The IP address on "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to serve the --port "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" all interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --insecure-port int                 The port to listen to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" incoming HTTP requests. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --kubeconfig string                 Path to kubeconfig "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" with authorization and master location information.\n      --log_backtrace_at traceLocation    when logging hits line file:N, emit a stack trace "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default :0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --log_dir string                    If non-empty, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" log files "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" this directory\n      --logtostderr                       log to standard error instead of files\n      --metric-client-check-period int    Time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" seconds that defines how often configured metric client health check should be run. Default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" seconds. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --port int                          The secure port to listen to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" incoming HTTPS requests. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --stderrthreshold severity          logs at or above this threshold go to stderr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --system-banner string              When non-empty displays message to Dashboard users. Accepts simple HTML tags. Default: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n      --system-banner-severity string     Severity of system banner. Should be one of "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INFO|WARNING|ERROR'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" Default: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INFO'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INFO"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --tls-cert-file string              File containing the default x509 Certificate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" HTTPS.\n      --tls-key-file string               File containing the default x509 private key matching --tls-cert-file.\n      --token-ttl int                     Expiration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("in seconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" of JWE tokens generated by dashboard. Default: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" min. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" - never expires "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -v, --v Level                           log level "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" V logs\n      --vmodule moduleSpec                comma-separated list of "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pattern")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("N settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" file-filtered logging\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" terminated with "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"_5-访问-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-访问-dashboard"}},[s._v("#")]),s._v(" 5，访问 dashboard")]),s._v(" "),a("p",[s._v("为了集群安全，从 1.7 开始，dashboard 只允许通过 https 访问，如果使用 kube proxy 则必须监听 localhost 或 127.0.0.1，对于 NodePort 没有这个限制，但是仅建议在开发环境中使用。")]),s._v(" "),a("p",[s._v("对于不满足这些条件的登录访问，在登录成功后"),a("strong",[s._v("浏览器不跳转，始终停在登录界面")]),s._v("。")]),s._v(" "),a("p",[s._v("参考：\nhttps://github.com/kubernetes/dashboard/wiki/Accessing-Dashboard—1.7.X-and-above\nhttps://github.com/kubernetes/dashboard/issues/2540")]),s._v(" "),a("ul",[a("li",[s._v("kubernetes-dashboard 服务暴露了 NodePort，可以使用 "),a("code",[s._v("https://NodeIP:NodePort")]),s._v(" 地址访问 dashboard；")]),s._v(" "),a("li",[s._v("通过 kube-apiserver 访问 dashboard；")]),s._v(" "),a("li",[s._v("通过 kubectl proxy 访问 dashboard：")])]),s._v(" "),a("h3",{attrs:{id:"_1-通过-kubectl-proxy-访问-dashboard-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过-kubectl-proxy-访问-dashboard-了解"}},[s._v("#")]),s._v(" 1，通过 kubectl proxy 访问 dashboard（了解）")]),s._v(" "),a("p",[s._v("启动代理：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl proxy --address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v(" --accept-hosts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^*$'")]),s._v("\nStarting to serve on "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8086\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("--address 必须为 localhost 或 127.0.0.1；")]),s._v(" "),a("li",[s._v("需要指定 "),a("code",[s._v("\\--accept-hosts")]),s._v(" 选项，否则浏览器访问 dashboard 页面时提示 “Unauthorized”；")])]),s._v(" "),a("p",[s._v("浏览器访问 URL："),a("code",[s._v("http://127.0.0.1:8086/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy")])]),s._v(" "),a("h3",{attrs:{id:"_2-通过-kube-apiserver-访问-dashboard-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过-kube-apiserver-访问-dashboard-应用"}},[s._v("#")]),s._v(" 2，通过 kube-apiserver 访问 dashboard（应用）")]),s._v(" "),a("p",[s._v("获取集群服务地址列表：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" cluster-info\nKubernetes master is running at https://192.168.106.110:8443\nCoreDNS is running at https://192.168.106.110:8443/api/v1/namespaces/kube-system/services/coredns:dns/proxy\nkubernetes-dashboard is running at https://192.168.106.110:8443/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy\nTo further debug and diagnose cluster problems, use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl cluster-info dump'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("必须通过 kube-apiserver 的安全端口 (https) 访问 dashbaord，访问时浏览器需要使用"),a("strong",[s._v("自定义证书")]),s._v("，否则会被 kube-apiserver 拒绝访问。")]),s._v(" "),a("p",[s._v("创建和导入自定义证书的步骤，参考："),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/2186.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("A. 浏览器访问 kube-apiserver 安全端口"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("浏览器访问 URL："),a("code",[s._v("https://172.27.129.105:6443/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/")]),s._v("\n对于 virtuabox 做了端口映射： "),a("code",[s._v("http://127.0.0.1:6443/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/")])]),s._v(" "),a("p",[s._v("现在，直接使用刚刚通过"),a("code",[s._v("kubectl cluster-info")]),s._v("获取到的地址进行访问：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/85802da360049b22.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_6-创建登录-dashboard-的-token-和-kubeconfig-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-创建登录-dashboard-的-token-和-kubeconfig-配置文件"}},[s._v("#")]),s._v(" 6，创建登录 Dashboard 的 token 和 kubeconfig 配置文件")]),s._v(" "),a("p",[s._v("上面提到，Dashboard 默认只支持 token 认证，所以如果使用 KubeConfig 文件，需要在该文件中指定 token，不支持使用 client 证书认证。")]),s._v(" "),a("h3",{attrs:{id:"_1-创建登录-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建登录-token"}},[s._v("#")]),s._v(" 1，创建登录 token")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl create sa dashboard-admin -n kube-system\n$ kubectl create clusterrolebinding dashboard-admin --clusterrole"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cluster-admin --serviceaccount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-system:dashboard-admin\n$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ADMIN_SECRET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get secrets -n kube-system "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" dashboard-admin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DASHBOARD_LOGIN_TOKEN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl describe secret -n kube-system $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ADMIN_SECRET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^token'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DASHBOARD_LOGIN_TOKEN}")]),s._v("\neyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4tbGJ4d2giLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiYjBlYzMyMWMtZWYxYi0xMWU4LTk2NzAtNTI1NDAwYzdiYTk3Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRhc2hib2FyZC1hZG1pbiJ9.g_llVGHmryCqQ61BdDlQJ4tsuX1bEg3hzYCZb_cvoz6RkNgPt85QUQJSKymXvpzFYv8sq09jR6hrkgJ8rJpSMVSgbOswu_w5aV9RbiLaquv0d9m6WDR7FGgDGAZxYf8ag0DDzHesnAOUuNnSweklbQTbyB90X5Okff8332PemnMzcZzZP4je70T-OTyCHygcckWji_ZEEC5k3WXRwEhMMZO5cWVAuneNCpVSEJOKw1jRei8CC26FcPVm4vU24u3b0xQDeE6gFya2zIsJPMyaWVKhx_CtIh-uwSbf8SiRBzk767BBFye3sEG-D5NPrq65eB1wDNOOE8YxzomMwtR5aA\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("将上边输出的 token 输入到刚刚 dashboard 需要验证的界面，点击令牌，然后复制进去")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/50ed2c37bae72291.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("点击登录即可访问首页了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fe5947762ab65405.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_2-创建使用-token-的-kubeconfig-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建使用-token-的-kubeconfig-文件"}},[s._v("#")]),s._v(" 2，创建使用 token 的 KubeConfig 文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/k8s/bin/environment.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置集群参数")]),s._v("\n$ kubectl config set-cluster kubernetes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${KUBE_APISERVER}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dashboard.kubeconfig\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置客户端认证参数，使用上面创建的 Token")]),s._v("\n$ kubectl config set-credentials dashboard_user "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DASHBOARD_LOGIN_TOKEN}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dashboard.kubeconfig\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置上下文参数")]),s._v("\n$ kubectl config set-context default "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --cluster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dashboard_user "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dashboard.kubeconfig\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认上下文")]),s._v("\n$ kubectl config use-context default --kubeconfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dashboard.kubeconfig\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("将如上操作所生成的 dashboard.kubeconfig 下载到本地，然后在登录界面，选择 kubeconfig 的方式，将刚刚本地的 config 文件导入进来，点击登录登入到 Dashboard。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3fe3af853170c510.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("由于缺少 Heapster 插件，当前 dashboard 不能展示 Pod、Nodes 的 CPU、内存等统计数据和图表。")]),s._v(" "),a("h2",{attrs:{id:"_7-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-参考"}},[s._v("#")]),s._v(" 7，参考")]),s._v(" "),a("p",[s._v("https://github.com/kubernetes/dashboard/wiki/Access-control\nhttps://github.com/kubernetes/dashboard/issues/2558\nhttps://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/")])])}),[],!1,null,null,null);a.default=n.exports}}]);