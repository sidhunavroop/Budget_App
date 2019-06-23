var budgetController = (function() {
  
  
})();

var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };
  
  return {
    getInput: function(){
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };      
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})(); 


var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();
  var ctrlAddItem = function(){
    // Input data
    var input = UICtrl.getInput();
    console.log(input);
    // add item to budget controller
    // Add item to the UI 
    // calculate the budget
    // display the budget on the UI
  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if (event.keycode === 13 || event.which === 13 ) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController); 