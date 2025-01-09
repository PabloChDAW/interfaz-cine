// Importa el CSS personalizado con SASS
import '../scss/styles.scss'

// Importa todo el JavaScript de Bootstrap
import * as bootstrap from 'bootstrap'

// Inicializa los componentes de Bootstrap cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar todos los carruseles
  const carouselElements = document.querySelectorAll('.carousel')
  carouselElements.forEach(carouselElement => {
    new bootstrap.Carousel(carouselElement, {
      interval: 2000, // Cambia el intervalo de tiempo entre slides (en milisegundos)
      ride: 'carousel' // Inicia el carrusel automáticamente
    })
  })

  // Inicializar todas las ventanas modales
  const modalElements = document.querySelectorAll('.modal')
  modalElements.forEach(modalElement => {
    new bootstrap.Modal(modalElement)
  })
})
