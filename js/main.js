window.onload = function() {
        what();
      function what() {
            document.getElementById('output').innerHTML = '24/7';
        };
}
// ----------------------------
var square = function(x) {
  return x * x;
};
document.write(square(12));
// ----------------------------
var makeNoise = function(){
  // document.write("<h1>Power No</h1><p>!</p>" + "Make a NOISE")
};
makeNoise();
// ----------------------------
var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};
// ----------------------------
document.write("<h1>Power No</h1><p>!</p>" +  power(2, 10) + " " + power(5,6) + " " + square(3) + "<br>")
// ----------------------------
var x = "outside";

 var f1 = function() {
   var x = 'inside f1';
 };
 f1();
document.write(" " + x)

var f2 = function() {
  x = "inside f2";
};
f2();
document.write(" " + x)
// ----------------------------
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size){
    result += "/";
    for (var count = 0; count < size;  count++)
      result+="'";
      result += "\\";
  };

  flat(3);
  mountain(5);
  flat(2);
  mountain(1);
  flat(5);
  mountain(7);
  flat(3);
  return result;
};

document.write("<br>" + landscape());
// ----------------------------
var tripple = function (hds) {
  return hds * 3
};

var hds = tripple
console.log(hds(3));
// ----------------------------

var double = function (moon) {
  return moon * 98485798347529
};

var moon = double
console.log(double(5))

// ----------------------------

var books = [
  {name: 'book1', author: 'author1', type: 'comics'},
  {name: 'book1', author: 'author1', type: 'roman'},
  {name: 'book1', author: 'author1', type: 'comics'},
  {name: 'book1', author: 'author1', type: 'poem'}
]

var poems = books.filter(function(books) {
return books.type === 'poem'
})
// var books = []
// for (var i = 0; i < books.length; i++) {
//   if (books[i].type === 'poem')
//     poem.push(books[i])
// }
console.log(books[3]);
