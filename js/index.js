// Armazenar os dados no LocalStorage

salvarLocalStorage()

function salvarLocalStorage() {
    var marca = document.getElementById('inputMarca');
    var modelo = document.getElementById('inputModelo');
    var ano = document.getElementById('inputAno');
    var valor = document.getElementById('inputValor');
    var foto = document.getElementById('inputFoto');
    var cor = document.getElementById('inputCor');
    var descricao = document.getElementById('imputDescricao');
  
    document.getElementById('btnCadastro').addEventListener('click', function () {
      localStorage.marca = marca.value;
      localStorage.modelo = modelo.value;
      localStorage.ano = ano.value;
      localStorage.valor = valor.value;
      localStorage.foto = foto.value;
      localStorage.cor = cor.value;
      localStorage.descricao = descricao.value;
    });
  }
  
  