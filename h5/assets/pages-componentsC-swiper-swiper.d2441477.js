import{o as e,c as i,w as t,l as r,n as s,a as u,f as n,b as a,F as o,r as l,i as p,d as c,g as d,t as w,k as g,e as m,A as _,h,S as y,q as v}from"./index-4f0c5e1d.js";import{_ as f}from"./u-loading-icon.b1b77ee0.js";import{r as $}from"./uni-app.es.fcad82c0.js";import{m as k,a as b}from"./mixin.d0c91ebc.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as C}from"./u-gap.7c7ec09c.js";const S=I({name:"u-swiper-indicator",mixins:[k,b,{props:{length:{type:[String,Number],default:()=>uni.$u.props.swiperIndicator.length},current:{type:[String,Number],default:()=>uni.$u.props.swiperIndicator.current},indicatorActiveColor:{type:String,default:()=>uni.$u.props.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:()=>uni.$u.props.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:()=>uni.$u.props.swiperIndicator.indicatorMode}}}],data:()=>({lineWidth:22}),computed:{lineStyle(){let e={};return e.width=uni.$u.addUnit(this.lineWidth),e.transform=`translateX(${uni.$u.addUnit(this.current*this.lineWidth)})`,e.backgroundColor=this.indicatorActiveColor,e},dotStyle(){return e=>{let i={};return i.backgroundColor=e===this.current?this.indicatorActiveColor:this.indicatorInactiveColor,i}}}},[["render",function(c,d,w,g,m,_){const h=p;return e(),i(h,{class:"u-swiper-indicator"},{default:t((()=>["line"===c.indicatorMode?(e(),i(h,{key:0,class:r(["u-swiper-indicator__wrapper",[`u-swiper-indicator__wrapper--${c.indicatorMode}`]]),style:s({width:c.$u.addUnit(m.lineWidth*c.length),backgroundColor:c.indicatorInactiveColor})},{default:t((()=>[u(h,{class:"u-swiper-indicator__wrapper--line__bar",style:s([_.lineStyle])},null,8,["style"])])),_:1},8,["class","style"])):n("v-if",!0),"dot"===c.indicatorMode?(e(),i(h,{key:1,class:"u-swiper-indicator__wrapper"},{default:t((()=>[(e(!0),a(o,null,l(c.length,((t,u)=>(e(),i(h,{class:r(["u-swiper-indicator__wrapper__dot",[u===c.current&&"u-swiper-indicator__wrapper__dot--active"]]),key:u,style:s([_.dotStyle(u)])},null,8,["class","style"])))),128))])),_:1})):n("v-if",!0)])),_:1})}],["__scopeId","data-v-19dff3b0"]]);const M=I({name:"u-swiper",mixins:[k,b,{props:{list:{type:Array,default:()=>uni.$u.props.swiper.list},indicator:{type:Boolean,default:()=>uni.$u.props.swiper.indicator},indicatorActiveColor:{type:String,default:()=>uni.$u.props.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:()=>uni.$u.props.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:()=>uni.$u.props.swiper.indicatorStyle},indicatorMode:{type:String,default:()=>uni.$u.props.swiper.indicatorMode},autoplay:{type:Boolean,default:()=>uni.$u.props.swiper.autoplay},current:{type:[String,Number],default:()=>uni.$u.props.swiper.current},currentItemId:{type:String,default:()=>uni.$u.props.swiper.currentItemId},interval:{type:[String,Number],default:()=>uni.$u.props.swiper.interval},duration:{type:[String,Number],default:()=>uni.$u.props.swiper.duration},circular:{type:Boolean,default:()=>uni.$u.props.swiper.circular},previousMargin:{type:[String,Number],default:()=>uni.$u.props.swiper.previousMargin},nextMargin:{type:[String,Number],default:()=>uni.$u.props.swiper.nextMargin},acceleration:{type:Boolean,default:()=>uni.$u.props.swiper.acceleration},displayMultipleItems:{type:Number,default:()=>uni.$u.props.swiper.displayMultipleItems},easingFunction:{type:String,default:()=>uni.$u.props.swiper.easingFunction},keyName:{type:String,default:()=>uni.$u.props.swiper.keyName},imgMode:{type:String,default:()=>uni.$u.props.swiper.imgMode},height:{type:[String,Number],default:()=>uni.$u.props.swiper.height},bgColor:{type:String,default:()=>uni.$u.props.swiper.bgColor},radius:{type:[String,Number],default:()=>uni.$u.props.swiper.radius},loading:{type:Boolean,default:()=>uni.$u.props.swiper.loading},showTitle:{type:Boolean,default:()=>uni.$u.props.swiper.showTitle}}}],data:()=>({currentIndex:0}),watch:{current(e,i){e!==i&&(this.currentIndex=e)}},emits:["click","change"],computed:{itemStyle(){return e=>{const i={};return this.nextMargin&&this.previousMargin&&(i.borderRadius=uni.$u.addUnit(this.radius),e!==this.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType(e){return"string"==typeof e?uni.$u.test.video(this.getSource(e))?"video":"image":"object"==typeof e&&this.keyName?e.type?"image"===e.type?"image":"video"===e.type?"video":"image":uni.$u.test.video(this.getSource(e))?"video":"image":void 0},getSource(e){return"string"==typeof e?e:"object"==typeof e&&this.keyName?e[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change(e){const{current:i}=e.detail;this.pauseVideo(this.currentIndex),this.currentIndex=i,this.$emit("change",e.detail)},pauseVideo(e){const i=this.getSource(this.list[e]);if(uni.$u.test.video(i)){uni.createVideoContext(`video-${e}`,this).pause()}},getPoster:e=>"object"==typeof e&&e.poster?e.poster:"",clickHandler(e){this.$emit("click",e)}}},[["render",function(r,k,b,I,C,M){const x=$(c("u-loading-icon"),f),N=p,j=m,U=_,A=h,T=y,B=v,F=$(c("u-swiper-indicator"),S);return e(),i(N,{class:"u-swiper",style:s({backgroundColor:r.bgColor,height:r.$u.addUnit(r.height),borderRadius:r.$u.addUnit(r.radius)})},{default:t((()=>[r.loading?(e(),i(N,{key:0,class:"u-swiper__loading"},{default:t((()=>[u(x,{mode:"circle"})])),_:1})):(e(),i(B,{key:1,class:"u-swiper__wrapper",style:s({height:r.$u.addUnit(r.height)}),onChange:M.change,circular:r.circular,interval:r.interval,duration:r.duration,autoplay:r.autoplay,current:r.current,currentItemId:r.currentItemId,previousMargin:r.$u.addUnit(r.previousMargin),nextMargin:r.$u.addUnit(r.nextMargin),acceleration:r.acceleration,displayMultipleItems:r.displayMultipleItems,easingFunction:r.easingFunction},{default:t((()=>[(e(!0),a(o,null,l(r.list,((a,o)=>(e(),i(T,{class:"u-swiper__wrapper__item",key:o},{default:t((()=>[u(N,{class:"u-swiper__wrapper__item__wrapper",style:s([M.itemStyle(o)])},{default:t((()=>[n(" 在nvue中，image图片的宽度默认为屏幕宽度，需要通过flex:1撑开，另外必须设置高度才能显示图片 "),"image"===M.getItemType(a)?(e(),i(j,{key:0,class:"u-swiper__wrapper__item__wrapper__image",src:M.getSource(a),mode:r.imgMode,onClick:e=>M.clickHandler(o),style:s({height:r.$u.addUnit(r.height),borderRadius:r.$u.addUnit(r.radius)})},null,8,["src","mode","onClick","style"])):n("v-if",!0),"video"===M.getItemType(a)?(e(),i(U,{key:1,class:"u-swiper__wrapper__item__wrapper__video",id:`video-${o}`,"enable-progress-gesture":!1,src:M.getSource(a),poster:M.getPoster(a),title:r.showTitle&&r.$u.test.object(a)&&a.title?a.title:"",style:s({height:r.$u.addUnit(r.height)}),controls:"",onClick:e=>M.clickHandler(o)},null,8,["id","src","poster","title","style","onClick"])):n("v-if",!0),r.showTitle&&r.$u.test.object(a)&&a.title&&r.$u.test.image(M.getSource(a))?(e(),i(A,{key:2,class:"u-swiper__wrapper__item__wrapper__title u-line-1"},{default:t((()=>[d(w(a.title),1)])),_:2},1024)):n("v-if",!0)])),_:2},1032,["style"])])),_:2},1024)))),128))])),_:1},8,["style","onChange","circular","interval","duration","autoplay","current","currentItemId","previousMargin","nextMargin","acceleration","displayMultipleItems","easingFunction"])),u(N,{class:"u-swiper__indicator",style:s([r.$u.addStyle(r.indicatorStyle)])},{default:t((()=>[g(r.$slots,"indicator",{},(()=>[r.loading||!r.indicator||r.showTitle?n("v-if",!0):(e(),i(F,{key:0,indicatorActiveColor:r.indicatorActiveColor,indicatorInactiveColor:r.indicatorInactiveColor,length:r.list.length,current:C.currentIndex,indicatorMode:r.indicatorMode},null,8,["indicatorActiveColor","indicatorInactiveColor","length","current","indicatorMode"]))]),!0)])),_:3},8,["style"])])),_:3},8,["style"])}],["__scopeId","data-v-2e7b6008"]]);const x=I({data:()=>({current:0,currentNum:0,list:[{image:"https://cdn.uviewui.com/uview/swiper/swiper1.png",title:"昨夜星辰昨夜风，画楼西畔桂堂东",poster:"https://cdn.uviewui.com/uview/swiper/swiper1.png"},{image:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list1:["https://cdn.uviewui.com/uview/swiper/swiper1.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png"],list2:[{image:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"昨夜星辰昨夜风，画楼西畔桂堂东",type:"image"},{image:"https://cdn.uviewui.com/uview/swiper/swiper1.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list3:["https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"],list4:[{url:"https://cdn.uviewui.com/uview/resources/video.mp4",title:"昨夜星辰昨夜风，画楼西畔桂堂东",poster:"https://cdn.uviewui.com/uview/swiper/swiper1.png"},{url:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{url:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list5:["https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"],list6:["https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"]}),methods:{change(e){},click(e){console.log("click",e)}}},[["render",function(s,n,g,m,_,y){const v=h,f=$(c("u-swiper"),M),k=p,b=$(c("u-gap"),C);return e(),i(k,{class:"u-page"},{default:t((()=>[u(k,{class:"u-demo-block"},{default:t((()=>[u(v,{class:"u-demo-block__title"},{default:t((()=>[d("基础功能")])),_:1}),u(f,{list:_.list1,onChange:y.change,onClick:y.click},null,8,["list","onChange","onClick"])])),_:1}),u(k,{class:"u-demo-block"},{default:t((()=>[u(v,{class:"u-demo-block__title"},{default:t((()=>[d("带标题")])),_:1}),u(f,{list:_.list2,keyName:"image",showTitle:"",autoplay:!1,circular:""},null,8,["list"])])),_:1}),u(k,{class:"u-demo-block"},{default:t((()=>[u(v,{class:"u-demo-block__title"},{default:t((()=>[d("带指示器")])),_:1}),u(f,{list:_.list3,indicator:"",indicatorMode:"line",circular:""},null,8,["list"])])),_:1}),u(k,{class:"u-demo-block"},{default:t((()=>[u(v,{class:"u-demo-block__title"},{default:t((()=>[d("加载中")])),_:1}),u(f,{list:_.list3,loading:""},null,8,["list"])])),_:1}),u(k,{class:"u-demo-block"},{default:t((()=>[u(v,{class:"u-demo-block__title"},{default:t((()=>[d("嵌入视频")])),_:1}),u(f,{list:_.list4,keyName:"url",autoplay:!1},null,8,["list"])])),_:1}),u(k,{class:"u-demo-block"},{default:t((()=>[u(v,{class:"u-demo-block__title"},{default:t((()=>[d("自定义指示器")])),_:1}),u(f,{list:_.list5,onChange:n[0]||(n[0]=e=>_.current=e.current),autoplay:!1},{default:t((()=>[u(k,{slot:"indicator",class:"indicator"},{default:t((()=>[(e(!0),a(o,null,l(_.list5,((t,s)=>(e(),i(k,{class:r(["indicator__dot",[s===_.current&&"indicator__dot--active"]]),key:s},null,8,["class"])))),128))])),_:1})])),_:1},8,["list"]),u(b,{bgColor:"transparent",height:"15"}),u(f,{list:_.list6,onChange:n[1]||(n[1]=e=>_.currentNum=e.current),autoplay:!1,indicatorStyle:"right: 20px"},{default:t((()=>[u(k,{slot:"indicator",class:"indicator-num"},{default:t((()=>[u(v,{class:"indicator-num__text"},{default:t((()=>[d(w(_.currentNum+1)+"/"+w(_.list6.length),1)])),_:1})])),_:1})])),_:1},8,["list"])])),_:1}),u(k,{class:"u-demo-block"},{default:t((()=>[u(v,{class:"u-demo-block__title"},{default:t((()=>[d("卡片式")])),_:1}),u(f,{list:_.list3,previousMargin:"30",nextMargin:"30",circular:"",autoplay:!1,radius:"5",bgColor:"#ffffff"},null,8,["list"])])),_:1})])),_:1})}],["__scopeId","data-v-3e9f79cf"]]);export{x as default};
