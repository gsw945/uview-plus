import{o as e,c as t,w as l,i,a as s,g as a,t as m,l as n,f as c,b as o,r as u,F as p,e as k,d as r}from"./index-4f0c5e1d.js";import{_ as d}from"./u-icon.e9ca9d71.js";import{r as f}from"./uni-app.es.fcad82c0.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import"./mixin.d0c91ebc.js";const L=h({data:()=>({commentList:[],comment:""}),onLoad(){this.getReply()},methods:{getLike(e){0===e||e>0?(this.commentList[e].isLike=!this.commentList[e].isLike,1==this.commentList[e].isLike?this.commentList[e].likeNum++:this.commentList[e].likeNum--):1==this.comment.isLike?(this.comment.isLike=!this.comment.isLike,this.comment.likeNum--):(this.comment.isLike=!this.comment.isLike,this.comment.likeNum++)},getReply(){this.comment={id:1,name:"叶轻眉",date:"12-25 18:58",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg",allReply:12,likeNum:33,isLikes:!1},this.commentList=[{name:"新八几",date:"12-25 18:58",contentText:"不要乱打广告啊喂！虽然是真的超好用",url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg",likeNum:33,isLike:!1,reply:{name:"uview",contentStr:"uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！"}},{name:"叶轻眉1",date:"01-25 13:58",url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",allReply:0,likeNum:11,isLike:!1,reply:{name:"粘粘",contentStr:"今天吃什么，明天吃什么，晚上吃什么，我只是一只小猫咪为什么要烦恼这么多"}},{name:"叶轻眉2",date:"03-25 13:58",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",allReply:0,likeNum:21,url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg",isLike:!1,allReply:2,reply:{name:"豆包",contentStr:"想吃冰糖葫芦粘豆包，但没钱5555........."}},{name:"叶轻眉3",date:"06-20 13:58",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",allReply:0,likeNum:150,url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg",isLike:!1}]}}},[["render",function(h,L,_,g,y,v){const w=k,x=i,N=f(r("u-icon"),d);return e(),t(x,{class:"wrap"},{default:l((()=>[s(x,{class:"comment"},{default:l((()=>[s(x,{class:"top"},{default:l((()=>[s(x,{class:"left"},{default:l((()=>[s(x,{class:"heart-photo"},{default:l((()=>[s(w,{src:y.comment.url,mode:""},null,8,["src"])])),_:1}),s(x,{class:"user-info"},{default:l((()=>[s(x,{class:"name"},{default:l((()=>[a(m(y.comment.name),1)])),_:1}),s(x,{class:"date"},{default:l((()=>[a("06-25 13:58")])),_:1})])),_:1})])),_:1}),s(x,{class:n(["right",{highlight:y.comment.isLike}])},{default:l((()=>[a(m(y.comment.likeNum)+" ",1),y.comment.isLike?c("v-if",!0):(e(),t(N,{key:0,name:"thumb-up",class:"like",color:"#9a9a9a",size:30,onClick:v.getLike},null,8,["onClick"])),y.comment.isLike?(e(),t(N,{key:1,name:"thumb-up-fill",class:"like",size:30,onClick:v.getLike},null,8,["onClick"])):c("v-if",!0)])),_:1},8,["class"])])),_:1}),s(x,{class:"content"},{default:l((()=>[a(m(y.comment.contentText),1)])),_:1})])),_:1}),s(x,{class:"all-reply"},{default:l((()=>[s(x,{class:"all-reply-top"},{default:l((()=>[a("全部回复（"+m(y.comment.allReply)+"）",1)])),_:1}),(e(!0),o(p,null,u(y.commentList,((i,o)=>(e(),t(x,{class:"item",key:o},{default:l((()=>[s(x,{class:"comment"},{default:l((()=>[s(x,{class:"top"},{default:l((()=>[s(x,{class:"left"},{default:l((()=>[s(x,{class:"heart-photo"},{default:l((()=>[s(w,{src:i.url,mode:""},null,8,["src"])])),_:2},1024),s(x,{class:"user-info"},{default:l((()=>[s(x,{class:"name"},{default:l((()=>[a(m(i.name),1)])),_:2},1024),s(x,{class:"date"},{default:l((()=>[a(m(i.date),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),s(x,{class:n(["right",{highlight:i.isLike}])},{default:l((()=>[s(x,{class:"num"},{default:l((()=>[a(m(i.likeNum),1)])),_:2},1024),i.isLike?c("v-if",!0):(e(),t(N,{key:0,name:"thumb-up",class:"like",size:30,color:"#9a9a9a",onClick:e=>v.getLike(o)},null,8,["onClick"])),i.isLike?(e(),t(N,{key:1,name:"thumb-up-fill",class:"like",size:30,onClick:e=>v.getLike(o)},null,8,["onClick"])):c("v-if",!0)])),_:2},1032,["class"])])),_:2},1024),i.reply?(e(),t(x,{key:0,class:"reply"},{default:l((()=>[s(x,{class:"username"},{default:l((()=>[a(m(i.reply.name),1)])),_:2},1024),s(x,{class:"text"},{default:l((()=>[a(m(i.reply.contentStr),1)])),_:2},1024)])),_:2},1024)):c("v-if",!0),s(x,{class:"content"},{default:l((()=>[a(m(i.contentText),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})}],["__scopeId","data-v-81f5cf3d"]]);export{L as default};
