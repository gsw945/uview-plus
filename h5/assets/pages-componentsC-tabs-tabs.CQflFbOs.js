import{r as t,o as l,c as e,w as a,i as s,a as i,f as o,t as n,g as c,S as m,E as u}from"./index-C3UXxwfW.js";import{_ as d}from"./up-tabs.EURHET5E.js";import{r}from"./uni-app.es.CqYlZVXb.js";import{_}from"./up-sticky.CZrjePRD.js";import{_ as f}from"./up-gap.QI1TW2Jw.js";import{_ as p}from"./up-icon.BrIVCe5a.js";import{_ as b}from"./up-button.DtY6i3cW.js";import{_ as A}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./up-badge.vIfMmtZx.js";import"./up-loading-icon.DXCjh8Fn.js";const g=A({mixins:[uni.$u.mixin],data:()=>({lineBg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=",list1:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list2:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影",badge:{value:5}},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list3:[{name:"关注"},{name:"推荐"},{name:"电影",disabled:!0},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list4:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list6:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"}],list1Current:1}),onLoad(){},methods:{click(t){console.log("item",t)},nextTab(){this.list1.length<=this.list1Current+1?this.list1Current=0:this.list1Current=this.list1Current+1}}},[["render",function(A,g,k,h,C,v){const x=c,y=r(t("up-tabs"),d),S=s,w=r(t("up-sticky"),_),U=r(t("up-gap"),f),B=r(t("up-icon"),p),j=r(t("up-button"),b),O=m,W=u;return l(),e(S,{class:"u-page"},{default:a((()=>[i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("基础演示")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list1,onClick:v.click,current:3},null,8,["list","onClick"])])),_:1})])),_:1}),i(S,{class:"u-demo-block",style:{"margin-bottom":"0"}},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("粘性布局")])),_:1})])),_:1}),i(w,{bgColor:"#fff"},{default:a((()=>[i(y,{list:C.list1},null,8,["list"])])),_:1}),i(U,{height:"23",bgColor:"#fff"}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("显示徽标")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list2},null,8,["list"])])),_:1})])),_:1}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("禁止滚动")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list6,scrollable:!1},null,8,["list"])])),_:1})])),_:1}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("禁用菜单")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list3},null,8,["list"])])),_:1})])),_:1}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("自定义样式")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list4,lineWidth:"30",lineColor:"#f56c6c",activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","activeStyle","inactiveStyle"])])),_:1})])),_:1}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("滑块设置背景图")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list4,lineWidth:"20",lineHeight:"7",lineColor:`url(${C.lineBg}) 100% 100%`,activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","lineColor","activeStyle","inactiveStyle"])])),_:1})])),_:1}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("自定义内容插槽")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list1},{default:a((t=>[i(x,{class:"u-tabs__wrapper__nav__item__text",style:{color:"red"}},{default:a((()=>{var l;return[o(n((null==(l=t.item)?void 0:l[t.keyName])||"-"),1)]})),_:2},1024)])),_:1},8,["list"])])),_:1})])),_:1}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("右侧自定义插槽")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(y,{list:C.list1,current:C.list1Current,"onUpdate:current":g[1]||(g[1]=t=>C.list1Current=t)},{right:a((()=>[i(S,{style:{"padding-left":"4px"},onClick:g[0]||(g[0]=t=>A.$u.toast("插槽被点击"))},{default:a((()=>[i(B,{name:"list",size:"21",bold:""})])),_:1})])),_:1},8,["list","current"]),i(j,{type:"primary",size:"small",style:{width:"120px"},onClick:v.nextTab,text:"切换下一个"+C.list1Current},null,8,["onClick","text"])])),_:1})])),_:1}),i(S,{class:"u-demo-block"},{default:a((()=>[i(x,{class:"u-demo-block__title"},{default:a((()=>[o("在swiper中使用")])),_:1}),i(S,{class:"u-demo-block__content"},{default:a((()=>[i(W,{class:"swiper"},{default:a((()=>[i(O,{"item-id":"A"},{default:a((()=>[i(y,{list:C.list1},{default:a((t=>[i(x,{class:"u-tabs__wrapper__nav__item__text",style:{color:"red"}},{default:a((()=>{var l;return[o(n((null==(l=t.item)?void 0:l[t.keyName])||"-"),1)]})),_:2},1024)])),_:1},8,["list"])])),_:1}),i(O,{"item-id":"A"},{default:a((()=>[i(y,{list:C.list4,lineWidth:"30",lineColor:"#f56c6c",activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","activeStyle","inactiveStyle"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-d60cd1fe"]]);export{g as default};
