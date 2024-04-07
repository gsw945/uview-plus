import{d as t,o,c as a,w as e,n as c,a as i,g as s,t as u,f as l,k as n,h as p,i as r,b as d,r as m,F as b}from"./index-4f0c5e1d.js";import{_ as k,a as h}from"./u-checkbox-group.fd9d36a8.js";import{r as f}from"./uni-app.es.fcad82c0.js";import{_ as y}from"./u-icon.e9ca9d71.js";import{_ as T}from"./u-transition.589ae8d1.js";import{m as g,a as S}from"./mixin.d0c91ebc.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const _=x({name:"u-back-top",mixins:[g,S,{props:{mode:{type:String,default:()=>uni.$u.props.backtop.mode},icon:{type:String,default:()=>uni.$u.props.backtop.icon},text:{type:String,default:()=>uni.$u.props.backtop.text},duration:{type:[String,Number],default:()=>uni.$u.props.backtop.duration},scrollTop:{type:[String,Number],default:()=>uni.$u.props.backtop.scrollTop},top:{type:[String,Number],default:()=>uni.$u.props.backtop.top},bottom:{type:[String,Number],default:()=>uni.$u.props.backtop.bottom},right:{type:[String,Number],default:()=>uni.$u.props.backtop.right},zIndex:{type:[String,Number],default:()=>uni.$u.props.backtop.zIndex},iconStyle:{type:Object,default:()=>uni.$u.props.backtop.iconStyle}}}],computed:{backTopStyle(){return{bottom:uni.$u.addUnit(this.bottom),right:uni.$u.addUnit(this.right),width:"40px",height:"40px",position:"fixed",zIndex:10}},show(){return uni.$u.getPx(this.scrollTop)>uni.$u.getPx(this.top)},contentStyle(){const t={};let o=0;return o="circle"===this.mode?"100px":"4px",t.borderTopLeftRadius=o,t.borderTopRightRadius=o,t.borderBottomLeftRadius=o,t.borderBottomRightRadius=o,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{backToTop(){uni.pageScrollTo({scrollTop:0,duration:this.duration}),this.$emit("click")}}},[["render",function(d,m,b,k,h,g){const S=f(t("u-icon"),y),x=p,_=r,D=f(t("u-transition"),T);return o(),a(D,{mode:"fade",customStyle:g.backTopStyle,show:g.show},{default:e((()=>[d.$slots.default||d.$slots.$default?n(d.$slots,"default",{key:1},void 0,!0):(o(),a(_,{key:0,class:"u-back-top",style:c([g.contentStyle]),onClick:g.backToTop},{default:e((()=>[i(S,{name:d.icon,"custom-style":d.iconStyle},null,8,["name","custom-style"]),d.text?(o(),a(x,{key:0,class:"u-back-top__text"},{default:e((()=>[s(u(d.text),1)])),_:1})):l("v-if",!0)])),_:1},8,["style","onClick"]))])),_:3},8,["customStyle","show"])}],["__scopeId","data-v-c809159b"]]);const D=x({data:()=>({value:["自定义图标"],backTopData:{mode:"circle",icon:"arrow-upward",bottom:100,customStyle:{},iconStyle:{},right:20,duration:300},scrollTop:0,checkboxList:[{name:"显示方形"},{name:"自定义图标"},{name:"自定义距离"},{name:"自定义样式"},{name:"自定义返回顶部滚动时间"}]}),onLoad(){this.backTopData.icon="arrow-up"},onPageScroll(t){this.scrollTop=t.scrollTop},methods:{checkboxChange(t){t.includes("显示方形")?this.backTopData.mode="square":this.backTopData.mode="circle",t.includes("自定义图标")?this.backTopData.icon="arrow-up":this.backTopData.icon="arrow-upward",t.includes("自定义距离")?(this.backTopData.bottom=300,this.backTopData.right=20):this.backTopData.bottom=100,t.includes("自定义样式")?(this.backTopData.customStyle={backgroundColor:"#2979ff"},this.backTopData.iconStyle={color:"#ffffff"}):(this.backTopData.customStyle={},this.backTopData.iconStyle={}),t.includes("自定义返回顶部滚动时间")?this.backTopData.duration=1500:this.backTopData.duration=300},click(){console.log("click")}}},[["render",function(c,u,l,n,y,T){const g=p,S=f(t("u-checkbox"),k),x=f(t("u-checkbox-group"),h),D=r,$=f(t("u-back-top"),_);return o(),a(D,{class:"u-page",ref:"u-back-top"},{default:e((()=>[i(D,{class:"u-demo-block"},{default:e((()=>[i(g,{class:"u-demo-block__title"},{default:e((()=>[s("自定义backTop(滚动页面即可在右下角看到图标)")])),_:1}),i(D,{class:"u-demo-block__content"},{default:e((()=>[i(D,{class:"u-page__backTop-item"},{default:e((()=>[i(x,{placement:"column",shape:"square",onChange:T.checkboxChange,modelValue:y.value,"onUpdate:modelValue":u[0]||(u[0]=t=>y.value=t)},{default:e((()=>[(o(!0),d(b,null,m(y.checkboxList,((t,e)=>(o(),a(S,{customStyle:{marginBottom:"8px"},key:e,label:t.name,name:t.name},null,8,["label","name"])))),128))])),_:1},8,["onChange","modelValue"])])),_:1})])),_:1})])),_:1}),i($,{right:y.backTopData.right,customStyle:y.backTopData.customStyle,bottom:y.backTopData.bottom,icon:y.backTopData.icon,mode:y.backTopData.mode,iconStyle:y.backTopData.iconStyle,duration:y.backTopData.duration,scrollTop:y.scrollTop,onClick:T.click},null,8,["right","customStyle","bottom","icon","mode","iconStyle","duration","scrollTop","onClick"])])),_:1},512)}],["__scopeId","data-v-0967d3b9"]]);export{D as default};
