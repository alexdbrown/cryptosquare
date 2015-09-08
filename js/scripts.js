var cryptosquare = function(userInput) {
  var splitInput = userInput.split('');
  var inputLength = splitInput.length;
  var newArray = [];

  for(var i = 0; i < inputLength; i++) {
    if((/([A-Za-z])+/g).test(splitInput[i])) {
      newArray.push(splitInput[i]);
    }
  }


  function isInt(n) {
   return n % 1 === 0;
  }

  var cryptoString = newArray.join('');
  var stringLength = cryptoString.length;
  if (isInt(Math.sqrt(stringLength))){
    var columnSize = Math.sqrt(stringLength);
    var columnString = cryptoString.split('', );
  }

  return columnString;
};
