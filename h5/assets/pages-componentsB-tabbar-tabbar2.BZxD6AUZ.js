import{r as e,o as t,c as a,w as o,i as l,a as c,j as i,k as u,e as n}from"./index-66rGf9ia.js";import{_ as s,a as _}from"./u-tabbar.CfHOoYLY.js";import{r as p}from"./uni-app.es.Ba1vQ4ED.js";import{_ as m}from"./u-gap.C_qsiq-d.js";import{_ as r}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-icon.BUvds5AX.js";import"./u-badge.DWcV5eGN.js";import"./u-safe-bottom.BZF16SAl.js";const d=r({data:()=>({value1:0,value2:1,value3:"play-right",value4:0,value5:0,value6:0,value7:3}),onLoad(){},methods:{change5(e){if(1===e)return uni.$u.toast("请您先登录");this.value5=e},change1(e){this.value1=e,console.log("change1",e)},click1(e){console.log("click1",e)}}},[["render",function(r,d,h,g,f,v){const x=u,C=p(e("up-tabbar-item"),s),k=p(e("up-tabbar"),_),b=l,j=n,y=p(e("up-gap"),m);return t(),a(b,{class:"u-page"},{default:o((()=>[c(b,{class:"u-page__item"},{default:o((()=>[c(x,{class:"u-page__item__title"},{default:o((()=>[i("基础功能")])),_:1}),c(k,{value:f.value1,onChange:v.change1,fixed:!1,placeholder:!1,safeAreaInsetBottom:!1},{default:o((()=>[c(C,{text:"首页",icon:"home",onClick:v.click1},null,8,["onClick"]),c(C,{text:"放映厅",icon:"photo",onClick:v.click1},null,8,["onClick"]),c(C,{text:"直播",icon:"play-right",onClick:v.click1},null,8,["onClick"]),c(C,{text:"我的",icon:"account",onClick:v.click1},null,8,["onClick"])])),_:1},8,["value","onChange"])])),_:1}),c(b,{class:"u-page__item"},{default:o((()=>[c(x,{class:"u-page__item__title"},{default:o((()=>[i("显示徽标")])),_:1}),c(k,{value:f.value2,placeholder:!1,onChange:d[0]||(d[0]=e=>f.value2=e),fixed:!1,safeAreaInsetBottom:!1},{default:o((()=>[c(C,{text:"首页",icon:"home",dot:""}),c(C,{text:"放映厅",icon:"photo",badge:"3"}),c(C,{text:"直播",icon:"play-right"}),c(C,{text:"我的",icon:"account"})])),_:1},8,["value"])])),_:1}),c(b,{class:"u-page__item"},{default:o((()=>[c(x,{class:"u-page__item__title"},{default:o((()=>[i("匹配标签的名称")])),_:1}),c(k,{placeholder:!1,value:f.value3,onChange:d[1]||(d[1]=e=>f.value3=e),fixed:!1,safeAreaInsetBottom:!1},{default:o((()=>[c(C,{text:"首页",icon:"home",name:"home"}),c(C,{text:"放映厅",icon:"photo",name:"photo"}),c(C,{text:"直播",icon:"play-right",name:"play-right"}),c(C,{text:"我的",name:"account",icon:"account"})])),_:1},8,["value"])])),_:1}),c(b,{class:"u-page__item"},{default:o((()=>[c(x,{class:"u-page__item__title"},{default:o((()=>[i("自定义图标/颜色")])),_:1}),c(k,{value:f.value4,onChange:d[2]||(d[2]=e=>f.value4=e),fixed:!1,placeholder:!1,activeColor:"#d81e06",safeAreaInsetBottom:!1},{default:o((()=>[c(C,{text:"首页"},{"active-icon":o((()=>[c(j,{class:"u-page__item__slot-icon",src:"https://cdn.uviewui.com/uview/common/bell-selected.png"})])),"inactive-icon":o((()=>[c(j,{class:"u-page__item__slot-icon",src:"https://cdn.uviewui.com/uview/common/bell.png"})])),_:1}),c(C,{text:"放映厅",icon:"photo"}),c(C,{text:"直播",icon:"play-right"}),c(C,{text:"我的",icon:"account"})])),_:1},8,["value"])])),_:1}),c(b,{class:"u-page__item"},{default:o((()=>[c(x,{class:"u-page__item__title"},{default:o((()=>[i("拦截切换事件(点击第二个标签)")])),_:1}),c(k,{value:f.value5,fixed:!1,onChange:v.change5,safeAreaInsetBottom:!1,placeholder:!1},{default:o((()=>[c(C,{text:"首页",icon:"home"}),c(C,{text:"放映厅",icon:"photo"}),c(C,{text:"直播",icon:"play-right"}),c(C,{text:"我的",icon:"account"})])),_:1},8,["value","onChange"])])),_:1}),c(b,{class:"u-page__item"},{default:o((()=>[c(x,{class:"u-page__item__title"},{default:o((()=>[i("去除上边框")])),_:1}),c(k,{value:f.value7,placeholder:!1,border:!1,onChange:d[3]||(d[3]=e=>f.value7=e),fixed:!1,safeAreaInsetBottom:!1},{default:o((()=>[c(C,{text:"首页",icon:"home"}),c(C,{text:"放映厅",icon:"photo"}),c(C,{text:"直播",icon:"play-right"}),c(C,{text:"我的",icon:"account"})])),_:1},8,["value"])])),_:1}),c(b,{class:"u-page__item"},{default:o((()=>[c(x,{class:"u-page__item__title"},{default:o((()=>[i("固定在底部(固定在屏幕最下方)")])),_:1}),c(y,{height:"150"}),c(k,{value:f.value6,onChange:d[4]||(d[4]=e=>f.value6=e),fixed:!0,placeholder:!0,safeAreaInsetBottom:!0},{default:o((()=>[c(C,{text:"首页",icon:"home"}),c(C,{text:"放映厅",icon:"photo"}),c(C,{text:"直播",icon:"play-right"}),c(C,{text:"我的",icon:"account"})])),_:1},8,["value"])])),_:1})])),_:1})}],["__scopeId","data-v-6d8fa5d3"]]);export{d as default};
