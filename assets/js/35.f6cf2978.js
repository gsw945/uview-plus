(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{314:function(t,o,e){},325:function(t,o,e){"use strict";e(314)},415:function(t,o,e){"use strict";e.r(o);var s=e(315),a=e(303),i={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:a.default},data:()=>({apiShow:""}),props:["items"],created(){if("undefined"!=typeof window)switch(this.apiShow=localStorage.getItem("apiShow")?localStorage.getItem("apiShow"):"composition",console.log(this.apiShow,"apiShow"),this.apiShow){case"options":document.querySelector("#app").classList.remove("show-composition"),document.querySelector("#app").classList.add("show-options");break;case"composition":default:document.querySelector("#app").classList.remove("show-options"),document.querySelector("#app").classList.add("show-composition")}},methods:{apiChange(t){if("undefined"!=typeof window)switch(localStorage.setItem("apiShow",t),this.apiShow){case"options":document.querySelector("#app").classList.remove("show-composition"),document.querySelector("#app").classList.add("show-options");break;case"composition":default:document.querySelector("#app").classList.remove("show-options"),document.querySelector("#app").classList.add("show-composition")}}}},c=(e(325),e(6)),n=Object(c.a)(i,(function(){var t=this,o=t._self._c;return o("div",[o("aside",{staticClass:"sidebar",style:{marginTop:t.showV2Tips?"2.3rem":0}},[o("a",{staticClass:"jump-linker",attrs:{target:"_blank",href:"https://u.tools/?c=acr2js9sso"}},[o("img",{attrs:{src:t.$withBase("/customer/utools.png")}})]),t._v(" "),o("div",{staticClass:"jump-linker",attrs:{target:"_blank"}},[o("img",{attrs:{src:t.$withBase("/customer/contact1.png")}})]),t._v(" "),o("div",{staticStyle:{"background-color":"#f9f9f9",padding:"15px 10px","margin-top":"15px",width:"170px","border-radius":"6px"}},[o("el-switch",{attrs:{"active-value":"composition","inactive-value":"options","active-text":"组合式","inactive-text":"选项式"},on:{change:t.apiChange},model:{value:t.apiShow,callback:function(o){t.apiShow=o},expression:"apiShow"}})],1),t._v(" "),o("NavLinks"),t._v(" "),t._t("top"),t._v(" "),o("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)])}),[],!1,null,null,null);o.default=n.exports}}]);