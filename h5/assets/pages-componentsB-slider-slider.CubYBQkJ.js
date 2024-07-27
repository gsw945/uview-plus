import{l as e,n as t,m as l,f as a,s,x as i,o,c as u,w as d,b as n,F as r,a as c,z as h,u as m,h as p,j as v,t as b,v as g,i as f,a2 as _,r as V,k}from"./index-CtRXl1IR.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{r as C}from"./uni-app.es.BMjaqPx9.js";const S=y({name:"u-slider",mixins:[l,a,e({props:{min:{type:[Number,String],default:()=>t.slider.min},max:{type:[Number,String],default:()=>t.slider.max},step:{type:[Number,String],default:()=>t.slider.step},modelValue:{type:[String,Number],default:()=>t.slider.value},activeColor:{type:String,default:()=>t.slider.activeColor},inactiveColor:{type:String,default:()=>t.slider.inactiveColor},blockSize:{type:[Number,String],default:()=>t.slider.blockSize},blockColor:{type:String,default:()=>t.slider.blockColor},blockStyle:{type:Object,default:()=>t.slider.blockStyle},disabled:{type:Boolean,default:()=>t.slider.disabled},showValue:{type:Boolean,default:()=>t.slider.showValue},useNative:{type:Boolean,default:()=>t.slider.useNative},height:{type:String,default:()=>t.slider.height}}})],emits:["start","changing","change","update:modelValue"],data:()=>({startX:0,status:"end",newValue:0,distanceX:0,startValue:0,barStyle:{},sliderRect:{left:0,width:0}}),watch:{modelValue(e){"end"==this.status&&this.updateValue(this.modelValue,!1)}},created(){},mounted(){this.useNative||this.$uGetRect(".u-slider-inner").then((e=>{this.sliderRect=e,this.updateValue(this.modelValue,!1)}))},methods:{addStyle:s,getPx:i,changingHandler(e){const{value:t}=e.detail;this.$emit("update:modelValue",t),this.$emit("changing",t)},changeHandler(e){const{value:t}=e.detail;this.$emit("update:modelValue",t),this.$emit("change",t)},onTouchStart(e){if(this.disabled)return;this.startX=0;let t=e.touches[0];this.startX=t.clientX,this.startValue=this.format(this.modelValue),this.status="start"},onTouchMove(e){if(this.disabled)return;"start"==this.status&&this.$emit("start");let t=e.touches[0];this.distanceX=t.clientX-this.sliderRect.left,this.newValue=this.distanceX/this.sliderRect.width*(this.max-this.min)+parseFloat(this.min),this.status="moving",this.$emit("changing"),this.updateValue(this.newValue,!0)},onTouchEnd(){this.disabled||("moving"===this.status&&(this.updateValue(this.newValue,!1),this.$emit("change")),this.status="end")},updateValue(e,t){const l=this.format(e);l>this.max&&(l=this.max);let a={width:Math.min((l-this.min)/(this.max-this.min)*this.sliderRect.width,this.sliderRect.width)+"px"};1==t?a.transition="none":delete a.transition,this.$emit("update:modelValue",l),this.barStyle=a},format(e){return Math.round(Math.max(this.min,Math.min(e,this.max))/this.step)*this.step},onClick(e){if(this.disabled)return;const t=(e.detail.x-this.sliderRect.left)/this.sliderRect.width*100;this.updateValue(t,!1)}}},[["render",function(e,t,l,a,s,i){const V=f,k=_;return o(),u(V,{class:"u-slider",style:m([i.addStyle(e.customStyle)])},{default:d((()=>[e.useNative?(o(),u(k,{key:1,class:"u-slider__native",min:e.min,max:e.max,step:e.step,value:e.modelValue,activeColor:e.activeColor,backgroundColor:e.inactiveColor,blockSize:i.getPx(e.blockSize),blockColor:e.blockColor,showValue:e.showValue,disabled:e.disabled,onChanging:i.changingHandler,onChange:i.changeHandler},null,8,["min","max","step","value","activeColor","backgroundColor","blockSize","blockColor","showValue","disabled","onChanging","onChange"])):(o(),n(r,{key:0},[c(V,{class:h(["u-slider-inner",[e.disabled?"u-slider--disabled":""]]),onClick:i.onClick,style:m({backgroundColor:e.inactiveColor})},{default:d((()=>[c(V,{class:"u-slider__gap",style:m([s.barStyle,{height:e.height,backgroundColor:e.activeColor}])},{default:d((()=>[c(V,{class:"u-slider__button-wrap",onTouchstart:i.onTouchStart,onTouchmove:i.onTouchMove,onTouchend:i.onTouchEnd,onTouchcancel:i.onTouchEnd},{default:d((()=>[e.$slots.default||e.$slots.$default?p(e.$slots,"default",{key:0},void 0,!0):(o(),u(V,{key:1,class:"u-slider__button",style:m([e.blockStyle,{height:i.getPx(e.blockSize),width:i.getPx(e.blockSize),backgroundColor:e.blockColor}])},null,8,["style"]))])),_:3},8,["onTouchstart","onTouchmove","onTouchend","onTouchcancel"])])),_:3},8,["style"])])),_:3},8,["onClick","class","style"]),e.showValue?(o(),u(V,{key:0,class:"u-slider__show-value"},{default:d((()=>[v(b(e.modelValue),1)])),_:1})):g("",!0)],64))])),_:3},8,["style"])}],["__scopeId","data-v-e4352d27"]]);const x=y({data:()=>({useNative:!1,value1:30,value2:30,value3:30,value4:30,value5:30}),watch:{value1(e){}},methods:{moving(e){},click(e){},end(e){},start(e){}}},[["render",function(e,t,l,a,s,i){const n=k,r=C(V("up-slider"),S),h=f;return o(),u(h,{class:"u-page"},{default:d((()=>[c(h,{class:"u-demo-block"},{default:d((()=>[c(n,{class:"u-demo-block__title"},{default:d((()=>[v("基本案例")])),_:1}),c(h,{class:"u-page__slide-item"},{default:d((()=>[c(r,{useNative:s.useNative,modelValue:s.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value1=e)},null,8,["useNative","modelValue"])])),_:1})])),_:1}),c(h,{class:"u-demo-block"},{default:d((()=>[c(n,{class:"u-demo-block__title"},{default:d((()=>[v("自定义范围(10—50)")])),_:1}),c(h,{class:"u-page__slide-item"},{default:d((()=>[c(r,{useNative:s.useNative,modelValue:s.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value2=e),showValue:"",min:"10",max:"50"},null,8,["useNative","modelValue"])])),_:1})])),_:1}),c(h,{class:"u-demo-block"},{default:d((()=>[c(n,{class:"u-demo-block__title"},{default:d((()=>[v("指定步长(每次步进5)")])),_:1}),c(h,{class:"u-page__slide-item"},{default:d((()=>[c(r,{useNative:s.useNative,modelValue:s.value4,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value4=e),step:5},null,8,["useNative","modelValue"])])),_:1})])),_:1}),c(h,{class:"u-demo-block"},{default:d((()=>[c(n,{class:"u-demo-block__title"},{default:d((()=>[v("自定义样式")])),_:1}),c(h,{class:"u-page__slide-item"},{default:d((()=>[c(r,{modelValue:s.value5,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value5=e),activeColor:"#deab8a",blockColor:"#f47920",height:"4px"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-bb1f5910"]]);export{x as default};
