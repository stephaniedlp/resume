//
// Recuperar datos del formulario
//

const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert('Gracias por contactarnos - Nombre: ' + nombre + '- Email: ' + email + '- Mensaje: ' + mensaje);

  contactoForm.reset();
});


//
// Evento de boton ir a arriba
//

document.addEventListener("DOMContentLoaded", () => {

    const scrollToBottomButtom = document.getElementById('btn-ir-arriba');
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToBottomButtom.style.display = 'block';
      } else {
        scrollToBottomButtom.style.display = 'none';
      }
    });
  
    scrollToBottomButtom.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth'
      });
    });
  
  });

  document.addEventListener("DOMContentLoaded",function() {
    var links = document.querySelectorAll(".rounded-grid-link");

    links.forEach(function(link){
      var img = link.querySelector("img");
      //Get the <span> element containing the text inside the <a> element
      var textSpan = link.querySelector("span");
      //hide text 
      textSpan.style.display="none";

      //mouseover event listener to the img element
      img.addEventListener("mouseover",function(){
        //show text when hover the img
        textSpan.style.display = "block";
      });
      // mouseout event listener to the <img> element
      img.addEventListener("mouseout", function(){
        //hide text when mouse leaves the img
        textSpan.style.display="none";
      })
    })
  })