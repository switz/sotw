(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1000:function(n,e,t){"use strict";t.r(e);var o=t(37),r=t.n(o),c=t(413),a=t.n(c),i=(t(421),t(93)),s=t.n(i),u=t(414),l=t(149),f=t(415),h=t.n(f),w=t(148),d=(t(999),"https://cors-anywhere.herokuapp.com/https://groups.yahoo.com"),g=function(){var n=function(){var n=Object(o.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1],c=Object(o.useState)(localStorage.sotwData||""),a=Object(l.a)(c,2),i=a[0],f=a[1];return Object(o.useEffect)(function(){Object(u.a)(s.a.mark(function n(){var e,t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.next=3,fetch("".concat(d,"/neo/groups/nyc_sotw/conversations/topics")).then(function(n){return n.text()}).then(function(n){return new w.JSDOM(n).window.document.querySelector("#yg-msg-list a.yg-msg-link").href});case 3:return e=n.sent,n.next=6,fetch("".concat(d).concat(e)).then(function(n){return n.text()}).then(function(n){var e=new w.JSDOM(n);return console.log(e),e.window.document.querySelector(".msg-content").innerHTML});case 6:t=n.sent,localStorage.sotwData=t,f(t),r(!1);case 10:case"end":return n.stop()}},n)}))()},[]),[t,i]}(),e=Object(l.a)(n,2),t=e[0],c=e[1];return r.a.createElement("div",{className:"app"},r.a.createElement("a",{href:""},"Refresh")," - Loading: ",String(t),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a.div,null,c),c&&r.a.createElement("p",null,"All shows are sourced by Neddyo @ ",r.a.createElement("a",{href:"https://groups.yahoo.com/neo/groups/nyc_sotw/info"},"https://groups.yahoo.com/neo/groups/nyc_sotw/info")))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}a.a.render(r.a.createElement(g,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/sotw",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/sotw","/service-worker.js");p?(function(n,e){fetch(n).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):v(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(e,n)})}}()},247:function(n,e){},416:function(n,e,t){n.exports=t(1e3)},421:function(n,e,t){},471:function(n,e){},472:function(n,e){},547:function(n,e){},549:function(n,e){},590:function(n,e){},591:function(n,e){},656:function(n,e){},999:function(n,e,t){}},[[416,1,2]]]);
//# sourceMappingURL=main.d05f6993.chunk.js.map