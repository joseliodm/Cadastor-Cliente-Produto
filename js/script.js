
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


  salvar.addEventListener("click", () => {
    localStorage.setItem("object", JSON.stringify(dadosFornedor));
  });

 
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Dados salvos com sucesso!",
    showConfirmButton: false,
    timer: 1500,
  });
});


