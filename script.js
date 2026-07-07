const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}));document.querySelectorAll('.card').forEach(c=>obs.observe(c));
const seq=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let i=0;
addEventListener('keydown',e=>{const k=e.key.length===1?e.key.toLowerCase():e.key;if(k===seq[i]){i++;if(i===seq.length){document.body.classList.toggle('arcade');alert('🎮 Arcade Mode Activated!');i=0}}else i=0;});
