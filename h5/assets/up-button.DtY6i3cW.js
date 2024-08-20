import{_ as e}from"./up-loading-icon.DXCjh8Fn.js";import{h as t,j as o,m as a,k as i,L as n,p as r,R as s,r as l,o as p,c as u,w as d,b as h,a as g,f as m,t as c,q as b,F as y,s as f,u as S,y as v,g as z,T as x}from"./index-C3UXxwfW.js";import{r as T}from"./uni-app.es.CqYlZVXb.js";import{_ as C}from"./up-icon.BrIVCe5a.js";import{_ as M}from"./_plugin-vue_export-helper.BCo6x5W8.js";const _=M({name:"up-button",mixins:[a,i,t({props:{hairline:{type:Boolean,default:()=>o.button.hairline},type:{type:String,default:()=>o.button.type},size:{type:String,default:()=>o.button.size},shape:{type:String,default:()=>o.button.shape},plain:{type:Boolean,default:()=>o.button.plain},disabled:{type:Boolean,default:()=>o.button.disabled},loading:{type:Boolean,default:()=>o.button.loading},loadingText:{type:[String,Number],default:()=>o.button.loadingText},loadingMode:{type:String,default:()=>o.button.loadingMode},loadingSize:{type:[String,Number],default:()=>o.button.loadingSize},openType:{type:String,default:()=>o.button.openType},formType:{type:String,default:()=>o.button.formType},appParameter:{type:String,default:()=>o.button.appParameter},hoverStopPropagation:{type:Boolean,default:()=>o.button.hoverStopPropagation},lang:{type:String,default:()=>o.button.lang},sessionFrom:{type:String,default:()=>o.button.sessionFrom},sendMessageTitle:{type:String,default:()=>o.button.sendMessageTitle},sendMessagePath:{type:String,default:()=>o.button.sendMessagePath},sendMessageImg:{type:String,default:()=>o.button.sendMessageImg},showMessageCard:{type:Boolean,default:()=>o.button.showMessageCard},dataName:{type:String,default:()=>o.button.dataName},throttleTime:{type:[String,Number],default:()=>o.button.throttleTime},hoverStartTime:{type:[String,Number],default:()=>o.button.hoverStartTime},hoverStayTime:{type:[String,Number],default:()=>o.button.hoverStayTime},text:{type:[String,Number],default:()=>o.button.text},icon:{type:String,default:()=>o.button.icon},iconColor:{type:String,default:()=>o.button.icon},color:{type:String,default:()=>o.button.color}}})],data:()=>({}),computed:{bemClass(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor(){return this.plain?this.color?this.color:n[`up-${this.type}`]:"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor(){let e={};return this.color&&(e.color=this.plain?this.color:"white",this.plain||(e["background-color"]=this.color),-1!==this.color.indexOf("gradient")?(e.borderTopWidth=0,e.borderRightWidth=0,e.borderBottomWidth=0,e.borderLeftWidth=0,this.plain||(e.backgroundImage=this.color)):(e.borderColor=this.color,e.borderWidth="1px",e.borderStyle="solid")),e},nvueTextStyle(){let e={};return"info"===this.type&&(e.color="#323233"),this.color&&(e.color=this.plain?this.color:"white"),e.fontSize=this.textSize+"px",e},textSize(){let e=14,{size:t}=this;return"large"===t&&(e=16),"normal"===t&&(e=14),"small"===t&&(e=12),"mini"===t&&(e=10),e}},emits:["click","getphonenumber","getuserinfo","error","opensetting","launchapp","agreeprivacyauthorization"],methods:{addStyle:r,clickHandler(){this.disabled||this.loading||s((()=>{this.$emit("click")}),this.throttleTime)},getphonenumber(e){this.$emit("getphonenumber",e)},getuserinfo(e){this.$emit("getuserinfo",e)},error(e){this.$emit("error",e)},opensetting(e){this.$emit("opensetting",e)},launchapp(e){this.$emit("launchapp",e)},agreeprivacyauthorization(e){this.$emit("agreeprivacyauthorization",e)}}},[["render",function(t,o,a,i,n,r){const s=T(l("up-loading-icon"),e),M=z,_=T(l("up-icon"),C),k=x;return p(),u(k,{"hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,onGetphonenumber:r.getphonenumber,onGetuserinfo:r.getuserinfo,onError:r.error,onOpensetting:r.opensetting,onLaunchapp:r.launchapp,onAgreeprivacyauthorization:r.agreeprivacyauthorization,"hover-class":t.disabled||t.loading?"":"up-button--active",class:v(["up-button up-reset-button",r.bemClass]),style:b([r.baseColor,r.addStyle(t.customStyle)]),onClick:r.clickHandler},{default:d((()=>[t.loading?(p(),h(y,{key:0},[g(s,{mode:t.loadingMode,size:1.15*t.loadingSize,color:r.loadingColor},null,8,["mode","size","color"]),g(M,{class:"up-button__loading-text",style:b([{fontSize:r.textSize+"px"}])},{default:d((()=>[m(c(t.loadingText||t.text),1)])),_:1},8,["style"])],64)):(p(),h(y,{key:1},[t.icon?(p(),u(_,{key:0,name:t.icon,color:r.iconColorCom,size:1.35*r.textSize,customStyle:{marginRight:"2px"}},null,8,["name","color","size"])):f("",!0),S(t.$slots,"default",{},(()=>[g(M,{class:"up-button__text",style:b([{fontSize:r.textSize+"px"}])},{default:d((()=>[m(c(t.text),1)])),_:1},8,["style"])]),!0)],64))])),_:3},8,["hover-start-time","hover-stay-time","form-type","open-type","app-parameter","hover-stop-propagation","send-message-title","send-message-path","lang","data-name","session-from","send-message-img","show-message-card","onGetphonenumber","onGetuserinfo","onError","onOpensetting","onLaunchapp","onAgreeprivacyauthorization","hover-class","style","onClick","class"])}],["__scopeId","data-v-e436429e"]]);export{_};
