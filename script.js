const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});reveals.forEach(item=>observer.observe(item))}else reveals.forEach(item=>item.classList.add('visible'));
document.getElementById('year').textContent=new Date().getFullYear();
