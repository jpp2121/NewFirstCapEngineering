const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLinks = document.querySelectorAll('.nav__link')
const header = document.getElementById('header')
const scrollUpEl = document.getElementById('scroll-up')
const logoImg = document.getElementById('nav__logo-img')
const sections = document.querySelectorAll('section[id]')
const homeLink = document.querySelector('.nav__menu a[href="#home"]')

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}

if (navClose && navMenu) {
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

if (navMenu) {
    navLinks.forEach((link) => {
        link.addEventListener('click', () => navMenu.classList.remove('show-menu'))
    })
}

new Swiper('.home-swiper', {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

new Swiper('.new-swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,
})

function onScroll() {
    const y = window.scrollY || window.pageYOffset

    if (header) {
        if (y >= 32) header.classList.add('scroll-header')
        else header.classList.remove('scroll-header')
    }

    if (navMenu && window.innerWidth <= 767) {
        navMenu.classList.remove('show-menu')
    }

    sections.forEach((section) => {
        if (!navMenu) return
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 58
        const sectionId = section.getAttribute('id')
        const link = navMenu.querySelector(`a[href*="${sectionId}"]`)
        if (!link) return

        if (y > sectionTop && y <= sectionTop + sectionHeight) link.classList.add('active-link')
        else link.classList.remove('active-link')
    })

    if (scrollUpEl) {
        if (y >= 460) scrollUpEl.classList.add('show-scroll')
        else scrollUpEl.classList.remove('show-scroll')
    }

    if (logoImg) {
        if (y >= 3) logoImg.classList.add('shrink')
        else logoImg.classList.remove('shrink')
    }
}

window.addEventListener('scroll', onScroll)
onScroll()

if (homeLink) {
    homeLink.addEventListener('click', (event) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}
