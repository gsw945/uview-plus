import{h as t,j as e,m as s,k as o,l as a,v as i,x as n,r as l,o as c,c as r,w as u,a as d,u as p,b as h,d as f,F as _,i as m,q as b,s as g,f as w,t as y,g as x,y as k}from"./index-C3UXxwfW.js";import{_ as C}from"./up-icon.BrIVCe5a.js";import{r as S}from"./uni-app.es.CqYlZVXb.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";const X=t({methods:{getTouchPoint:t=>t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX||0,y:t.clientY||0}:{x:0,y:0},resetTouchStatus(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart(t){this.resetTouchStatus();const e=this.getTouchPoint(t);this.startX=e.x,this.startY=e.y},touchMove(t){const e=this.getTouchPoint(t);var s,o;this.deltaX=e.x-this.startX,this.deltaY=e.y-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||(s=this.offsetX,o=this.offsetY,s>o&&s>10?"horizontal":o>s&&o>10?"vertical":"")}}}),z=t({props:{show:{type:Boolean,default:()=>e.swipeActionItem.show},name:{type:[String,Number],default:()=>e.swipeActionItem.name},disabled:{type:Boolean,default:()=>e.swipeActionItem.disabled},autoClose:{type:Boolean,default:()=>e.swipeActionItem.autoClose},threshold:{type:Number,default:()=>e.swipeActionItem.threshold},options:{type:Array,default:()=>e.swipeActionItem.rightOptions},duration:{type:[String,Number],default:()=>e.swipeActionItem.duration}}});function A(t){return t.toString().indexOf("s")>=0?t:t>30?t+"ms":t+"s"}function I(t,e,s){e.getState(),s.selectAllComponents(".up-swipe-action-item__right__button"),e.requestAnimationFrame((function(){e.setStyle({transition:"none",transform:"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)"})}))}function T(t,e){var s=t.getState();e.selectAllComponents(".up-swipe-action-item__right__button");var o=A(s.duration),a=-s.buttonsWidth;t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+o,transform:"translateX("+a+"px)","-webkit-transform":"translateX("+a+"px)"})})),Y("open",t,e)}function Y(t,e,s){e.getState().status=t,s.callMethod("setState",t)}function M(t,e){var s=t.getState(),o=e.selectAllComponents(".up-swipe-action-item__right__button"),a=o.length,i=A(s.duration);t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+i,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"});for(var e=a-1;e>=0;e--)o[e].setStyle({transition:"transform "+i,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"})})),Y("close",t,e)}const P={touchstart:function(t,e){var s=t.instance.getState();if(!s.disabled){var o=t.touches;o&&o.length>1||(s.moving=!0,s.startX=o[0].pageX,s.startY=o[0].pageY,e.callMethod("closeOther"))}},touchmove:function(t,e){var s=t.instance,o=s.getState();if(!o.disabled&&o.moving){var a=t.touches,i=a[0].pageX,n=a[0].pageY,l=i-o.startX,c=n-o.startY,r=o.buttonsWidth;(Math.abs(l)>Math.abs(c)||Math.abs(l)>o.threshold)&&(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()),Math.abs(l)<Math.abs(c)||("open"===o.status?(l<0&&(l=0),l>r&&(l=r),I(-r+l,s,e)):(l>0&&(l=0),Math.abs(l)>r&&(l=-r),I(l,s,e)))}},touchend:function(t,e){var s=t.instance,o=s.getState();if(o.moving&&!o.disabled){var a=t.changedTouches?t.changedTouches[0]:{},i=a.pageX;a.pageY;var n=i-o.startX;if("open"===o.status){if(n<0)return;if(0===n)return M(s,e);Math.abs(n)<o.threshold?T(s,e):M(s,e)}else{if(n>0)return;Math.abs(n)<o.threshold?M(s,e):T(s,e)}}},sizeChange:function(t,e,s,o){var a=o.getState();if(a&&t){if(a.disabled=t.disabled,a.duration=t.duration,a.show=t.show,a.threshold=t.threshold,a.buttons=t.buttons,a.buttons)for(var i=a.buttons.length,n=0,l=t.buttons,c=0;c<i;c++)n+=l[c].width;a.buttonsWidth=n}},statusChange:function(t,e,s,o){var a=o.getState();a.disabled||("close"===t&&"open"===a.status?M(o,s):"open"===t&&"close"===a.status&&T(o,s))}},R=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("wxs"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxs=P}})},D={name:"up-swipe-action-item",emits:["click"],mixins:[s,o,X,{methods:{closeHandler(){this.status="close"},setState(t){this.status=t},closeOther(){this.parent&&this.parent.closeOther(this)}}},z],data:()=>({size:{},parentData:{autoClose:!0},status:"close",sliderStyle:{}}),watch:{wxsInit(t,e){this.queryRect()},status(t){"open"===t&&this.parent&&this.parent.setOpendItem(this)}},computed:{wxsInit(){return[this.disabled,this.autoClose,this.threshold,this.options,this.duration]}},mounted(){this.init()},beforeUmount(){this.closeHandler()},methods:{addUnit:a,getPx:i,init(){this.updateParentData(),n().then((()=>{this.queryRect()}))},updateParentData(){this.getParentData("up-swipe-action")},queryRect(){this.$uGetRect(".up-swipe-action-item__right__button",!0).then((t=>{this.size={buttons:t,show:this.show,disabled:this.disabled,threshold:this.threshold,duration:this.duration}}))},buttonClickHandler(t,e){this.$emit("click",{index:e,name:this.name})}}};R(D);const $=v(D,[["render",function(t,e,s,o,a,i){const n=S(l("up-icon"),C),k=x,v=m;return c(),r(v,{class:"up-swipe-action-item",ref:"up-swipe-action-item"},{default:u((()=>[d(v,{class:"up-swipe-action-item__right"},{default:u((()=>[p(t.$slots,"button",{},(()=>[(c(!0),h(_,null,f(t.options,((t,e)=>(c(),r(v,{key:e,class:"up-swipe-action-item__right__button",ref_for:!0,ref:`up-swipe-action-item__right__button-${e}`,style:b([{alignItems:t.style&&t.style.borderRadius?"center":"stretch"}]),onClick:s=>i.buttonClickHandler(t,e)},{default:u((()=>[d(v,{class:"up-swipe-action-item__right__button__wrapper",style:b([{backgroundColor:t.style&&t.style.backgroundColor?t.style.backgroundColor:"#C7C6CD",borderRadius:t.style&&t.style.borderRadius?t.style.borderRadius:"0",padding:t.style&&t.style.borderRadius?"0":"0 15px"},t.style])},{default:u((()=>[t.icon?(c(),r(n,{key:0,name:t.icon,color:t.style&&t.style.color?t.style.color:"#ffffff",size:t.iconSize?i.addUnit(t.iconSize):t.style&&t.style.fontSize?1.2*i.getPx(t.style.fontSize):17,customStyle:{marginRight:t.text?"2px":0}},null,8,["name","color","size","customStyle"])):g("",!0),t.text?(c(),r(k,{key:1,class:"up-swipe-action-item__right__button__wrapper__text up-line-1",style:b([{color:t.style&&t.style.color?t.style.color:"#ffffff",fontSize:t.style&&t.style.fontSize?t.style.fontSize:"16px",lineHeight:t.style&&t.style.fontSize?t.style.fontSize:"16px"}])},{default:u((()=>[w(y(t.text),1)])),_:2},1032,["style"])):g("",!0)])),_:2},1032,["style"])])),_:2},1032,["style","onClick"])))),128))]),!0)])),_:3}),d(v,{class:"up-swipe-action-item__content",onTouchstart:t.wxs.touchstart,onTouchmove:t.wxs.touchmove,onTouchend:t.wxs.touchend,status:a.status,"change:status":t.wxs.statusChange,size:a.size,"change:size":t.wxs.sizeChange},{default:u((()=>[p(t.$slots,"default",{},void 0,!0)])),_:3},8,["onTouchstart","onTouchmove","onTouchend","status","change:status","size","change:size"])])),_:3},512)}],["__scopeId","data-v-addbff18"]]);const O=v({name:"up-swipe-action",mixins:[s,o,t({props:{autoClose:{type:Boolean,default:()=>e.swipeAction.autoClose},opendItem:{type:Boolean,default:!1}}})],data:()=>({}),provide(){return{swipeAction:this}},computed:{parentData(){return[this.autoClose]}},emits:["opendItem:update"],watch:{parentData(){this.children.length&&this.children.map((t=>{"function"==typeof t.updateParentData&&t.updateParentData()}))},opendItem(t){0==t&&this.closeAll()}},created(){this.children=[]},methods:{closeOther(t){this.autoClose&&this.children.map(((e,s)=>{t!==e&&e.closeHandler()}))},closeAll(){this.children.map(((t,e)=>{t.closeHandler()}))},setOpendItem(t){this.$emit("opendItem:update",!0)}}},[["render",function(t,e,s,o,a,i){const n=m;return c(),r(n,{class:"up-swipe-action"},{default:u((()=>[p(t.$slots,"default")])),_:3})}]]);const q=v({data:()=>({show1:!0,moveX:0,showText:"当前状态：关",showStatus:!1,options1:[{text:"删除",style:{backgroundColor:"#f56c6c"}}],options2:[{text:"收藏",style:{backgroundColor:"#3c9cff"}},{text:"删除",style:{backgroundColor:"#f56c6c"}}],options3:[{text:"收藏",icon:"star-fill",iconSize:"20",style:{backgroundColor:"#f9ae3d"}}],options4:[{text:"禁用状态",disabled:!0,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]},{text:"正常状态",disabled:!1,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]},{text:"自动关闭",disabled:!1,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]}],options5:[{icon:"trash-fill",style:{backgroundColor:"#f56c6c",width:"40px",height:"40px",borderRadius:"100px",margin:"0 6px"}},{icon:"heart-fill",style:{backgroundColor:"#5ac725",width:"40px",height:"40px",borderRadius:"100px",margin:"0 6px"}}]}),methods:{click(t){console.log("click",t),uni.showModal({title:"温馨提示",content:"确定要删除吗？",success:t=>{t.confirm&&(this.show1=!1)}})}}},[["render",function(t,e,s,o,a,i){const n=x,p=m,b=S(l("up-swipe-action-item"),$),C=S(l("up-swipe-action"),O);return c(),r(p,{class:"u-page"},{default:u((()=>[d(p,{class:"u-demo-block"},{default:u((()=>[d(n,{class:"u-demo-block__title"},{default:u((()=>[w("演示案例")])),_:1}),d(p,{class:"u-page__swipe-action-item"},{default:u((()=>[d(C,null,{default:u((()=>[a.show1?(c(),r(b,{key:0,show:!0,options:a.options1,onClick:i.click},{default:u((()=>[d(p,{class:"swipe-action u-border-top u-border-bottom"},{default:u((()=>[d(p,{class:"swipe-action__content"},{default:u((()=>[d(n,{class:"swipe-action__content__text"},{default:u((()=>[w("基础使用")])),_:1})])),_:1})])),_:1})])),_:1},8,["options","onClick"])):g("",!0)])),_:1})])),_:1})])),_:1}),d(p,{class:"u-demo-block"},{default:u((()=>[d(n,{class:"u-demo-block__title"},{default:u((()=>[w("按钮组")])),_:1}),d(p,{class:"u-page__swipe-action-item"},{default:u((()=>[d(C,null,{default:u((()=>[d(b,{options:a.options2},{default:u((()=>[d(p,{class:"swipe-action u-border-top u-border-bottom"},{default:u((()=>[d(p,{class:"swipe-action__content"},{default:u((()=>[d(n,{class:"swipe-action__content__text"},{default:u((()=>[w("两个按钮并列")])),_:1})])),_:1})])),_:1})])),_:1},8,["options"])])),_:1})])),_:1})])),_:1}),d(p,{class:"u-demo-block"},{default:u((()=>[d(n,{class:"u-demo-block__title"},{default:u((()=>[w("带图标")])),_:1}),d(p,{class:"u-page__swipe-action-item"},{default:u((()=>[d(C,null,{default:u((()=>[d(b,{options:a.options3},{default:u((()=>[d(p,{class:"swipe-action u-border-top u-border-bottom"},{default:u((()=>[d(p,{class:"swipe-action__content"},{default:u((()=>[d(n,{class:"swipe-action__content__text"},{default:u((()=>[w("自定义图标")])),_:1})])),_:1})])),_:1})])),_:1},8,["options"])])),_:1})])),_:1})])),_:1}),d(p,{class:"u-demo-block"},{default:u((()=>[d(n,{class:"u-demo-block__title"},{default:u((()=>[w("组合使用")])),_:1}),d(p,{class:"u-page__swipe-action-item"},{default:u((()=>[d(C,null,{default:u((()=>[(c(!0),h(_,null,f(a.options4,((t,e)=>(c(),r(b,{options:t.options,disabled:t.disabled,key:e},{default:u((()=>[d(p,{class:k(["swipe-action u-border-top",[e===a.options4.length-1&&"u-border-bottom"]])},{default:u((()=>[d(p,{class:"swipe-action__content"},{default:u((()=>[d(n,{class:"swipe-action__content__text"},{default:u((()=>[w(y(t.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1032,["options","disabled"])))),128))])),_:1})])),_:1})])),_:1}),d(p,{class:"u-demo-block"},{default:u((()=>[d(n,{class:"u-demo-block__title"},{default:u((()=>[w("自定义按钮形状")])),_:1}),d(p,{class:"u-page__swipe-action-item"},{default:u((()=>[d(C,null,{default:u((()=>[d(b,{options:a.options5},{default:u((()=>[d(p,{class:"swipe-action u-border-top u-border-bottom"},{default:u((()=>[d(p,{class:"swipe-action__content"},{default:u((()=>[d(n,{class:"swipe-action__content__text"},{default:u((()=>[w("圆形按钮")])),_:1})])),_:1})])),_:1})])),_:1},8,["options"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-00e546ca"]]);export{q as default};
