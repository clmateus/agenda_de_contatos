const formContato = document.querySelector(`#form-contato`);
const arrayNomes = [];
const arrayNumeros = [];
let linhas = ""

formContato.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
})

function adicionaContato(){
    const inputNome = document.querySelector(`#input-nome`);
    const inputTelefone = document.querySelector(`#input-telefone`);

    if(arrayNumeros.includes(inputTelefone.value)){
        alert(`Erro: Número duplicado. O número: ${inputTelefone.value} já foi cadastrado.`)
    } else {
        arrayNomes.push(inputNome.value)
        arrayNumeros.push(inputTelefone.value)
    
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }
    
    inputNome.value = "";
    inputTelefone.value = "";
}

function atualizaTabela(){
    const tableBody = document.querySelector('#tabela-body');
    tableBody.innerHTML = linhas;
}