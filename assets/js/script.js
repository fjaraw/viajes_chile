//Inicializar carrusel de bootstramp
const carousel = new bootstrap.Carousel('.carousel');
// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//alerta del boton Enviar
function alerta() {
    alert('Su mensaje ha sido enviado.');
}
$('#btnEnviar').on('click',alerta);