import{h as e,j as t,m as i,k as r,l as s,n as l,p as n,o,c as a,q as d,i as h}from"./index-C3UXxwfW.js";import{_ as p}from"./_plugin-vue_export-helper.BCo6x5W8.js";const m=p({name:"up-line",mixins:[i,r,e({props:{color:{type:String,default:()=>t.line.color},length:{type:[String,Number],default:()=>t.line.length},direction:{type:String,default:()=>t.line.direction},hairline:{type:Boolean,default:()=>t.line.hairline},margin:{type:[String,Number],default:()=>t.line.margin},dashed:{type:Boolean,default:()=>t.line.dashed}}})],computed:{lineStyle(){const e={};return e.margin=this.margin,"row"===this.direction?(e.borderBottomWidth="1px",e.borderBottomStyle=this.dashed?"dashed":"solid",e.width=s(this.length),this.hairline&&(e.transform="scaleY(0.5)")):(e.borderLeftWidth="1px",e.borderLeftStyle=this.dashed?"dashed":"solid",e.height=s(this.length),this.hairline&&(e.transform="scaleX(0.5)")),e.borderColor=this.color,l(e,n(this.customStyle))}}},[["render",function(e,t,i,r,s,l){const n=h;return o(),a(n,{class:"up-line",style:d([l.lineStyle])},null,8,["style"])}],["__scopeId","data-v-0811e2f4"]]);export{m as _};
