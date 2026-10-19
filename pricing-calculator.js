
/* Shared package prices — Kryvanta one-time estimate and inquiry form. */
(()=>{'use strict';
const packages={
 'Single Page':{price:99,pages:'1 page included'},
 'Business':{price:199,pages:'Up to 3 pages included'},
 'Professional':{price:399,pages:'Up to 5 pages included'},
 'Custom':{price:999,pages:'Base page count and advanced features determined by your quote',custom:true}
};
const money=n=>'$'+n.toLocaleString('en-US');
const clamp=n=>Number.isFinite(n)?Math.max(0,Math.min(99,Math.trunc(n))):0;
const get=n=>{const v=Number(n);return clamp(v)};
for(const root of document.querySelectorAll('[data-pricing-calculator]')){
 const pkg=root.querySelector('[data-calc-package]'),extra=root.querySelector('[data-calc-extra]'),
 minus=root.querySelector('[data-calc-minus]'),plus=root.querySelector('[data-calc-plus]');
 const update=()=>{
  const data=packages[pkg.value]||packages.Business;
  const pages=get(extra.value);extra.value=pages;
  minus.disabled=pages===0;plus.disabled=pages===99;
  root.querySelector('[data-calc-included]').textContent=data.pages+'. Extra standard pages are $75 each.';
  root.querySelector('[data-calc-base]').textContent=money(data.price)+(data.custom?'+':'');
  root.querySelector('[data-calc-extras-label]').textContent=pages+' extra '+(pages===1?'page':'pages')+' × $75';
  root.querySelector('[data-calc-extras-cost]').textContent=money(pages*75);
  root.querySelector('[data-calc-total]').textContent=money(data.price+pages*75)+(data.custom?'+':'');
  root.querySelector('[data-calc-note]').textContent=data.custom?
   'Illustrative starting price only. Custom scope, advanced features, domain and hosting are quoted separately.':
   'Estimated one-time build price. Domain, hosting, paid tools, and extras outside the package scope are separate.';
  const qs=new URLSearchParams({package:pkg.value,extraPages:String(pages)});
  root.querySelector('[data-calc-cta]').href='contact.html?'+qs.toString()+'#project-request';
 };
 pkg.addEventListener('change',update);extra.addEventListener('input',update);extra.addEventListener('change',update);
 minus.addEventListener('click',()=>{extra.value=get(extra.value)-1;update()});
 plus.addEventListener('click',()=>{extra.value=get(extra.value)+1;update()});
 update();
}
const select=document.querySelector('select[name="package"]');
const count=document.getElementById('contact-additional-pages');
const output=document.getElementById('contact-price-preview');
if(select&&count&&output){
 const params=new URLSearchParams(location.search);
 const n=params.get('extraPages');if(n!==null)count.value=clamp(Number(n));
 const update=()=>{
  const pages=get(count.value);count.value=pages;
  const data=packages[select.value];
  if(!data){output.textContent='Select your package to see an estimated one-time website build price.';return}
  output.textContent=money(data.price+pages*75)+(data.custom?'+':'')+
   ' estimated build price ('+select.value+' + '+pages+' extra '+(pages===1?'page':'pages')+
   '). Final scope and separate costs confirmed in writing.';
 };
 select.addEventListener('change',update);count.addEventListener('input',update);count.addEventListener('change',update);
 update();
}
})();
