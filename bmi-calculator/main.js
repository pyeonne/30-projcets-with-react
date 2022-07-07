function onSubmit(event) {
  event.preventDefault();

  const weight = parseFloat(event.target[0].value);
  const height = parseFloat(event.target[1].value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("적절한 값이 아닙니다.");
    return;
  }

  const bmi = weight / (height * height);

  const result = document.getElementById("result");
  result.style.display = "flex";

  document.getElementById("bmi").innerText = bmi.toFixed(2);
  document.getElementById("meter").value = bmi;

  let state = "정상";
  let common = true;
  if (bmi < 18.5) {
    state = "저체중";
    common = false;
  }
  if (bmi >= 25) {
    state = "과제충";
    common = false;
  }

  const stateEl = document.getElementById("state");
  stateEl.innerText = state;
  stateEl.style.color = common ? "#A1E86D" : "#A21616";
}
