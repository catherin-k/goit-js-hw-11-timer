!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),new(function(){function e(t){var r=t.selector,n=t.targetDate;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=r,this.targetDate=n,this.refs={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')}}var t,r,a;return t=e,(r=[{key:"startTimer",value:function(){var e=this;setInterval((function(){var t=new Date(e.targetDate)-Date.now();e.days=e.pad(Math.floor(t/864e5)),e.hours=e.pad(Math.floor(t%864e5/36e5)),e.mins=e.pad(Math.floor(t%36e5/6e4)),e.secs=e.pad(Math.floor(t%6e4/1e3)),e.refs.days.innerHTML=e.days,e.refs.hours.innerHTML=e.hours,e.refs.mins.innerHTML=e.mins,e.refs.secs.innerHTML=e.secs}),1e3)}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}}])&&n(t.prototype,r),a&&n(t,a),e}())({selector:"#timer-1",targetDate:new Date("Jan 01, 2021")}).startTimer()}]);
//# sourceMappingURL=main.bundle.js.map