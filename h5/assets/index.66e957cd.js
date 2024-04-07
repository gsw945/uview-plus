var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",u="hour",a="day",c="week",o="month",f="quarter",h="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;const v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}};var m=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t};const y={s:m,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,u=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:h,w:c,d:a,D:d,h:u,m:i,s:s,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};var D="en",g={};g[D]=v;var S=function(t){return t instanceof _},p=function t(e,r,n){var s;if(!e)return D;if("string"==typeof e){var i=e.toLowerCase();g[i]&&(s=i),r&&(g[i]=r,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,s=a}return!n&&s&&(D=s),s||!n&&D},w=function(t,e){if(S(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new _(r)},O=y;O.l=p,O.i=S,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function v(t){this.$L=p(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var r=this,n=!!O.u(e)||e,f=O.p(t),$=function(t,e){var s=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(a)},l=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},M=this.$W,v=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case h:return n?$(1,0):$(31,11);case o:return n?$(1,v):$(0,v+1);case c:var D=this.$locale().weekStart||0,g=(M<D?M+7:M)-D;return $(n?m-g:m+(6-g),v);case a:case d:return l(y+"Hours",0);case u:return l(y+"Minutes",1);case i:return l(y+"Seconds",2);case s:return l(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var r,c=O.p(t),f="set"+(this.$u?"UTC":""),$=(r={},r[a]=f+"Date",r[d]=f+"Date",r[o]=f+"Month",r[h]=f+"FullYear",r[u]=f+"Hours",r[i]=f+"Minutes",r[s]=f+"Seconds",r[n]=f+"Milliseconds",r)[c],l=c===a?this.$D+(e-this.$W):e;if(c===o||c===h){var M=this.clone().set(d,1);M.$d[$](l),M.init(),this.$d=M.set(d,Math.min(this.$D,M.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(n,f){var d,$=this;n=Number(n);var l=O.p(f),M=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*n)),$)};if(l===o)return this.set(o,this.$M+n);if(l===h)return this.set(h,this.$y+n);if(l===a)return M(1);if(l===c)return M(7);var v=(d={},d[i]=e,d[u]=r,d[s]=t,d)[l]||1,m=this.$d.getTime()+n*v;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||$;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=O.z(this),i=this.$H,u=this.$m,a=this.$M,c=r.weekdays,o=r.months,f=r.meridiem,h=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},d=function(t){return O.s(i%12||12,t,"0")},l=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(M,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return h(r.monthsShort,a,o,3);case"MMMM":return h(o,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,c,2);case"ddd":return h(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return O.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return l(i,u,!0);case"A":return l(i,u,!1);case"m":return String(u);case"mm":return O.s(u,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,$){var l,M=this,v=O.p(d),m=w(n),y=(m.utcOffset()-this.utcOffset())*e,D=this-m,g=function(){return O.m(M,m)};switch(v){case h:l=g()/12;break;case o:l=g();break;case f:l=g()/3;break;case c:l=(D-y)/6048e5;break;case a:l=(D-y)/864e5;break;case u:l=D/r;break;case i:l=D/e;break;case s:l=D/t;break;default:l=D}return $?l:O.a(l)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return g[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=p(t,e,!0);return n&&(r.$L=n),r},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),b=_.prototype;w.prototype=b,[["$ms",n],["$s",s],["$m",i],["$H",u],["$W",a],["$M",o],["$y",h],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=p,w.isDayjs=S,w.unix=function(t){return w(1e3*t)},w.en=g[D],w.Ls=g,w.p={};export{w as d};
