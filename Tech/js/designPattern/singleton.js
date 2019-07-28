
/* singleTon pattern */

var singleTon = (function () {
  var context;
  function load() {
    function privateMethod() {
      console.log('inside Private Method')
    }
    var privateProp = "Am private property";
    var privateRandomVariable = Math.random();

    return {
      publicMethod: function () {
        console.log('calling Public Method');
      },
      publicProp: "Am Public Property",
      getRandom: function () {
        return privateRandomVariable;
      }
    };
  };
  return {
    getInstance: function () {
      if (!context)
        context = load();
      return context;
    }
  };
})();


var myObj = singleTon.getInstance();
var myObj1 = singleTon.getInstance();
console.log(myObj.getRandom() === myObj1.getRandom()) //true

