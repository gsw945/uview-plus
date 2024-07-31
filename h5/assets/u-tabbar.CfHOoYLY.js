import{_ as t}from"./u-icon.BUvds5AX.js";import{l as e,n as a,m as i,f as o,s as r,r as s,o as l,c as n,w as d,a as c,b as u,h as b,F as h,j as p,t as m,u as f,i as y,k as v,q as _,y as g,v as x,z as S,E as C}from"./index-66rGf9ia.js";import{r as I}from"./uni-app.es.Ba1vQ4ED.js";import{_ as k}from"./u-badge.DWcV5eGN.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as P}from"./u-safe-bottom.BZF16SAl.js";const B=D({name:"u-tabbar-item",mixins:[i,o,e({props:{name:{type:[String,Number,null],default:()=>a.tabbarItem.name},icon:{icon:String,default:()=>a.tabbarItem.icon},badge:{type:[String,Number,null],default:()=>a.tabbarItem.badge},dot:{type:Boolean,default:()=>a.tabbarItem.dot},text:{type:String,default:()=>a.tabbarItem.text},badgeStyle:{type:[Object,String],default:()=>a.tabbarItem.badgeStyle}}})],data:()=>({isActive:!1,parentData:{value:null,activeColor:"",inactiveColor:""}}),options:{virtualHost:!0},created(){this.init()},emits:["click","change"],methods:{addStyle:r,init(){this.updateParentData(),this.parent;const t=this.parent.children.indexOf(this);this.isActive=(this.name||t)===this.parentData.value},updateParentData(){this.getParentData("u-tabbar")},updateFromParent(){this.init()},clickHandler(){this.$nextTick((()=>{const t=this.parent.children.indexOf(this),e=this.name||t;e!==this.parent.value&&this.parent.$emit("change",e),this.$emit("click",e)}))}}},[["render",function(e,a,i,o,r,_){const g=I(s("u-icon"),t),x=I(s("u-badge"),k),S=y,C=v;return l(),n(S,{class:"u-tabbar-item",style:f([_.addStyle(e.customStyle)]),onClick:_.clickHandler},{default:d((()=>[c(S,{class:"u-tabbar-item__icon"},{default:d((()=>[e.icon?(l(),n(g,{key:0,name:e.icon,color:r.isActive?r.parentData.activeColor:r.parentData.inactiveColor,size:20},null,8,["name","color"])):(l(),u(h,{key:1},[r.isActive?b(e.$slots,"active-icon",{key:0},void 0,!0):b(e.$slots,"inactive-icon",{key:1},void 0,!0)],64)),c(x,{absolute:"",offset:[0,e.dot?"34rpx":e.badge>9?"14rpx":"20rpx"],customStyle:e.badgeStyle,isDot:e.dot,value:e.badge||(e.dot?1:null),show:e.dot||e.badge>0},null,8,["offset","customStyle","isDot","value","show"])])),_:3}),b(e.$slots,"text",{},(()=>[c(C,{class:"u-tabbar-item__text",style:f({color:r.isActive?r.parentData.activeColor:r.parentData.inactiveColor})},{default:d((()=>[p(m(e.text),1)])),_:1},8,["style"])]),!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-15ead729"]]);const H=D({name:"u-tabbar",mixins:[i,o,e({props:{value:{type:[String,Number,null],default:()=>a.tabbar.value},safeAreaInsetBottom:{type:Boolean,default:()=>a.tabbar.safeAreaInsetBottom},border:{type:Boolean,default:()=>a.tabbar.border},zIndex:{type:[String,Number],default:()=>a.tabbar.zIndex},activeColor:{type:String,default:()=>a.tabbar.activeColor},inactiveColor:{type:String,default:()=>a.tabbar.inactiveColor},fixed:{type:Boolean,default:()=>a.tabbar.fixed},placeholder:{type:Boolean,default:()=>a.tabbar.placeholder}}})],data:()=>({placeholderHeight:0}),computed:{tabbarStyle(){const t={zIndex:this.zIndex};return _(t,r(this.customStyle))},updateChild(){return[this.value,this.activeColor,this.inactiveColor]},updatePlaceholder(){return[this.fixed,this.placeholder]}},watch:{updateChild(){this.updateChildren()},updatePlaceholder(){this.setPlaceholderHeight()}},created(){this.children=[]},mounted(){this.setPlaceholderHeight()},methods:{updateChildren(){this.children.length&&this.children.map((t=>t.updateFromParent()))},async setPlaceholderHeight(){this.fixed&&this.placeholder&&(await g(20),this.$uGetRect(".u-tabbar__content").then((({height:t=50})=>{this.placeholderHeight=t})))}}},[["render",function(t,e,a,i,o,r){const u=y,h=I(s("u-safe-bottom"),P);return l(),n(u,{class:"u-tabbar"},{default:d((()=>[c(u,{class:S(["u-tabbar__content",[t.border&&"u-border-top",t.fixed&&"u-tabbar--fixed"]]),ref:"u-tabbar__content",onTouchmove:C(t.noop,["stop","prevent"]),style:f([r.tabbarStyle])},{default:d((()=>[c(u,{class:"u-tabbar__content__item-wrapper"},{default:d((()=>[b(t.$slots,"default",{},void 0,!0)])),_:3}),t.safeAreaInsetBottom?(l(),n(h,{key:0})):x("",!0)])),_:3},8,["onTouchmove","class","style"]),t.placeholder?(l(),n(u,{key:0,class:"u-tabbar__placeholder",style:f({height:o.placeholderHeight+"px"})},null,8,["style"])):x("",!0)])),_:3})}],["__scopeId","data-v-2808b6ab"]]);export{B as _,H as a};
