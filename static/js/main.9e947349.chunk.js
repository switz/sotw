(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1000:function(n,e,t){"use strict";t.r(e);var o=t(38),r=t.n(o),c=t(412),a=t.n(c),i=(t(421),t(93)),s=t.n(i),u=t(413),l=t(415),f=t(414),h=t.n(f),w=t(148),d=(t(999),"https://cors-anywhere.herokuapp.com/https://groups.yahoo.com"),p=function(){var n=function(){var n=Object(o.useState)(localStorage.sotwData||""),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(o.useEffect)(function(){Object(u.a)(s.a.mark(function n(){var e,t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(d,"/neo/groups/nyc_sotw/conversations/topics")).then(function(n){return n.text()}).then(function(n){return new w.JSDOM(n).window.document.querySelector("#yg-msg-list a.yg-msg-link").href});case 2:return e=n.sent,n.next=5,fetch("".concat(d).concat(e)).then(function(n){return n.text()}).then(function(n){var e=new w.JSDOM(n);return console.log(e),e.window.document.querySelector(".msg-content").innerHTML});case 5:t=n.sent,localStorage.sotwData=t,r(t);case 8:case"end":return n.stop()}},n)}))()},[]),t}();return r.a.createElement("div",{className:"app"},r.a.createElement("a",{href:"/"},"Refresh"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a.div,null,n),n&&r.a.createElement("p",null,"All shows are sourced by Neddyo @ ",r.a.createElement("a",{href:"https://groups.yahoo.com/neo/groups/nyc_sotw/info"},"https://groups.yahoo.com/neo/groups/nyc_sotw/info")))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}a.a.render(r.a.createElement(p,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/sotw",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/sotw","/service-worker.js");g?(function(n,e){fetch(n).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):v(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(e,n)})}}()},246:function(n,e){},416:function(n,e,t){n.exports=t(1e3)},421:function(n,e,t){},471:function(n,e){},472:function(n,e){},547:function(n,e){},549:function(n,e){},590:function(n,e){},591:function(n,e){},656:function(n,e){},999:function(n,e,t){}},[[416,1,2]]]);
//# sourceMappingURL=main.9e947349.chunk.js.map