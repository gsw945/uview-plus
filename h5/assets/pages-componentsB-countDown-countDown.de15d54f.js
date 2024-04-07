import{o as t,c as e,w as i,k as s,a,g as o,t as m,h as n,i as l,d as u}from"./index-4f0c5e1d.js";import{m as c,a as r}from"./mixin.d0c91ebc.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as _}from"./uni-app.es.fcad82c0.js";import{_ as f}from"./u-icon.e9ca9d71.js";import{_ as h,a as p}from"./u-grid.1c2625b8.js";const g={props:{time:{type:[String,Number],default:()=>uni.$u.props.countDown.time},format:{type:String,default:()=>uni.$u.props.countDown.format},autoStart:{type:Boolean,default:()=>uni.$u.props.countDown.autoStart},millisecond:{type:Boolean,default:()=>uni.$u.props.countDown.millisecond}}};function T(t,e=2){let i=`${t}`;for(;i.length<e;)i=`0${i}`;return i}const k=1e3,D=6e4,w=36e5,S=24*w;function b(t){return{days:Math.floor(t/S),hours:Math.floor(t%S/w),minutes:Math.floor(t%w/D),seconds:Math.floor(t%D/k),milliseconds:Math.floor(t%k)}}const x=d({name:"u-count-down",mixins:[c,r,g],data:()=>({timer:null,timeData:b(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}),watch:{time(t){this.reset()}},mounted(){this.init()},emits:["change","finish"],methods:{init(){this.reset()},start(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick(){this.millisecond?this.microTick():this.macroTick()},macroTick(){this.clearTimeout(),this.timer=setTimeout((()=>{const t=this.getRemainTime();var e,i;e=t,i=this.remainTime,(Math.floor(e/1e3)!==Math.floor(i/1e3)||0===t)&&this.setRemainTime(t),0!==this.remainTime&&this.macroTick()}),30)},microTick(){this.clearTimeout(),this.timer=setTimeout((()=>{this.setRemainTime(this.getRemainTime()),0!==this.remainTime&&this.microTick()}),50)},getRemainTime(){return Math.max(this.endTime-Date.now(),0)},setRemainTime(t){this.remainTime=t;const e=b(t);this.$emit("change",e),this.formattedTime=function(t,e){let{days:i,hours:s,minutes:a,seconds:o,milliseconds:m}=e;return-1===t.indexOf("DD")?s+=24*i:t=t.replace("DD",T(i)),-1===t.indexOf("HH")?a+=60*s:t=t.replace("HH",T(s)),-1===t.indexOf("mm")?o+=60*a:t=t.replace("mm",T(a)),-1===t.indexOf("ss")?m+=1e3*o:t=t.replace("ss",T(o)),t.replace("SSS",T(m,3))}(this.format,e),t<=0&&(this.pause(),this.$emit("finish"))},reset(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause(){this.runing=!1,this.clearTimeout()},clearTimeout(){clearTimeout(this.timer),this.timer=null}},beforeUnmount(){this.clearTimeout()}},[["render",function(u,c,r,d,_,f){const h=n,p=l;return t(),e(p,{class:"u-count-down"},{default:i((()=>[s(u.$slots,"default",{},(()=>[a(h,{class:"u-count-down__text"},{default:i((()=>[o(m(_.formattedTime),1)])),_:1})]),!0)])),_:3})}],["__scopeId","data-v-1416e5a6"]]);const C=d({data:()=>({timeData:{}}),onLoad(){},methods:{start(){this.$refs.countDown.start()},pause(){this.$refs.countDown.pause()},reset(){this.$refs.countDown.reset()},onChange(t){this.timeData=t},finish(){console.log("finish")}}},[["render",function(s,c,r,d,g,T){const k=n,D=_(u("u-count-down"),x),w=l,S=_(u("u-icon"),f),b=_(u("u-grid-item"),h),C=_(u("u-grid"),p);return t(),e(w,{class:"u-page"},{default:i((()=>[a(w,{class:"u-demo-block"},{default:i((()=>[a(k,{class:"u-demo-block__title"},{default:i((()=>[o("基础用法")])),_:1}),a(w,{class:"u-demo-block__content"},{default:i((()=>[a(D,{time:108e6,format:"HH:mm:ss",autoStart:"",millisecond:"",onFinish:T.finish},null,8,["onFinish"])])),_:1})])),_:1}),a(w,{class:"u-demo-block"},{default:i((()=>[a(k,{class:"u-demo-block__title"},{default:i((()=>[o("自定义格式")])),_:1}),a(w,{class:"u-demo-block__content"},{default:i((()=>[a(D,{time:108e6,format:"DD:HH:mm:ss",autoStart:"",millisecond:"",onChange:T.onChange},{default:i((()=>[a(w,{class:"time"},{default:i((()=>[a(k,{class:"time__item"},{default:i((()=>[o(m(g.timeData.days)+" 天",1)])),_:1}),a(k,{class:"time__item"},{default:i((()=>[o(m(g.timeData.hours>10?g.timeData.hours:"0"+g.timeData.hours)+" 时",1)])),_:1}),a(k,{class:"time__item"},{default:i((()=>[o(m(g.timeData.minutes)+" 分",1)])),_:1}),a(k,{class:"time__item"},{default:i((()=>[o(m(g.timeData.seconds)+" 秒",1)])),_:1})])),_:1})])),_:1},8,["onChange"])])),_:1})])),_:1}),a(w,{class:"u-demo-block"},{default:i((()=>[a(k,{class:"u-demo-block__title"},{default:i((()=>[o("毫秒级渲染")])),_:1}),a(w,{class:"u-demo-block__content"},{default:i((()=>[a(D,{time:108e6,format:"HH:mm:ss:SSS",autoStart:"",millisecond:""})])),_:1})])),_:1}),a(w,{class:"u-demo-block"},{default:i((()=>[a(k,{class:"u-demo-block__title"},{default:i((()=>[o("自定义样式")])),_:1}),a(w,{class:"u-demo-block__content"},{default:i((()=>[a(D,{time:108e6,format:"HH:mm:ss",autoStart:"",millisecond:"",onChange:T.onChange},{default:i((()=>[a(w,{class:"time"},{default:i((()=>[a(w,{class:"time__custom"},{default:i((()=>[a(k,{class:"time__custom__item"},{default:i((()=>[o(m(g.timeData.hours>10?g.timeData.hours:"0"+g.timeData.hours),1)])),_:1})])),_:1}),a(k,{class:"time__doc"},{default:i((()=>[o(":")])),_:1}),a(w,{class:"time__custom"},{default:i((()=>[a(k,{class:"time__custom__item"},{default:i((()=>[o(m(g.timeData.minutes),1)])),_:1})])),_:1}),a(k,{class:"time__doc"},{default:i((()=>[o(":")])),_:1}),a(w,{class:"time__custom"},{default:i((()=>[a(k,{class:"time__custom__item"},{default:i((()=>[o(m(g.timeData.seconds),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["onChange"])])),_:1})])),_:1}),a(w,{class:"u-demo-block"},{default:i((()=>[a(k,{class:"u-demo-block__title"},{default:i((()=>[o("手动控制")])),_:1}),a(w,{class:"u-demo-block__content"},{default:i((()=>[a(D,{ref:"countDown",time:3e3,format:"ss:SSS",autoStart:!1,millisecond:""},null,512)])),_:1}),a(C,{border:!0,customStyle:{marginTop:"10px"}},{default:i((()=>[a(b,{onClick:T.reset},{default:i((()=>[a(w,{class:"count-down__grid-item"},{default:i((()=>[a(S,{name:"reload",size:22}),a(k,{class:"count-down__grid-item__grid-text"},{default:i((()=>[o("重置")])),_:1})])),_:1})])),_:1},8,["onClick"]),a(b,{onClick:T.start},{default:i((()=>[a(w,{class:"count-down__grid-item"},{default:i((()=>[a(w,{class:"count-down__grid-item__circle"},{default:i((()=>[a(S,{color:"#fff",name:"play-right-fill",size:22})])),_:1}),a(k,{class:"count-down__grid-item__grid-text"},{default:i((()=>[o("开始")])),_:1})])),_:1})])),_:1},8,["onClick"]),a(b,{onClick:T.pause},{default:i((()=>[a(w,{class:"count-down__grid-item"},{default:i((()=>[a(S,{name:"pause-circle",size:22}),a(k,{class:"count-down__grid-item__grid-text"},{default:i((()=>[o("暂停")])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-039b384a"]]);export{C as default};
