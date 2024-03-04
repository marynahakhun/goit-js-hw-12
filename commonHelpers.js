import{S as L,a as q,i as m}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(i){return i.hits.map(({webformatURL:o,tags:r,largeImageURL:s,likes:e,views:t,comments:a,downloads:F})=>` <li>
        <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${o}" 
        alt="${r}"
        data-source="${s}">
        <div class="image-info">
                            <ul class="image-info-list">
                                <li class="image-item">
                                    <h2 class="image-text">Likes</h2>
                                    <p class="image-quantity">${e}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Views</h2>
                                    <p class="image-quantity">${t}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Comments</h2>
                                    <p class="image-quantity">${a}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Downloads</h2>
                                    <p class="image-quantity">${F}</p>
                                </li>
                            </ul>
                        </div>
      </li>`).join("")}function f(){return new L(".gallery-link",{captionsData:"alt",captionDelay:250})}const u=15;let y=1;async function b(i){const o=new URLSearchParams({key:"42545240-8b0483885ebe28877133c0801",q:i,per_page:u,page:y}),r="https://pixabay.com/api/",s=await q.get(`${r}?${o}`);return y+=1,console.log(s),{hits:s.data.hits,totalHits:s.data.totalHits}}const p=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),n=document.querySelector(".load-more");let d,g=1;p.addEventListener("submit",v);n.addEventListener("click",B);function v(i){i.preventDefault(),c.innerHTML="",l.style.display="block",n.style.display="none";const o=p.elements.search.value;g+=1,b(o).then(r=>{const s=h(r);c.insertAdjacentHTML("beforeend",s),l.style.display="none",d=f(),d.refresh();const e=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"});const t=r.totalHits,a=Math.ceil(t/u);if(g>a)return n.style.display="none",m.error({position:"topRight",message:"We're sorry, there are no more images to load"});n.style.display="block"}).catch(r=>{console.error("Fetch error:",r),l.style.display="none",m.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})})}function B(){const i=p.elements.search.value;l.style.display="block",g+=1,b(i).then(o=>{const r=h(o);c.insertAdjacentHTML("beforeend",r),l.style.display="none",d=f(),d.refresh();const s=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"});const e=o.totalHits,t=Math.ceil(e/u);if(g>t)return n.style.display="none",m.error({position:"topRight",message:"We're sorry, there are no more images to load"});n.style.display="block"}).catch(o=>{console.error("Fetch error:",o),l.style.display="none",m.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})})}
//# sourceMappingURL=commonHelpers.js.map
