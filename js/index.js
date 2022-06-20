//Salvar
function salvar() {
  erro = validacao()
  if (!erro) {
    alert("Veículo cadastrado com sucesso!");
  }

}
//Salvar Edição
function editado(){
  erro = validacao()
  if (!erro) {
    alert("Veículo foi editado com sucesso!");
  }
}

function editar() {
  window.location.href = "../pages/edicao.html";
}

function deletar(id) {
  if (id == 'carro1') {
    document.getElementById(id).remove();
  } else if (id == 'carro2') {
    document.getElementById(id).remove();
  } else if (id == 'carro3') {
    document.getElementById(id).remove();
  } else if (id == 'carro4') {
    document.getElementById(id).remove();
  } else if (id == 'carro5') {
    document.getElementById(id).remove();
  } else if (id == 'carro6') {
    document.getElementById(id).remove();
  }
}

//Validações
(function () {
  VMasker(document.getElementById("inputAno")).maskPattern('9999');
  VMasker(document.getElementById("inputValor")).maskMoney({ unit: 'R$' });
})();

function validacao() {
  
  let ano = parseInt(document.getElementById("inputAno").value);
  let marca = document.getElementById("inputMarca").value;
  let modelo = document.getElementById("inputModelo").value;
  let valor = document.getElementById('inputValor').value;

  //Valor convertido para analisar
  valor = valor.substring(3)
  valor = valor.replaceAll('.', '')
  valor = valor.replaceAll(',', '.')
  let valorInt = parseInt(valor)

  let error = false;

  //Valida Marca
  if (marca == '-- Selecionar --'){
    document.getElementById("validaMarca").innerHTML = "Selecione uma marca!";
    error = true;
  }
  else{
    document.getElementById("validaMarca").innerHTML = " ";
  }

  //Valida o Modelo
  if (modelo == " ") {
    document.getElementById("validaModelo").innerHTML = "Digite um modelo válido!"
    error = true;
  }
  else {
    document.getElementById("validaModelo").innerHTML = " "
  }

  //Valida o Ano
  if ( ano == "" || ano < 1900 ||  ano > 2999) {
    document.getElementById("validaAno").innerHTML = "Ano digitado é inválido!"
    error = true;
  }
  else {
    document.getElementById("validaAno").innerHTML = " "
  }

  //Valida Valor do carro
  if (valorInt > 100000000 || valor=="") {
    document.getElementById("validaValor").innerHTML = "O valor é Inválido!"
    error = true;
  } 
  else{
    document.getElementById("validaValor").innerHTML = ""
  } 

  //Valida descrição
  if (document.getElementById("imputDescricao").value == "") {
    document.getElementById("validaDesricao").innerHTML = "A Descrição é Inválida!"
    error = true;
  }
  else {
    document.getElementById("validaDesricao").innerHTML = " "
  }
  return error;
}