(()=>{var e={467:()=>{const e=document.documentElement,t=()=>{e.style.setProperty("--aspect-ratio",parseInt(window.innerWidth,10)/parseInt(window.innerHeight,10))};window.addEventListener("resize",t),window.addEventListener("pageshow",t)}},t={};function n(l){var r=t[l];if(void 0!==r)return r.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,n),a.exports}(()=>{"use strict";function e(e){const t=e.target.id.replace(/Slide/i,"control"),n=document.querySelector(`.labels > label.${t}`),l=document.querySelector(".labels > label.active");return console.log(e.target.value,e.target.id),"on"===e.target.value&&(l&&l.classList.remove("active"),n&&n.classList.add("active")),!0}n(467),function(){const t=new XMLHttpRequest;t.open("GET","https://script.google.com/macros/s/AKfycbxBiTBY3xW9uqtExX505TXKtE0wWi98FX1h6vZ4qqlEOpw5IPRP194OGZOTTnyGAbI/exec"),t.onreadystatechange=()=>{if(4===t.readyState&&200===t.status){const n=JSON.parse(t.responseText),{result:l}=n,r=Math.floor(Math.random()*l.length);for(let e=0;e<l.length;e+=1){const t=n.result[e];let l='\n      <label for="slide--nSlide" class="control--nSlide --checked">\n      <span class="desc-label desc--nSlide">--linkSlide</span>\n      <span class="material-symbols-outlined control control--nSlide">\n      arrow_forward_ios\n      </span>\n    </label>';try{l=l.replace(/--nSlide/gm,e.toString()),l=l.replace(/--linkSlide/gm,t[0].replace("http://","").replace("https://","").split(/[/.?#]/)[0]),l=l.replace(/--checked/gm,e===r?"active":""),document.querySelector(".labels").innerHTML+=l}catch(e){}}for(let e=0;e<l.length;e+=1){const t=n.result[e];let l='<input type="radio" name="point" id="slide--nSlide" class="input displaynone" --checked>\n<div class="slide slide--nSlide"><iframe src="--linkSlide" width="100%"\n    height="100%"  loading="lazy" frameborder="no"></iframe></div>\n  <div class="desc desc--nSlide">\n    <a href="--linkSlide" target="_blank">\n      <span class="material-symbols-outlined">link</span> --goToSlide</a><div class="desc-text">--descSlide<h1></div>';try{l=l.replace(/--nSlide/gm,e.toString()),l=l.replace(/--linkSlide/gm,t[0]),l=l.replace(/--descSlide/gm,t[1]),l=l.replace(/--goToSlide/gm,t[0]),l=l.replace(/--checked/gm,e===r?"checked":""),document.querySelector(".wrapper").innerHTML+=l}catch(e){}}document.querySelectorAll("input.input").forEach((t=>t.addEventListener("change",e)))}},t.send()}()})()})();