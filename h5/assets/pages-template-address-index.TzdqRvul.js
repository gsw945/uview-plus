import{r as a,o as t,c as e,w as s,i,b as o,d,F as l,a as n,f,t as u,y as c,g as p}from"./index-C3UXxwfW.js";import{_ as r}from"./up-icon.BrIVCe5a.js";import{r as m}from"./uni-app.es.CqYlZVXb.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";const _=g({data:()=>({siteList:[]}),onLoad(){this.getData()},methods:{getData(){this.siteList=[{id:1,name:"游X",phone:"183****5523",tag:[{tagText:"默认"},{tagText:"家"}],site:"广东省深圳市宝安区 自由路66号"},{id:2,name:"李XX",phone:"183****5555",tag:[{tagText:"公司"}],site:"广东省深圳市宝安区 翻身路xx号"},{id:3,name:"王YY",phone:"153****5555",tag:[],site:"广东省深圳市宝安区 平安路13号"}]},toAddSite(){uni.navigateTo({url:"/pages/template/address/addSite"})}}},[["render",function(g,_,x,h,T,j){const k=i,L=p,S=m(a("up-icon"),r);return t(),e(k,null,{default:s((()=>[(t(!0),o(l,null,d(T.siteList,((a,i)=>(t(),e(k,{class:"item",key:a.id},{default:s((()=>[n(k,{class:"top"},{default:s((()=>[n(k,{class:"name"},{default:s((()=>[f(u(a.name),1)])),_:2},1024),n(k,{class:"phone"},{default:s((()=>[f(u(a.phone),1)])),_:2},1024),n(k,{class:"tag"},{default:s((()=>[(t(!0),o(l,null,d(a.tag,((a,i)=>(t(),e(L,{key:i,class:c({red:"默认"==a.tagText})},{default:s((()=>[f(u(a.tagText),1)])),_:2},1032,["class"])))),128))])),_:2},1024)])),_:2},1024),n(k,{class:"bottom"},{default:s((()=>[f(" 广东省深圳市宝安区 自由路66号 "),n(S,{name:"edit-pen",size:40,color:"#999999"})])),_:1})])),_:2},1024)))),128)),n(k,{class:"addSite",onClick:j.toAddSite},{default:s((()=>[n(k,{class:"add"},{default:s((()=>[n(S,{name:"plus",color:"#ffffff",class:"icon",size:30}),f("新建收货地址 ")])),_:1})])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-11fa4637"]]);export{_ as default};
