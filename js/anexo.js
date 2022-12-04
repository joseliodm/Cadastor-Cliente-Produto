const upload = document.getElementById('upload');
const vizualizar = document.getElementById('vizualizar');
const deletar = document.getElementById('deletar');

//criar função para fazer upload do arquivo pdf
upload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        vizualizar.src = reader.result;
    }
});

//vizualizar pdf que foi feito upload no navegador
vizualizar.addEventListener('click', function() {
    const file = upload.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        vizualizar.src = reader.result;
    }
});



//criar função para deletar o arquivo pdf
deletar.addEventListener('click', function() {
    vizualizar.src = '';
    upload.value = '';
});

//criar função para salvar o arquivo pdf no localstorage
salvar.addEventListener('click', function() {
    localStorage.setItem('anexo', vizualizar.src);
});
