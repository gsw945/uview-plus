import{_ as e}from"./u-icon.e9ca9d71.js";import{d as t,o as n,c as o,w as i,a as u,k as r,f as a,n as s,l,i as p,I as d}from"./index-4f0c5e1d.js";import{r as c}from"./uni-app.es.fcad82c0.js";import{m as f,a as h}from"./mixin.d0c91ebc.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const m={props:{modelValue:{type:[String,Number],default:()=>uni.$u.props.input.value},type:{type:String,default:()=>uni.$u.props.input.type},fixed:{type:Boolean,default:()=>uni.$u.props.input.fixed},disabled:{type:Boolean,default:()=>uni.$u.props.input.disabled},disabledColor:{type:String,default:()=>uni.$u.props.input.disabledColor},clearable:{type:Boolean,default:()=>uni.$u.props.input.clearable},password:{type:Boolean,default:()=>uni.$u.props.input.password},maxlength:{type:[String,Number],default:()=>uni.$u.props.input.maxlength},placeholder:{type:String,default:()=>uni.$u.props.input.placeholder},placeholderClass:{type:String,default:()=>uni.$u.props.input.placeholderClass},placeholderStyle:{type:[String,Object],default:()=>uni.$u.props.input.placeholderStyle},showWordLimit:{type:Boolean,default:()=>uni.$u.props.input.showWordLimit},confirmType:{type:String,default:()=>uni.$u.props.input.confirmType},confirmHold:{type:Boolean,default:()=>uni.$u.props.input.confirmHold},holdKeyboard:{type:Boolean,default:()=>uni.$u.props.input.holdKeyboard},focus:{type:Boolean,default:()=>uni.$u.props.input.focus},autoBlur:{type:Boolean,default:()=>uni.$u.props.input.autoBlur},disableDefaultPadding:{type:Boolean,default:()=>uni.$u.props.input.disableDefaultPadding},cursor:{type:[String,Number],default:()=>uni.$u.props.input.cursor},cursorSpacing:{type:[String,Number],default:()=>uni.$u.props.input.cursorSpacing},selectionStart:{type:[String,Number],default:()=>uni.$u.props.input.selectionStart},selectionEnd:{type:[String,Number],default:()=>uni.$u.props.input.selectionEnd},adjustPosition:{type:Boolean,default:()=>uni.$u.props.input.adjustPosition},inputAlign:{type:String,default:()=>uni.$u.props.input.inputAlign},fontSize:{type:[String,Number],default:()=>uni.$u.props.input.fontSize},color:{type:String,default:()=>uni.$u.props.input.color},prefixIcon:{type:String,default:()=>uni.$u.props.input.prefixIcon},prefixIconStyle:{type:[String,Object],default:()=>uni.$u.props.input.prefixIconStyle},suffixIcon:{type:String,default:()=>uni.$u.props.input.suffixIcon},suffixIconStyle:{type:[String,Object],default:()=>uni.$u.props.input.suffixIconStyle},border:{type:String,default:()=>uni.$u.props.input.border},readonly:{type:Boolean,default:()=>uni.$u.props.input.readonly},shape:{type:String,default:()=>uni.$u.props.input.shape},formatter:{type:[Function,null],default:()=>uni.$u.props.input.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}};const g=y({name:"u-input",mixins:[f,h,m],data:()=>({innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:e=>e}),watch:{modelValue:{immediate:!0,handler(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner?this.valueChange():uni.$u.formValidate(this,"change"),this.firstChange=!1,this.changeFromInner=!1}}},computed:{isShowClear(){const{clearable:e,readonly:t,focused:n,innerValue:o}=this;return!!e&&!t&&!!n&&""!==o},inputClass(){let e=[],{border:t,disabled:n,shape:o}=this;return"surround"===t&&(e=e.concat(["u-border","u-input--radius"])),e.push(`u-input--${o}`),"bottom"===t&&(e=e.concat(["u-border-bottom","u-input--no-radius"])),e.join(" ")},wrapperStyle(){const e={};return this.disabled&&(e.backgroundColor=this.disabledColor),"none"===this.border?e.padding="0":(e.paddingTop="6px",e.paddingBottom="6px",e.paddingLeft="9px",e.paddingRight="9px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},inputStyle(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),textAlign:this.inputAlign}}},emits:["update:modelValue","focus","blur","change","confirm","clear","keyboardheightchange"],methods:{setFormatter(e){this.innerFormatter=e},onInput(e){let{value:t=""}=e.detail||{};const n=(this.formatter||this.innerFormatter)(t);this.innerValue=t,this.$nextTick((()=>{this.innerValue=n,this.valueChange()}))},onBlur(e){this.$emit("blur",e.detail.value),uni.$u.sleep(150).then((()=>{this.focused=!1})),uni.$u.formValidate(this,"blur")},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",this.innerValue)},onkeyboardheightchange(e){this.$emit("keyboardheightchange",e)},valueChange(){const e=this.innerValue;this.$nextTick((()=>{this.$emit("update:modelValue",e),this.changeFromInner=!0,this.$emit("change",e),uni.$u.formValidate(this,"change")}))},onClear(){this.innerValue="",this.$nextTick((()=>{this.valueChange(),this.$emit("clear")}))},clickHandler(){}}},[["render",function(f,h,y,m,g,$){const S=c(t("u-icon"),e),b=p,x=d;return n(),o(b,{class:l(["u-input",$.inputClass]),style:s([$.wrapperStyle])},{default:i((()=>[u(b,{class:"u-input__content"},{default:i((()=>[f.prefixIcon||f.$slots.prefix?(n(),o(b,{key:0,class:"u-input__content__prefix-icon"},{default:i((()=>[r(f.$slots,"prefix",{},(()=>[u(S,{name:f.prefixIcon,size:"18",customStyle:f.prefixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):a("v-if",!0),u(b,{class:"u-input__content__field-wrapper",onClick:$.clickHandler},{default:i((()=>[a(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\n\t\t\t\t\t为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\n\t\t\t\t "),u(x,{class:"u-input__content__field-wrapper__field",style:s([$.inputStyle]),type:f.type,focus:f.focus,cursor:f.cursor,value:g.innerValue,"auto-blur":f.autoBlur,disabled:f.disabled||f.readonly,maxlength:f.maxlength,placeholder:f.placeholder,"placeholder-style":f.placeholderStyle,"placeholder-class":f.placeholderClass,"confirm-type":f.confirmType,"confirm-hold":f.confirmHold,"hold-keyboard":f.holdKeyboard,"cursor-spacing":f.cursorSpacing,"adjust-position":f.adjustPosition,"selection-end":f.selectionEnd,"selection-start":f.selectionStart,password:f.password||"password"===f.type||void 0,ignoreCompositionEvent:f.ignoreCompositionEvent,onInput:$.onInput,onBlur:$.onBlur,onFocus:$.onFocus,onConfirm:$.onConfirm,onKeyboardheightchange:$.onkeyboardheightchange,onChange:$.onInput},null,8,["style","type","focus","cursor","value","auto-blur","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","password","ignoreCompositionEvent","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange","onChange"])])),_:1},8,["onClick"]),$.isShowClear?(n(),o(b,{key:1,class:"u-input__content__clear",onClick:$.onClear},{default:i((()=>[u(S,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):a("v-if",!0),f.suffixIcon||f.$slots.suffix?(n(),o(b,{key:2,class:"u-input__content__subfix-icon"},{default:i((()=>[r(f.$slots,"suffix",{},(()=>[u(S,{name:f.suffixIcon,size:"18",customStyle:f.suffixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):a("v-if",!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-6e53836d"]]);export{g as _,m as p};
