var time = new Date().getHours();
var name = prompt("What is you name (ex. John Doe)");

// Your conditional statements here

// alert()
// console.log(`${time}`);
var greeting = "Hi";

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon.";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed";
}
alert(`${greeting}, ${name}!`);
