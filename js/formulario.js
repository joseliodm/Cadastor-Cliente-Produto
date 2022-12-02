const form = [
    {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value
    }
]

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const endereco = document.getElementById("endereco").value;
//criando um objeto para armazenar os valores
const dados = {
    nome,
    email,
    telefone,
    endereco
}
//criando um array para armazenar os objetos
const array = [];
//adicionando os objetos no array
array.push(dados);
