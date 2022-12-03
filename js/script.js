
const formCadastro = document.getElementById("form");
const msgErro = document.getElementById("msgErro");

formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formCadastro.rs.value == "") {
    msgErro.style.color = "red";
    msgErro.innerHTML = "Preencha o campo Razão Social";
    formCadastro.rs.focus();
    return false;
  } else if (formCadastro.cnpj.value == "") {
    msgErro.innerHTML = "Preencha o campo CNPJ";
    formCadastro.cnpj.focus();
    return false;
  }else if (formCadastro.nf.value == "") {
    msgErro.innerHTML = "Preencha o campo Nome Fantasia";
    formCadastro.nf.focus();
    return false;
  }else if (formCadastro.cep.value == "") {
    msgErro.innerHTML = "Preencha o campo CEP";
    formCadastro.cep.focus();
    return false;
   }else if (formCadastro.nomeContato.value == "") {
    msgErro.innerHTML = "Preencha o campo Nome da pessoa de Contato";
    formCadastro.nomeContato.focus();
    return false;
   }else if (formCadastro.email.value == "") {
    msgErro.innerHTML = "Preencha o campo Email";
    formCadastro.email.focus();
    return false;
    }else if (formCadastro.telefone.value == "") {
    msgErro.innerHTML = "Preencha o campo Telefone";
    formCadastro.telefone.focus();
    return false;
    }else {
    msgErro.innerHTML = "";
  }

  const object = {
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

  setTimeout(() => {
  const json = JSON.stringify(object);
  const blob = new Blob([json], {type: "application/json"});
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = "cadastro.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 formCadastro.reset();
}, 1000);
});
