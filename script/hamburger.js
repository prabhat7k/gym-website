burger = document.querySelector('.burger')
navbar = document.querySelector('.nav')
sbox = document.querySelector('.sbox')
btn = document.querySelector('.btn')
list = document.querySelector('.lists')
logo = document.querySelector('.logo-img')
burger.addEventListener('click' , ()=>{
    navbar.classList.toggle('v-nav')
    sbox.classList.toggle('v-class')
    btn.classList.toggle('v-class')
    list.classList.toggle('v-class')
    logo.classList.toggle('v-logo')

})