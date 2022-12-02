
const formCadastro = document.getElementById("form");
const msgErro = document.getElementById("msgErro");

formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formCadastro.rs.value == "") {
    //msgErro acima do input
    msgErro.innerHTML = "Preencha o campo Razão Social";
    formCadastro.rs.focus();
    return false;
  } else if (formCadastro.cnpj.value == "") {
    msgErro.innerHTML = "Preencha o campo CNPJ";
    formCadastro.cnpj.focus();
    return false;
  }
  else {
    msgErro.innerHTML = "";
  }

  const object = {
    rs: document.getElementById("rs").value,
    cnpj: document.getElementById("cnpj").value,
    nf: document.getElementById("nf").value,
    ie: document.getElementById("ie").value
  };

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
});
