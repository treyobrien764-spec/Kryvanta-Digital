/* KRYVANTA V9 — bespoke coded portfolio visuals. Non-interactive concept previews. */
(()=>{'use strict';
const url=slug=>'design-previews/collection.html?site='+encodeURIComponent(slug);
const replaced=[];
const oldFlagship={westhaven:'westhaven-build-group',crownpoint:'crownpoint-roofing',royal:'royal-comfort-heating',apex:'apexflow-plumbing',onyx:'onyx-auto-atelier',loadout:'loadout-junk-pros'};
function getSlug(img){const src=img.getAttribute('src')||'';const m=src.match(/(?:assets\/thumbs|assets\/premium-concepts)\/([^/]+)\.(?:webp|png|jpg|jpeg)/);return m?.[1]||null}
function place(node,slug,opts={}){
 if(!slug||slug==='clutchpoint-gaming')return;
 const wrapper=document.createElement('div');wrapper.className='kryvanta-v9-preview'+(opts.stack?' v9-stack':'');
 if(opts.stack){wrapper.classList.add(...(node.className||'').split(' ').filter(Boolean));}
 wrapper.setAttribute('role','img');wrapper.setAttribute('aria-label',slug.replaceAll('-',' ')+' — original coded website design concept');
 const frame=document.createElement('iframe');frame.title=slug.replaceAll('-',' ')+' website design concept';frame.setAttribute('tabindex','-1');frame.setAttribute('aria-hidden','true');frame.setAttribute('loading','lazy');frame.setAttribute('scrolling','no');frame.dataset.previewUrl=url(slug);wrapper.append(frame);
 node.replaceWith(wrapper);replaced.push(wrapper);return wrapper;
}
for(const img of document.querySelectorAll('.showcase-tile > img,.rail-shot > img')){place(img,getSlug(img));}
for(const old of document.querySelectorAll('.flagship-window')){
 const iframe=old.querySelector('iframe');const site=new URL(iframe?.getAttribute('src')||'x',document.baseURI).searchParams.get('site');
 const slug=oldFlagship[site];if(slug)place(old,slug);
}
for(const img of document.querySelectorAll('.signature-visual > img'))place(img,getSlug(img));
for(const img of document.querySelectorAll('.hero-stack > img')){
 const src=img.getAttribute('src')||'';if(src.includes('/premium-concepts/'))place(img,getSlug(img),{stack:true});
}
function resize(wrap){const frame=wrap.querySelector('iframe');if(!frame)return;const width=wrap.getBoundingClientRect().width;frame.style.transform='scale('+(Math.max(80,width)/1440)+')';}
function begin(wrap){const frame=wrap.querySelector('iframe');if(!frame||frame.src)return;resize(wrap);frame.onload=()=>wrap.classList.add('v9-loaded');frame.src=frame.dataset.previewUrl;}
let io;
if('IntersectionObserver' in window){io=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){begin(entry.target);io.unobserve(entry.target)}}},{rootMargin:'700px 300px'});for(const w of replaced)io.observe(w);}else for(const w of replaced)begin(w);
if('ResizeObserver' in window){const ro=new ResizeObserver(entries=>{for(const entry of entries)resize(entry.target)});replaced.forEach(w=>ro.observe(w));}else window.addEventListener('resize',()=>replaced.forEach(resize),{passive:true});
})();