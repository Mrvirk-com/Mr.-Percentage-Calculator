calculateX();
inputForm.oninput = function(event) {
  event.preventDefault();
  calculateX();
};

calculatePercentage();
inputForm2.oninput = function(event) {
  event.preventDefault();
  calculatePercentage();
};

calculateProfitLossPercentage();
inputForm3.oninput = function(event) {
  event.preventDefault();
  calculateProfitLossPercentage();
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
  let p = (x / y) * 100;
  form.elements.p.value = p.toFixed(2) + "%";
  if (p < 0) {
    form.elements.p.className = "result-negative"
  } else {
    form.elements.p.className = "result"
  }

}

function calculateProfitLossPercentage() {
  const form = document.forms.inputForm3;
  let y = form.elements.y.value;
  let n = form.elements.n.value;
  let x = n - y;
  let pl = (x / y) * 100;
  form.elements.pl.value = pl.toFixed(2) + "%";
  if (pl < 0) {
    form.elements.pl.className = "result-negative"
  } else {
    form.elements.pl.className = "result"
  }

}