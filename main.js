const calculeElement = document.getElementById("calcule");
function Aficher(val) {
  if (calculeElement.textContent === "0") {
    calculeElement.textContent = val;
  } else {
    calculeElement.textContent += val;
  }
}
function Reset() {
  calculeElement.textContent = "0";
}
function RemoveLastElement() {
  let current = calculeElement.textContent;
  if (current.length > 1) {
    calculeElement.textContent = current.slice(0,-1);
  } else {
    calculeElement.textContent = "0";
  }
}
function Calcule() {
  try {
    let result = eval(calculeElement.textContent);
    calculeElement.textContent = result;
  } catch (error) {
    calculeElement.textContent = "0";
  }
}
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "C") {
      Reset();
    } else if (value === "X") {
      RemoveLastElement();
    } else if (value === "=") {
      Calcule();
    } else {
      Aficher(value);
    }
  });
});
