import{h as t,j as e,m as a,k as l,p as r,l as o,I as n,v as s,r as i,o as c,c as u,w as f,q as d,s as p,a as g,y as h,u as _,f as b,t as y,i as v,g as m}from"./index-C3UXxwfW.js";import{_ as k}from"./up-status-bar.VZkP8NkI.js";import{r as C}from"./uni-app.es.CqYlZVXb.js";import{_ as x}from"./up-icon.BrIVCe5a.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";const S=I({name:"up-navbar",mixins:[a,l,t({props:{safeAreaInsetTop:{type:Boolean,default:()=>e.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:()=>e.navbar.placeholder},fixed:{type:Boolean,default:()=>e.navbar.fixed},border:{type:Boolean,default:()=>e.navbar.border},leftIcon:{type:String,default:()=>e.navbar.leftIcon},leftText:{type:String,default:()=>e.navbar.leftText},rightText:{type:String,default:()=>e.navbar.rightText},rightIcon:{type:String,default:()=>e.navbar.rightIcon},title:{type:[String,Number],default:()=>e.navbar.title},bgColor:{type:String,default:()=>e.navbar.bgColor},titleWidth:{type:[String,Number],default:()=>e.navbar.titleWidth},height:{type:[String,Number],default:()=>e.navbar.height},leftIconSize:{type:[String,Number],default:()=>e.navbar.leftIconSize},leftIconColor:{type:String,default:()=>e.navbar.leftIconColor},autoBack:{type:Boolean,default:()=>e.navbar.autoBack},titleStyle:{type:[String,Object],default:()=>e.navbar.titleStyle}}})],data:()=>({}),emits:["leftClick","rightClick"],methods:{addStyle:r,addUnit:o,sys:n,getPx:s,leftClick(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick(){this.$emit("rightClick")}}},[["render",function(t,e,a,l,r,o){const n=v,s=C(i("up-status-bar"),k),I=C(i("up-icon"),x),S=m;return c(),u(n,{class:h(["up-navbar",[t.customClass]])},{default:f((()=>[t.fixed&&t.placeholder?(c(),u(n,{key:0,class:"up-navbar__placeholder",style:d({height:o.addUnit(o.getPx(t.height)+o.sys().statusBarHeight,"px")})},null,8,["style"])):p("",!0),g(n,{class:h([t.fixed&&"up-navbar--fixed"])},{default:f((()=>[t.safeAreaInsetTop?(c(),u(s,{key:0,bgColor:t.bgColor},null,8,["bgColor"])):p("",!0),g(n,{class:h(["up-navbar__content",[t.border&&"up-border-bottom"]]),style:d({height:o.addUnit(t.height),backgroundColor:t.bgColor})},{default:f((()=>[g(n,{class:"up-navbar__content__left","hover-class":"up-navbar__content__left--hover","hover-start-time":"150",onClick:o.leftClick},{default:f((()=>[_(t.$slots,"left",{},(()=>[t.leftIcon?(c(),u(I,{key:0,name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor},null,8,["name","size","color"])):p("",!0),t.leftText?(c(),u(S,{key:1,style:d({color:t.leftIconColor}),class:"up-navbar__content__left__text"},{default:f((()=>[b(y(t.leftText),1)])),_:1},8,["style"])):p("",!0)]),!0)])),_:3},8,["onClick"]),_(t.$slots,"center",{},(()=>[g(S,{class:"up-line-1 up-navbar__content__title",style:d([{width:o.addUnit(t.titleWidth)},o.addStyle(t.titleStyle)])},{default:f((()=>[b(y(t.title),1)])),_:1},8,["style"])]),!0),t.$slots.right||t.rightIcon||t.rightText?(c(),u(n,{key:0,class:"up-navbar__content__right",onClick:o.rightClick},{default:f((()=>[_(t.$slots,"right",{},(()=>[t.rightIcon?(c(),u(I,{key:0,name:t.rightIcon,size:"20"},null,8,["name"])):p("",!0),t.rightText?(c(),u(S,{key:1,class:"up-navbar__content__right__text"},{default:f((()=>[b(y(t.rightText),1)])),_:1})):p("",!0)]),!0)])),_:3},8,["onClick"])):p("",!0)])),_:3},8,["class","style"])])),_:3},8,["class"])])),_:3},8,["class"])}],["__scopeId","data-v-6e5d4745"]]);export{S as _};
