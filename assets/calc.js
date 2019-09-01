let inputLabel = document.getElementById('inputLabel');

function compute(obj) {
  let pushed = obj.innerHTML;
  if (pushed == '=') {
    //calculate
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
  }
  else if (pushed == "AC") {
    //all clear
    inputLabel.innerHTML = 0;
  }

  else {
    if (inputLabel.innerHTML == '0') {
      inputLabel.innerHTML = pushed;
    }
    else {
      inputLabel.innerHTML += pushed;
    }
  }
}
