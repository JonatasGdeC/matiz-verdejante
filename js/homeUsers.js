// Efeito menu hamburguer:
const movimentoIR = [
    {transform: "translateX(300px)"},
    {transform: "translateX(0px)"},
]
const movimentoVOLTAR = [
    {transform: "translateX(0px)"},
    {transform: "translateX(300px)"},
]

//Duração do efeito do menu hamburguer
const tempoEvento = {
    duration: 200,
    iterations: 1,
}

const btnUser = document.getElementById('btn-user')
const menuUser = document.getElementById('menu-user')
const closeMenuUser = document.getElementById('icon-link-secundary')

btnUser.addEventListener('click', ()=>{
    menuUser.style.display='block'
    menuUser.animate(movimentoIR, tempoEvento)
})

closeMenuUser.addEventListener('click', ()=>{
    menuUser.animate(movimentoVOLTAR, tempoEvento).addEventListener('finish',()=>{
        menuUser.style.display='none'
    })
})
