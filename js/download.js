const download = document.getElementById("download");


download.addEventListener("click", () => {
    const itens = JSON.parse(localStorage.getItem("item"));
    const dadosFornedor = JSON.parse(localStorage.getItem("object"));
    const data = JSON.stringify({ itens, dadosFornedor});
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "dados.json";
    link.href = url;
    link.click();
  });
  