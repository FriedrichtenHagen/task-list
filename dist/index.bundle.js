(()=>{"use strict";var t={171:(t,e,n)=>{function a(){const t=document.querySelector(".inputFormProject"),e=document.querySelector(".inputScreenProject");t.classList.toggle("active"),e.classList.toggle("active")}function r(){const t=document.querySelector(".inputFormTask"),e=document.querySelector(".inputScreenTask");t.classList.toggle("active"),e.classList.toggle("active")}n.d(e,{E:()=>r,O:()=>a})}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={};function e(){return t}function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t,e){a(2,arguments);var n=o(t),r=o(e),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function s(t,e){a(2,arguments);var n=o(t),r=o(e),i=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return 12*i+s}function u(t){a(1,arguments);var e=o(t);return e.setHours(23,59,59,999),e}function c(t){a(1,arguments);var e=o(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function l(t){a(1,arguments);var e=o(t);return u(e).getTime()===c(e).getTime()}function d(t,e){a(2,arguments);var n,r=o(t),u=o(e),c=i(r,u),d=Math.abs(s(r,u));if(d<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-c*d);var m=i(r,u)===-c;l(o(t))&&1===d&&1===i(t,u)&&(m=!1),n=c*(d-Number(m))}return 0===n?0:n}function m(t,e){return a(2,arguments),o(t).getTime()-o(e).getTime()}var h={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function f(t){return t?h[t]:h.trunc}function g(t,e,n){a(2,arguments);var r=m(t,e)/1e3;return f(null==n?void 0:n.roundingMethod)(r)}var p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function v(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var y,k={date:v({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:v({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:v({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function S(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,s=o[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?j(u,(function(t){return t.test(s)})):M(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var l=e.slice(s.length);return{value:i,rest:l}}}function M(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function j(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const D={code:"en-US",formatDistance:function(t,e,n){var a,r=p[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:k,formatRelative:function(t,e,n,a){return b[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(y.matchPattern);if(!n)return null;var a=n[0],r=t.match(y.parsePattern);if(!r)return null;var o=y.valueCallback?y.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(a.length);return{value:o,rest:i}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function P(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function T(t){return P({},t)}function E(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var L=1440,x=43200;function C(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function q(t,e){a(2,arguments);var n=o(t),r=C(e);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}var W=n(171);!function(t,n,r){var s,u;a(2,arguments);var c=e(),l=null!==(s=null!==(u=null==r?void 0:r.locale)&&void 0!==u?u:c.locale)&&void 0!==s?s:D;if(!l.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=i(t,n);if(isNaN(m))throw new RangeError("Invalid time value");var h,f,p=P(T(r),{addSuffix:Boolean(null==r?void 0:r.addSuffix),comparison:m});m>0?(h=o(n),f=o(t)):(h=o(t),f=o(n));var v,y=g(f,h),k=(E(f)-E(h))/1e3,b=Math.round((y-k)/60);if(b<2)return null!=r&&r.includeSeconds?y<5?l.formatDistance("lessThanXSeconds",5,p):y<10?l.formatDistance("lessThanXSeconds",10,p):y<20?l.formatDistance("lessThanXSeconds",20,p):y<40?l.formatDistance("halfAMinute",0,p):y<60?l.formatDistance("lessThanXMinutes",1,p):l.formatDistance("xMinutes",1,p):0===b?l.formatDistance("lessThanXMinutes",1,p):l.formatDistance("xMinutes",b,p);if(b<45)return l.formatDistance("xMinutes",b,p);if(b<90)return l.formatDistance("aboutXHours",1,p);if(b<L){var w=Math.round(b/60);return l.formatDistance("aboutXHours",w,p)}if(b<2520)return l.formatDistance("xDays",1,p);if(b<x){var S=Math.round(b/L);return l.formatDistance("xDays",S,p)}if(b<86400)return v=Math.round(b/x),l.formatDistance("aboutXMonths",v,p);if((v=d(f,h))<12){var M=Math.round(b/x);return l.formatDistance("xMonths",M,p)}var j=v%12,C=Math.floor(v/12);j<3?l.formatDistance("aboutXYears",C,p):j<9?l.formatDistance("overXYears",C,p):l.formatDistance("almostXYears",C+1,p)}(function(t,e){a(2,arguments);var n=C(e);return q(t,-n)}(new Date,3),new Date,{addSuffix:!0}),document.querySelector(".newProjectButton").addEventListener("click",W.O),document.querySelector(".inputScreenProject").addEventListener("click",W.O),document.querySelector(".newTaskButton").addEventListener("click",W.E),document.querySelector(".inputScreenTask").addEventListener("click",W.E);let N=0,X=[{projectTitle:"Inbox",projectDescription:"a placeholder Project",projectTaskList:[{taskTitle:"go shopping",taskDescription:"a placeholder task",taskDate:"01.03.23",taskPriority:"low",taskProject:"Inbox"},{taskTitle:"Seltene Erden",taskDescription:"Es ist wichtig, dass mal regelmäßig neue Erden prüft. So kann man garantieren, dass alles stimmt.",taskDate:"14.11.23",taskPriority:"high",taskProject:"Inbox"},{taskTitle:"Mehr sehen",taskDescription:"dalökjdsflrg lkwr rlkmfrelkalvldskfmnlsdfijirae f.",taskDate:"14.11.23",taskPriority:"high",taskProject:"Inbox"}]},{projectTitle:"Sports",projectDescription:"a placeholder Project",projectTaskList:[{taskTitle:"wrestling",taskDescription:"a placeholder task",taskDate:"01.03.24",taskPriority:"low",taskProject:"Inbox"},{taskTitle:"add linter",taskDescription:"Learn new techniques.",taskDate:"14.11.23",taskPriority:"high",taskProject:"Inbox"},{taskTitle:"read documentation",taskDescription:"dalökjdsflrg lkwr rlkmfrelkalvldskfmnlsdfijirae f.",taskDate:"14.11.23",taskPriority:"high",taskProject:"Inbox"}]}];function A(){const t=document.querySelector("#taskProject");for(;t.lastChild;)t.removeChild(t.lastChild);X.forEach((e=>{let n=document.createElement("option");n.value=e.projectTitle,n.textContent=e.projectTitle,t.appendChild(n)}))}function F(){const t=document.querySelector(".taskList");for(;t.lastChild;)t.removeChild(t.lastChild);X[N].projectTaskList.forEach(((e,n)=>{let a=document.createElement("div");a.classList.add("task");let r=document.createElement("div");r.classList.add("taskHeader");let o=document.createElement("div");o.classList.add("taskLeft");let i=document.createElement("div");i.addEventListener("click",(function(){X[N].projectTaskList.splice(n,1),F()})),i.classList.add("taskButton"),o.appendChild(i);let s=document.createElement("div");s.classList.add("taskText"),s.textContent=e.taskTitle,o.appendChild(s),r.append(o);let u=document.createElement("div");u.classList.add("taskRight"),u.textContent=e.taskDate,r.append(u),a.append(r);let c=document.createElement("div");c.classList.add("taskExpand"),c.textContent=e.taskDescription,a.append(c),t.append(a),a.addEventListener("mouseover",(function(){O(c)})),a.addEventListener("mouseout",(function(){O(c)}))}))}function O(t){t.classList.toggle("taskExpandActive")}function I(){document.querySelector(".contentProjectTitle").textContent=X[N].projectTitle}function Y(){const t=document.querySelector(".projectsList");for(;t.lastChild;)t.removeChild(t.lastChild);X.forEach(((e,n)=>{let a=document.createElement("div");a.textContent=e.projectTitle,a.classList.add("menuProject"),a.dataset.projectId=n,a.addEventListener("click",(()=>{N=n,I(),F()}));let r=document.createElement("div");r.classList.add("projectExpand"),r.textContent=e.projectDescription,a.append(r),a.addEventListener("mouseover",(function(){B(r)})),a.addEventListener("mouseout",(function(){B(r)})),t.appendChild(a)}))}function B(t){t.classList.toggle("projectExpandActive")}document.querySelector(".projectSubmitButton").addEventListener("click",(()=>{let t=function(){const t=document.querySelector("#projectTitle"),e=document.querySelector("#projectDescription"),n={projectTitle:t.value,projectDescription:e.value,projectTaskList:[]};return t.value="",e.value="",n}();X.push(t),Y(),console.log(X),A()})),document.querySelector(".taskSubmitButton").addEventListener("click",(()=>{let t=function(t,e,n,a){const r=document.querySelector("#taskTitle"),o=document.querySelector("#taskDescription"),i=document.querySelector("#taskDate"),s=document.querySelector("#taskPriority"),u=document.querySelector("#taskProject");return{taskTitle:r.value,taskDescription:o.value,taskDate:i.value,taskPriority:s.value,taskProject:u.value}}();taskTitle.value="",taskDescription.value="";for(let e=0;e<X.length;e++)X[e].projectTitle===t.taskProject&&X[e].projectTaskList.push(t);F()})),localStorage.getItem("projectList")?function(){let t=localStorage.getItem("projectList");console.log(t)}():localStorage.setItem("projectList",X),Y(),A(),I(),F(),function(){const t=document.querySelector(".burgerMenu"),e=document.querySelector(".menu");document.querySelector(".line1"),document.querySelector(".line2"),document.querySelector(".line3"),t.addEventListener("click",(()=>{e.classList.toggle("menuMobileActive"),t.classList.toggle("toggle")}))}()})()})();