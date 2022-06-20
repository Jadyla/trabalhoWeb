// Extraindo os dados da LocalStorage
extraiDadosLocalStorage();

function extraiDadosLocalStorage(){
  
  marca = window.localStorage.getItem('marca');
  valor = window.localStorage.getItem('valor');
  cor = window.localStorage.getItem('cor');
  descricao = window.localStorage.getItem('descricao');
  foto = window.localStorage.getItem('foto');

  //Outros dados lá do forms
  modelo = window.localStorage.getItem('modelo');
  ano = window.localStorage.getItem('ano');
  
  //Esse Trem não funciona :(
  // if ((marca == NULL) || (valor == NULL) || (cor == NULL) || (descricao == NULL)){
  //   console.log("Sem Valores");
  //   return;
  // }

  caminho = caminhoImagem(marca);
  console.log(caminho);
  let numero = 7;

  document.getElementById("sectionCars").innerHTML = `
  <div class="row">
      <div class="col-xs-6 col-md-6 cars">
        <img class="car" src="${caminho}" alt="${foto}"></img>
      </div>
      <div class="col-xs-6 col-md-4">
        <div class="descricao">
        <p>Modelo Do Veículo</p>
        <p> <strong>Marca:</strong> ${marca}</p>
        <p> <strong>Preço:</strong> R$ ${valor}</p>
        <p> <strong>Cor :</strong> ${cor}</p>
        <p>
          ${descricao}
        </p>
        <button type="button" class="btn btn-primary float-right">Editar</button>
        <button type="button" class="btn btn-success float-right padding-2" id="btn_delete" onclick="deletar('carro${numero}')">Excluir</button>
      </div>
      </div>
  </div> 
  `

  //Falta aqui tbm ele não está removendo
  // console.log("Teste01");
  document.getElementById("btn_delete").addEventListener('click', function (){
    localStorage.removeItem(ano);
    localStorage.removeItem(marca);
    localStorage.removeItem(foto);
    localStorage.removeItem(descricao);
    localStorage.removeItem(modelo);
    localStorage.removeItem(cor);
    localStorage.removeItem(valor);
  });
  // console.log("Teste02");
}




function caminhoImagem(marca){
  if (marca == 'Audi'){
    caminho = '../img/listagem_carros/audi.jpg'
  }
  else if (marca == 'BMW'){
    caminho = '../img/listagem_carros/BMW.jpg'
  }
  else if (marca == 'Mercedes'){
    caminho = '../img/listagem_carros/mercedes.jpg'
  }
  else if (marca == 'Porsche'){
    caminho = '../img/listagem_carros/porsche.jpg'
  }
  else if (marca == 'Genesis'){
    caminho = '../img/listagem_carros/genesis.jpg'
  }
  else if (marca == 'Jaguar'){
    caminho = '../img/listagem_carros/jaguar.jpg'
  }
  else if (marca == 'Maserati'){
    caminho = '../img/listagem_carros/maserati.jpg'
  }
  else if (marca == 'Lexus'){
    caminho = '../img/listagem_carros/lexus.png'
  }
  else if (marca == 'Volvo'){
    caminho = '../img/listagem_carros/volvo.jpg'
  }
  else if (marca == 'Rolls-Royce'){
    caminho = '../img/listagem_carros/rolls-royce.jpg'
  }
  else if (marca == 'W-Motors'){
    caminho = '../img/listagem_carros/w-motors.jpg'
  }

  return caminho;
}