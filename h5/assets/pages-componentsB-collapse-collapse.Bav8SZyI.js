import{l as e,n as t,m as a,f as l,B as i,W as s,N as n,P as o,y as c,r as u,o as d,c as r,w as p,a as _,h as m,j as f,t as h,v as g,b as y,F as b,k as v,i as k}from"./index-B1CzSMdD.js";import{_ as I}from"./u-icon.ByNUSw8H.js";import{r as x}from"./uni-app.es.CZQu_vxk.js";import{_ as w}from"./u-cell.Dt2sv0g5.js";import{_ as D}from"./u-line.tYIBVXo-.js";import{_ as $}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as C}from"./u-gap.CiqxoaKC.js";const B=$({name:"u-collapse-item",mixins:[a,l,e({props:{title:{type:String,default:()=>t.collapseItem.title},value:{type:String,default:()=>t.collapseItem.value},label:{type:String,default:()=>t.collapseItem.label},disabled:{type:Boolean,default:()=>t.collapseItem.disabled},isLink:{type:Boolean,default:()=>t.collapseItem.isLink},clickable:{type:Boolean,default:()=>t.collapseItem.clickable},border:{type:Boolean,default:()=>t.collapseItem.border},align:{type:String,default:()=>t.collapseItem.align},name:{type:[String,Number],default:()=>t.collapseItem.name},icon:{type:String,default:()=>t.collapseItem.icon},duration:{type:Number,default:()=>t.collapseItem.duration},showRight:{type:Boolean,default:()=>t.collapseItem.showRight}}})],data:()=>({elId:i(),animationData:{},expanded:!1,showBorder:!1,animating:!1,parentData:{accordion:!1,border:!1}}),watch:{expanded(e){clearTimeout(this.timer),this.timer=null,this.timer=setTimeout((()=>{this.showBorder=e}),e?10:290)}},mounted(){this.init()},methods:{async init(){if(this.updateParentData(),!this.parent)return s();const{value:e,accordion:t,children:a=[]}=this.parent;if(t){if(n.array(e))return s();this.expanded=this.name==e}else{if(!n.array(e)&&null!==e)return s();this.expanded=(e||[]).some((e=>e==this.name))}await o(),this.setContentAnimate()},updateParentData(){this.getParentData("u-collapse")},async setContentAnimate(){const e=await this.queryRect(),t=this.expanded?e.height:0;this.animating=!0;const a=uni.createAnimation({timingFunction:"ease-in-out"});a.height(t).step({duration:this.duration}).step(),this.animationData=a.export(),c(this.duration).then((()=>{this.animating=!1}))},clickHandler(){this.disabled&&this.animating||this.parent&&this.parent.onChange(this)},queryRect(){return new Promise((e=>{this.$uGetRect(`#${this.elId}`).then((t=>{e(t)}))}))}}},[["render",function(e,t,a,l,i,s){const n=v,o=x(u("u-icon"),I),c=x(u("u-cell"),w),$=k,C=x(u("u-line"),D);return d(),r($,{class:"u-collapse-item"},{default:p((()=>[_(c,{title:e.$slots.title?"":e.title,value:e.value,label:e.label,icon:e.icon,isLink:e.isLink,clickable:e.clickable,border:i.parentData.border&&i.showBorder,onClick:s.clickHandler,arrowDirection:i.expanded?"up":"down",disabled:e.disabled},{title:p((()=>[m(e.$slots,"title",{},(()=>[!e.$slots.title&&e.title?(d(),r(n,{key:0},{default:p((()=>[f(h(e.title),1)])),_:1})):g("",!0)]),!0)])),icon:p((()=>[m(e.$slots,"icon",{},(()=>[!e.$slots.icon&&e.icon?(d(),r(o,{key:0,size:22,name:e.icon},null,8,["name"])):g("",!0)]),!0)])),value:p((()=>[m(e.$slots,"value",{},(()=>[!e.$slots.value&&e.value?(d(),r(n,{key:0},{default:p((()=>[f(h(e.value),1)])),_:1})):g("",!0)]),!0)])),"right-icon":p((()=>[e.showRight?(d(),y(b,{key:0},[e.$slots["right-icon"]?g("",!0):(d(),r(o,{key:0,size:16,name:"arrow-right"})),m(e.$slots,"right-icon",{},void 0,!0)],64)):g("",!0)])),_:3},8,["title","value","label","icon","isLink","clickable","border","onClick","arrowDirection","disabled"]),_($,{class:"u-collapse-item__content",animation:i.animationData,ref:"animation"},{default:p((()=>[_($,{class:"u-collapse-item__content__text content-class",id:i.elId,ref:i.elId},{default:p((()=>[m(e.$slots,"default",{},void 0,!0)])),_:3},8,["id"])])),_:3},8,["animation"]),i.parentData.border?(d(),r(C,{key:0})):g("",!0)])),_:3})}],["__scopeId","data-v-a93d9a02"]]);const j=$({name:"u-collapse",mixins:[a,l,e({props:{value:{type:[String,Number,Array,null],default:()=>t.collapse.value},accordion:{type:Boolean,default:()=>t.collapse.accordion},border:{type:Boolean,default:()=>t.collapse.border}}})],watch:{needInit(){this.init()},parentData(){this.children.length&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))}},created(){this.children=[]},computed:{needInit(){return[this.accordion,this.value]}},emits:["open","close","change"],methods:{init(){this.children.map((e=>{e.init()}))},onChange(e){let t=[];this.children.map(((a,l)=>{this.accordion?(a.expanded=a===e&&!e.expanded,a.setContentAnimate()):a===e&&(a.expanded=!a.expanded,a.setContentAnimate()),t.push({name:a.name||l,status:a.expanded?"open":"close"})})),this.$emit("change",t),this.$emit(e.expanded?"open":"close",e.name)}}},[["render",function(e,t,a,l,i,s){const n=x(u("u-line"),D),o=k;return d(),r(o,{class:"u-collapse"},{default:p((()=>[e.border?(d(),r(n,{key:0})):g("",!0),m(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-049eaad7"]]);const A=$({data:()=>({}),methods:{open(e){},close(e){},change(e){}}},[["render",function(e,t,a,l,i,s){const n=v,o=x(u("up-collapse-item"),B),c=x(u("up-collapse"),j),m=k,h=x(u("up-icon"),I),g=x(u("up-gap"),C);return d(),r(m,{class:"u-page"},{default:p((()=>[_(m,{class:"u-page__item"},{default:p((()=>[_(n,{class:"u-page__item__title"},{default:p((()=>[f("基础功能")])),_:1}),_(c,{onChange:s.change,onClose:s.close,onOpen:s.open},{default:p((()=>[_(o,{title:"文档指南",name:"Docs guide"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),_(o,{title:"组件全面",name:"Variety components"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),_(o,{title:"众多利器",name:"Numerous tools",showRight:!1},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1},8,["onChange","onClose","onOpen"])])),_:1}),_(m,{class:"u-page__item"},{default:p((()=>[_(n,{class:"u-page__item__title"},{default:p((()=>[f("展开和禁用")])),_:1}),_(c,{value:["2"]},{default:p((()=>[_(o,{title:"文档指南"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),_(o,{disabled:"",title:"组件全面"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),_(o,{name:"2",title:"众多利器"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),_(m,{class:"u-page__item"},{default:p((()=>[_(n,{class:"u-page__item__title"},{default:p((()=>[f("手风琴模式")])),_:1}),_(c,{accordion:""},{default:p((()=>[_(o,{title:"文档指南"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),_(o,{title:"组件全面"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),_(o,{title:"众多利器"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),_(m,{class:"u-page__item"},{default:p((()=>[_(n,{class:"u-page__item__title"},{default:p((()=>[f("移除下划线")])),_:1}),_(c,{accordion:"",border:!1},{default:p((()=>[_(o,{title:"文档指南"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),_(o,{title:"组件全面"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),_(o,{title:"众多利器"},{default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),_(m,{class:"u-page__item"},{default:p((()=>[_(n,{class:"u-page__item__title"},{default:p((()=>[f("自定义标题和内容")])),_:1}),_(c,{accordion:""},{default:p((()=>[_(o,null,{title:p((()=>[_(n,{class:"u-page__item__title__slot-title"},{default:p((()=>[f("文档指南")])),_:1})])),default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),_(o,{title:"组件全面"},{icon:p((()=>[_(h,{name:"tags-fill",size:"20"})])),default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),_(o,{title:"众多利器",icon:"tags-fill"},{"right-icon":p((()=>[_(n,{class:"u-page__item__title__slot-title"},{default:p((()=>[f("10")])),_:1})])),default:p((()=>[_(n,{class:"u-collapse-content"},{default:p((()=>[f("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),_(g,{height:"50"})])),_:1})}],["__scopeId","data-v-268d1e87"]]);export{A as default};
