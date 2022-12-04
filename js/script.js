
const formCadastro = document.getElementById("form");
const salvar = document.getElementById("salvar");


formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  const dadosFornedor = {
    rs: document.getElementById("rs").value,
    cnpj: document.getElementById("cnpj").value,
    nf: document.getElementById("nf").value,
    ie: document.getElementById("ie").value,
    im: document.getElementById("im").value,
    cep: document.getElementById("cep").value,
    endereco: document.getElementById("endereco").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    nomeContato: document.getElementById("nomeContato").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,

  };

  localStorage.setItem("dadosFornecedor", JSON.stringify(dadosFornedor));
  
  const download = document.getElementById("download");

    download.addEventListener("click", () => {
    const itens = JSON.parse(localStorage.getItem("produtos"));
    const dadosFornedor = JSON.parse(localStorage.getItem("dadosFornecedor"));
    const anexos = JSON.parse(localStorage.getItem("anexos"));
    const data = JSON.stringify({dadosFornedor, anexos, itens });
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "dados.json";
    link.href = url;
    link.click();
  });
});


