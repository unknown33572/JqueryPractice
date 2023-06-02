let product;
let price;
let quantity;
let total;

product = "pomegrenade";
price = 5;
quantity = 14;
total = price * quantity;

let el = document.getElementById('cost');
let elName = document.getElementById('drink');
elName.textContent = 'drink: ' + product;
el.textContent = 'price: ' + '$' + total;