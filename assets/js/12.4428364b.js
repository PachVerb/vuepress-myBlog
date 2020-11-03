(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{481:function(s,t,a){s.exports=a.p+"assets/img/0917.7623a0af.jpg"},527:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"准备工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工具"}},[s._v("#")]),s._v(" 准备工具")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("jsvu")]),s._v(" "),e("blockquote",[e("p",[s._v("该工具由google公司开发，用于管理javascript引擎版本的交互式CLI")])])]),s._v(" "),e("li",[e("p",[s._v("Eshost")]),s._v(" "),e("blockquote",[e("p",[s._v("提供运行脚本代码和javascript引擎的宿主环境")])])]),s._v(" "),e("li",[e("p",[s._v("eshost-cli")]),s._v(" "),e("blockquote",[e("p",[s._v("提供javascript引擎的宿主环境的交互式CLI")])])])]),s._v(" "),e("h2",{attrs:{id:"工具-mac-os-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具-mac-os-安装"}},[s._v("#")]),s._v(" 工具(Mac OS)安装:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g jsvu \n")])])]),e("p",[s._v("或")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" jsvu global\n")])])]),e("p",[s._v("安装引擎")]),s._v(" "),e("p",[s._v("通过tsvu工具安装js引擎(Mac os)")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("tsvu \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定版本安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tsvu engin-name@versions")]),s._v("\ntsvu chakra@7.x\n")])])]),e("p",[s._v("macos系统下此命名行会提示合适的主机版本，以及所要安装的js引擎")]),s._v(" "),e("p",[e("em",[s._v("Note: 指定版本安装，如果指定版本本身不存在，会提示报错")])]),s._v(" "),e("p",[e("strong",[s._v("目前官方支持的js引擎列表")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(481),alt:"ltem"}})]),s._v(" "),e("h2",{attrs:{id:"装载安装的js-engines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#装载安装的js-engines"}},[s._v("#")]),s._v(" 装载安装的js Engines")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac os")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定装载版本")]),s._v("\neshost --add "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Chakra'")]),s._v(" ～/.jsvu/chakra\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全部装载")]),s._v("\neshost --configure-jsvu\n")])])]),e("p",[s._v("下载的安装文件路径在")]),s._v(" "),e("p",[s._v("/Users/[home]/.jsvu/")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定表达式")]),s._v("\neshost -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1+1"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定语句")]),s._v("\neshost -tsx "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'print(1+2)'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件")]),s._v("\neshost -ts "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test.js'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定引擎运行代码")]),s._v("\neshost -h "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1+1'")]),s._v("\n")])])]),e("h2",{attrs:{id:"engins管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#engins管理"}},[s._v("#")]),s._v(" engins管理")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tsvu --engines = chakra, javascriptCore...\n")])])]),e("p",[s._v("Tips: 指定需要管理的引擎版本，不再列表之类的不会执行更新， 因直接执行```jsvu``会更新所有安装引擎。")]),s._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/GoogleChromeLabs/jsvu",target:"_blank",rel:"noopener noreferrer"}},[s._v("jsvu_repo"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/bterlson/eshost#installing-engines",target:"_blank",rel:"noopener noreferrer"}},[s._v("eshost_repo"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/bterlson/eshost-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("eshost-cli_repo"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);