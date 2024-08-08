(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{630:function(e,v,_){"use strict";_.r(v);var n=_(6),r=Object(n.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"设计理念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计理念"}},[e._v("#")]),e._v(" 设计理念")]),e._v(" "),v("h4",{attrs:{id:"导航栏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导航栏"}},[e._v("#")]),e._v(" 导航栏")]),e._v(" "),v("p",[e._v("uniapp可以通过配置"),v("code",[e._v("pages.json")]),e._v("生成原生元素的导航栏，简要说明如下：")]),e._v(" "),v("ul",[v("li",[e._v("优点是可以快速渲染，配置便捷，还可以带入一部分原生内容(针对App Store)")]),e._v(" "),v("li",[e._v("缺点是配置不够灵活，遮罩无法覆盖导航栏等")])]),e._v(" "),v("p",[e._v("建议：")]),e._v(" "),v("ul",[v("li",[e._v("如果开发者使用nvue，可以直接自定义导航栏，无需使用uniapp自带的")]),e._v(" "),v("li",[e._v("如果是普通的vue页面，直接使用uniapp自带导航栏。如果自带的不能满足，条件允许就用"),v("code",[e._v("subNVue")]),e._v("绘制，否则就用普通元素绘制")])]),e._v(" "),v("p",[e._v("说明：uni官方有关于导航栏的详细说明，请参见"),v("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=customnav",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义导航栏"),v("OutboundLink")],1)]),e._v(" "),v("h4",{attrs:{id:"关于nvue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于nvue"}},[e._v("#")]),e._v(" 关于nvue")]),e._v(" "),v("p",[e._v("nvue源自于uniapp引入的阿里weex开源原生渲染引擎，单weex来说，是不推荐使用的，因为它没有周边的生态和第三方的功能。"),v("br"),e._v("\nuniapp引入weex之后，一直在整合，但也没有对weex进行定制开发，在APP端某些需要性能相关的可以使用nvue，以下是我们对nvue的一些见解：")]),e._v(" "),v("ul",[v("li",[e._v("nvue具有媲美"),v("code",[e._v("react native")]),e._v("的性能，uniapp一直在打通vue和nvue的壁垒")]),e._v(" "),v("li",[e._v("nvue页面中还不能像写vue一样便利，比如对样式的限制，api还不能和vue完全互通等")])]),e._v(" "),v("p",[e._v("建议：uniapp一直在强化vue，重心不在nvue，如果不是特别复杂的应用，可以直接使用vue开发，应用的首页(V3版本)使用"),v("code",[e._v("nvue")]),e._v("，渲染的速度会有显著的提升，\n如果有需要进一步了解，请参见"),v("a",{attrs:{href:"https://uniapp.dcloud.io/use-weex?id=nvue%E5%BC%80%E5%8F%91%E4%B8%8Evue%E5%BC%80%E5%8F%91%E7%9A%84%E5%B8%B8%E8%A7%81%E5%8C%BA%E5%88%AB",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvue开发与vue开发的常见区别"),v("OutboundLink")],1)]),e._v(" "),v("h4",{attrs:{id:"关于单位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于单位"}},[e._v("#")]),e._v(" 关于单位")]),e._v(" "),v("p",[e._v("我们在web中，常用的是"),v("code",[e._v("px")]),e._v("，"),v("code",[e._v("rem")]),e._v("等单位，"),v("code",[e._v("rem")]),e._v("在uniapp中不推荐使用，我们分别做如下阐述：")]),e._v(" "),v("p",[e._v("web中：\n可以使用"),v("code",[e._v("px")]),e._v("，它属于静态单位，它的最终呈现尺寸不会和屏幕尺寸有关系")]),e._v(" "),v("p",[e._v("uniapp中(vue和nvue)："),v("br"),e._v(" "),v("code",[e._v("px")]),e._v("属于静态单位，uni中还有"),v("code",[e._v("upx")]),e._v("和"),v("code",[e._v("rpx")]),e._v("单位，"),v("code",[e._v("upx")]),e._v("为uniapp成立之初的动态单位，后来各家小程序跟随微信小程序，都使用\n"),v("code",[e._v("rpx")]),e._v("单位，使它成为了既定的事实标准，uniapp也就提倡并官宣使用"),v("code",[e._v("rpx")]),e._v("单位，但是"),v("code",[e._v("upx")]),e._v("也一样能使用，和"),v("code",[e._v("rpx")]),e._v("效果相同。"),v("br"),e._v("\n另外：uniapp，vh和vw也完全可以使用的，一般我们需要让某个元素高度铺满整个屏幕时，可以设置高度为"),v("code",[e._v("100vh")]),e._v("。")]),e._v(" "),v("p",[e._v("weex中：\n这里说的是阿里的weex，而不是uniapp改良后的nvue版本中的weex，它的"),v("code",[e._v("px")]),e._v("单位和uniapp中的"),v("code",[e._v("rpx")]),e._v("或者"),v("code",[e._v("upx")]),e._v("是一样的，也属于\n动态单位，它自创了个"),v("code",[e._v("wx")]),e._v("单位，和web中的"),v("code",[e._v("px")]),e._v("一样，属于静态单位。"),v("br"),e._v("\n说明：uniapp的nvue版本中，虽然也是引入weex，但是改良后，没有了"),v("code",[e._v("wx")]),e._v("，"),v("code",[e._v("nvue")]),e._v("的"),v("code",[e._v("rpx")]),e._v("("),v("code",[e._v("upx")]),e._v(")与"),v("code",[e._v("px")]),e._v("和uniapp的vue版本单位效果一致。")]),e._v(" "),v("p",[e._v("建议：开发中，只需谨记两个单位，"),v("code",[e._v("px")]),e._v("和"),v("code",[e._v("rpx")]),e._v("，一般情况下，我们推荐字体和宽高等，都使用"),v("code",[e._v("rpx")]),e._v("单位，如果真的需要固定尺寸，就是用"),v("code",[e._v("px")]),e._v("。\n如果关于各单位和他们的由来历史，还需要进一步了解，可以参见"),v("a",{attrs:{href:"https://uniapp.dcloud.io/frame?id=%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D",target:"_blank",rel:"noopener noreferrer"}},[e._v("尺寸单位"),v("OutboundLink")],1)]),e._v(" "),v("h4",{attrs:{id:"布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[e._v("#")]),e._v(" 布局")]),e._v(" "),v("p",[e._v("为兼容多端运行，我们建议开发者使用"),v("code",[e._v("flex")]),e._v("，不要使用"),v("code",[e._v("float")]),e._v("布局。移动端使用"),v("code",[e._v("flex")]),e._v("是没有顾虑的，而"),v("code",[e._v("flex")]),e._v("布局，可以达到事半功倍的效果。"),v("br"),e._v("\n如果不熟悉"),v("code",[e._v("flex")]),e._v("，可以参考"),v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰的flex教程"),v("OutboundLink")],1)]),e._v(" "),v("h4",{attrs:{id:"简要介绍vue-use的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简要介绍vue-use的原理"}},[e._v("#")]),e._v(" 简要介绍Vue.use的原理")]),e._v(" "),v("p",[e._v("uview-plus的引用，用到了"),v("code",[e._v("Vue.use")]),e._v("的，我们想借此机会，向您解释一下"),v("code",[e._v("Vue.use")]),e._v("的原理，详见"),v("RouterLink",{attrs:{to:"/components/vueuse.html"}},[e._v("简要介绍Vue.use的原理")])],1)])}),[],!1,null,null,null);v.default=r.exports}}]);