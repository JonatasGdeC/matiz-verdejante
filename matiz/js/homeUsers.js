const btnUser = document.getElementById('btn-user')
const menuUser = document.getElementById('menu-user')
const closeMenuUser = document.getElementById('icon-link-secundary')

btnUser.addEventListener('click', ()=>{
    menuUser.style.display='block'
})

closeMenuUser.addEventListener('click', ()=>{
    menuUser.style.display='none'
})
