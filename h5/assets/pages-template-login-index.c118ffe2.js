import{o as s,c as t,w as l,i as e,a,g as o,n as i,I as u,z as c,d as r,h as n}from"./index-4f0c5e1d.js";import{_ as d}from"./u-icon.e9ca9d71.js";import{r as f}from"./uni-app.es.fcad82c0.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";import"./mixin.d0c91ebc.js";const p=m({data:()=>({tel:""}),computed:{inputStyle(){let s={};return this.tel&&(s.color="#fff",s.backgroundColor=this.$u.color.warning),s}},methods:{submit(){this.$u.test.mobile(this.tel)&&this.$u.route({url:"pages/template/login/code"})}}},[["render",function(m,p,_,h,b,g){const y=e,w=u,j=c,x=f(r("u-icon"),d),k=n;return s(),t(y,{class:"wrap"},{default:l((()=>[a(y,{class:"top"}),a(y,{class:"content"},{default:l((()=>[a(y,{class:"title"},{default:l((()=>[o("欢迎登录")])),_:1}),a(w,{class:"u-border-bottom",type:"number",modelValue:b.tel,"onUpdate:modelValue":p[0]||(p[0]=s=>b.tel=s),placeholder:"请输入手机号"},null,8,["modelValue"]),a(y,{class:"tips"},{default:l((()=>[o("未注册的手机号验证后自动创建账号")])),_:1}),a(j,{onClick:g.submit,style:i([g.inputStyle]),class:"getCaptcha"},{default:l((()=>[o("获取短信验证码")])),_:1},8,["onClick","style"]),a(y,{class:"alternative"},{default:l((()=>[a(y,{class:"password"},{default:l((()=>[o("密码登录")])),_:1}),a(y,{class:"issue"},{default:l((()=>[o("遇到问题")])),_:1})])),_:1})])),_:1}),a(y,{class:"buttom"},{default:l((()=>[a(y,{class:"loginType"},{default:l((()=>[a(y,{class:"wechat item"},{default:l((()=>[a(y,{class:"icon"},{default:l((()=>[a(x,{size:"40",name:"weixin-fill",color:"rgb(83,194,64)"})])),_:1}),o(" 微信 ")])),_:1}),a(y,{class:"QQ item"},{default:l((()=>[a(y,{class:"icon"},{default:l((()=>[a(x,{size:"40",name:"qq-fill",color:"rgb(17,183,233)"})])),_:1}),o(" QQ ")])),_:1})])),_:1}),a(y,{class:"hint"},{default:l((()=>[o(" 登录代表同意 "),a(k,{class:"link"},{default:l((()=>[o("用户协议、隐私政策，")])),_:1}),o(" 并授权使用您的账号信息（如昵称、头像、收获地址）以便您统一管理 ")])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-2759388f"]]);export{p as default};
