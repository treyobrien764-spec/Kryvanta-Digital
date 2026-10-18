(() => {
const pills=[...document.querySelectorAll('[data-filter]')], rails=[...document.querySelectorAll('.category-rail')], search=document.getElementById('portfolio-search'),count=document.querySelector('.portfolio-results'),empty=document.getElementById('portfolio-empty');
let filter='All';
const update=()=>{
 const query=(search?.value||'').trim().toLowerCase();let total=0;
 for(const rail of rails){const cat=rail.dataset.category;let visible=0;for(const card of rail.querySelectorAll('.rail-card')){const name=card.dataset.cardName||'';const show=(filter==='All'||cat===filter)&&(!query||name.includes(query)||cat.toLowerCase().includes(query));card.hidden=!show;if(show)visible++;}rail.hidden=visible===0;total+=visible;}
 if(count)count.textContent='SHOWING '+total+' WEBSITE CONCEPT'+(total===1?'':'S');if(empty)empty.hidden=total!==0;
};
for(const pill of pills)pill.addEventListener('click',()=>{filter=pill.dataset.filter;pills.forEach(p=>{p.classList.toggle('active',p===pill);p.setAttribute('aria-pressed',String(p===pill));});update();});
if(search)search.addEventListener('input',update);
for(const rail of rails){const track=rail.querySelector('.category-track');rail.querySelector('[data-rail-prev]')?.addEventListener('click',()=>track.scrollBy({left:-(track.querySelector('.rail-card')?.clientWidth||360)-18,behavior:'smooth'}));rail.querySelector('[data-rail-next]')?.addEventListener('click',()=>track.scrollBy({left:(track.querySelector('.rail-card')?.clientWidth||360)+18,behavior:'smooth'}));}
})();