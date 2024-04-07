import{o as t,c as e,w as i,k as a,l as s,n as r,f as n,i as l}from"./index-4f0c5e1d.js";import{m as d,a as o}from"./mixin.d0c91ebc.js";import{_ as u}from"./_plugin-vue_export-helper.1b428a4d.js";const c=u({name:"u-grid-item",mixins:[d,o,{props:{name:{type:[String,Number,null],default:()=>uni.$u.props.gridItem.name},bgColor:{type:String,default:()=>uni.$u.props.gridItem.bgColor}}}],data:()=>({parentData:{col:0,border:!0},classes:[]}),mounted(){this.init()},emits:["click"],options:{virtualHost:!0},computed:{width(){return this.parentData.col>0?100/Number(this.parentData.col)+"%":0},itemStyle(){const t={background:this.bgColor,width:this.width};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{init(){uni.$on("$uGridItem",(()=>{this.gridItemClasses()})),this.updateParentData(),uni.$emit("$uGridItem"),this.gridItemClasses()},updateParentData(){this.getParentData("u-grid")},clickHandler(){var t;let e=this.name;const i=null==(t=this.parent)?void 0:t.children;i&&null===this.name&&(e=i.findIndex((t=>t===this))),this.parent&&this.parent.childClick(e),this.$emit("click",e)},async getItemWidth(){let t=0;if(this.parent){t=await this.getParentWidth()/Number(this.parentData.col)+"px"}this.width=t},getParentWidth(){},gridItemClasses(){if(this.parentData.border){let t=[];this.parent.children.map(((e,i)=>{if(this===e){const e=this.parent.children.length;(i+1)%this.parentData.col!=0&&i+1!==e&&t.push("u-border-right");i<e-(e%this.parentData.col==0?this.parentData.col:e%this.parentData.col)&&t.push("u-border-bottom")}})),this.classes=t}}},beforeUnmount(){uni.$off("$uGridItem")}},[["render",function(d,o,u,c,h,p){const m=l;return h.parentData.col>0?(t(),e(m,{key:0,class:s(["u-grid-item",h.classes]),"hover-class":"u-grid-item--hover-class","hover-stay-time":200,onClick:p.clickHandler,style:r([p.itemStyle])},{default:i((()=>[a(d.$slots,"default",{},void 0,!0)])),_:3},8,["onClick","class","style"])):n("v-if",!0)}],["__scopeId","data-v-f65e7bf0"]]);const h=u({name:"u-grid",mixins:[d,o,{props:{col:{type:[String,Number],default:()=>uni.$u.props.grid.col},border:{type:Boolean,default:()=>uni.$u.props.grid.border},align:{type:String,default:()=>uni.$u.props.grid.align}}}],data:()=>({index:0,width:0}),watch:{parentData(){this.children.length&&this.children.map((t=>{"function"==typeof t.updateParentData&&t.updateParentData()}))}},created(){this.children=[]},computed:{parentData(){return[this.hoverClass,this.col,this.size,this.border]},gridStyle(){let t={};switch(this.align){case"left":default:t.justifyContent="flex-start";break;case"center":t.justifyContent="center";break;case"right":t.justifyContent="flex-end"}return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{childClick(t){this.$emit("click",t)}}},[["render",function(s,n,d,o,u,c){const h=l;return t(),e(h,{class:"u-grid",ref:"u-grid",style:r([c.gridStyle])},{default:i((()=>[a(s.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-a8baa847"]]);export{c as _,h as a};
