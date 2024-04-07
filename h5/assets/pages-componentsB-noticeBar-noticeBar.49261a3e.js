import{d as t,o as e,c as o,w as i,k as n,a as l,f as c,b as u,F as a,r as s,n as r,g as d,t as p,i as m,h as f,S as _,q as k}from"./index-4f0c5e1d.js";import{_ as y}from"./u-icon.e9ca9d71.js";import{r as h}from"./uni-app.es.fcad82c0.js";import{m as b,a as x}from"./mixin.d0c91ebc.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const S=g({mixins:[b,x,{props:{text:{type:[Array],default:()=>uni.$u.props.columnNotice.text},icon:{type:String,default:()=>uni.$u.props.columnNotice.icon},mode:{type:String,default:()=>uni.$u.props.columnNotice.mode},color:{type:String,default:()=>uni.$u.props.columnNotice.color},bgColor:{type:String,default:()=>uni.$u.props.columnNotice.bgColor},fontSize:{type:[String,Number],default:()=>uni.$u.props.columnNotice.fontSize},speed:{type:[String,Number],default:()=>uni.$u.props.columnNotice.speed},step:{type:Boolean,default:()=>uni.$u.props.columnNotice.step},duration:{type:[String,Number],default:()=>uni.$u.props.columnNotice.duration},disableTouch:{type:Boolean,default:()=>uni.$u.props.columnNotice.disableTouch}}}],watch:{text:{immediate:!0,handler(t,e){uni.$u.test.array(t)||uni.$u.error("noticebar组件direction为column时，要求text参数为数组形式")}}},computed:{textStyle(){let t={};return t.color=this.color,t.fontSize=uni.$u.addUnit(this.fontSize),t},vertical(){return"horizontal"!=this.mode}},data:()=>({index:0}),emits:["click","close"],methods:{noticeChange(t){this.index=t.detail.current},clickHandler(){this.$emit("click",this.index)},close(){this.$emit("close")}}},[["render",function(b,x,g,S,$,C){const w=h(t("u-icon"),y),v=m,N=f,z=_,B=k;return e(),o(v,{class:"u-notice",onClick:C.clickHandler},{default:i((()=>[n(b.$slots,"icon",{},(()=>[b.icon?(e(),o(v,{key:0,class:"u-notice__left-icon"},{default:i((()=>[l(w,{name:b.icon,color:b.color,size:"19"},null,8,["name","color"])])),_:1})):c("v-if",!0)]),!0),l(B,{"disable-touch":b.disableTouch,vertical:!b.step,circular:"",interval:b.duration,autoplay:!0,class:"u-notice__swiper",onChange:C.noticeChange},{default:i((()=>[(e(!0),u(a,null,s(b.text,((t,n)=>(e(),o(z,{key:n,class:"u-notice__swiper__item"},{default:i((()=>[l(N,{class:"u-notice__swiper__item__text u-line-1",style:r([C.textStyle])},{default:i((()=>[d(p(t),1)])),_:2},1032,["style"])])),_:2},1024)))),128))])),_:1},8,["disable-touch","vertical","interval","onChange"]),["link","closable"].includes(b.mode)?(e(),o(v,{key:0,class:"u-notice__right-icon"},{default:i((()=>["link"===b.mode?(e(),o(w,{key:0,name:"arrow-right",size:17,color:b.color},null,8,["color"])):c("v-if",!0),"closable"===b.mode?(e(),o(w,{key:1,name:"close",size:16,color:b.color,onClick:C.close},null,8,["color","onClick"])):c("v-if",!0)])),_:1})):c("v-if",!0)])),_:3},8,["onClick"])}],["__scopeId","data-v-7da6f43e"]]);const $=g({name:"u-row-notice",mixins:[b,x,{props:{text:{type:String,default:()=>uni.$u.props.rowNotice.text},icon:{type:String,default:()=>uni.$u.props.rowNotice.icon},mode:{type:String,default:()=>uni.$u.props.rowNotice.mode},color:{type:String,default:()=>uni.$u.props.rowNotice.color},bgColor:{type:String,default:()=>uni.$u.props.rowNotice.bgColor},fontSize:{type:[String,Number],default:()=>uni.$u.props.rowNotice.fontSize},speed:{type:[String,Number],default:()=>uni.$u.props.rowNotice.speed}}}],data:()=>({animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}),watch:{text:{immediate:!0,handler(t,e){this.vue(),uni.$u.test.string(t)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")}},fontSize(){this.vue()},speed(){this.vue()}},computed:{textStyle(){let t={};return t.color=this.color,t.fontSize=uni.$u.addUnit(this.fontSize),t},animationStyle(){let t={};return t.animationDuration=this.animationDuration,t.animationPlayState=this.animationPlayState,t},innerText(){let t=[];const e=this.text.split("");for(let o=0;o<e.length;o+=20)t.push(e.slice(o,o+20).join(""));return t}},mounted(){this.init()},emits:["click","close"],methods:{init(){this.vue(),uni.$u.test.string(this.text)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")},async vue(){let t=0;await uni.$u.sleep(),t=(await this.$uGetRect(".u-notice__content__text")).width,(await this.$uGetRect(".u-notice__content")).width,this.animationDuration=t/uni.$u.getPx(this.speed)+"s",this.animationPlayState="paused",setTimeout((()=>{this.animationPlayState="running"}),10)},async nvue(){},loopAnimation(t,e){},getNvueRect(t){},clickHandler(t){this.$emit("click")},close(){this.$emit("close")}}},[["render",function(_,k,b,x,g,S){const $=h(t("u-icon"),y),C=m,w=f;return e(),o(C,{class:"u-notice",onClick:S.clickHandler},{default:i((()=>[n(_.$slots,"icon",{},(()=>[_.icon?(e(),o(C,{key:0,class:"u-notice__left-icon"},{default:i((()=>[l($,{name:_.icon,color:_.color,size:"19"},null,8,["name","color"])])),_:1})):c("v-if",!0)]),!0),l(C,{class:"u-notice__content",ref:"u-notice__content"},{default:i((()=>[l(C,{ref:"u-notice__content__text",class:"u-notice__content__text",style:r([S.animationStyle])},{default:i((()=>[(e(!0),u(a,null,s(S.innerText,((t,n)=>(e(),o(w,{key:n,style:r([S.textStyle])},{default:i((()=>[d(p(t),1)])),_:2},1032,["style"])))),128))])),_:1},8,["style"])])),_:1},512),["link","closable"].includes(_.mode)?(e(),o(C,{key:0,class:"u-notice__right-icon"},{default:i((()=>["link"===_.mode?(e(),o($,{key:0,name:"arrow-right",size:17,color:_.color},null,8,["color"])):c("v-if",!0),"closable"===_.mode?(e(),o($,{key:1,onClick:S.close,name:"close",size:16,color:_.color},null,8,["onClick","color"])):c("v-if",!0)])),_:1})):c("v-if",!0)])),_:3},8,["onClick"])}],["__scopeId","data-v-093aab01"]]);const C=g({name:"u-notice-bar",mixins:[b,x,{props:{text:{type:[Array,String],default:()=>uni.$u.props.noticeBar.text},direction:{type:String,default:()=>uni.$u.props.noticeBar.direction},step:{type:Boolean,default:()=>uni.$u.props.noticeBar.step},icon:{type:String,default:()=>uni.$u.props.noticeBar.icon},mode:{type:String,default:()=>uni.$u.props.noticeBar.mode},color:{type:String,default:()=>uni.$u.props.noticeBar.color},bgColor:{type:String,default:()=>uni.$u.props.noticeBar.bgColor},speed:{type:[String,Number],default:()=>uni.$u.props.noticeBar.speed},fontSize:{type:[String,Number],default:()=>uni.$u.props.noticeBar.fontSize},duration:{type:[String,Number],default:()=>uni.$u.props.noticeBar.duration},disableTouch:{type:Boolean,default:()=>uni.$u.props.noticeBar.disableTouch},url:{type:String,default:()=>uni.$u.props.noticeBar.url},linkType:{type:String,default:()=>uni.$u.props.noticeBar.linkType}}}],data:()=>({show:!0}),emits:["click","close"],methods:{click(t){this.$emit("click",t),this.url&&this.linkType&&this.openPage()},close(){this.show=!1,this.$emit("close")}}},[["render",function(n,l,u,a,s,d){const p=h(t("u-column-notice"),S),f=h(t("u-row-notice"),$),_=m;return s.show?(e(),o(_,{key:0,class:"u-notice-bar",style:r([{backgroundColor:n.bgColor},n.$u.addStyle(n.customStyle)])},{default:i((()=>["column"===n.direction||"row"===n.direction&&n.step?(e(),o(p,{key:0,color:n.color,bgColor:n.bgColor,text:n.text,mode:n.mode,step:n.step,icon:n.icon,"disable-touch":n.disableTouch,fontSize:n.fontSize,duration:n.duration,onClose:d.close,onClick:d.click},null,8,["color","bgColor","text","mode","step","icon","disable-touch","fontSize","duration","onClose","onClick"])):(e(),o(f,{key:1,color:n.color,bgColor:n.bgColor,text:n.text,mode:n.mode,fontSize:n.fontSize,speed:n.speed,url:n.url,linkType:n.linkType,icon:n.icon,onClose:d.close,onClick:d.click},null,8,["color","bgColor","text","mode","fontSize","speed","url","linkType","icon","onClose","onClick"]))])),_:1},8,["style"])):c("v-if",!0)}],["__scopeId","data-v-71aee75a"]]);const w=g({data:()=>({text1:"uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用",text2:"uView UI众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨",text3:"uView UI收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍",text4:["寒雨连江夜入吴","平明送客楚山孤","洛阳亲友如相问","一片冰心在玉壶"],text5:"涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川"}),onLoad(){},methods:{click(t){console.log(t)}}},[["render",function(n,c,u,a,s,r){const p=f,_=h(t("u-notice-bar"),C),k=m;return e(),o(k,{class:"u-page"},{default:i((()=>[l(k,{class:"u-demo-block"},{default:i((()=>[l(p,{class:"u-demo-block__title"},{default:i((()=>[d("基础功能")])),_:1}),l(k,{class:"u-demo-block__content"},{default:i((()=>[l(_,{text:s.text1},null,8,["text"])])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:i((()=>[l(p,{class:"u-demo-block__title"},{default:i((()=>[d("可关闭")])),_:1}),l(k,{class:"u-demo-block__content"},{default:i((()=>[l(_,{text:s.text5,mode:"closable"},null,8,["text"])])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:i((()=>[l(p,{class:"u-demo-block__title"},{default:i((()=>[d("自定义横向滚动速度")])),_:1}),l(k,{class:"u-demo-block__content"},{default:i((()=>[l(_,{text:s.text2,speed:"250",mode:"closable"},null,8,["text"])])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:i((()=>[l(p,{class:"u-demo-block__title"},{default:i((()=>[d("可跳转(点击右箭头)")])),_:1}),l(k,{class:"u-demo-block__content"},{default:i((()=>[l(_,{text:s.text3,mode:"link",url:"/pages/componentsB/tag/tag"},null,8,["text"])])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:i((()=>[l(p,{class:"u-demo-block__title"},{default:i((()=>[d("横向步进滚动")])),_:1}),l(k,{class:"u-demo-block__content"},{default:i((()=>[l(_,{text:s.text4,step:!0,onClick:r.click},null,8,["text","onClick"])])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:i((()=>[l(p,{class:"u-demo-block__title"},{default:i((()=>[d("纵向滚动")])),_:1}),l(k,{class:"u-demo-block__content"},{default:i((()=>[l(_,{text:s.text4,direction:"column",onClick:r.click},null,8,["text","onClick"])])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:i((()=>[l(p,{class:"u-demo-block__title"},{default:i((()=>[d("自定义样式")])),_:1}),l(k,{class:"u-demo-block__content"},{default:i((()=>[l(_,{text:s.text1,color:"#ffffff",bgColor:"#f56c6c"},null,8,["text"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-691cd540"]]);export{w as default};
