import{h as e,j as t,m as o,k as l,M as i,l as n,r as c,o as a,c as s,w as u,u as r,a as d,s as p,b as m,F as _,d as f,q as k,f as y,t as h,i as b,g as x,S as g,E as S,x as C,v as w,p as N}from"./index-C3UXxwfW.js";import{_ as z}from"./up-icon.BrIVCe5a.js";import{r as v}from"./uni-app.es.CqYlZVXb.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";const T=B({mixins:[o,l,e({props:{text:{type:[Array],default:()=>t.columnNotice.text},icon:{type:String,default:()=>t.columnNotice.icon},mode:{type:String,default:()=>t.columnNotice.mode},color:{type:String,default:()=>t.columnNotice.color},bgColor:{type:String,default:()=>t.columnNotice.bgColor},fontSize:{type:[String,Number],default:()=>t.columnNotice.fontSize},speed:{type:[String,Number],default:()=>t.columnNotice.speed},step:{type:Boolean,default:()=>t.columnNotice.step},duration:{type:[String,Number],default:()=>t.columnNotice.duration},disableTouch:{type:Boolean,default:()=>t.columnNotice.disableTouch}}})],watch:{text:{immediate:!0,handler(e,t){i.array(e)}}},computed:{textStyle(){let e={};return e.color=this.color,e.fontSize=n(this.fontSize),e},vertical(){return"horizontal"!=this.mode}},data:()=>({index:0}),emits:["click","close"],methods:{noticeChange(e){this.index=e.detail.current},clickHandler(){this.$emit("click",this.index)},close(){this.$emit("close")}}},[["render",function(e,t,o,l,i,n){const C=v(c("up-icon"),z),w=b,N=x,B=g,T=S;return a(),s(w,{class:"up-notice",onClick:n.clickHandler},{default:u((()=>[r(e.$slots,"icon",{},(()=>[e.icon?(a(),s(w,{key:0,class:"up-notice__left-icon"},{default:u((()=>[d(C,{name:e.icon,color:e.color,size:"19"},null,8,["name","color"])])),_:1})):p("",!0)]),!0),d(T,{"disable-touch":e.disableTouch,vertical:!e.step,circular:"",interval:e.duration,autoplay:!0,class:"up-notice__swiper",onChange:n.noticeChange},{default:u((()=>[(a(!0),m(_,null,f(e.text,((e,t)=>(a(),s(B,{key:t,class:"up-notice__swiper__item"},{default:u((()=>[d(N,{class:"up-notice__swiper__item__text up-line-1",style:k([n.textStyle])},{default:u((()=>[y(h(e),1)])),_:2},1032,["style"])])),_:2},1024)))),128))])),_:1},8,["disable-touch","vertical","interval","onChange"]),["link","closable"].includes(e.mode)?(a(),s(w,{key:0,class:"up-notice__right-icon"},{default:u((()=>["link"===e.mode?(a(),s(C,{key:0,name:"arrow-right",size:17,color:e.color},null,8,["color"])):p("",!0),"closable"===e.mode?(a(),s(C,{key:1,name:"close",size:16,color:e.color,onClick:n.close},null,8,["color","onClick"])):p("",!0)])),_:1})):p("",!0)])),_:3},8,["onClick"])}],["__scopeId","data-v-7c7976bb"]]);const $=B({name:"up-row-notice",mixins:[o,l,e({props:{text:{type:String,default:()=>t.rowNotice.text},icon:{type:String,default:()=>t.rowNotice.icon},mode:{type:String,default:()=>t.rowNotice.mode},color:{type:String,default:()=>t.rowNotice.color},bgColor:{type:String,default:()=>t.rowNotice.bgColor},fontSize:{type:[String,Number],default:()=>t.rowNotice.fontSize},speed:{type:[String,Number],default:()=>t.rowNotice.speed}}})],data:()=>({animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}),watch:{text:{immediate:!0,handler(e,t){this.vue(),i.string(e)}},fontSize(){this.vue()},speed(){this.vue()}},computed:{textStyle(){let e={whiteSpace:"nowrap !important"};return e.color=this.color,e.fontSize=n(this.fontSize),e},animationStyle(){let e={};return e.animationDuration=this.animationDuration,e.animationPlayState=this.animationPlayState,e},innerText(){let e=[];const t=this.text.split("");for(let o=0;o<t.length;o+=20)e.push(t.slice(o,o+20).join(""));return e}},mounted(){this.init()},emits:["click","close"],methods:{init(){this.vue(),i.string(this.text)},async vue(){let e=0;await C(),e=(await this.$uGetRect(".up-notice__content__text")).width,(await this.$uGetRect(".up-notice__content")).width,this.animationDuration=e/w(this.speed)+"s",this.animationPlayState="paused",setTimeout((()=>{this.animationPlayState="running"}),10)},async nvue(){},loopAnimation(e,t){},getNvueRect(e){},clickHandler(e){this.$emit("click")},close(){this.$emit("close")}},beforeUnmount(){this.stopAnimation=!0}},[["render",function(e,t,o,l,i,n){const g=v(c("up-icon"),z),S=b,C=x;return a(),s(S,{class:"up-notice",onClick:n.clickHandler},{default:u((()=>[r(e.$slots,"icon",{},(()=>[e.icon?(a(),s(S,{key:0,class:"up-notice__left-icon"},{default:u((()=>[d(g,{name:e.icon,color:e.color,size:"19"},null,8,["name","color"])])),_:1})):p("",!0)]),!0),d(S,{class:"up-notice__content",ref:"up-notice__content"},{default:u((()=>[d(S,{ref:"up-notice__content__text",class:"up-notice__content__text",style:k([n.animationStyle])},{default:u((()=>[(a(!0),m(_,null,f(n.innerText,((e,t)=>(a(),s(C,{key:t,style:k([n.textStyle])},{default:u((()=>[y(h(e),1)])),_:2},1032,["style"])))),128))])),_:1},8,["style"])])),_:1},512),["link","closable"].includes(e.mode)?(a(),s(S,{key:0,class:"up-notice__right-icon"},{default:u((()=>["link"===e.mode?(a(),s(g,{key:0,name:"arrow-right",size:17,color:e.color},null,8,["color"])):p("",!0),"closable"===e.mode?(a(),s(g,{key:1,onClick:n.close,name:"close",size:16,color:e.color},null,8,["onClick","color"])):p("",!0)])),_:1})):p("",!0)])),_:3},8,["onClick"])}],["__scopeId","data-v-e3e89b7b"]]);const j=B({name:"up-notice-bar",mixins:[o,l,e({props:{text:{type:[Array,String],default:()=>t.noticeBar.text},direction:{type:String,default:()=>t.noticeBar.direction},step:{type:Boolean,default:()=>t.noticeBar.step},icon:{type:String,default:()=>t.noticeBar.icon},mode:{type:String,default:()=>t.noticeBar.mode},color:{type:String,default:()=>t.noticeBar.color},bgColor:{type:String,default:()=>t.noticeBar.bgColor},speed:{type:[String,Number],default:()=>t.noticeBar.speed},fontSize:{type:[String,Number],default:()=>t.noticeBar.fontSize},duration:{type:[String,Number],default:()=>t.noticeBar.duration},disableTouch:{type:Boolean,default:()=>t.noticeBar.disableTouch},url:{type:String,default:()=>t.noticeBar.url},linkType:{type:String,default:()=>t.noticeBar.linkType}}})],data:()=>({show:!0}),emits:["click","close"],methods:{addStyle:N,click(e){this.$emit("click",e),this.url&&this.linkType&&this.openPage()},close(){this.show=!1,this.$emit("close")}}},[["render",function(e,t,o,l,i,n){const r=v(c("up-column-notice"),T),d=v(c("up-row-notice"),$),m=b;return i.show?(a(),s(m,{key:0,class:"up-notice-bar",style:k([{backgroundColor:e.bgColor},n.addStyle(e.customStyle)])},{default:u((()=>["column"===e.direction||"row"===e.direction&&e.step?(a(),s(r,{key:0,color:e.color,bgColor:e.bgColor,text:e.text,mode:e.mode,step:e.step,icon:e.icon,"disable-touch":e.disableTouch,fontSize:e.fontSize,duration:e.duration,onClose:n.close,onClick:n.click},null,8,["color","bgColor","text","mode","step","icon","disable-touch","fontSize","duration","onClose","onClick"])):(a(),s(d,{key:1,color:e.color,bgColor:e.bgColor,text:e.text,mode:e.mode,fontSize:e.fontSize,speed:e.speed,url:e.url,linkType:e.linkType,icon:e.icon,onClose:n.close,onClick:n.click},null,8,["color","bgColor","text","mode","fontSize","speed","url","linkType","icon","onClose","onClick"]))])),_:1},8,["style"])):p("",!0)}],["__scopeId","data-v-4045d48a"]]);const P=B({data:()=>({text1:"uview-plus众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用",text2:"uview-plus众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨",text3:"uview-plus收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍",text4:["寒雨连江夜入吴","平明送客楚山孤","洛阳亲友如相问","一片冰心在玉壶"],text5:"涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川"}),onLoad(){},methods:{click(e){console.log(e)}}},[["render",function(e,t,o,l,i,n){const r=x,p=v(c("up-notice-bar"),j),m=b;return a(),s(m,{class:"u-page"},{default:u((()=>[d(m,{class:"u-demo-block"},{default:u((()=>[d(r,{class:"u-demo-block__title"},{default:u((()=>[y("基础功能")])),_:1}),d(m,{class:"u-demo-block__content"},{default:u((()=>[d(p,{text:i.text1},null,8,["text"])])),_:1})])),_:1}),d(m,{class:"u-demo-block"},{default:u((()=>[d(r,{class:"u-demo-block__title"},{default:u((()=>[y("可关闭")])),_:1}),d(m,{class:"u-demo-block__content"},{default:u((()=>[d(p,{text:i.text5,mode:"closable"},null,8,["text"])])),_:1})])),_:1}),d(m,{class:"u-demo-block"},{default:u((()=>[d(r,{class:"u-demo-block__title"},{default:u((()=>[y("自定义横向滚动速度")])),_:1}),d(m,{class:"u-demo-block__content"},{default:u((()=>[d(p,{text:i.text2,speed:"250",mode:"closable"},null,8,["text"])])),_:1})])),_:1}),d(m,{class:"u-demo-block"},{default:u((()=>[d(r,{class:"u-demo-block__title"},{default:u((()=>[y("可跳转(点击右箭头)")])),_:1}),d(m,{class:"u-demo-block__content"},{default:u((()=>[d(p,{text:i.text3,mode:"link",url:"/pages/componentsB/tag/tag"},null,8,["text"])])),_:1})])),_:1}),d(m,{class:"u-demo-block"},{default:u((()=>[d(r,{class:"u-demo-block__title"},{default:u((()=>[y("横向步进滚动")])),_:1}),d(m,{class:"u-demo-block__content"},{default:u((()=>[d(p,{text:i.text4,step:!0,onClick:n.click},null,8,["text","onClick"])])),_:1})])),_:1}),d(m,{class:"u-demo-block"},{default:u((()=>[d(r,{class:"u-demo-block__title"},{default:u((()=>[y("纵向滚动")])),_:1}),d(m,{class:"u-demo-block__content"},{default:u((()=>[d(p,{text:i.text4,direction:"column",onClick:n.click},null,8,["text","onClick"])])),_:1})])),_:1}),d(m,{class:"u-demo-block"},{default:u((()=>[d(r,{class:"u-demo-block__title"},{default:u((()=>[y("自定义样式")])),_:1}),d(m,{class:"u-demo-block__content"},{default:u((()=>[d(p,{text:i.text1,color:"#ffffff",bgColor:"#f56c6c"},null,8,["text"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3fecde21"]]);export{P as default};
