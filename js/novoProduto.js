$("#preco").mask("#.##0,00", { reverse: true });
$("#cep").mask("00000-000");
$("#quantidade").mask("00000");

const createSpan = document.createElement("span");
const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //Regra de existência de caracteres especiais

const nome = document.getElementById("nome");
const marca = document.getElementById("marca");
const categoria = document.getElementById("categoria");
const genero = document.getElementById("genero");
const descricao = document.getElementById("descricao");
const quantidade = document.getElementById("quantidade");
const preco = document.getElementById("preco");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");

var nomeCorreto = nome.addEventListener("keyup", () => {
    if (regex.test(nome.value)) {
        createSpan.textContent = "Não escreva caracteres especiais!";
        nome.insertAdjacentElement("afterend", createSpan);
    } else if (nome.value.length < 3) {
        createSpan.textContent = "É necessário no mínimo 3 caracteres!";
        nome.insertAdjacentElement("afterend", createSpan);
    } else {
        createSpan.remove();
    }
});

marca.addEventListener("focusout", () => {
    if (marca.value == "") {
        createSpan.textContent = "Adicione a marca do produto!";
        marca.insertAdjacentElement("afterend", createSpan);
    } else {
        createSpan.remove();
    }
});

categoria.addEventListener("focusout", () => {
    if (categoria.value == "") {
        createSpan.textContent = "Adicione a categoria do produto!";
        categoria.insertAdjacentElement("afterend", createSpan);
    } else {
        createSpan.remove();
    }
});

genero.addEventListener("focusout", () => {
    if (genero.value == "") {
        createSpan.textContent = "Adicione o gênero do produto!";
        genero.insertAdjacentElement("afterend", createSpan);
    } else {
        createSpan.remove();
    }
});

quantidade.addEventListener("focusout", () => {
    if (quantidade.value == "") {
        createSpan.textContent = "Este campo é obrigatório!";
        quantidade.insertAdjacentElement("afterend", createSpan);
    } else {
        createSpan.remove();
    }
});

preco.addEventListener("focusout", () => {
    if (preco.value == "") {
        createSpan.textContent = "Este campo é obrigatório!";
        preco.insertAdjacentElement("afterend", createSpan);
    } else {
        createSpan.remove();
    }
});

function zeraEntradas(){
    endereco.value = "";
    bairro.value = "";
    cidade.value = "";
}

cep.addEventListener("focusout", () => {
    if (cep.value == "" || cep.value.length < 9) {
        createSpan.textContent = "Preencha este campo corretamente!";
        cep.insertAdjacentElement("afterend", createSpan);
        zeraEntradas()
    } else {
        createSpan.remove();
        const valorCep = cep.value;
        const endpoint = `https://viacep.com.br/ws/${valorCep}/json`;

        fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            if(json.erro == true){
                zeraEntradas()
            } else{
                endereco.value = json.logradouro;
                bairro.value = json.bairro;
                cidade.value = json.localidade;
            }
        });
    }
});
