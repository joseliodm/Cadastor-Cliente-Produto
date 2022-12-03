
const cadProd = document.getElementById("cadProduto");
const dProduto = document.getElementById("dProduto");
const uMedida = document.getElementById("uMedida");
const qEstoque = document.getElementById("qEstoque");
const vUnitario = document.getElementById("vUnitario");
const vTotal = document.getElementById("vTotal");

qEstoque.addEventListener("keyup", () => {
    vTotal.value = qEstoque.value * vUnitario.value;
});

vUnitario.addEventListener("keyup", () => {
    vTotal.value = qEstoque.value * vUnitario.value;
});


let itens 
let deleteItem

cadProd.addEventListener("submit", async (e) => {
    
    
    
    const produto = dProduto.value;
    const unidade = uMedida.value;
    const quantidade = qEstoque.value;
    const valor = vUnitario.value;
    const total = vTotal.value;
    
    const item = {
        produto,
        unidade,
        quantidade,
        valor,
        total
    }

    if (localStorage.getItem("item") === null) {
        itens = [];
        itens.push(item);
        localStorage.setItem("item", JSON.stringify(itens));
    }else {
        itens = JSON.parse(localStorage.getItem("item"));
        itens.push(item);
        localStorage.setItem("item", JSON.stringify(itens));
    }

    //funcao deletar itens
    deleteItem = (produto) => {
        itens = itens.filter((item) => {
            return item.produto !== produto;
        });
        localStorage.setItem("item", JSON.stringify(itens));
        show();
    }

    
    $('#ModalLongoExemplo').modal('hide');

    
    e.preventDefault();
    
    function show() {
        let itens = JSON.parse(localStorage.getItem("item"));
        let itensView = document.getElementById("conteudo");
        itensView.innerHTML = "";
        for (let i = 0; i < itens.length; i++) {
            let produto = itens[i].produto;
            let unidade = itens[i].unidade;
            let quantidade = itens[i].quantidade;
            let valor = itens[i].valor;
            let total = itens[i].total;
            itensView.innerHTML += `
            <div class="row">
            <div class="col-2">
            <span>Produto</span>
            <p>${produto}</p>
            </div>
            <div class="col-2">
            <p>${unidade}</p>
            </div>
            <div class="col-2">
            <p>${quantidade}</p>
            </div>
            <div class="col-2">
            <p>${valor}</p>
            </div>
            <div class="col-2">
            <p>${total}</p>
            </div>
            <div class="col-2">
            <button class="btn btn-danger" onclick="deleteItem('${produto}')">Deletar</button>
                </div>
            </div>
            `
        }
    }

    show();
    cadProd.reset();

});


           