(()=>{"use strict";({136:function(){var e=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function c(e){try{s(n.next(e))}catch(e){r(e)}}function a(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,a)}s((n=n.apply(e,t||[])).next())}))};function t(e,t){var i,n,o;const r=null!==(o=null===(n=null===(i=e.content_urls)||void 0===i?void 0:i.desktop)||void 0===n?void 0:n.page)&&void 0!==o?o:null;r?chrome.storage.sync.get("isActive",(e=>{const i=e.isActive;chrome.tabs.create({url:r,index:t,active:i}).catch((e=>{console.error("Error fetching data from Wikipedia API in Background:",e)}))})):console.log("No suitable link created.")}function i(){return e(this,void 0,void 0,(function*(){let[e]=yield chrome.tabs.query({active:!0,lastFocusedWindow:!0});return e.index+1}))}chrome.runtime.onMessage.addListener((function(n,o,r){return e(this,void 0,void 0,(function*(){n.wikipediaData&&t(n.wikipediaData,yield i())}))})),chrome.contextMenus.onClicked.addListener((function(n,o){return e(this,void 0,void 0,(function*(){const e=n.selectionText;if(e){let n=e.split(" ");for(let e=0;e<n.length;e++)n[e]=n[e].charAt(0).toUpperCase()+n[e].slice(1);const o=`https://en.wikipedia.org/api/rest_v1/page/summary/${null==n?void 0:n.join("_")}`;try{const e=yield fetch(o);t(yield e.json(),yield i())}catch(e){console.error("Error fetching data from Wikipedia API in contentScript:",e)}}}))})),chrome.commands.onCommand.addListener((function(e,t){var i;(null===(i=t.url)||void 0===i?void 0:i.startsWith("chrome://"))||chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.scripting.executeScript({target:{tabId:e[0].id?e[0].id:-1},files:["contentScript.js"]})}))})),chrome.runtime.onInstalled.addListener((()=>{chrome.contextMenus.create({id:"WikiChromeMenu",title:'WikiChrome Search: "%s"',contexts:["selection"]})}))}})[136]()})();