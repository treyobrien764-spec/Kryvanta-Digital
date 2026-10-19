(() => {
 // Public scheduling configuration. Phone number display intentionally disabled.
 const business = window.KRYVANTA_PUBLIC_SETTINGS || {};
 const booking = (business.bookingUrl || '').trim();
 try {
   const destination = new URL(booking);
   if (destination.protocol === 'https:' && /^(cal\.com|calendly\.com)$/.test(destination.hostname)) {
     document.querySelectorAll('[data-calendar-booking]').forEach(link => {
       link.href = destination.href;
       link.hidden = false;
     });
     document.querySelectorAll('[data-booking-fallback]').forEach(el => { el.hidden = true; });
     document.querySelectorAll('[data-booking-disclaimer]').forEach(el => {
       el.textContent = 'Pick an available time using our secure scheduling page. Booking confirmation and availability are handled by our scheduling provider.';
     });
   }
 } catch (err) { /* No scheduler URL added yet. Keep request-a-callback option. */ }
 const header = document.getElementById('header');
 const nav = document.getElementById('navigation');
 const button = document.querySelector('.menu-toggle');
 if (button && nav) {
   button.addEventListener('click', () => {
     const open = nav.classList.toggle('open');
     button.setAttribute('aria-expanded', String(open));
     button.setAttribute('aria-label', open?'Close navigation':'Open navigation');
   });
   nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));
 }
 document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
 const pkg = new URLSearchParams(location.search).get('package');
 const sel = document.querySelector('select[name="package"]');
 if(pkg && sel){const o=Array.from(sel.options).find(x=>x.value.toLowerCase()===pkg.toLowerCase()); if(o)sel.value=o.value;}
 const form=document.querySelector('[data-contact-form]');
 if(form)form.addEventListener('submit',e=>{
   if(form.hasAttribute('data-preview-only') || location.protocol==='file:'||['localhost','127.0.0.1'].includes(location.hostname)){
      e.preventDefault();const msg=document.getElementById('form-feedback');if(msg){msg.hidden=false;msg.textContent='Preview mode: no message was sent. Publish the site, activate form processing, and configure your email notifications before accepting real inquiries.';msg.focus();}
   }
 });
 const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
 // Keep content visible by default; only animate after confirming browser support.
 if(!reduced && 'IntersectionObserver' in window){
    document.documentElement.classList.add('js-motion');
    const els=document.querySelectorAll('[data-reveal]');
    els.forEach(el=>el.classList.add('will-reveal'));
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');entry.target.classList.remove('will-reveal');io.unobserve(entry.target);}}),{threshold:.06,rootMargin:'0px 0px -35px 0px'});
    els.forEach(el=>io.observe(el));
 }
 if(reduced)return;
 document.querySelectorAll('canvas.storm-canvas').forEach(canvas=>{
   const ctx=canvas.getContext('2d');if(!ctx)return;
   let width=0,height=0,dpr=1,bolts=[],next=0,lastResize=0;
   const random=(a,b)=>a+Math.random()*(b-a);
   function resize(){const r=canvas.getBoundingClientRect();if(!r.width||!r.height)return;width=r.width;height=r.height;dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
   resize();window.addEventListener('resize',()=>{clearTimeout(lastResize);lastResize=setTimeout(resize,120);},{passive:true});
   function path(x,y,tx,ty){let p=[{x,y}];for(let i=1;i<=16;i++){let t=i/16;let amp=Math.sin(t*Math.PI)*30;p.push({x:x+(tx-x)*t+random(-amp,amp),y:y+(ty-y)*t+random(-12,12)});}return p;}
   const draw=(pts,w,color,glow)=>{ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);for(const q of pts.slice(1))ctx.lineTo(q.x,q.y);ctx.lineWidth=w;ctx.strokeStyle=color;ctx.shadowColor='#4da5ff';ctx.shadowBlur=glow;ctx.stroke();ctx.shadowBlur=0;};
   let staticPath=null;
   const makeStatic=()=>path(width*.87,0,width*.78,height*.9);
   function frame(t){if(!width||!height){requestAnimationFrame(frame);return;}ctx.clearRect(0,0,width,height);
     if(!staticPath || t%18000<18)staticPath=makeStatic();ctx.globalAlpha=.14;draw(staticPath,1.5,'#70c8ff',17);
     if(t>next){let startx=random(width*.63,width*.97);bolts.push({path:path(startx,-15,startx-random(15,width*.19),height*random(.55,.96)),born:t});next=t+random(4200,6200);}
     for(let i=bolts.length-1;i>=0;i--){let b=bolts[i],a=Math.max(0,1-(t-b.born)/470);if(!a){bolts.splice(i,1);continue;}ctx.globalAlpha=a*.13;draw(b.path,20,'#1268ef',38);ctx.globalAlpha=a*.46;draw(b.path,4,'#429cfa',20);ctx.globalAlpha=a*.74;draw(b.path,1.2,'#edfaff',8);}
     ctx.globalAlpha=1;requestAnimationFrame(frame);
   }
   requestAnimationFrame(frame);
 });
})();
