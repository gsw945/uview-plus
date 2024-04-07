import{y as o,o as e,c as i,w as t,l as n,n as r,b as a,F as l,r as s,f as d,g as u,t as c,i as p,h as g}from"./index-4f0c5e1d.js";import{m,a as f}from"./mixin.d0c91ebc.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const h=y({name:"u-loading-icon",mixins:[m,f,{props:{show:{type:Boolean,default:()=>uni.$u.props.loadingIcon.show},color:{type:String,default:()=>uni.$u.props.loadingIcon.color},textColor:{type:String,default:()=>uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:()=>uni.$u.props.loadingIcon.vertical},mode:{type:String,default:()=>uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:()=>uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:()=>uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:()=>uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:()=>uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:()=>uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:()=>uni.$u.props.loadingIcon.inactiveColor}}}],data:()=>({array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}),computed:{otherBorderColor(){const o=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:o:"transparent"}},watch:{show(o){}},mounted(){this.init()},methods:{init(){setTimeout((()=>{}),20)},addEventListenerToWebview(){const e=o(),i=e[e.length-1].$getAppWebview();i.addEventListener("hide",(()=>{this.webviewHide=!0})),i.addEventListener("show",(()=>{this.webviewHide=!1}))}}},[["render",function(o,m,f,y,h,v){const $=p,w=g;return o.show?(e(),i($,{key:0,class:n(["u-loading-icon",[o.vertical&&"u-loading-icon--vertical"]]),style:r([o.$u.addStyle(o.customStyle)])},{default:t((()=>[h.webviewHide?d("v-if",!0):(e(),i($,{key:0,class:n(["u-loading-icon__spinner",[`u-loading-icon__spinner--${o.mode}`]]),ref:"ani",style:r({color:o.color,width:o.$u.addUnit(o.size),height:o.$u.addUnit(o.size),borderTopColor:o.color,borderBottomColor:v.otherBorderColor,borderLeftColor:v.otherBorderColor,borderRightColor:v.otherBorderColor,"animation-duration":`${o.duration}ms`,"animation-timing-function":"semicircle"===o.mode||"circle"===o.mode?o.timingFunction:""})},{default:t((()=>["spinner"===o.mode?(e(!0),a(l,{key:0},s(h.array12,((o,t)=>(e(),i($,{key:t,class:"u-loading-icon__dot"})))),128)):d("v-if",!0)])),_:1},8,["class","style"])),o.text?(e(),i(w,{key:1,class:"u-loading-icon__text",style:r({fontSize:o.$u.addUnit(o.textSize),color:o.textColor})},{default:t((()=>[u(c(o.text),1)])),_:1},8,["style"])):d("v-if",!0)])),_:1},8,["style","class"])):d("v-if",!0)}],["__scopeId","data-v-6a2dce65"]]);export{h as _};
