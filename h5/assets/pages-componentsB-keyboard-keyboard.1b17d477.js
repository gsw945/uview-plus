import{_ as o}from"./u-navbar.582049f1.js";import{o as e,c as t,w as a,i,a as s,b as n,r,F as l,d,e as c}from"./index-4f0c5e1d.js";import{r as u}from"./uni-app.es.fcad82c0.js";import{_ as m}from"./u-gap.7c7ec09c.js";import{_ as p}from"./u-cell.a5a44b23.js";import{_ as h}from"./u-cell-group.ec832c31.js";import{_ as k}from"./u-keyboard.bdd4ed5a.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.669c7699.js";import"./mixin.d0c91ebc.js";import"./u-icon.e9ca9d71.js";import"./u-line.0a9c4e0a.js";import"./u-popup.2b84e0ef.js";import"./u-overlay.f6da8b85.js";import"./u-transition.589ae8d1.js";import"./u-safe-bottom.0167a4f2.js";const f=b({data:()=>({input:"",keyData:{mode:"",dotDisabled:!1,random:!1},list:[{title:"车牌号键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/car.png"},{title:"数字键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/number.png"},{title:"身份证键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/IdCard.png"},{title:'隐藏键盘"."符号',iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/dot.png"},{title:"打乱键盘按键的顺序",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/order.png"}],show:!1}),methods:{navigateBack(){uni.navigateBack()},openKeyboard(o){this.keyData={mode:"",dotDisabled:!1,random:!1},0==o?this.keyData.mode="":1==o?this.keyData.mode="number":2==o?this.keyData.mode="card":3==o?(this.keyData.mode="number",this.keyData.dotDisabled=!0):4==o&&(this.keyData.mode="number",this.keyData.random=!0),this.input="",this.show=!0},change(o){this.input+=o},close(){this.show=!1},cancel(){this.show=!1},confirm(){this.show=!1},backspace(){this.input=this.input.slice(0,-1)}}},[["render",function(b,f,y,g,w,v){const D=u(d("u-navbar"),o),j=u(d("u-gap"),m),C=c,_=u(d("u-cell"),p),x=u(d("u-cell-group"),h),B=u(d("u-keyboard"),k),U=i;return e(),t(U,{class:"u-page"},{default:a((()=>[s(D,{title:"键盘",onLeftClick:v.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),s(j,{height:"20",bgColor:"#fff"}),s(x,null,{default:a((()=>[(e(!0),n(l,null,r(w.list,((o,i)=>(e(),t(_,{titleStyle:{fontWeight:500},onClick:o=>v.openKeyboard(i),title:o.title,key:i,isLink:""},{default:a((()=>[s(C,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),s(B,{mode:w.keyData.mode,dotDisabled:w.keyData.dotDisabled,random:w.keyData.random,show:w.show,onClose:v.close,onCancel:v.cancel,onConfirm:v.confirm,onChange:v.change,onBackspace:v.backspace},null,8,["mode","dotDisabled","random","show","onClose","onCancel","onConfirm","onChange","onBackspace"])])),_:1})}],["__scopeId","data-v-89fd77ce"]]);export{f as default};
