/* Resize 7 same-origin portfolio preview screens to fit their display cards. */
(()=>{'use strict';const frames=[...document.querySelectorAll('.kd-preview iframe')];
function fit(frame){const box=frame.parentElement;if(!box)return;const w=box.getBoundingClientRect().width;frame.style.transform='scale('+(w/1440)+')'}
function update(){frames.forEach(fit)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',update,{once:true})}else update();
window.addEventListener('resize',update,{passive:true});
if('ResizeObserver' in window){const observer=new ResizeObserver(entries=>{for(const entry of entries){const frame=entry.target.querySelector('iframe');if(frame)fit(frame)}});frames.forEach(f=>observer.observe(f.parentElement))}
})();
