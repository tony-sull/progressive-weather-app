!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const o=["client/5e439cb82d3d1e145b61/index.0.js","client/5e439cb82d3d1e145b61/main.js"].concat(["favicon.ico","favicon.png","global.css","icons/cloud.svg","icons/high.svg","icons/humidity.svg","icons/low.svg","icons/refresh.svg","icons/weather/cloud.svg","icons/weather/rain.svg","icons/weather/snow.svg","icons/weather/thunderstorm.svg","icons/wind.svg","images/morning.jpg","images/night.jpg","img/icons/android-chrome-192x192.png","img/icons/android-chrome-512x512.png","img/icons/apple-touch-icon-120x120.png","img/icons/apple-touch-icon-152x152.png","img/icons/apple-touch-icon-180x180.png","img/icons/apple-touch-icon-60x60.png","img/icons/apple-touch-icon-76x76.png","img/icons/apple-touch-icon.png","img/icons/favicon-16x16.png","img/icons/favicon-32x32.png","img/icons/msapplication-icon-144x144.png","img/icons/mstile-150x150.png","img/icons/safari-pinned-tab.svg","img/site-image-lg.jpg","manifest.json","svelte-logo-192.png","svelte-logo-512.png"]),i=new Set(o);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1542835104281").then(e=>e.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1542835104281"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&i.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1542835104281").then(async n=>{try{const t=await fetch(e.request);return n.put(e.request,t.clone()),t}catch(t){const o=await n.match(e.request);if(o)return o;throw t}}))))})}]);