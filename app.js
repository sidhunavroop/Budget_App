var budgetController = (function() {
  
  
})();

var UIController = (function() {
  //Some code
})(); 


var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function(){
    // Input data
    // add item to budget controller
    // Add item to the UI
    // calculate the budget
    // display the budget on the UI
    console.log("hello");
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if (event.keycode === 13 || event.which === 13 ) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController); 