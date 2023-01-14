(()=>{"use strict";var t={171:(t,e,n)=>{function a(){const t=document.querySelector(".inputFormProject"),e=document.querySelector(".inputScreenProject");t.classList.toggle("active"),e.classList.toggle("active")}function r(){const t=document.querySelector(".inputFormTask"),e=document.querySelector(".inputScreenTask");t.classList.toggle("active"),e.classList.toggle("active")}n.d(e,{E:()=>r,O:()=>a})}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={};function e(){return t}function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t,e){a(2,arguments);var n=o(t),r=o(e),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function u(t,e){a(2,arguments);var n=o(t),r=o(e),i=n.getFullYear()-r.getFullYear(),u=n.getMonth()-r.getMonth();return 12*i+u}function s(t){a(1,arguments);var e=o(t);return e.setHours(23,59,59,999),e}function c(t){a(1,arguments);var e=o(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function l(t){a(1,arguments);var e=o(t);return s(e).getTime()===c(e).getTime()}function d(t,e){a(2,arguments);var n,r=o(t),s=o(e),c=i(r,s),d=Math.abs(u(r,s));if(d<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-c*d);var m=i(r,s)===-c;l(o(t))&&1===d&&1===i(t,s)&&(m=!1),n=c*(d-Number(m))}return 0===n?0:n}function m(t,e){return a(2,arguments),o(t).getTime()-o(e).getTime()}var h={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function f(t){return t?h[t]:h.trunc}function g(t,e,n){a(2,arguments);var r=m(t,e)/1e3;return f(null==n?void 0:n.roundingMethod)(r)}var v={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function p(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var y,b={date:p({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:p({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:p({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function S(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,u=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?D(s,(function(t){return t.test(u)})):k(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var l=e.slice(u.length);return{value:i,rest:l}}}function k(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function D(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const j={code:"en-US",formatDistance:function(t,e,n){var a,r=v[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:b,formatRelative:function(t,e,n,a){return w[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(y.matchPattern);if(!n)return null;var a=n[0],r=t.match(y.parsePattern);if(!r)return null;var o=y.valueCallback?y.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(a.length);return{value:o,rest:i}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function P(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function T(t){return P({},t)}function W(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var q=1440,x=43200;function C(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function E(t,e){a(2,arguments);var n=o(t),r=C(e);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}var N=n(171);!function(t,n,r){var u,s;a(2,arguments);var c=e(),l=null!==(u=null!==(s=null==r?void 0:r.locale)&&void 0!==s?s:c.locale)&&void 0!==u?u:j;if(!l.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=i(t,n);if(isNaN(m))throw new RangeError("Invalid time value");var h,f,v=P(T(r),{addSuffix:Boolean(null==r?void 0:r.addSuffix),comparison:m});m>0?(h=o(n),f=o(t)):(h=o(t),f=o(n));var p,y=g(f,h),b=(W(f)-W(h))/1e3,w=Math.round((y-b)/60);if(w<2)return null!=r&&r.includeSeconds?y<5?l.formatDistance("lessThanXSeconds",5,v):y<10?l.formatDistance("lessThanXSeconds",10,v):y<20?l.formatDistance("lessThanXSeconds",20,v):y<40?l.formatDistance("halfAMinute",0,v):y<60?l.formatDistance("lessThanXMinutes",1,v):l.formatDistance("xMinutes",1,v):0===w?l.formatDistance("lessThanXMinutes",1,v):l.formatDistance("xMinutes",w,v);if(w<45)return l.formatDistance("xMinutes",w,v);if(w<90)return l.formatDistance("aboutXHours",1,v);if(w<q){var M=Math.round(w/60);return l.formatDistance("aboutXHours",M,v)}if(w<2520)return l.formatDistance("xDays",1,v);if(w<x){var S=Math.round(w/q);return l.formatDistance("xDays",S,v)}if(w<86400)return p=Math.round(w/x),l.formatDistance("aboutXMonths",p,v);if((p=d(f,h))<12){var k=Math.round(w/x);return l.formatDistance("xMonths",k,v)}var D=p%12,C=Math.floor(p/12);D<3?l.formatDistance("aboutXYears",C,v):D<9?l.formatDistance("overXYears",C,v):l.formatDistance("almostXYears",C+1,v)}(function(t,e){a(2,arguments);var n=C(e);return E(t,-n)}(new Date,3),new Date,{addSuffix:!0}),document.querySelector(".newProjectButton").addEventListener("click",N.O),document.querySelector(".inputScreenProject").addEventListener("click",N.O),document.querySelector(".newTaskButton").addEventListener("click",N.E),document.querySelector(".inputScreenTask").addEventListener("click",N.E);const L=[{projectTitle:"Inbox",projectDescription:"a placeholder Project",projectTaskList:[{taskTitle:"go shopping",taskDescription:"a placeholder task",taskDate:"01.03.23",taskPriority:"low",taskProject:"Inbox"}]}];function X(){const t=document.querySelector("#taskProject");L.forEach((e=>{let n=document.createElement("option");n.value=e.projectTitle,n.textContent=e.projectTitle,t.appendChild(n)}))}function F(){const t=document.querySelector(".projectsList");for(;t.lastChild;)t.removeChild(t.lastChild);L.forEach((e=>{let n=document.createElement("div");n.textContent=e.projectTitle,n.classList.add("menuProject"),t.appendChild(n)}))}document.querySelector(".projectSubmitButton").addEventListener("click",(()=>{let t=function(){const t=document.querySelector("#projectTitle"),e=document.querySelector("#projectDescription"),n={projectTitle:t.value,projectDescription:e.value,projectTaskList:[]};return t.value="",e.value="",n}();L.push(t),F(),console.log(L),X(),function(t){const e=document.querySelector(".taskList");for(;e.lastChild;)e.removeChild(e.lastChild);L[0].projectTaskList.forEach((t=>{let n=document.createElement("div");n.classList.add(".task"),n.textContent=t.taskTitle,e.append(n)}))}()})),document.querySelector(".taskSubmitButton").addEventListener("click",(()=>{let t=function(t,e,n,a){const r=document.querySelector("#taskTitle"),o=document.querySelector("#taskDescription"),i=document.querySelector("#taskDate"),u=document.querySelector("#taskPriority"),s=document.querySelector("#taskProject"),c={taskTitle:r.value,taskDescription:o.value,taskDate:i.value,taskPriority:u.value,taskProject:s.value};return r.value="",o.value="",c}();for(let e=0;e<L.length;e++)L[e].projectTitle===t.taskProject?L[e].projectTaskList.push(t):alert("this project does not exist!");console.log(L)})),F(),X()})()})();