document.addEventListener('DOMContentLoaded', () => {

  // Boton ir arriba
  const btnIrArriba = document.getElementById('btn-ir-arriba');
  if (btnIrArriba) {
    window.addEventListener('scroll', () => {
      btnIrArriba.style.display = window.scrollY > 100 ? 'block' : 'none';
    });

    btnIrArriba.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hover text sobre imagenes de galeria
  document.querySelectorAll('.rounded-grid-link').forEach((link) => {
    const img = link.querySelector('img');
    const textSpan = link.querySelector('span');
    if (!img || !textSpan) return;

    textSpan.style.display = 'none';
    img.addEventListener('mouseover', () => { textSpan.style.display = 'block'; });
    img.addEventListener('mouseout', () => { textSpan.style.display = 'none'; });
  });

});
