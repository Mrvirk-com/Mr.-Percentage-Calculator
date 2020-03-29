calculate_savings_and_discounted_price();
calculate_savings_on_fixed_price_off();
discount_form.oninput = function(event) {
  event.preventDefault();
  calculate_savings_and_discounted_price();
};

fixed_off_form.oninput = function(event) {
  event.preventDefault();
  calculate_savings_on_fixed_price_off();
};

/*
What is the 33% of 67 ?
Let, savings= ?, discount_percent= 33, product_price= 67
savings= (product_price * discount_percent)/100
*/
function calculate_savings_and_discounted_price() {
  const form = document.forms.discount_form;
  let discount_percent= form.elements.discount_percent.value;
  let product_price = form.elements.product_price.value;
  if (discount_percent== null || discount_percent== "") {
    discount_percent= 0;
  }
  if (product_price== null || product_price== "") {
    product_price= 0;
  }
  let savings= (discount_percent* product_price) / 100;
  form.elements.savings.value = savings.toFixed(2);

  let discounted_price = product_price - savings;
  form.elements.discounted_price.value = discounted_price;

  if (savings< 0) {
    form.elements.savings.className = "result-negative"
  } else {
    form.elements.savings.className = "result"
  }
}

function calculate_savings_on_fixed_price_off() {
  const form = document.forms.fixed_off_form;
  let fixed_off= form.elements.fixed_off.value;
  let product_price = form.elements.product_price.value;
  if (fixed_off== null || fixed_off== "") {
    fixed_off= 0;
  }
  if (product_price== null || product_price== "") {
    product_price= 0;
  }
  let savings_percent= (fixed_off / product_price) * 100;
  form.elements.savings_percent.value = savings_percent.toFixed(2)+" %";

  let discounted_price = product_price - fixed_off;
  form.elements.discounted_price.value = discounted_price;

  if (savings_percent< 0) {
    form.elements.savings_percent.className = "result-negative"
  } else {
    form.elements.savings_percent.className = "result"
  }
}