
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('form[data-local-form]').forEach(f=>{f.addEventListener('submit',e=>{e.preventDefault();const s=f.querySelector('.form-status');s.textContent='تم تجهيز النموذج. سنربط الإرسال المباشر بالبريد في الخطوة التالية.'})})});
