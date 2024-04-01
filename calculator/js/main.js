function calculate() {
   
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    
   
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').value = 'Please enter valid numbers';
      return;
    }

   
    var result;
    switch(operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result=num1 / num2;
        
        break;
      default:
        result = 'Invalid operation';
    }
    
    // Display result
    document.getElementById('result').value = result;
  }