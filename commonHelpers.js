import{S as F,a as L,i as n}from"./assets/vendor-483db976.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function B(o){return o.hits.map(({webformatURL:s,tags:r,largeImageURL:i,likes:e,views:t,comments:l,downloads:b})=>` <li>
        <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${s}" 
        alt="${r}"
        data-source="${i}">
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
      </li>`).join("")}function q(){return new F(".gallery-link",{captionsData:"alt",captionDelay:250})}const y=200;let p=1;async function S(o){const s=new URLSearchParams({key:"42545240-8b0483885ebe28877133c0801",q:o,per_page:y,page:p}),r="https://pixabay.com/api/",i=await L.get(`${r}?${s}`);return p+=1,{hits:i.data.hits,totalHits:i.data.totalHits}}const g=document.querySelector(".form"),d=document.querySelector(".gallery"),a=document.querySelector(".loader"),c=document.querySelector(".load-more");let u,m=1,f="";g.addEventListener("submit",$);c.addEventListener("click",v);function $(o){o.preventDefault(),d.innerHTML="",a.style.display="block",c.style.display="none";const s=g.elements.search.value;f=s,m=1,g.reset(),h(s,m)}function v(){a.style.display="block",m+=1,h(f,m)}function h(o,s){S(o).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"}),a.style.display="none";return}else if(!o.trim())n.error({message:"Заповніть це поле!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),a.style.display="none";else{const i=B(r);d.insertAdjacentHTML("beforeend",i),a.style.display="none",u?u.refresh():u=q(),x();const e=r.totalHits,t=Math.ceil(e/y);if(s>=t)return c.style.display="none",n.error({position:"topRight",message:"We're sorry, there are no more images to load"});c.style.display="block"}}).catch(r=>{a.style.display="none",n.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})})}function x(){const o=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
