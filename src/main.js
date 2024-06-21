let navMenu = document.getElementById('navMenu')
let navClose = document.getElementById('navClose')
let navHamburger = document.getElementById('navautoseller')

navHamburger.onclick = function(){
    navMenu.classList.remove('hidden')
}

navClose.onclick = function(){
    navMenu.classList.add('hidden')
}