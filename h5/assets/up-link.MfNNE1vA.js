import{h as e,j as t,m as n,k as i,l,v as o,p as s,o as r,c as a,w as p,f as d,t as u,D as f,q as c,g as k}from"./index-C3UXxwfW.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";const m=S({name:"up-link",mixins:[n,i,e({props:{color:{type:String,default:()=>t.link.color},fontSize:{type:[String,Number],default:()=>t.link.fontSize},underLine:{type:Boolean,default:()=>t.link.underLine},href:{type:String,default:()=>t.link.href},mpTips:{type:String,default:()=>t.link.mpTips},lineColor:{type:String,default:()=>t.link.lineColor},text:{type:String,default:()=>t.link.text}}})],computed:{linkStyle(){return{color:this.color,fontSize:l(this.fontSize),lineHeight:l(o(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},emits:["click"],methods:{addStyle:s,openLink(){window.open(this.href),this.$emit("click")}}},[["render",function(e,t,n,i,l,o){const s=k;return r(),a(s,{class:"up-link",onClick:f(o.openLink,["stop"]),style:c([o.linkStyle,o.addStyle(e.customStyle)])},{default:p((()=>[d(u(e.text),1)])),_:1},8,["onClick","style"])}],["__scopeId","data-v-a135d846"]]);export{m as _};
