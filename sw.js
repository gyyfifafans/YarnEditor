var __wpo = {"assets":{"main":["./fonts/context-menu-icons.eot","./fonts/context-menu-icons.woff2","./fonts/context-menu-icons.woff","./fonts/context-menu-icons.ttf","./fonts/droid-sans-mono.ttf","./css/0.css","./js/main.926997434a7ac381ca75.js","./js/runtime.926997434a7ac381ca75.js","./js/vendor.926997434a7ac381ca75.js","./public/droid-sans-mono.ttf","./public/images/icons.png","./public/images/sort.png","./public/images/undo-redo.png","./public/images/zooms.png","./public/dictionaries/en/index.aff","./public/icon.ico","./public/images/dropbox.ico","./public/mode-yarn.js","./public/templates/node.html","./public/theme-yarn.js","./public/images/twine-favicon-152.png","./public/icon.png","./public/dictionaries/en/index.dic","./manifest.json","./icon_32x32.ico","./icon_128x128.png","./icon_96x96.png","./icon.ico","./","https://www.dropbox.com/static/api/2/dropins.js","https://www.dropbox.com/static/images/widgets/dbx-saver-status.png"],"additional":[],"optional":[]},"externals":["https://www.dropbox.com/static/api/2/dropins.js","https://www.dropbox.com/static/images/widgets/dbx-saver-status.png"],"hashesMap":{"21180fee4273dad56d13761415ba1fe92a0533f8":"./fonts/context-menu-icons.eot","631974e22bbc472068be7d6eb2ca07b3e29bc99a":"./fonts/context-menu-icons.woff2","b9004398b505bb25ae735387adc08142ea9b6a88":"./fonts/context-menu-icons.woff","abd7ffcdd5398aebccfb129705db0cd84c1cbae3":"./fonts/context-menu-icons.ttf","57e6c970e88448ef60d0154d3e60bbb108d6feaf":"./public/droid-sans-mono.ttf","f4d088a1956da09583676785b5b5047d90721a8d":"./css/0.css","6edc21267f0d87773a6fd337346eafdf6f6570e8":"./js/main.926997434a7ac381ca75.js","f87c89da2f5f0f5a6e889b9a134e123b1dd96421":"./js/runtime.926997434a7ac381ca75.js","3b0fb3ac46a49fb45c4f85d05ecd77e5382221b4":"./js/vendor.926997434a7ac381ca75.js","7847ae8a714a1d9383d638e7f9270cdb6850fa85":"./public/images/icons.png","5e38d19c51a8697fb319e5e3ec9e4ee18b31223d":"./public/images/sort.png","a9a6662b9485bdf9eb6e871ef7ac3b90d3f908df":"./public/images/undo-redo.png","0bbe7ca3c222817d0817266ac4e48736ac1df2ea":"./public/images/zooms.png","0ee81d7c690e1906b2122aebcf3ce450718cd21a":"./public/dictionaries/en/index.aff","85bdd1c23f10211269399a8644809d126293a2d5":"./icon.ico","b55b0e80a4a533be00e26d30756cb9b860ad76b1":"./public/images/dropbox.ico","a5f412f9cb81ef424408659cc9199fb9b8849282":"./public/mode-yarn.js","5292ef7b2ae59924b2e71ffc65053ae67ad84747":"./public/templates/node.html","7ff186aace5dfc899885101dcc72fbfa26e03258":"./public/theme-yarn.js","a60c608a3b0d9bac2ceac6d430c2cc7e9dfdf538":"./public/images/twine-favicon-152.png","e49778dac0b7d0c156b5aec447707ed4aa8bb037":"./public/icon.png","ddd3af0910cf8da0bffac81c02735e92bc0d6598":"./public/dictionaries/en/index.dic","b941f292bafa4b4710f69adb2d99e11645663d40":"./manifest.json","7895e0c8e753cdf024bf8f051aa2f789032f71fe":"./icon_128x128.png","c3f0255b0e21340b2f1201eeb19163500183e617":"./icon_96x96.png","f5d49f5f489f6969f7d1199867940d04ed8ab088":"./"},"strategy":"changed","responseStrategy":"cache-first","version":"04/04/2020, 14:02:02","name":"webpack-offline","pluginVersion":"5.0.7","relativePaths":true};

!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="M7p9")}({M7p9:function(e,n,t){"use strict";var r,o,i;if(r=ExtendableEvent.prototype.waitUntil,o=FetchEvent.prototype.respondWith,i=new WeakMap,ExtendableEvent.prototype.waitUntil=function(e){var n=this,t=i.get(n);if(!t)return t=[Promise.resolve(e)],i.set(n,t),r.call(n,Promise.resolve().then((function e(){var r=t.length;return Promise.all(t.map((function(e){return e.catch((function(){}))}))).then((function(){return t.length!=r?e():(i.delete(n),Promise.all(t))}))})));t.push(Promise.resolve(e))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),o.call(this,e)},void 0===a)var a=!1;function c(e,n){return caches.match(e,{cacheName:n}).then((function(t){return u(t)?t:s(t).then((function(t){return caches.open(n).then((function(n){return n.put(e,t)})).then((function(){return t}))}))})).catch((function(){}))}function u(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function s(e){return u(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then((function(n){return new Response(n,{headers:e.headers,status:e.status})}))}function f(e,n){console.groupCollapsed("[SW]:",e),n.forEach((function(e){console.log("Asset:",e)})),console.groupEnd()}!function(e,n){var t=n.cacheMaps,r=n.navigationPreload,o=e.strategy,i=e.responseStrategy,u=e.assets,l=e.hashesMap,h=e.externals,d=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},p=e.name,v=e.version,m=p+":"+v,g=p+"$preload";Object.keys(u).forEach((function(e){u[e]=u[e].map((function(e){var n=new URL(e,location);return n.hash="",-1===h.indexOf(e)&&(n.search=""),n.toString()}))})),l=Object.keys(l).reduce((function(e,n){var t=new URL(l[n],location);return t.search="",t.hash="",e[n]=t.toString(),e}),{}),h=h.map((function(e){var n=new URL(e,location);return n.hash="",n.toString()}));var w=[].concat(u.main,u.additional,u.optional);function y(n){var t=u[n];return caches.open(m).then((function(r){return U(r,t,{bust:e.version,request:d,failAll:"main"===n})})).then((function(){f("Cached assets: "+n,t)})).catch((function(e){throw console.error(e),e}))}function P(n){return caches.keys().then((function(e){for(var n=e.length,t=void 0;n--&&0!==(t=e[n]).indexOf(p););if(t){var r=void 0;return caches.open(t).then((function(e){return r=e,e.match(new URL("__offline_webpack__data",location).toString())})).then((function(e){if(e)return Promise.all([r,r.keys(),e.json()])}))}})).then((function(t){if(!t)return y(n);var r=t[0],o=t[1],i=t[2],a=i.hashmap,c=i.version;if(!i.hashmap||c===e.version)return y(n);var s=Object.keys(a).map((function(e){return a[e]})),h=o.map((function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()})),p=u[n],v=[],g=p.filter((function(e){return-1===h.indexOf(e)||-1===s.indexOf(e)}));Object.keys(l).forEach((function(e){var n=l[e];if(-1!==p.indexOf(n)&&-1===g.indexOf(n)&&-1===v.indexOf(n)){var t=a[e];t&&-1!==h.indexOf(t)?v.push([t,n]):g.push(n)}})),f("Changed assets: "+n,g),f("Moved assets: "+n,v);var w=Promise.all(v.map((function(e){return r.match(e[0]).then((function(n){return[e[1],n]}))})));return caches.open(m).then((function(t){var r=w.then((function(e){return Promise.all(e.map((function(e){return t.put(e[0],e[1])})))}));return Promise.all([r,U(t,g,{bust:e.version,request:d,failAll:"main"===n,deleteFirst:"main"!==n})])}))}))}function b(){return caches.keys().then((function(e){var n=e.map((function(e){if(0===e.indexOf(p)&&0!==e.indexOf(m))return console.log("[SW]:","Delete cache:",e),caches.delete(e)}));return Promise.all(n)}))}function O(){return caches.open(m).then((function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:l}));return n.put(new URL("__offline_webpack__data",location).toString(),t)}))}self.addEventListener("install",(function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===o?P("main"):y("main"),e.waitUntil(n)})),self.addEventListener("activate",(function(e){console.log("[SW]:","Activate event");var n=function(){if(!u.additional.length)return Promise.resolve();a&&console.log("[SW]:","Caching additional");var e=void 0;e="changed"===o?P("additional"):y("additional");return e.catch((function(e){console.error("[SW]:","Cache section `additional` failed to load")}))}();n=(n=(n=n.then(O)).then(b)).then((function(){if(self.clients&&self.clients.claim)return self.clients.claim()})),r&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var o=n.toString();-1===h.indexOf(o)&&(n.search="",o=n.toString());var u=-1!==w.indexOf(o),s=o;if(!u){var f=function(e){var n=e.url,r=new URL(n),o=void 0;o=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":r.origin===location.origin?"same-origin":"cross-origin";for(var i=0;i<t.length;i++){var a=t[i];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(o))){var c=void 0;if((c="function"==typeof a.match?a.match(r,e):n.replace(a.match,a.to))&&c!==n)return c}}}(e.request);f&&(s=f,u=!0)}if(u){var l=void 0;l="network-first"===i?function(e,n,t){return R(e).then((function(e){if(e.ok)return a&&console.log("[SW]:","URL ["+n+"] from network"),e;throw e})).catch((function(e){return a&&console.log("[SW]:","URL ["+n+"] from cache if possible"),c(t,m).then((function(n){if(n)return n;if(e instanceof Response)return e;throw e}))}))}(e,o,s):function(e,n,t){return function(e){if(r&&"function"==typeof r.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=r.map(new URL(e.request.url),e.request);n&&function(e,n){var t=new URL(e,location),r=n.preloadResponse;S.set(r,{url:t,response:r});var o=function(){return S.has(r)},i=r.then((function(e){if(e&&o()){var n=e.clone();return caches.open(g).then((function(e){if(o())return e.put(t,n).then((function(){if(!o())return caches.open(g).then((function(e){return e.delete(t)}))}))}))}}));n.waitUntil(i)}(n,e)}}(e),c(t,m).then((function(r){return r?(a&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then((function(r){return r.ok?(a&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&(o=r.clone(),i=caches.open(m).then((function(e){return e.put(n,o)})).then((function(){console.log("[SW]:","Cache asset: "+n)})),e.waitUntil(i)),r):(a&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r);var o,i}))}))}(e,o,s),e.respondWith(l)}else{if("navigate"===e.request.mode&&!0===r)return void e.respondWith(R(e));if(r){var d=function(e){var n=new URL(e.request.url);if(!(self.registration.navigationPreload&&r&&r.test&&r.test(n,e.request)))return;var t=function(e){if(!S)return;var n=void 0,t=void 0;if(S.forEach((function(r,o){r.url.href===e.href&&(n=r.response,t=o)})),n)return S.delete(t),n}(n),o=e.request;if(t)return e.waitUntil(caches.open(g).then((function(e){return e.delete(o)}))),t;return c(o,g).then((function(n){return n&&e.waitUntil(caches.open(g).then((function(e){return e.delete(o)}))),n||fetch(e.request)}))}(e);if(d)return void e.respondWith(d)}}}})),self.addEventListener("message",(function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}}));var S=new Map;function U(e,n,t){n=n.slice();var r=t.bust,o=!1!==t.failAll,i=!0===t.deleteFirst,a=t.request||{credentials:"omit",mode:"cors"},c=Promise.resolve();return i&&(c=Promise.all(n.map((function(n){return e.delete(n).catch((function(){}))})))),Promise.all(n.map((function(e){var n,t,o;return r&&(t=r,o=-1!==(n=e).indexOf("?"),e=n+(o?"&":"?")+"__uncache="+encodeURIComponent(t)),fetch(e,a).then(s).then((function(e){return e.ok?{response:e}:{error:!0}}),(function(){return{error:!0}}))}))).then((function(t){return o&&t.some((function(e){return e.error}))?Promise.reject(new Error("Wrong response status")):(o||(t=t.filter((function(e,t){return!e.error||(n.splice(t,1),!1)}))),c.then((function(){var r=t.map((function(t,r){var o=t.response;return e.put(n[r],o)}));return Promise.all(r)})))}))}function R(e){return e.preloadResponse&&!0===r?e.preloadResponse.then((function(n){return n||fetch(e.request)})):fetch(e.request)}}(__wpo,{loaders:{},cacheMaps:[],navigationPreload:!1}),e.exports=t("P3YQ")},P3YQ:function(e,n){}});