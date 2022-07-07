let left = null;
let right = null;
let operator = null;
let equal = false;
let result = "";

function save() {
  const input = document.getElementById("top-input");
  let value = "";

  if (left === null) return;
  value += left + " ";
  input.value = value;

  if (operator === null) return;
  value += operator + " ";
  input.value = value;

  if (right === null) return;
  value += right + " ";
  input.value = value;

  // * equal이 true일 경우는 '='을 눌렀다는 것
  if (equal) {
    switch (operator) {
      case "+":
        result = parseInt(left) + parseInt(right);
        break;
      case "-":
        result = parseInt(left) - parseInt(right);
        break;
      case "*":
        result = parseInt(left) * parseInt(right);
        break;
      case "/":
        result = parseInt(left) / parseInt(right);
        break;
    }

    value += "= " + result;
    input.value = value;
  }
}

function inputNum(num) {
  if (operator === null) {
    // * 입력이 한 번도 되지 않았을 경우
    if (left === null) {
      left = `${num}`;
    } else {
      // * 0이 이미 입력되었을 때 또 0을 입력한 경우 넘어감
      if (num === 0 && parseInt(left) === 0) return;
      left += `${num}`;
    }
  } else {
    if (right === null) {
      right = `${num}`;
    } else {
      // * 0이 이미 입력되었을 때 또 0을 입력한 경우 넘어감
      if (num === 0 && parseInt(right) === 0) return;
      right += `${num}`;
    }
  }
  save();
}

function inputOperator(op) {
  // * 음수 값을 입력해줄 수 있어야 함
  if (left === null && op === "-") {
    left = "-";
    save();
    return;
  }
  if (left === "-" && op === "-") return;
  if (op === "-" && operator !== null && right === null) {
    right = "-";
    save();
    return;
  }
  operator = op;
  save();
}

function inputEqual() {
  if (left === null || right === null || !operator) return;
  // * equal이 이미 true일 경우 결과 값만 출력함
  if (equal) {
    left = result;
    right = null;
    result = null;
    operator = null;
    equal = false;
  }
  equal = true;
  save();
}
