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
    
    
    const descricaoProduto = dProduto.value;
    const unidadeMedida = uMedida.value;
    const qtdeEstoque = qEstoque.value;
    const valorUnitario = vUnitario.value;
    const valorTotal = vTotal.value;
    
    const item = {
        descricaoProduto,
        unidadeMedida,
        qtdeEstoque,
        valorUnitario,
        valorTotal
    }

    if (localStorage.getItem("produtos") === null) {
        itens = [];
        itens.push(item);
        localStorage.setItem("produtos", JSON.stringify(itens));
    }else {
        itens = JSON.parse(localStorage.getItem("produtos"));
        itens.push(item);
        localStorage.setItem("produtos", JSON.stringify(itens));
    }

    //funcao deletar itens
    deleteItem = (produto) => {
        itens = itens.filter((item) => {
            return item.produto !== produto;
        });
        localStorage.setItem("produtos", JSON.stringify(itens));
        show();
    }
    
    
    $('#ModalLongoExemplo').modal('hide');
    
    
    e.preventDefault();
    
    function show() {
        let itens = JSON.parse(localStorage.getItem("produtos"));
        let itensView = document.getElementById("conteudo");
        itensView.innerHTML = "";
        for (let i = 0; i < itens.length; i++) {
            let produto = itens[i].descricaoProduto;
            let unidade = itens[i].unidadeMedida;
            let quantidade = itens[i].qtdeEstoque;
            let valor = itens[i].valorUnitario;
            let total = itens[i].valorTotal;
            itensView.innerHTML += `
            <div class="container">
            <p class="text-center-produto">Item: ${i}</p>
            <div class="row col-produtos">
            <div class="col-8 desc-1">
            <span>Descrição do Produto:</span>
            <p class="mb-0 result">${produto}</p>
            </div>
            <div class="container-fluid alinhamento-result">
              <div class="col col-auter">
                <span>Descrição do Produto:</span>
              <p class="mb-0 result-auter">${unidade}</p>
              </div>
              <div class="col col-auter">
                <span>Descrição do Produto:</span>
              <p class="mb-0 result-auter">${quantidade}</p>
              </div>
              <div class="col col-auter">
                <span>Descrição do Produto:</span>
              <p class="mb-0 result-auter">R$ ${valor}</p>
              </div>
              <div class="col col-auter">
                <span>Descrição do Produto:</span>
              <p class="mb-0 result-auter">R$ ${total}</p>
              </div>
            </div>
            <div class="col-2 btn-delete-produtos">
            <button class="material-symbols-outlined delete-icon-produtos"  onclick="deleteItem('${produto}')">Delete</button>
                </div>
            </div>
  
        </div>
            `
        }
    }

    show();
    cadProd.reset();
});


           