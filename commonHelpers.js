import{S as B,a as L,i as c}from"./assets/vendor-483db976.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(i){return i.hits.map(({webformatURL:s,tags:r,largeImageURL:o,likes:e,views:t,comments:n,downloads:b})=>` <li>
        <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${s}" 
        alt="${r}"
        data-source="${o}">
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
                                    <p class="image-quantity">${n}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Downloads</h2>
                                    <p class="image-quantity">${b}</p>
                                </li>
                            </ul>
                        </div>
      </li>`).join("")}function h(){return new B(".gallery-link",{captionsData:"alt",captionDelay:250})}const f=15;let y=1;async function F(i){const s=new URLSearchParams({key:"42545240-8b0483885ebe28877133c0801",q:i,per_page:f,page:y}),r="https://pixabay.com/api/",o=await L.get(`${r}?${s}`);return y+=1,{hits:o.data.hits,totalHits:o.data.totalHits}}const d=document.querySelector(".form"),m=document.querySelector(".gallery"),a=document.querySelector(".loader"),g=document.querySelector(".load-more");let l,u=1;d.addEventListener("submit",q);g.addEventListener("click",C);function q(i){i.preventDefault(),m.innerHTML="",a.style.display="block",g.style.display="none";const s=d.elements.search.value;u=1,F(s).then(r=>{if(r.hits.length===0)c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"}),a.style.display="none",d.reset();else if(!s.trim())c.error({message:"Заповніть це поле!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),a.style.display="none";else{const o=p(r);m.insertAdjacentHTML("beforeend",o),a.style.display="none",l?l.refresh():l=h();const e=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"}),g.style.display="block"}}).catch(r=>{a.style.display="none",c.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})})}function C(){const i=d.elements.search.value;a.style.display="block",u+=1,F(i).then(s=>{const r=p(s);m.insertAdjacentHTML("beforeend",r),a.style.display="none",l?l.refresh():l=h();const o=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"});const e=s.totalHits,t=Math.ceil(e/f);if(u>=t)return g.style.display="none",c.error({position:"topRight",message:"We're sorry, there are no more images to load"});g.style.display="block"}).catch(s=>{a.style.display="none",c.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})})}
//# sourceMappingURL=commonHelpers.js.map
