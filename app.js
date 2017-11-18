name = "Pepito"

juan = {
  name: 'Juan'
}

function sayHi(age, color) {
  // console.log(arguments)
  var nueva = age
  var args = Array.prototype.slice.call(arguments);
  console.log(args)
  return `${this.name} and color ${color} and age ${age}`
}

console.log(sayHi(4, 'black'))


console.log(sayHi.call(juan, 27, "black"))
console.log(sayHi.apply(juan, [27, "black"]))
