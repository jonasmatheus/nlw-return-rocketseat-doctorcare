// String (textos)
// Number (números)
// Boolean (true | false)

const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    // linha alvo
    const targetLine = scrollY + innerHeight / 2


    // Verificar se a seção passou da linha
    // Quais dados vou precisar?

    // topo da seção
    const sectionTop = section.offsetTop

    // altura da seção
    const sectionHeight = section.offsetHeight

    // O toop da seção chegou ou ultrapssou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    //informações dos dados e da lógica
    console.log ('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline)

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?
    
    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log ('O fundo da seção passou da linha?', sectionEndPassedTargetline)

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries){
        menuElement.classList.add('active')
    }

}

function showNavOnScroll() {
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 300){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
} 

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);
