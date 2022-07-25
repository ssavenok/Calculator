function calc(operation) {
  let num1, num2, result;

  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  if (operation == 1) {
    result = num1 + num2;
  }
  else if (operation == 2) {
    result = num1 - num2;
  }
  else if (operation == 3) {
    result = num1 * num2;
  }
  else {
    result = num1 / num2;
  }

  document.getElementById('out').innerHTML = result;
}
	
	
