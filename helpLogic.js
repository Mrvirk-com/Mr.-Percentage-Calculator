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
  form.elements.x.value = x;

  if (x < 0) {
    form.elements.x.className = "result-negative"
  } else {
    form.elements.x.className = "result"
  }

  const output = document.getElementById("xOutput");
  output.innerHTML = "Result: " + p + "% of " + y + " is : " + "<b> <span>" + x + "</span></b>";
  const formula = document.getElementById("xFormula");
  formula.innerHTML = "Tips: Given, x = ?, p = " + p + ", y = " + y + ". Calculations, x = (p*y)/100 = (" + p + "*" + y + ")/100";
}

function calculatePercentage() {
  const form = document.forms.inputForm2;
  let x = form.elements.x.value;
  let y = form.elements.y.value;
  let p = (x / y) * 100;
  form.elements.p.value = p + "%";
  if (p < 0) {
    form.elements.p.className = "result-negative"
  } else {
    form.elements.p.className = "result"
  }

  const output = document.getElementById("pOutput");
  output.innerHTML = "Result: " + x + " is <b> <span>" + p + "%</span></b> of " + y;
  const formula = document.getElementById("pFormula");
  formula.innerHTML = "Tips: Given, p = ?, x = " + x + " y = " + y + ". Calculations, p = (x/y)*100 = (" + x + "/" + y + ")*100";

}

function calculateProfitLossPercentage() {
  const form = document.forms.inputForm3;
  let y = form.elements.y.value;
  let n = form.elements.n.value;
  let x = n - y;
  let pl = (x / y) * 100;
  form.elements.pl.value = pl + "%";
  if (pl < 0) {
    form.elements.pl.className = "result-negative"
  } else {
    form.elements.pl.className = "result"
  }

  const output = document.getElementById("plOutput");
  output.innerHTML = "Result: Profit/Loss % is <b> <span>" + pl + "%</span></b>";
  const formula = document.getElementById("plFormula");
  formula.innerHTML = "Tips: Given, p/l = ?, x= ?, y = " + y + " n = " + n + ". Calculations, x = y-n, p/l = (" + x + "/" + y + ")*100";

}