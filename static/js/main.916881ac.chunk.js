(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){e.exports=n(385)},178:function(e,t,n){},263:function(e,t){},275:function(e,t){},277:function(e,t){},383:function(e,t,n){},385:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(165),c=n.n(r),i=(n(176),n(177),n(178),n(99)),s=n(14),l=n.n(s),u=n(61),d=(n(181),n(166)),f=n.n(d),m=n(167),w=n.n(m),h=(n(247),n(383),function(e){return e?[e.getMonth(),e.getDate()].join(":"):""}),p=function(){var e=Object(u.a)(l.a.mark(function e(t){var n,a,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setLoading,a=t.setData,n(!0),e.next=4,fetch("https://20iikcfmr1.execute-api.us-east-1.amazonaws.com/default/sotw-dev-hello").then(function(e){return e.json()}).then(function(e){return e.items});case 4:o=e.sent,a(o),n(!1),localStorage.sotwData=JSON.stringify(o);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=[];try{g=JSON.parse(localStorage.sotwData)}catch(y){console.log("could not parse localstorage",y)}var v=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(g),s=Object(i.a)(c,2),d=s[0],m=s[1],v=new Date;return console.log(d),v.setTime(v.getTime()-144e5-864e5),Object(a.useEffect)(function(){f.a.init({mainElement:"body",onRefresh:function(){var e=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({setLoading:r,setData:m});case 2:return e.abrupt("return",Promise.resolve());case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}),p({setLoading:r,setData:m});var e=new Date;e.setTime(e.getTime()-144e5);var t=document.querySelector('.day[data-date="'.concat(h(e),'"]'));t&&t.scrollIntoView()},[]),o.a.createElement("div",{className:"app","data-is-loading":n},d.filter(function(e){return new Date(e.date)>v}).map(function(e){return o.a.createElement("div",{key:e.line,className:"day","data-date":h(new Date(e.date))},o.a.createElement(w.a,{enabled:!0,top:0,innerZ:1},o.a.createElement("div",{className:"day-title"},e.line," ",e.shows.length," shows")),e.shows.map(function(e){return o.a.createElement("div",{key:e.line,className:"show","data-is-asterisked":e.isAsterisked},o.a.createElement("div",{className:"band"},e.isAsterisked?"* ":"",e.band),o.a.createElement("div",{className:"metadata"},"@",e.metadata))}))}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),d&&o.a.createElement("p",null,"All shows are sourced by Neddyo @ ",o.a.createElement("a",{href:"https://groups.yahoo.com/neo/groups/nyc_sotw/info"},"https://groups.yahoo.com/neo/groups/nyc_sotw/info")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:""},"FORCE REFRESH"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sotw",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sotw","/service-worker.js");b?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):E(t,e)})}}()}},[[171,1,2]]]);
//# sourceMappingURL=main.916881ac.chunk.js.map