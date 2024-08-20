import{h as t,j as e,m as a,k as i,n as s,p as r,o as n,c as l,w as d,u as o,y as c,q as h,s as p,i as u,Z as m}from"./index-C3UXxwfW.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";const f=g({name:"up-grid-item",mixins:[a,i,t({props:{name:{type:[String,Number,null],default:()=>e.gridItem.name},bgColor:{type:String,default:()=>e.gridItem.bgColor}}})],data:()=>({parentData:{col:0,border:!0},classes:[]}),mounted(){this.init()},emits:["click"],computed:{itemStyle(){const t={background:this.bgColor,width:"100%"};return s(t,r(this.customStyle))}},methods:{init(){uni.$on("$uGridItem",(()=>{this.gridItemClasses()})),this.updateParentData(),uni.$emit("$uGridItem"),this.gridItemClasses()},updateParentData(){this.getParentData("up-grid")},clickHandler(){var t;let e=this.name;const a=null==(t=this.parent)?void 0:t.children;a&&null===this.name&&(e=a.findIndex((t=>t===this))),this.parent&&this.parent.childClick(e),this.$emit("click",e)},async getItemWidth(){let t=0;if(this.parent){t=await this.getParentWidth()/Number(this.parentData.col)+"px"}this.width=t},getParentWidth(){},gridItemClasses(){if(this.parentData.border){let t=[];this.parent.children.map(((e,a)=>{if(this===e){const e=this.parent.children.length;(a+1)%this.parentData.col!=0&&a+1!==e&&t.push("up-border-right");a<e-(e%this.parentData.col==0?this.parentData.col:e%this.parentData.col)&&t.push("up-border-bottom")}})),this.classes=t}}},beforeUnmount(){uni.$off("$uGridItem")}},[["render",function(t,e,a,i,s,r){const m=u;return s.parentData.col>0?(n(),l(m,{key:0,class:c(["up-grid-item",s.classes]),"hover-class":"up-grid-item--hover-class","hover-stay-time":200,onClick:r.clickHandler,style:h([r.itemStyle])},{default:d((()=>[o(t.$slots,"default",{},void 0,!0)])),_:3},8,["onClick","class","style"])):p("",!0)}],["__scopeId","data-v-c855229b"]]),y={name:"up-grid",mixins:[a,i,t({props:{col:{type:[String,Number],default:()=>e.grid.col},border:{type:Boolean,default:()=>e.grid.border},align:{type:String,default:()=>e.grid.align},gap:{type:String,default:"0px"}}})],data:()=>({index:0,width:0}),watch:{parentData(){this.children.length&&this.children.map((t=>{"function"==typeof t.updateParentData&&t.updateParentData()}))}},created(){this.children=[]},computed:{parentData(){return[this.hoverClass,this.col,this.size,this.border]},gridStyle(){let t={};switch(this.align){case"left":default:t.justifyContent="flex-start";break;case"center":t.justifyContent="center";break;case"right":t.justifyContent="flex-end"}return s(t,r(this.customStyle))}},emits:["click"],methods:{childClick(t){this.$emit("click",t)}}},b=()=>{m((t=>({"10d1352c":t.gap,"10d127d6":t.col})))},k=y.setup;y.setup=k?(t,e)=>(b(),k(t,e)):b;const D=g(y,[["render",function(t,e,a,i,s,r){const c=u;return n(),l(c,{class:"up-grid",ref:"up-grid",style:h([r.gridStyle])},{default:d((()=>[o(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-f92a68a1"]]);export{f as _,D as a};
