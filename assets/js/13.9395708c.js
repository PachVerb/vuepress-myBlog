(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{482:function(t,v,a){t.exports=a.p+"assets/img/01wek.420e574c.jpg"},531:function(t,v,a){"use strict";a.r(v);var _=a(25),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("img",{attrs:{src:a(482),alt:"wek"}})]),t._v(" "),_("h2",{attrs:{id:"历史"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#历史"}},[t._v("#")]),t._v(" 历史")]),t._v(" "),_("blockquote",[_("p",[t._v("每一个linux发行版都有对应的软件包管理器，用于安装，更新，查看，搜索和删除软件包。由于个人管理的服务器版本是centos版， 本期演示centos8 平台的包管理器, 并对比rpm包管理。\n在介绍yum包管理器之前，现简单说说rpm。这两者多少存在一些联系")])]),t._v(" "),_("h2",{attrs:{id:"rpm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rpm"}},[t._v("#")]),t._v(" RPM")]),t._v(" "),_("blockquote",[_("p",[t._v("rpm 是基于Red Hat系统所设计的包管理工具, 目前基于红帽系统的发行版有. 允许用于在基于红帽的linux平台，安装，更新，查询，删除和验证软件包")])]),t._v(" "),_("ul",[_("li",[t._v("RHEL(红帽企业版)")]),t._v(" "),_("li",[t._v("Centos")]),t._v(" "),_("li",[t._v("Fedroa")]),t._v(" "),_("li",[t._v("openSUSE(基于 suse Enterprise Linux)")]),t._v(" "),_("li",[t._v("Oracle Linux")]),t._v(" "),_("li",[t._v("Mageia")])]),t._v(" "),_("h3",{attrs:{id:"文件格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件格式"}},[t._v("#")]),t._v(" 文件格式")]),t._v(" "),_("p",[t._v("RPM 文件的扩展名为 .rpm。RPM 包由一个存档文件组成，其中包含了一个特定包的库和依赖关系，这些库和依赖关系与系统上安装的其他包不冲突。")]),t._v(" "),_("h3",{attrs:{id:"劣势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[t._v("#")]),t._v(" 劣势")]),t._v(" "),_("p",[t._v("依赖解析和包更新（全系统更新/升级）方面，RPM 包管理器有一个突出的限制. 通常，通过rpm安装一组包时，rpm会告诉依赖列表，对于软件包所需的依赖，虽然rpm能够列出包所需要依赖，但是无法安装处理， 需要手动下载安装. 为解决linux安装包的时候依赖问题， 由此诞生了比较优秀的前端软件包管里工具，其中yum就是接下来需要介绍的。")]),t._v(" "),_("h3",{attrs:{id:"yum"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[t._v("#")]),t._v(" YUM")]),t._v(" "),_("blockquote",[_("p",[t._v("Yum 是一个 Linux 操作系统上的自由开源的命令行包管理程序，它使用 RPM 包管理器。Yum 是一个 RPM 的前端工具，可以自动解决软件包的依赖关系。它可以从发行版官方仓库和其他第三方仓库中安装 RPM 软件包。")])]),t._v(" "),_("p",[t._v("Yum 允许你在系统中安装、更新、搜索和删除软件包。如果你想让你的系统保持更新，你可以通过 yum-cron 启用自动更新。 此外，如果你需要的话，它还允许你在 yum update 中排除一个或多个软件包。")]),t._v(" "),_("p",[t._v("yum已默认安装，不需要另外安装.")]),t._v(" "),_("h3",{attrs:{id:"rpm-、-yum对照"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rpm-、-yum对照"}},[t._v("#")]),t._v(" RPM 、 YUM对照")]),t._v(" "),_("table",[_("tr",[_("th",[t._v("编号")]),t._v(" "),_("th",[t._v("RPM")]),t._v(" "),_("th",[t._v("YUM")])]),_("tr"),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("红帽在 1997 年引入了 RPM")]),t._v(" "),_("td",[t._v("Yellowdog UPdater（YUP）开发于 1999-2001 年，YUM 于 2003 年取代了原来的 YUP 工具")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("RPM 代表 RPM Package manager（原名 Red Hat package manager）")]),t._v(" "),_("td",[t._v("YUM 代表 Yellowdog Updater Modified")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("RPM 文件的命名规则如下，httpd-2.4.6-92.el7.x86_64.rpm：httpd - 实际的包名；2.4.6 - 包发布版本号；92 - 包发布子版本号；el7 - Red Hat 版本；x86_64 - 硬件架构；rpm - 文件扩展名")]),t._v(" "),_("td",[t._v("后台使用 rpm 数据库")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("不解析依赖关系，你必须手动安装依赖")]),t._v(" "),_("td",[t._v("可以自动解析依赖关系并同时安装它们（任何包都会和它的依赖关系一起安装）")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("允许你同时安装多个版本的软件包")]),t._v(" "),_("td",[t._v("不允许，并显示该软件包已经安装")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("当使用 RPM 命令安装一个软件包时，你必须提供 .rpm 软件包的确切位置")]),t._v(" "),_("td",[t._v("你可以安装仓库中的任何软件包，而你只需要知道软件包的名称就可以了")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("\tRPM 不依赖于 YUM")]),t._v(" "),_("td",[t._v("它是一个前端工具，在后台使用 RPM 包管理器来管理包")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("RPM 在安装包的管理方面比较难")]),t._v(" "),_("td",[t._v("YUM 是最简单的管理 RPM 包的方法")])]),t._v(" "),_("tr",[_("td",[t._v("9")]),t._v(" "),_("td",[t._v("RPM 不能让你将整个系统升级到最新的版本")]),t._v(" "),_("td",[t._v("YUM 可以让你将系统升级到最新的版本（例如 7.0 到 7.x 的小版本升级）")])]),t._v(" "),_("tr",[_("td",[t._v("10")]),t._v(" "),_("td",[t._v("RPM 不能让你自动更新/升级安装在系统上的软件包")]),t._v(" "),_("td",[t._v("YUM 可以让你自动更新/升级系统上的更新")])]),t._v(" "),_("tr",[_("td",[t._v("11")]),t._v(" "),_("td",[t._v("不使用在线仓库来执行任何操作")]),t._v(" "),_("td",[t._v("完全依赖在线仓库来完成所有的工作")])]),t._v(" "),_("tr",[_("td",[t._v("12")]),t._v(" "),_("td",[t._v("RPM 是一种包格式，它也是一个底层的包管理器，只做基本的事情")]),t._v(" "),_("td",[t._v("这是一个上层的包管理器前端，它可以完成你所需要的一切工作")])]),t._v(" "),_("table",[_("h2",{attrs:{id:"yum-常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#yum-常用命令"}},[t._v("#")]),t._v(" YUM 常用命令")]),t._v(" "),_("h3",{attrs:{id:"安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),_("p",[t._v("options")]),t._v(" "),_("ul",[_("li",[t._v("package-name: 需要安装的包名")]),t._v(" "),_("li",[t._v("-y(可选): 命令行参数，忽略系统确认，直接安装.")])]),t._v(" "),_("p",[_("code",[t._v("yum install package-name")])]),t._v(" "),_("h3",{attrs:{id:"卸载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),_("blockquote",[_("p",[t._v("安全卸载包，包括包存在的依赖.")])]),t._v(" "),_("p",[t._v("options")]),t._v(" "),_("ul",[_("li",[t._v("package-name: 需要安装的包名")]),t._v(" "),_("li",[t._v("-y(可选): 命令行参数，忽略系统确认，直接安装.")])]),t._v(" "),_("p",[_("code",[t._v("yum remove package-name")])]),t._v(" "),_("h3",{attrs:{id:"更新"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),_("blockquote",[_("p",[t._v("假设您的MySQL软件包版本已过时，并且想要将其更新为最新的稳定版本, 并且会自动解决更新过后的依赖问题.")])]),t._v(" "),_("h3",{attrs:{id:"列出软件包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列出软件包"}},[t._v("#")]),t._v(" 列出软件包")]),t._v(" "),_("blockquote",[_("p",[t._v("搜索可安装的包，为使搜索更加精确，建议加上 包的版本号")])]),t._v(" "),_("p",[_("code",[t._v("yum list packageName[version]")])]),t._v(" "),_("p",[t._v("对于不确定包名，可以指定关键字搜索匹配的包名")]),t._v(" "),_("h3",{attrs:{id:"搜索包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#搜索包"}},[t._v("#")]),t._v(" 搜索包")]),t._v(" "),_("p",[_("code",[t._v("yum search packageName")])]),t._v(" "),_("h3",{attrs:{id:"获取包信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取包信息"}},[t._v("#")]),t._v(" 获取包信息")]),t._v(" "),_("blockquote",[_("p",[t._v("假如安装包之前需要确定包信息\n"),_("code",[t._v("yum info packageName")])])]),t._v(" "),_("h3",{attrs:{id:"list-可用包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#list-可用包"}},[t._v("#")]),t._v(" list 可用包")]),t._v(" "),_("p",[_("code",[t._v("yum list | less")])]),t._v(" "),_("h3",{attrs:{id:"list-已安装包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#list-已安装包"}},[t._v("#")]),t._v(" list 已安装包")]),t._v(" "),_("p",[_("code",[t._v("yum list installed | less")])]),t._v(" "),_("h3",{attrs:{id:"特定文件所属软件包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特定文件所属软件包"}},[t._v("#")]),t._v(" 特定文件所属软件包")]),t._v(" "),_("p",[_("code",[t._v("yum provides (path)file")])]),t._v(" "),_("p",[t._v("eg： 查找 /etc/httpd/conf/httpd.conf的软件包的名称")]),t._v(" "),_("p",[_("code",[t._v("yum provides /etc/httpd/conf/httpd.conf")])]),t._v(" "),_("h3",{attrs:{id:"检查可用更新"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检查可用更新"}},[t._v("#")]),t._v(" 检查可用更新")]),t._v(" "),_("blockquote",[_("p",[t._v("查找系统已安装包可更新包")])]),t._v(" "),_("p",[_("code",[t._v("yum check-update")])]),t._v(" "),_("h3",{attrs:{id:"yum更新系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#yum更新系统"}},[t._v("#")]),t._v(" yum更新系统")]),t._v(" "),_("blockquote",[_("p",[t._v("使系统保持所有安全性和二进制程序包更新的最新信息，请运行以下命令。它将为您的系统安装所有最新的补丁程序和安全更新。")])]),t._v(" "),_("p",[_("code",[t._v("yum update")])]),t._v(" "),_("h3",{attrs:{id:"列出所有可用的软件包组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列出所有可用的软件包组"}},[t._v("#")]),t._v(" 列出所有可用的软件包组")]),t._v(" "),_("blockquote",[_("p",[t._v("在Linux中，许多软件包捆绑到特定的组。您可以安装将安装属于该组的所有相关软件包的特定组，而不是使用yum安装单个软件包")])]),t._v(" "),_("p",[_("code",[t._v("yum grouplist")])]),t._v(" "),_("h3",{attrs:{id:"安装组软件包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装组软件包"}},[t._v("#")]),t._v(" 安装组软件包")]),t._v(" "),_("blockquote",[_("p",[t._v("安装特定的软件包组，我们使用option作为groupinstall\n"),_("code",[t._v("yum groupinstall group-packageName")])])]),t._v(" "),_("h3",{attrs:{id:"更新组软件包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更新组软件包"}},[t._v("#")]),t._v(" 更新组软件包")]),t._v(" "),_("blockquote",[_("p",[t._v("更新任何现有的已安装组软件包\n"),_("code",[t._v("yum groupupdate groupName")])])]),t._v(" "),_("h3",{attrs:{id:"删除组包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除组包"}},[t._v("#")]),t._v(" 删除组包")]),t._v(" "),_("blockquote",[_("p",[t._v("从系统中删除或删除任何现有的已安装组\n"),_("code",[t._v("yum groupremove groupname")])])]),t._v(" "),_("h3",{attrs:{id:"列出启用的yum存储库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列出启用的yum存储库"}},[t._v("#")]),t._v(" 列出启用的Yum存储库")]),t._v(" "),_("blockquote",[_("p",[t._v("列出系统中所有已启用的Yum存储库\n"),_("code",[t._v("yum repolist")])])]),t._v(" "),_("h3",{attrs:{id:"列出所有已启用和已禁用的yum存储库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列出所有已启用和已禁用的yum存储库"}},[t._v("#")]),t._v(" 列出所有已启用和已禁用的Yum存储库")]),t._v(" "),_("p",[_("code",[t._v("yum repolist all")])]),t._v(" "),_("h3",{attrs:{id:"从特定存储库安装软件包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从特定存储库安装软件包"}},[t._v("#")]),t._v(" 从特定存储库安装软件包")]),t._v(" "),_("blockquote",[_("p",[t._v("要从启用或禁用的特定存储库中安装特定的软件包，必须在yum命令中使用–enablerepo选项\n"),_("code",[t._v("yum enablerepo=repostoryName install packgeName")])])]),t._v(" "),_("h3",{attrs:{id:"yum-cli"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#yum-cli"}},[t._v("#")]),t._v(" yum CLI")]),t._v(" "),_("blockquote",[_("p",[t._v("Yum实用程序提供了一个定制外壳程序，您可以在其中执行多个命令。\n"),_("code",[t._v("yum shell")])])]),t._v(" "),_("h3",{attrs:{id:"清除缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#清除缓存"}},[t._v("#")]),t._v(" 清除缓存")]),t._v(" "),_("blockquote",[_("p",[t._v("默认情况下, yum将所有启用了存储库的软件包数据保存在每个子目录的/ var / cache / yum /中，以从启用的存储库中清除所有缓存的文件，您需要定期运行以下命令以清理所有缓存并确保没有多余的空间正在使用。我们不想提供以下命令的输出，因为我们希望保持高速缓存的数据不变。")])]),t._v(" "),_("p",[_("code",[t._v("yum clean all")])]),t._v(" "),_("h3",{attrs:{id:"查看yum历史"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看yum历史"}},[t._v("#")]),t._v(" 查看yum历史")]),t._v(" "),_("blockquote",[_("p",[t._v("要查看yum命令的所有过去事务，只需使用以下命令。\n"),_("code",[t._v("yum history")])])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);