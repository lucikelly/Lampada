var lampada = document.getElementById('lampada')
const ligar = document.getElementById('li')
const desligar = document.getElementById('des')

function Status (){
  return lampada.src.indexOf('quebrada') > -1
}

function Ligar(){
  if(!Status()){
    lampada.src = 'img/ligada.svg'
  }
  
}

function Desligar(){
  if(!Status()){
    lampada.src = 'img/desligada.svg'
  }
  
}

lampada.addEventListener('click', Quebrou) // outra de chamar a função

function Quebrou(){
  lampada.src = 'img/quebrada.svg'
}

