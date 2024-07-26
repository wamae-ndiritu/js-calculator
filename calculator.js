const clickedNumbers = [];
const buttons = document.getElementsByTagName("button");
const btns = Array.from(buttons);
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const value = btn.value;
    clickedNumbers.push(value);

      const firstNum = Number(clickedNumbers[0]) || "";
      const operator = clickedNumbers[1] || "";
      const secondNum = Number(clickedNumbers[2]) || "";
      let result = "";
      const num_1 = document.getElementById('num1');
      const op = document.getElementById('operator');
      const num_2 = document.getElementById("num2");
      const res = document.getElementById("result");
      num_1.innerHTML = firstNum;
      op.innerHTML = operator;
      num_2.innerHTML = secondNum;
      if (value === "=") {
        if (operator === "+") {
          result = firstNum + secondNum;
        } else if (operator === "-") {
          result = firstNum - secondNum;
        } else if (operator === "/") {
          result = firstNum / secondNum;
        } else if (operator === "x") {
          result = firstNum * secondNum;
        }
      }
      res.innerHTML = result;
  });
});
