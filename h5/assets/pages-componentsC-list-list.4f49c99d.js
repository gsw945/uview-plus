import{_ as u}from"./u-avatar.f1b07228.js";import{o as i,c as t,w as s,i as o,a as e,b as l,r as a,F as r,d as m}from"./index-4f0c5e1d.js";import{r as p}from"./uni-app.es.fcad82c0.js";import{_ as c}from"./u-cell.a5a44b23.js";import{_ as n,a as d}from"./u-list.cc348273.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.e9ca9d71.js";import"./mixin.d0c91ebc.js";import"./u--text.3ba6596a.js";import"./u-link.2a6cd9b0.js";import"./u-line.0a9c4e0a.js";const w=v({data:()=>({indexList:[],urls:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"]}),onLoad(){this.loadmore()},methods:{scrolltolower(){this.loadmore()},loadmore(){for(let u=0;u<30;u++)this.indexList.push({url:this.urls[uni.$u.random(0,this.urls.length-1)]})}}},[["render",function(v,w,j,h,f,g){const _=p(m("u-avatar"),u),b=p(m("u-cell"),c),x=p(m("u-list-item"),n),L=p(m("u-list"),d),y=o;return i(),t(y,{class:"u-page"},{default:s((()=>[e(L,{onScrolltolower:g.scrolltolower},{default:s((()=>[(i(!0),l(r,null,a(f.indexList,((u,o)=>(i(),t(x,{key:o},{default:s((()=>[e(b,{title:`列表长度-${o+1}`},{icon:s((()=>[e(_,{shape:"square",size:"35",src:u.url,customStyle:"margin: -3px 5px -3px 0"},null,8,["src"])])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["onScrolltolower"])])),_:1})}],["__scopeId","data-v-624ff027"]]);export{w as default};
