import{_ as n}from"./up-parse.Cs_h7xT_.js";import{r as t,o as e,c as i,w as a,i as o,a as l}from"./index-C3UXxwfW.js";import{r}from"./uni-app.es.CqYlZVXb.js";import{_ as s}from"./_plugin-vue_export-helper.BCo6x5W8.js";const p=s({data:()=>({content:"",tagStyle:{table:"box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;",th:"border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;",td:"border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;",li:"margin: 5px 0;"}}),onLoad(){setTimeout((()=>{this.content='<title>富文本示例</title>\n<div>\n  <section style="text-align: center; margin: 0px auto;">\n    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">\n      <span style="font-size: 18px; color: #595959;">表格</span>\n    </section>\n  </section>\n  <section style="margin-top: 1.5em;">\n    <table width="100%" cellspacing="0" cellpadding="5">\n      <thead>\n        <tr>\n          <th>标题 1</th>\n          <th>标题 2</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td align="center">内容 1</td>\n          <td align="center">内容 2</td>\n        </tr>\n        <tr style="background-color: #f6f8fa;">\n          <td align="center">内容 3</td>\n          <td align="center"><a>链接</a></td>    \n        </tr>\n        <tr>\n          <td align="center">内容 5</td>\n          <td align="center">内容 6</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">普通表格</div>\n  </section>\n  <section style="margin-top: 1.5em;">\n    <table width="500px" cellspacing="0" cellpadding="5">\n      <thead>\n        <tr>\n          <th>标题 1</th>\n          <th>标题 2</th>\n          <th>标题 3</th>\n          <th>标题 4</th>\n          <th>标题 5</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td align="center">内容 1</td>\n          <td align="center">内容 2</td>\n          <td align="center">内容 3</td>\n          <td align="center">内容 4</td>\n          <td align="center">内容 5</td>\n        </tr>\n        <tr style="background-color: #f6f8fa;">\n          <td align="center"><a>链接</a></td>\n          <td align="center">内容 7</td>\n          <td align="center">内容 8</td>\n          <td align="center">内容 9</td>\n          <td align="center">内容 10</td>\n        </tr>\n        <tr>\n          <td align="center">内容 11</td>\n          <td align="center">内容 12</td>\n          <td align="center">内容 13</td>\n          <td align="center">内容 14</td>\n          <td align="center">内容 15</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">长表格，可以单独横向滚动</div>\n  </section>\n  <section style="margin-top: 1.5em;">\n    <table width="100%" cellspacing="0" cellpadding="5">\n      <thead>\n        <tr>\n          <th align="center">标题 1</th>\n          <th align="center">标题 2</th>\n          <th align="center">标题 3</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td align="center" colspan="2">内容 1</td>\n          <td align="center" rowspan="2">内容 2</td>\n        </tr>\n        <tr>\n          <td align="center" rowspan="2">内容 3</td>\n          <td align="center">内容 4</td>\n        </tr>\n        <tr>\n          <td align="center" colspan="2">内容 5</td>\n        </tr>\n        <tr>\n          <td align="center">内容 6</td>\n          <td align="center">内容 7</td>\n          <td align="center"><a>链接</a></td>\n        </tr>\n      </tbody>\n    </table>\n    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">含有合并单元格的表格</div>\n  </section>\n  <section id="list" style="text-align: center; margin: 0px auto; margin-top: 2em">\n    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">\n      <span style="font-size: 18px; color: #595959;">列表</span>\n    </section>\n  </section>\n  <section style="margin-top: 1.5em;">\n    <ol style="margin-bottom: 1.5em;">\n      <li>这是第一条列表项</li>\n      <li>这是第二条列表项</li>\n      <li>这是第三条 <a>链接</a></li>\n    </ol>\n    <ol type="A" style="margin-bottom: 1.5em;">\n      <li>这是第一条列表项</li>\n      <li>这是第二条列表项</li>\n      <li>这是第三条 <a>链接</a></li>\n    </ol>\n    <ol type="I" style="margin-bottom: 1.5em;">\n      <li>这是第一条列表项</li>\n      <li>这是第二条列表项</li>\n      <li>这是第三条 <a>链接</a></li>\n    </ol>\n    <ul>\n      <li>第一级无序列表</li>\n      <li>第一级无序列表\n        <ul>\n          <li>第二级无序列表</li>\n          <li>第二级无序列表\n            <ul>\n              <li>第三级无序列表</li>\n              <li>第三级 <a>链接</a></li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n    </ul>    \n  </section>\n  <section style="text-align: center; margin: 0px auto; margin-top: 2em">\n    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">\n      <span style="font-size: 18px; color: #595959;">文本</span>\n    </section>\n  </section>\n  <section style="margin-top: 1.5em;">\n    <p style="margin-bottom: 1em;">\n      <ruby>\n        拼<rp>(</rp><rt>pin</rt><rp>)</rp>\n        音<rp>(</rp><rt>yin</rt><rp>)</rp>\n      </ruby>\n      &nbsp;&nbsp;<i>斜体</i>\n      &nbsp;&nbsp;<b>粗体</b>\n      &nbsp;&nbsp;上标<sup>1</sup>\n      &nbsp;&nbsp;下标<sub>2</sub>\n    </p>\n    <p style="margin-bottom: 1em;">\n      <span style="text-decoration: overline;">上划线</span>\n      &nbsp;&nbsp;<s>中划线</s>\n      &nbsp;&nbsp;<u>下划线</u>\n    </p>\n    <p>\n      <big>大一号</big>\n      &nbsp;&nbsp;<span>正常</span>\n      &nbsp;&nbsp;<small>小一号</small>\n    </p>\n    <h2 style="margin-top: 0.5em;">大标题</h2>\n    <h3 style="margin-top: 0.5em;">中标题</h3>\n    <h4 style="margin-top: 0.5em;">小标题</h4>\n  </section>\n  <section style="text-align: center; margin: 0px auto; margin-top: 2em">\n    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">\n      <span style="font-size: 18px; color: #595959;">链接</span>\n    </section>\n  </section>\n  <section style="margin-top: 1.5em; text-align: center;">\n    <a href="#">跳转到顶部</a>&nbsp;&nbsp;&nbsp;<a href="#list">跳转到列表</a>\n    <div style="font-size: 12px; color: gray; margin-top: 5px;">锚点链接，将滚动到对应位置</div>\n  </section>\n  <section style="margin-top: 1.5em; text-align: center;">\n    <a href="https://github.com/jin-yufeng/mp-html">外部链接</a>\n    <div style="font-size: 12px; color: gray; margin-top: 5px;">外部链接，将复制链接</div>\n  </section>\n  <section style="margin-top: 1.5em; text-align: center;">\n    <a href="/pages/componentsB/parse/jump">内部链接</a>\n    <div style="font-size: 12px; color: gray; margin-top: 5px;">内部链接，将跳转页面</div>\n  </section>\n  <section style="text-align: center; margin: 0px auto; margin-top: 2em">\n    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">\n      <span style="font-size: 18px; color: #595959;">图片</span>\n    </section>\n  </section>\n  <section style="margin-top: 1.5em; text-align: center;">\n    <img src="/demo-thumb.jpg?sign=91b3e495d16f96a0df3d263c9ff95821&t=1609059235" original-src="/demo.jpg?sign=af7082bed28711177bd952dbab67373e&t=1609059255">\n    <div style="font-size: 12px; color: gray; margin-top: 5px;">点击预览高清图</div>\n  </section>\n  <section style="margin-top: 1.5em; text-align: center;">\n    <svg width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;">\n      <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">\n        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>\n      </path>\n    </svg>\n    <div style="font-size: 12px; color: gray; margin-top: 5px;">svg 动画</div>\n  </section>\n</div>'}),200)},methods:{load(){},ready(){},imgTap(){},linkTap(){}}},[["render",function(s,p,d,c,g,m){const b=r(t("up-parse"),n),y=o;return e(),i(y,{class:"u-content"},{default:a((()=>[l(b,{"container-style":"padding: 20px",content:g.content,domain:"https://6874-html-foe72-1259071903.tcb.qcloud.la/demo","lazy-load":"","scroll-table":"",selectable:"","use-anchor":"","tag-style":g.tagStyle,onLoad:m.load,onReady:m.ready,onImgTap:m.imgTap,onLinkTap:m.linkTap},null,8,["content","tag-style","onLoad","onReady","onImgTap","onLinkTap"])])),_:1})}],["__scopeId","data-v-b89f6753"]]);export{p as default};
