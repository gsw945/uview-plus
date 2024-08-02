import{_ as e}from"./u-navbar.D6EqUpzf.js";import{a8 as o,a9 as a,r,o as t,c as l,w as s,i,a as d,j as n,b as u,d as m,F as h,k as f}from"./index-CdhfLx7q.js";import{r as c}from"./uni-app.es.CuSSj6ZT.js";import{_ as p}from"./u-input.CYvj1XoG.js";import{_ as b,a as g}from"./u-form.0_7ua5l4.js";import{_ as y}from"./u-icon.D87OOx1h.js";import{_ as C,a as x}from"./u-radio-group.DIOIa8Ys.js";import{_ as V,a as _}from"./u-checkbox-group.BJvH1gsM.js";import{_ as k}from"./u-textarea.DRqcDX0y.js";import{_ as w}from"./u-button.CGR53-df.js";import{_ as I}from"./u-action-sheet.Dg-nVHbU.js";import{_ as j}from"./u-calendar.CA6ZNZpm.js";import{_ as v}from"./u-code.Dk5Y_bGh.js";import{_ as $}from"./u-datetime-picker.DK89xrlD.js";import"./u-status-bar.RVZFW_X6.js";import"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-line.Bt-mhjy9.js";import"./u-loading-icon.kb8fVuBj.js";import"./u-gap.DQBda9_e.js";import"./u-popup.Dg5pR-re.js";import"./u-overlay.DAHeyw0D.js";import"./u-transition.XY-aSdi7.js";import"./u-safe-bottom.k_2fW8kZ.js";import"./index.t89P32GB.js";import"./u-picker.CQPyLGxH.js";const B=o({...{data:()=>({fileList1:[],disabled1:!1,tips:"",value:"",showCalendar:!1,showBirthday:!1,model1:{userInfo:{name:"楼兰",sex:"",age:0,birthday:""},radiovalue1:"苹果",checkboxValue1:[],intro:"",code:""},showSex:!1,birthday:Number(new Date),actions:[{name:"男"},{name:"女"},{name:"保密"}],rules:{"userInfo.name":[{type:"string",required:!0,message:"请填写姓名",trigger:["blur","change"]},{validator:(e,o,a)=>uni.$u.test.chinese(o),message:"姓名必须为中文",trigger:["change","blur"]},{asyncValidator:(e,o,a)=>{setTimeout((()=>{a("异步规则")}),1e3)},trigger:["change","blur"]}],code:{type:"string",required:!0,len:4,message:"请填写4位验证码",trigger:["blur"]},"userInfo.sex":{type:"string",max:1,required:!0,message:"请选择男或女",trigger:["blur","change"]},radiovalue1:{type:"string",min:1,max:2,message:"橙子有毒",trigger:["change"]},checkboxValue1:{type:"array",min:2,required:!0,message:"不能太宅，至少选两项",trigger:["change"]},intro:{type:"string",min:3,required:!0,message:"不低于3个字",trigger:["change"]},hotel:{type:"string",min:2,required:!0,message:"请选择住店时间",trigger:["change"]},"userInfo.birthday":{type:"string",required:!0,message:"请选择生日",trigger:["change"]}},radiolist1:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"毒橙子",disabled:!1}],checkboxList1:[{name:"羽毛球",disabled:!1},{name:"跑步",disabled:!1},{name:"爬山",disabled:!1}]}),onReady(){this.$refs.form1.setRules(this.rules)},methods:{afterRead(e){this.fileList1.push({url:e.file,status:"uploading",message:"上传中"})},groupChange(e){},radioChange(e){},navigateBack(){uni.navigateBack()},sexSelect(e){this.model1.userInfo.sex=e.name,this.$refs.form1.validateField("userInfo.sex")},change(e){},formatter(e){const o=new Date;let a=o.getMonth()+1;const r=o.getDate();return e.month==a&&e.day==r+3&&(e.bottomInfo="有优惠",e.dot=!0),e},calendarConfirm(e){this.showCalendar=!1,this.model1.hotel=`${e[0]} / ${e[e.length-1]}`,this.$refs.form1.validateField("hotel")},codeChange(e){this.tips=e},getCode(){this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},calendarClose(){this.showCalendar=!1,this.$refs.form1.validateField("hotel")},birthdayClose(){this.showBirthday=!1,this.$refs.form1.validateField("userInfo.birthday")},birthdayConfirm(e){this.showBirthday=!1,this.model1.userInfo.birthday=uni.$u.timeFormat(e.value,"yyyy-mm-dd"),this.$refs.form1.validateField("userInfo.birthday")},submit(){this.$refs.form1.validate().then((e=>{uni.$u.toast("校验通过")})).catch((e=>{console.log(e),uni.$u.toast("校验失败")}))},reset(){const e=["userInfo.name","userInfo.sex","radiovalue1","checkboxValue1","intro","hotel","code","userInfo.birthday"];this.$refs.form1.resetFields(),this.$refs.form1.clearValidate(),setTimeout((()=>{this.$refs.form1.clearValidate(e)}),10)},hideKeyboard(){uni.hideKeyboard()}}},__name:"form",setup(o){const B=a(null);return(o,a)=>{const S=c(r("up-navbar"),e),U=f,q=c(r("up-input"),p),F=c(r("up-form-item"),b),L=c(r("up-icon"),y),T=c(r("up-radio"),C),K=c(r("up-radio-group"),x),D=c(r("up-checkbox"),V),R=c(r("up-checkbox-group"),_),O=c(r("up-textarea"),k),W=c(r("up-button"),w),z=c(r("up-form"),g),E=c(r("up-action-sheet"),I),M=c(r("up-calendar"),j),N=c(r("up-code"),v),P=c(r("up-datetime-picker"),$),A=i;return t(),l(A,{class:"u-page"},{default:s((()=>[d(S,{title:"表单",onLeftClick:o.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),d(A,{class:"u-demo-block"},{default:s((()=>[d(U,{class:"u-demo-block__title"},{default:s((()=>[n("基础使用")])),_:1}),d(A,{class:"u-demo-block__content"},{default:s((()=>[d(z,{labelPosition:"left",model:o.model1,ref_key:"form1",ref:B},{default:s((()=>[d(F,{label:"姓名",prop:"userInfo.name",borderBottom:"",ref:"item1"},{default:s((()=>[d(q,{modelValue:o.model1.userInfo.name,"onUpdate:modelValue":a[0]||(a[0]=e=>o.model1.userInfo.name=e),border:"none",placeholder:"姓名,只能为中文"},null,8,["modelValue"])])),_:1},512),d(F,{label:"性别",prop:"userInfo.sex",borderBottom:"",onClick:a[2]||(a[2]=e=>{o.showSex=!0,o.hideKeyboard()}),ref:"item1"},{default:s((()=>[d(q,{modelValue:o.model1.userInfo.sex,"onUpdate:modelValue":a[1]||(a[1]=e=>o.model1.userInfo.sex=e),disabled:"",disabledColor:"#ffffff",placeholder:"请选择性别",border:"none"},null,8,["modelValue"]),d(L,{slot:"right",name:"arrow-right"})])),_:1},512),d(F,{label:"年龄",prop:"userInfo.age",borderBottom:"",ref:"item1",rules:[{type:"string",required:!0,message:"请填写年龄",trigger:["blur","change"]}]},{default:s((()=>[d(q,{placeholder:"请输入内容",border:"surround",type:"number",modelValue:o.model1.userInfo.age,"onUpdate:modelValue":a[3]||(a[3]=e=>o.model1.userInfo.age=e),clearable:""},null,8,["modelValue"])])),_:1},512),d(F,{label:"水果",prop:"radiovalue1",borderBottom:"",ref:"item2"},{default:s((()=>[d(K,{modelValue:o.model1.radiovalue1,"onUpdate:modelValue":a[4]||(a[4]=e=>o.model1.radiovalue1=e)},{default:s((()=>[(t(!0),u(h,null,m(o.radiolist1,((e,o)=>(t(),l(T,{customStyle:{marginRight:"16px"},key:o,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1},512),d(F,{label:"兴趣爱好",prop:"checkboxValue1",borderBottom:"",labelWidth:"80",ref:"item3"},{default:s((()=>[d(R,{modelValue:o.model1.checkboxValue1,"onUpdate:modelValue":a[5]||(a[5]=e=>o.model1.checkboxValue1=e),shape:"square",onChange:o.change},{default:s((()=>[(t(!0),u(h,null,m(o.checkboxList1,((e,o)=>(t(),l(D,{customStyle:{marginRight:"16px"},key:o,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1},512),d(F,{label:"简介",prop:"intro",borderBottom:"",ref:"item3"},{default:s((()=>[d(O,{placeholder:"不低于3个字",modelValue:o.model1.intro,"onUpdate:modelValue":a[6]||(a[6]=e=>o.model1.intro=e),count:""},null,8,["modelValue"])])),_:1},512),d(F,{label:"住店时间",prop:"hotel",labelWidth:"80",borderBottom:"",onClick:a[8]||(a[8]=e=>{o.showCalendar=!0,o.hideKeyboard()})},{default:s((()=>[d(q,{modelValue:o.model1.hotel,"onUpdate:modelValue":a[7]||(a[7]=e=>o.model1.hotel=e),disabled:"",disabledColor:"#ffffff",placeholder:"请选择住店和离店时间",border:"none"},null,8,["modelValue"]),d(L,{slot:"right",name:"arrow-right"})])),_:1}),d(F,{label:"验证码",prop:"code",labelWidth:"80",borderBottom:""},{default:s((()=>[d(q,{modelValue:o.model1.code,"onUpdate:modelValue":a[9]||(a[9]=e=>o.model1.code=e),border:"none",placeholder:"请填写验证码"},null,8,["modelValue"]),d(W,{onClick:o.getCode,text:o.tips,type:"success",size:"mini",style:{flex:"0.5"},disabled:o.disabled1},null,8,["onClick","text","disabled"])])),_:1}),d(F,{label:"生日",prop:"userInfo.birthday",borderBottom:"",onClick:a[11]||(a[11]=e=>{o.showBirthday=!0,o.hideKeyboard()}),ref:"item1"},{default:s((()=>[d(q,{modelValue:o.model1.userInfo.birthday,"onUpdate:modelValue":a[10]||(a[10]=e=>o.model1.userInfo.birthday=e),disabled:"",disabledColor:"#ffffff",placeholder:"请选择生日",border:"none"},null,8,["modelValue"]),d(L,{slot:"right",name:"arrow-right"})])),_:1},512)])),_:1},8,["model"]),d(W,{type:"primary",text:"提交",customStyle:"margin-top: 50px",onClick:o.submit},null,8,["onClick"]),d(W,{type:"error",text:"重置",customStyle:"margin-top: 10px",onClick:o.reset},null,8,["onClick"]),d(E,{show:o.showSex,actions:o.actions,title:"请选择性别",description:"如果选择保密会报错",onClose:a[12]||(a[12]=e=>o.showSex=!1),onSelect:o.sexSelect},null,8,["show","actions","onSelect"]),d(M,{show:o.showCalendar,mode:"range",onConfirm:o.calendarConfirm,onClose:o.calendarClose,startText:"住店",endText:"离店",confirmDisabledText:"请选择离店日期",formatter:o.formatter},null,8,["show","onConfirm","onClose","formatter"]),d(N,{ref:"uCode",onChange:o.codeChange,seconds:"20",onStart:a[13]||(a[13]=e=>o.disabled1=!0),onEnd:a[14]||(a[14]=e=>o.disabled1=!1)},null,8,["onChange"]),d(P,{show:o.showBirthday,value:o.birthday,mode:"date",closeOnClickOverlay:"",onConfirm:o.birthdayConfirm,onCancel:o.birthdayClose,onClose:o.birthdayClose},null,8,["show","value","onConfirm","onCancel","onClose"])])),_:1})])),_:1})])),_:1})}}});export{B as default};
