import{h as e,j as t,M as s,U as n,V as a,W as l,m as o,k as i,l as r,n as p,p as u,r as c,o as d,c as f,w as y,y as m,q as h,f as g,s as x,a as S,t as _,g as b,i as k,T as v}from"./index-C3UXxwfW.js";import{_ as w}from"./up-icon.BrIVCe5a.js";import{r as N}from"./uni-app.es.CqYlZVXb.js";import{_ as I}from"./up-link.MfNNE1vA.js";import{_ as W}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=e({props:{type:{type:String,default:()=>t.text.type},show:{type:Boolean,default:()=>t.text.show},text:{type:[String,Number],default:()=>t.text.text},prefixIcon:{type:String,default:()=>t.text.prefixIcon},suffixIcon:{type:String,default:()=>t.text.suffixIcon},mode:{type:String,default:()=>t.text.mode},href:{type:String,default:()=>t.text.href},format:{type:[String,Function],default:()=>t.text.format},call:{type:Boolean,default:()=>t.text.call},openType:{type:String,default:()=>t.text.openType},bold:{type:Boolean,default:()=>t.text.bold},block:{type:Boolean,default:()=>t.text.block},lines:{type:[String,Number],default:()=>t.text.lines},color:{type:String,default:()=>t.text.color},size:{type:[String,Number],default:()=>t.text.size},iconStyle:{type:[Object,String],default:()=>t.text.iconStyle},decoration:{tepe:String,default:()=>t.text.decoration},margin:{type:[Object,String,Number],default:()=>t.text.margin},lineHeight:{type:[String,Number],default:()=>t.text.lineHeight},align:{type:String,default:()=>t.text.align},wordWrap:{type:String,default:()=>t.text.wordWrap}}});const C=W({name:"up-text",mixins:[o,i,{computed:{value(){const{text:e,mode:t,format:o,href:i}=this;return"price"===t?s.func(o)?o(e):n(e,2):"date"===t?(!s.date(e)&&a(),s.func(o)?o(e):l(e,o||"yyyy-mm-dd")):"phone"===t?s.func(o)?o(e):"encrypt"===o?`${e.substr(0,3)}****${e.substr(7)}`:e:"name"===t?s.func(o)?o(e):"encrypt"===o?this.formatName(e):e:"link"===t?(!s.url(i)&&a(),e):e}},methods:{formatName(e){let t="";if(2===e.length)t=e.substr(0,1)+"*";else if(e.length>2){let s="";for(let t=0,n=e.length-2;t<n;t++)s+="*";t=e.substr(0,1)+s+e.substr(-1,1)}else t=e;return t}}},j],emits:["click"],computed:{valueStyle(){const e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:r(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),this.lineHeight&&(e.lineHeight=r(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),p(e,u(this.customStyle))},isNvue:()=>!1,isMp:()=>!1},data:()=>({}),methods:{addStyle:u,clickHandler(){this.call&&"phone"===this.mode&&uni.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}},[["render",function(e,t,s,n,a,l){const o=b,i=N(c("up-icon"),w),r=k,p=N(c("up-link"),I),u=v;return e.show?(d(),f(r,{key:0,class:m(["up-text",[e.customClass]]),style:h({margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"}),onClick:l.clickHandler},{default:y((()=>["price"===e.mode?(d(),f(o,{key:0,class:m(["up-text__price",e.type&&`up-text__value--${e.type}`]),style:h([l.valueStyle])},{default:y((()=>[g("￥")])),_:1},8,["class","style"])):x("",!0),e.prefixIcon?(d(),f(r,{key:1,class:"up-text__prefix-icon"},{default:y((()=>[S(i,{name:e.prefixIcon,customStyle:l.addStyle(e.iconStyle)},null,8,["name","customStyle"])])),_:1})):x("",!0),"link"===e.mode?(d(),f(p,{key:2,class:m(["up-text__value",[e.type&&`up-text__value--${e.type}`,e.lines&&`up-line-${e.lines}`]]),style:h({fontWeight:l.valueStyle.fontWeight,wordWrap:l.valueStyle.wordWrap,fontSize:l.valueStyle.fontSize}),text:e.value,href:e.href,underLine:""},null,8,["style","class","text","href"])):e.openType&&l.isMp?(d(),f(u,{key:3,class:"up-reset-button up-text__value",style:h([l.valueStyle]),"data-index":e.index,openType:e.openType,onGetuserinfo:e.onGetUserInfo,onContact:e.onContact,onGetphonenumber:e.onGetPhoneNumber,onError:e.onError,onLaunchapp:e.onLaunchApp,onOpensetting:e.onOpenSetting,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter},{default:y((()=>[g(_(e.value),1)])),_:1},8,["style","data-index","openType","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter"])):(d(),f(o,{key:4,class:m(["up-text__value",[e.type&&`up-text__value--${e.type}`,e.lines&&`up-line-${e.lines}`]]),style:h([l.valueStyle])},{default:y((()=>[g(_(e.value),1)])),_:1},8,["style","class"])),e.suffixIcon?(d(),f(r,{key:5,class:"up-text__suffix-icon"},{default:y((()=>[S(i,{name:e.suffixIcon,customStyle:l.addStyle(e.iconStyle)},null,8,["name","customStyle"])])),_:1})):x("",!0)])),_:1},8,["class","style","onClick"])):x("",!0)}],["__scopeId","data-v-e03f4b1c"]]);export{C as _};
