(()=>{"use strict";const t=document.getElementById("setActiveButton");function e(e){t&&(t.classList.toggle("active",e),t.classList.toggle("inactive",!e))}chrome.storage.sync.get("isActive",(t=>{e(void 0===t.isActive||t.isActive)})),t&&t.addEventListener("click",(()=>{chrome.storage.sync.get("isActive",(t=>{const s=!t.isActive;e(s),chrome.storage.sync.set({isActive:s})}))}))})();