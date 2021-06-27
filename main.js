/* abre e fecha o menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item no menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mover o header quando der scroll*/
const header = document.querySelector('#header')
// offsetHeight = deslocamento da altura
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  // window é a janela inteira
  if (window.scrollY >= navHeight) {
    // maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // add mais slides por pagina de acordo com o lenght
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

//interval = intervalo em minisegundos
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Voltar para o topo */
/* button back to top */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
    /* alterar a cor do botão quando acessa o footer
    if (window.scrollY >= 3670) {
      backToTopButton.classList.add('enter-the-footer')
    } else {
      backToTopButton.classList.remove('enter-the-footer')
    } */
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
//todas as sections queestão dentro do main e que têm id
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    //deslocamento do topo das pagina
    const sectionTop = section.offsetTop
    //deslocamento da altura das pagina
    const sectionHeight = section.offsetHeight
    //getAttribute = pegar o atributo
    const sectionId = section.getAttribute('id')

    //início da section
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
