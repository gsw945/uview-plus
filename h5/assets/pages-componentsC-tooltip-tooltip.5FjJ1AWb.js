import{h as t,j as o,m as e,k as l,A as i,I as s,l as a,v as p,p as n,x as r,a4 as d,r as u,o as c,c as _,w as h,a as f,D as b,q as x,f as y,t as m,s as w,b as g,d as k,F as I,g as C,i as S}from"./index-C3UXxwfW.js";import{_ as T}from"./up-overlay.CoCKb7JO.js";import{r as v}from"./uni-app.es.CqYlZVXb.js";import{_ as j}from"./up-line.BBfW2jaO.js";import{_ as z}from"./up-transition.CkVV8kmf.js";import{_ as H}from"./_plugin-vue_export-helper.BCo6x5W8.js";const R=H({name:"up-tooltip",mixins:[e,l,t({props:{text:{type:[String,Number],default:()=>o.tooltip.text},copyText:{type:[String,Number],default:()=>o.tooltip.copyText},size:{type:[String,Number],default:()=>o.tooltip.size},color:{type:String,default:()=>o.tooltip.color},bgColor:{type:String,default:()=>o.tooltip.bgColor},direction:{type:String,default:()=>o.tooltip.direction},zIndex:{type:[String,Number],default:()=>o.tooltip.zIndex},showCopy:{type:Boolean,default:()=>o.tooltip.showCopy},buttons:{type:Array,default:()=>o.tooltip.buttons},overlay:{type:Boolean,default:()=>o.tooltip.overlay},showToast:{type:Boolean,default:()=>o.tooltip.showToast}}})],data:()=>({showTooltip:!0,textId:i(),tooltipId:i(),tooltipTop:-1e4,tooltipInfo:{width:0,left:0},textInfo:{width:0,left:0},indicatorStyle:{},screenGap:12,indicatorWidth:14}),watch:{propsChange(){this.getElRect()}},computed:{propsChange(){return[this.text,this.buttons]},tooltipStyle(){const t={transform:`translateY(${"top"===this.direction?"-100%":"100%"})`},o=s();if(this.tooltipInfo.width/2>this.textInfo.left+this.textInfo.width/2-this.screenGap)this.indicatorStyle={},t.left=`-${a(this.textInfo.left-this.screenGap)}`,this.indicatorStyle.left=a(this.textInfo.width/2-p(t.left)-this.indicatorWidth/2);else if(this.tooltipInfo.width/2>o.windowWidth-this.textInfo.right+this.textInfo.width/2-this.screenGap)this.indicatorStyle={},t.right=`-${a(o.windowWidth-this.textInfo.right-this.screenGap)}`,this.indicatorStyle.right=a(this.textInfo.width/2-p(t.right)-this.indicatorWidth/2);else{const o=Math.abs(this.textInfo.width/2-this.tooltipInfo.width/2);t.left=this.textInfo.width>this.tooltipInfo.width?a(o):-a(o),this.indicatorStyle={}}return"top"===this.direction?(t.marginTop="-10px",this.indicatorStyle.bottom="-4px"):(t.marginBottom="-10px",this.indicatorStyle.top="-4px"),t}},mounted(){this.init()},emits:["click"],methods:{addStyle:n,addUnit:a,init(){this.getElRect()},async longpressHandler(){this.tooltipTop=0,this.showTooltip=!0},overlayClickHandler(){this.showTooltip=!1},btnClickHandler(t){this.showTooltip=!1,this.$emit("click",this.showCopy?t+1:t)},queryRect(t){return new Promise((o=>{this.$uGetRect(`#${t}`).then((t=>{o(t)}))}))},getElRect(){this.showTooltip=!0,this.tooltipTop=-1e4,r(500).then((()=>{this.queryRect(this.tooltipId).then((t=>{this.tooltipInfo=t,this.showTooltip=!1})),this.queryRect(this.textId).then((t=>{this.textInfo=t}))}))},setClipboardData(){this.showTooltip=!1,this.$emit("click",0),uni.setClipboardData({data:this.copyText||this.text,success:()=>{this.showToast&&d("复制成功")},fail:()=>{this.showToast&&d("复制失败")},complete:()=>{this.showTooltip=!1}})}}},[["render",function(t,o,e,l,i,s){const a=v(u("up-overlay"),T),p=C,n=S,r=v(u("up-line"),j),d=v(u("up-transition"),z);return c(),_(n,{class:"up-tooltip",style:x([s.addStyle(t.customStyle)])},{default:h((()=>[f(a,{show:i.showTooltip&&-1e4!==i.tooltipTop&&t.overlay,customStyle:"backgroundColor: rgba(0, 0, 0, 0)",onClick:s.overlayClickHandler},null,8,["show","onClick"]),f(n,{class:"up-tooltip__wrapper"},{default:h((()=>[f(p,{class:"up-tooltip__wrapper__text",id:i.textId,ref:i.textId,userSelect:!1,selectable:!1,onLongpress:b(s.longpressHandler,["stop"]),style:x({color:t.color,backgroundColor:t.bgColor&&i.showTooltip&&-1e4!==i.tooltipTop?t.bgColor:"transparent"})},{default:h((()=>[y(m(t.text),1)])),_:1},8,["id","onLongpress","style"]),f(d,{mode:"fade",show:i.showTooltip,duration:"300",customStyle:{position:"absolute",top:s.addUnit(i.tooltipTop),zIndex:t.zIndex,...s.tooltipStyle}},{default:h((()=>[f(n,{class:"up-tooltip__wrapper__popup",id:i.tooltipId,ref:i.tooltipId},{default:h((()=>[t.showCopy||t.buttons.length?(c(),_(n,{key:0,class:"up-tooltip__wrapper__popup__indicator","hover-class":"up-tooltip__wrapper__popup__indicator--hover",style:x([i.indicatorStyle,{width:s.addUnit(i.indicatorWidth),height:s.addUnit(i.indicatorWidth)}])},null,8,["style"])):w("",!0),f(n,{class:"up-tooltip__wrapper__popup__list"},{default:h((()=>[t.showCopy?(c(),_(n,{key:0,class:"up-tooltip__wrapper__popup__list__btn","hover-class":"up-tooltip__wrapper__popup__list__btn--hover",onClick:s.setClipboardData},{default:h((()=>[f(p,{class:"up-tooltip__wrapper__popup__list__btn__text"},{default:h((()=>[y("复制")])),_:1})])),_:1},8,["onClick"])):w("",!0),t.showCopy&&t.buttons.length>0?(c(),_(r,{key:1,direction:"column",color:"#8d8e90",length:"18"})):w("",!0),(c(!0),g(I,null,k(t.buttons,((o,e)=>(c(),g(I,{key:e},[f(n,{class:"up-tooltip__wrapper__popup__list__btn","hover-class":"up-tooltip__wrapper__popup__list__btn--hover"},{default:h((()=>[f(p,{class:"up-tooltip__wrapper__popup__list__btn__text",onClick:t=>s.btnClickHandler(e)},{default:h((()=>[y(m(o),1)])),_:2},1032,["onClick"])])),_:2},1024),e<t.buttons.length-1?(c(),_(r,{key:0,direction:"column",color:"#8d8e90",length:"18"})):w("",!0)],64)))),128))])),_:1})])),_:1},8,["id"])])),_:1},8,["show","customStyle"])])),_:1})])),_:1},8,["style"])}],["__scopeId","data-v-0b1ee914"]]);const W=H({data:()=>({text1:"长按文本，上方提示",text2:"长按文本，下方提示",text3:"显示多个扩展按钮",text4:"自动调整气泡位置",text5:"长按文本，显示背景色",buttons1:["扩展"],buttons2:["扩展","搜索","翻译"],buttons3:["扩展","搜索","翻译"]}),onLoad(){},methods:{click(t){console.log("index",t)}}},[["render",function(t,o,e,l,i,s){const a=C,p=v(u("up-tooltip"),R),n=S;return c(),_(n,{class:"u-page"},{default:h((()=>[f(n,{class:"u-demo-block"},{default:h((()=>[f(a,{class:"u-demo-block__title"},{default:h((()=>[y("基础使用")])),_:1}),f(n,{class:"u-demo-block__content"},{default:h((()=>[f(p,{text:i.text1,overlay:""},null,8,["text"])])),_:1})])),_:1}),f(n,{class:"u-demo-block"},{default:h((()=>[f(a,{class:"u-demo-block__title"},{default:h((()=>[y("下方显示")])),_:1}),f(n,{class:"u-demo-block__content",style:{"padding-bottom":"30px"}},{default:h((()=>[f(p,{text:i.text2,direction:"bottom"},null,8,["text"])])),_:1})])),_:1}),f(n,{class:"u-demo-block"},{default:h((()=>[f(a,{class:"u-demo-block__title"},{default:h((()=>[y("扩展按钮")])),_:1}),f(n,{class:"u-demo-block__content"},{default:h((()=>[f(p,{text:i.text3,buttons:i.buttons1,onClick:s.click},null,8,["text","buttons","onClick"])])),_:1})])),_:1}),f(n,{class:"u-demo-block"},{default:h((()=>[f(a,{class:"u-demo-block__title"},{default:h((()=>[y("自动调整位置")])),_:1}),f(n,{class:"u-demo-block__content"},{default:h((()=>[f(p,{text:i.text4,buttons:i.buttons2},null,8,["text","buttons"])])),_:1})])),_:1}),f(n,{class:"u-demo-block"},{default:h((()=>[f(a,{class:"u-demo-block__title"},{default:h((()=>[y("高亮选中文本背景色")])),_:1}),f(n,{class:"u-demo-block__content"},{default:h((()=>[f(p,{text:i.text5,buttons:i.buttons3,bgColor:"#e3e4e6"},null,8,["text","buttons"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-0b7ee874"]]);export{W as default};
