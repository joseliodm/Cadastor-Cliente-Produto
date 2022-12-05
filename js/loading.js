function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");

    const label = document.createElement("img");
    label.src = "/img/carga.gif";
    label.alt = "Loading...";

    div.appendChild(label);

    document.body.appendChild(div);
}

function hideLoading() {
    const loading = document.querySelector(".loading");
    loading.remove();
}
