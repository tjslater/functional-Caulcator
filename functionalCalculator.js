;(function(){
  function input(val){
    return function(callback){
      return callback ? callback.call(this, val): val;
    }
  }
  function add(val){
    return function(val2){
      return function(callback){
        return callback ? callback.call(this, val + val2): val + val2;
      }
    }
  }
  function subtract(val){
    return function(val2){
      return function(callback){
        return callback ? callback.call(this, val - val2): val - val2;
      }
    }
  }
  function multiply(val){
    return function(val2){
      return function(callback){
        return callback ? callback.call(this, val * val2): val * val2;
      }
    }
  }
  function divide(val){
    return function(val2){
      return function(callback){
        return callback ? callback.call(this, val / val2): val / val2;
      }
    }
  }
  function exponent(val){
    return function(val2){
      return function(callback){
        var initial = val;
        for (var i = 0; i < val2; i++){
          val *= initial;
        }
        return callback ? callback.call(this, val): val;
      }
    }
  }

  function Calculator(){}
  Calculator.prototype.input = input;
  Calculator.prototype.add = add;
  Calculator.prototype.subtract = subtract;
  Calculator.prototype.multiply = multiply;
  Calculator.prototype.divide = divide;
  Calculator.prototype.exponent = exponent;

  window.fCalc = Calculator;
})();