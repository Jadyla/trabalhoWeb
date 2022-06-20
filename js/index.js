// Armazenar os dados no LocalStorage
salvarLocalStorage();

function salvarLocalStorage() {
  let marca = document.getElementById('inputMarca');
  let modelo = document.getElementById('inputModelo');
  let ano = document.getElementById('inputAno');
  let valor = document.getElementById('inputValor');
  let foto = document.getElementById('inputFoto');
  let cor = document.getElementById('inputCor');
  let descricao = document.getElementById('imputDescricao');

  // localStorage.Lista = [
    //   `marca = ${marca.value}`,
    //   `modelo = ${modelo.value}`,
    //   `ano = ${ano.value}`,
  //   `valor = ${valor.value}`,
  //   `foto = ${foto.value}`,
  //   `cor = ${cor.value}`,
  //   `descricao = ${descricao.value}`
  // ]

  document.getElementById('btnCadastro').addEventListener('click', function () {
    localStorage.marca = marca.value;
    localStorage.modelo = modelo.value;
    localStorage.ano = ano.value;
    localStorage.valor = valor.value;
    localStorage.foto = foto.value;
    localStorage.cor = cor.value;
    localStorage.descricao = descricao.value;
    // localStorage.Lista  = Lista.value;
  });
  
  const dados = [
    localStorage.marca,
    localStorage.modelo,
    localStorage.ano,
    localStorage.valor,
    localStorage.foto,
    localStorage.cor,
    localStorage.descricao
  ];

  console.log(dados);

}

//Validação
(function () {
  VMasker(document.getElementById("inputAno")).maskPattern('9999');
  VMasker(document.getElementById("inputValor")).maskMoney({ unit: 'R$' });
})();

function validar(){
  let valor = document.getElementById('inputValor').value;
  
  if (parseC(valor) >= 'R$ 10,00'){

  }
}