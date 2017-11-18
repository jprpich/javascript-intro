 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
var obj = {
  name: "Joshua",
  height: "5",
  sport: "Tennis"
}


var obj2 = {
  name: "Rodrigo",
  height: "5",
  sport: "Soccer"
}

var james = {
  name: "James",
  sport: "Futbol",
  height: 13
}

var falcao = {
  name: "falcao",
  sport: "Futbol",
  height: 13
}


// 1. Añadir propiedades a objetos
function anadir(arr){
  new_arr = []    
  for (var i = 0; i < arr.length; i++) {
    var obj = {
      name: arr[0], 
      win: function(event){ console.log( this.name + " won the " + event)}
    }
    new_arr.push(obj)
  }
  return new_arr
}


var addWinToAthelete = function(atletas) {
  atletas.forEach(function(atleta){
    atleta.win = function(event) {
      console.log(`${this.name} won the ${event}`)
    }
  })
}

// 2. Voltea un String
function voltea(str){
  new_str = ""
  for (var i = str.length - 1; i >= 0; i--) {
    new_str = new_str + str[i]
  }
  return new_str
}


// 3. Remueve numeros impares
function impares(arr){
  new_arr = []
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]%2==0){
      new_arr.push(arr[i])
    }
  }
  return new_arr
}
// 4. Funcion constructora
function Athlete(name, age, sport){
  this.name = name
  this.age = age
  this.sport = sport
}



// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")

console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
