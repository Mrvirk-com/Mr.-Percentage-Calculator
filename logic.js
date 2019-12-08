calculateX();
inputForm.onsubmit = function(event) {
  event.preventDefault();
  calculateX();
};

calculatePercentage();
inputForm2.onsubmit = function(event) {
  event.preventDefault();
  calculatePercentage();
};

calculateProfitLossPercentage();
inputForm3.onsubmit = function(event) {
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

  const output = document.getElementById("xOutput");
  output.innerHTML = "Result: " + p + "% of " + y + " is : " + "<b> <span style='color:green'>" + x + "</span></b>";

  const formula = document.getElementById("xFormula");
  formula.innerHTML = "Tips: Given, x = ?, p = " + p + ", y = " + y + ". Calculations, x = (p*y)/100 = (" + p + "*" + y + ")/100";
}

function calculatePercentage() {
  const form = document.forms.inputForm2;
  let x = form.elements.x.value;
  let y = form.elements.y.value;
  let p = (x / y) * 100;

  const output = document.getElementById("pOutput");
  output.innerHTML = "Result: " + x + " is <b> <span style='color:green'>" + p + "%</span></b> of " + y;

  const formula = document.getElementById("pFormula");
  formula.innerHTML = "Tips: Given, p = ?, x = " + x + " y = " + y + ". Calculations, p = (x/y)*100 = (" + x + "/" + y + ")*100";

}


function calculateProfitLossPercentage() {
  const form = document.forms.inputForm3;
  let y = form.elements.a.value;
  let n = form.elements.b.value;
  let x = n - y;
  let pl = (x / y) * 100;

  const output = document.getElementById("plOutput");
  output.innerHTML = "Result: Profit/Loss % is <b> <span style='color:green'>" + pl + "%</span></b>";

  const formula = document.getElementById("plFormula");
  formula.innerHTML = "Tips: Given, p/l = ?, x= ?, y = " + y + " n = " + n + ". Calculations, x = y-n, p/l = (" + x + "/" + y + ")*100";

}