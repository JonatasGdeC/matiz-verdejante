//Span de erro
const createSpan = document.createElement('span')

//Validação de formulário de endereço
$('#cep').mask('00000-000')

const cepEntrega = document.getElementById('cep')
const enderecoEntrega = document.getElementById('endereco')
const numeroEntrega = document.getElementById('numero')
const bairroEntrega = document.getElementById('bairro')
const cidadeEntrega = document.getElementById('cidade')
const estadoEntrega = document.getElementById('estado')
const checkPresente = document.getElementById('presente')
const nomeReceptor = document.getElementById('nomeReceptor')

function zeraEntradas() {
    enderecoEntrega.value = ''
    bairroEntrega.value = ''
    cidadeEntrega.value = ''
    estadoEntrega.value = ''
}

cepEntrega.addEventListener('keyup', ()=>{
    if(cepEntrega.value == '' || cep.value.length < 9){
        createSpan.textContent='Preencha este campo corretamente!'
        cepEntrega.insertAdjacentElement('afterend', createSpan)
        zeraEntradas()
    } else {
        createSpan.remove();
        const valorCep = cepEntrega.value;
        const endpoint = `https://viacep.com.br/ws/${valorCep}/json`;

        fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            if(json.erro == true){
                createSpan.textContent='Insira um CEP válido!'
                cepEntrega.insertAdjacentElement('afterend', createSpan)
                zeraEntradas()
            } else{
                enderecoEntrega.value = json.logradouro
                bairroEntrega.value = json.bairro
                cidadeEntrega.value = json.localidade
                estadoEntrega.value = json.uf
            }
        })
    }
})

checkPresente.addEventListener('click',()=>{
    if (checkPresente.checked) {
        nomeReceptor.style.display='block'
    } else {
        nomeReceptor.style.display='none'
    }
})