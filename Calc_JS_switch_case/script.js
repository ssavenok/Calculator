function calc(a, b, opertor) {
  a = parseInt(a);
  b = parseInt(b);

  switch (opertor) {
      case "+":
          return a + b;
          break;
      case "-":
          return a - b;
          break;
      case "*":
          return a * b;
          break;
      case "/":
          return a / b;
          break;     
      default:
          return NaN;
          break;
  }
}
console.log(calc(6, 3, "+"));
console.log(calc(6, 3, "-"));
console.log(calc(6, 3, "*"));
console.log(calc(6, 3, "/"));
console.log(calc(6, 1, "5"));
