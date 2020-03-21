calculateX();
calculatePercentage();
inputForm.oninput = function(event) {
  event.preventDefault();
  calculateX();
};

inputForm2.oninput = function(event) {
  event.preventDefault();
  calculatePercentage();
};

/*
What is the 33% of 67 ?
Let, x = ?, p = 33, y = 67
x = (p*y)/100
*/
function calculateX() {
  const form = document.forms.inputForm;
  let p = form.elements.p.value;
  let y = form.elements.y.value;
  if (p == null || p == "") {
    p = 25;
  }
  if (y == null || y == "") {
    y = 100;
  }
  let x = (p * y) / 100;
  form.elements.x.value = x.toFixed(2);

  if (x < 0) {
    form.elements.x.className = "result-negative"
  } else {
    form.elements.x.className = "result"
  }
}

function calculatePercentage() {
  const form = document.forms.inputForm2;
  let x = form.elements.x.value;
  let y = form.elements.y.value;
  console.log(y);
  if (y == null || y == "") {
    y = 100;
  }
  if (x == null || x == "") {
    x = 25;
  }
  let p = (x / y) * 100;
  form.elements.p.value = p.toFixed(2) + "%";
  if (p < 0) {
    form.elements.p.className = "result-negative"
  } else {
    form.elements.p.className = "result"
  }
}