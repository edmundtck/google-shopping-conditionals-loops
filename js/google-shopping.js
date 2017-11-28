var data = require('../products.json');

// Write your solutions below

// ================ items find kind of shopping#product ===============
// var filtered = data.items.filter(function(prop) {
//   return prop.kind == "shopping#product";
// });
//
// // console.log(filtered.length);
// console.log(data.currentItemCount);
// // console.log(data.items);


// ============================== backorder ==========================



// for (var i = 0; i < data.items.length; i++) {
//
//   if (data.items[i].product.inventories[0].availability === 'backorder') {
//     console.log(data.items[i].product.title);
//   }
// }


// console.log(filtered);

// ========================= more than one image link =========================

// var filter = data.items.filter(function(a) {
//   return a.product.images.length > 1;
// });
//
// filter.forEach(function(a) {
//   console.log(a.product.title);
// });


// =========================== brand Canon =========================


// var filter = data.items.filter(function(a) {
//   return a.product.brand === 'Canon';
// });
//
// filter.forEach(function(a) {
//   console.log(a.product.title);
// });


// ========================== eBay and Canon ========================


// var filter = data.items.filter(function(a) {
//   return a.product.brand === 'Canon' && a.product.author.name.includes('eBay');
// });
//
// filter.forEach(function(a) {
//   console.log(a.product.title);
// });


// ================= brand, price, image link ======================


data.items.forEach(function(a) {
  var brand = a.product.brand;
var price = a.product.inventories[0].price;
console.log(`The brand is ${brand} and price is ${price}`);

a.product.images.forEach(function(b) {
  console.log(b.link);
});
// for (var i = 0; i < a.product.images.length; i++) {
//   console.log(a.product.images[i].link);
// }
console.log('\n');
});
