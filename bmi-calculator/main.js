function onSubmit(event) {
  event.preventDefault();

  const weight = parseInt(event.target[0].value);
  const height = parseFloat(event.target[1].value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("적절한 값이 아닙니다.");
    return;
  }
}
