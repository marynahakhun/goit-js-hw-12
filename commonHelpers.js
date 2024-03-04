import{S as B,a as L,i as n}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(i){return i.hits.map(({webformatURL:o,tags:s,largeImageURL:r,likes:e,views:t,comments:l,downloads:b})=>` <li>
        <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${o}" 
        alt="${s}"
        data-source="${r}">
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
                                    <p class="image-quantity">${l}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Downloads</h2>
                                    <p class="image-quantity">${b}</p>
                                </li>
                            </ul>
                        </div>
      </li>`).join("")}function f(){return new B(".gallery-link",{captionsData:"alt",captionDelay:250})}const y=15;let p=1;async function F(i){const o=new URLSearchParams({key:"42545240-8b0483885ebe28877133c0801",q:i,per_page:y,page:p}),s="https://pixabay.com/api/",r=await L.get(`${s}?${o}`);return p+=1,console.log(r),{hits:r.data.hits,totalHits:r.data.totalHits}}const g=document.querySelector(".form"),m=document.querySelector(".gallery"),a=document.querySelector(".loader"),c=document.querySelector(".load-more");let d,u=1;g.addEventListener("submit",q);c.addEventListener("click",C);function q(i){i.preventDefault(),m.innerHTML="",a.style.display="block",c.style.display="none";const o=g.elements.search.value;u+=1,F(o).then(s=>{if(s.hits.length===0)n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"}),a.style.display="none",g.reset();else if(!o.trim())n.error({message:"Заповніть це поле!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),a.style.display="none";else{const r=h(s);m.insertAdjacentHTML("beforeend",r),a.style.display="none",d=f(),d.refresh();const e=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"});const t=s.totalHits,l=Math.ceil(t/y);if(u>l)return c.style.display="none",n.error({position:"topRight",message:"We're sorry, there are no more images to load"});c.style.display="block"}}).catch(s=>{console.error("Fetch error:",s),a.style.display="none",n.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})})}function C(){const i=g.elements.search.value;a.style.display="block",u+=1,F(i).then(o=>{const s=h(o);m.insertAdjacentHTML("beforeend",s),a.style.display="none",d=f(),d.refresh();const r=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"});const e=o.totalHits,t=Math.ceil(e/y);if(u>t)return c.style.display="none",n.error({position:"topRight",message:"We're sorry, there are no more images to load"});c.style.display="block"}).catch(o=>{console.error("Fetch error:",o),a.style.display="none",n.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})})}
//# sourceMappingURL=commonHelpers.js.map
