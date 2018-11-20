// ES6 Version

const fruitsBasket = ["manggo", "strawberry", "melon"];

fruitsBasket.forEach((value, index) => {
  console.log(`Fruit Name: ${value} and index number: ${index}`);
});

/* Code above will produce 

Fruit Name: manggo and index number: 0
Fruit Name: strawberry and index number: 1
Fruit Name: melon and index number: 2

*/

// ES5 Version

var colorList = ["blue", "red", "green"];

colorList.forEach(function(data, index) {
  console.log("Color name: " + data + " and index number: " + index);
});

/* Code above will produce 

Color name: blue and index number: 0
Color name: red and index number: 1
Color name: green and index number: 2

*/
