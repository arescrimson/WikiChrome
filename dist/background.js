(()=>{"use strict";({136:function(){var e=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,c){function r(e){try{d(i.next(e))}catch(e){c(e)}}function a(e){try{d(i.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};function t(e,t){var n,i,o;const c=null!==(o=null===(i=null===(n=e.content_urls)||void 0===n?void 0:n.desktop)||void 0===i?void 0:i.page)&&void 0!==o?o:null;c?chrome.tabs.create({url:c,index:t,active:!1}).catch((e=>{console.error("Error fetching data from Wikipedia API in Background:",e)})):console.log("No suitable link created.")}function n(){return e(this,void 0,void 0,(function*(){let[e]=yield chrome.tabs.query({active:!0,lastFocusedWindow:!0});return e.index+1}))}chrome.action.onClicked.addListener((e=>{})),chrome.runtime.onMessage.addListener((function(i,o,c){return e(this,void 0,void 0,(function*(){i.wikipediaData&&t(i.wikipediaData,yield n())}))})),chrome.contextMenus.onClicked.addListener((function(i,o){return e(this,void 0,void 0,(function*(){const e=`https://en.wikipedia.org/api/rest_v1/page/summary/${i.selectionText}`;try{const i=yield fetch(e);t(yield i.json(),yield n())}catch(e){console.error("Error fetching data from Wikipedia API in contentScript:",e)}}))})),chrome.commands.onCommand.addListener((function(e,t){chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.scripting.executeScript({target:{tabId:e[0].id?e[0].id:-1},files:["contentScript.js"]})}))})),chrome.contextMenus.create({id:"1",title:'WikiChrome Search: "%s"',contexts:["selection"]})}})[136]()})();