import{_ as o}from"./u-navbar.582049f1.js";import{o as e,c as t,w as p,i as l,a,b as i,r as s,F as u,n as r,d as n,e as c}from"./index-4f0c5e1d.js";import{r as m}from"./uni-app.es.fcad82c0.js";import{_ as d}from"./u-gap.7c7ec09c.js";import{_ as v}from"./u-cell.a5a44b23.js";import{_ as h}from"./u-cell-group.ec832c31.js";import{_ as y}from"./u-button.d1698bc7.js";import{_ as w}from"./u-popup.2b84e0ef.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.669c7699.js";import"./mixin.d0c91ebc.js";import"./u-icon.e9ca9d71.js";import"./u-line.0a9c4e0a.js";import"./u-loading-icon.b1b77ee0.js";import"./u-overlay.f6da8b85.js";import"./u-transition.589ae8d1.js";import"./u-safe-bottom.0167a4f2.js";const O=f({data:()=>({show:!1,popupData:{overlay:!0,mode:"bottom",borderRadius:"",closeable:!0,closeOnClickOverlay:!0},list:[{popupData:{overlay:!0,mode:"top",closeOnClickOverlay:!0},title:"顶部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeTop.png"},{popupData:{overlay:!0,mode:"right",closeOnClickOverlay:!0},title:"右侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeRight.png"},{popupData:{overlay:!0,mode:"bottom",closeOnClickOverlay:!0},title:"底部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeBottom.png"},{popupData:{overlay:!0,mode:"left",closeOnClickOverlay:!0},title:"左侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeLeft.png"},{popupData:{overlay:!0,mode:"center",round:10,closeOnClickOverlay:!0},title:"居中弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeCenter.png"},{popupData:{overlay:!0,mode:"bottom",round:10,closeOnClickOverlay:!0},title:"显示圆角",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showRadis.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!1,closeOnClickOverlay:!1},title:"禁止点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/noClose.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!0,closeOnClickOverlay:!0},title:"显示关闭按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png"}]}),methods:{openPopup(o){this.popupData=o,uni.$u.sleep().then((()=>{this.show=!this.show}))},navigateBack(){uni.navigateBack()},open(){},close(){this.show=!1}}},[["render",function(f,O,b,g,C,k){const D=m(n("u-navbar"),o),j=m(n("u-gap"),d),_=c,x=m(n("u-cell"),v),U=m(n("u-cell-group"),h),B=m(n("u-button"),y),R=l,I=m(n("u-popup"),w);return e(),t(R,null,{default:p((()=>[a(D,{title:"弹窗",onLeftClick:k.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),a(j,{height:"20",bgColor:"#fff"}),a(U,null,{default:p((()=>[(e(!0),i(u,null,s(C.list,((o,l)=>(e(),t(x,{titleStyle:{fontWeight:500},onClick:e=>k.openPopup(o.popupData),title:o.title,key:l,isLink:""},{default:p((()=>[a(_,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),a(I,{safeAreaInsetBottom:!0,safeAreaInsetTop:!0,mode:C.popupData.mode,show:C.show,round:C.popupData.round,overlay:C.popupData.overlay,borderRadius:C.popupData.borderRadius,closeable:C.popupData.closeable,closeOnClickOverlay:C.popupData.closeOnClickOverlay,onClose:k.close,onOpen:k.open},{default:p((()=>[a(R,{class:"u-popup-slot",style:r({width:["bottom","top"].includes(C.popupData.mode)?"750rpx":"200px",marginTop:["left","right"].includes(C.popupData.mode)?"480rpx":"0"})},{default:p((()=>[a(B,{type:"success",text:"点我关闭",customStyle:"width: 200rpx",onClick:O[0]||(O[0]=o=>C.show=!C.show)})])),_:1},8,["style"])])),_:1},8,["mode","show","round","overlay","borderRadius","closeable","closeOnClickOverlay","onClose","onOpen"])])),_:1})}],["__scopeId","data-v-77ac2279"]]);export{O as default};
