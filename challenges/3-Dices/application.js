// Controller
function Controller(view, model){
// Event listener
  this.view = view
  this.model = model
}

Controller.prototype.run = function() {
  $('.roll').on('click', function() { // Controlador
    $('.die').each(function(index, dieHtml) { // Controlador
      model.random(index, dieHtml)
    })
  })  
}

Controller.prototype.add = function(){
  // Event Listener
  $('.add').on('click', function() { // Controlador
    view.paintDice()
  })
}


// Model
var Model = function(index,dieHtml){
}

Model.prototype.random = function(index,dieHtml){
    var value = Math.floor((Math.random()*6)+1) // Model
    view.rollAllDices(index,dieHtml, value)
}


// View
function View(){
}

View.prototype.paintDice = function(){
  $('.dice').append('<div class="die">0</div>')
}

View.prototype.rollAllDices = function(index, dieHtml,value){
     $(dieHtml).text(value) // Vista
  }


// Execute!
var view = new View()
var model = new Model()
var game = new Controller(view,model)
game.run()
game.add()
