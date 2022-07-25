const defaultSettings = { precision: 1 };

function plus(a, b, settings = defaultSettings) {
    const { precision } = settings;
    return Number((a + b).toFixed(precision));
  }

function minus(a, b, settings = defaultSettings) {
    const { precision } = settings;
    return Number((a - b).toFixed(precision));
  }

function divide(a, b, settings = defaultSettings) {
  const { precision } = settings;
  return Number((a / b).toFixed(precision));
}

function multiple(a, b, settings = defaultSettings) {
    const { precision } = settings;
    return Number((a * b).toFixed(precision));
  }
console.log(plus(4, 2));
console.log(minus(4, 2));
console.log(divide(4, 2));
console.log(multiple(4, 2));
