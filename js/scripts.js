var cryptosquare = function(userInput) {
  var splitInput = userInput.split('');
  var inputLength = splitInput.length;
  var newArray = [];

  for(var i = 0; i < inputLength; i++) {

    if((/([A-Za-z])+/g).test(splitInput[i])) {
      newArray.push(splitInput[i]);
    }
  }
  return newArray;
};
