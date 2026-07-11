const nav=document.getElementById('nav');
  const onScroll=()=>nav.classList.toggle('solid',window.scrollY>60);
  onScroll();addEventListener('scroll',onScroll,{passive:true});
  const toggle=document.getElementById('toggle'),links=document.getElementById('navlinks');
  toggle.addEventListener('click',()=>{const o=links.classList.toggle('open');toggle.textContent=o?'✕':'☰';});
  links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');toggle.textContent='☰';}});
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
  const HERO="assets/backdrop.jpg";
  const hb=document.getElementById('herobg');
  if(HERO && !HERO.startsWith('__')){hb.style.backgroundImage=`url('${HERO}')`;hb.classList.add('loaded');}
  if(hb && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    addEventListener('scroll',()=>{const y=Math.min(window.scrollY,900);hb.style.transform=`scale(1.04) translateY(${y*0.16}px)`;},{passive:true});
  }
