// Simple client-side filtering & active tab sync
const q = new URLSearchParams(location.hash.slice(1));
const page = document.body.dataset.page;
document.querySelectorAll('[data-tab]').forEach(el=>{
  if(el.dataset.tab===page){ el.classList.add('active'); }
});
const input = document.querySelector('[data-search]');
if(input){
  input.addEventListener('input', e=>{
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card=>{
      const t = card.innerText.toLowerCase();
      card.style.display = t.includes(term) ? '' : 'none';
    });
  });
}
