
alert("Welcome to my calculator - let's do some maths!");
var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
var interest = true;


while (interest === true) {

    if (type === 'a') {

      var calculationTypeAdvanced = prompt("Welcome to the advanced calculator! Would you like to (s)quare-root a number or raise one number to the (p)ower of the other?");
      switch (calculationTypeAdvanced) {
        case 's':
        var num = Number(prompt("Square root! Okay. What's the number you'd like to find the square root of?"));
        var sqrt = Math.sqrt(num);
        alert("Calculating...");
        alert(`Your answer is ${sqrt}.`);
        var anothersum = prompt("Do you want to do some more maths? (y/n)");
        if (anothersum === "y") {
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        else if (anothersum === "n"){
          var interest = false;
        }
        else {
          alert("Seeing as you can't make up your mind, let's go again!");
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        break;
        case 'p':
        var num1 = Number(prompt("Raising one number to the power of another! Okay. What's the number you'd like to apply the power to?"));
        var num2 = Number(prompt("Great. Now, what would you like the power to be?"));
        var power = Math.pow(num1, num2);
        alert("Calculating...");
        alert(`Your answer is ${power}.`);
        var anothersum = prompt("Do you want to do some more maths? (y/n)");
        if (anothersum === "y") {
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        else if (anothersum === "n"){
          var interest = false;
        }
        else {
          alert("Seeing as you can't make up your mind, let's go again!");
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        break;
        default:
        alert("Sorry, that's not a valid input.")

      }
    }

    else if (type === 'b') {

      var calculationTypeBasic = prompt("Welcome to the basic calculator! Would you like to (a)dd, (s)ubtract, (d)ivide or (m)ultiply your two numbers?");
      switch (calculationTypeBasic) {
        case 'a':
        var num1 = Number(prompt("Addition! Okay. What's the first number?"));
        var num2 = Number(prompt("Thanks. What's the second number?"));
        var add = num1 + num2;
        alert("Calculating...");
        alert(`Your answer is ${add}.`);
        var anothersum = prompt("Do you want to do some more maths? (y/n)");
        if (anothersum === "y") {
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        else if (anothersum === "n"){
          var interest = false;
        }
        else {
          alert("Seeing as you can't make up your mind, let's go again!");
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        break;
        case 's':
        var num1 = prompt("Subtraction! Okay. What's the first number?");
        var num2 = prompt("Thanks. What's the second number?");
        var sub = num1 - num2;
        alert("Calculating...");
        alert(`Your answer is ${sub}.`);
        var anothersum = prompt("Do you want to do some more maths? (y/n)");
        if (anothersum === "y") {
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        else if (anothersum === "n"){
          var interest = false;
        }
        else {
          alert("Seeing as you can't make up your mind, let's go again!");
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        break;
        case 'd':
        var num1 = prompt("Division! Okay. What's the first number?");
        var num2 = prompt("Thanks. What's the second number?");
        var div = num1 / num2;
        alert("Calculating...");
        alert(`Your answer is ${div}.`);
        var anothersum = prompt("Do you want to do some more maths? (y/n)");
        if (anothersum === "y") {
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        else if (anothersum === "n"){
          var interest = false;
        }
        else {
          alert("Seeing as you can't make up your mind, let's go again!");
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        break;
        case 'm':
        var num1 = prompt("Multiplication! Okay. What's the first number?");
        var num2 = prompt("Thanks. What's the second number?");
        var mul = num1 * num2;
        alert("Calculating...");
        alert(`Your answer is ${mul}.`);
        var anothersum = prompt("Do you want to do another sum? (y/n)");
        if (anothersum === "y") {
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        else if (anothersum === "n"){
          var interest = false;
        }
        else {
          alert("Seeing as you can't make up your mind, let's go again!");
          var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
        }
        break;
        default:
        alert("Sorry, that's not a valid input.")
      }
    }

    else {
      alert("That's not a calculator type! Try typing 'a' for advanced or 'b' for basic.");
      var type = prompt("Would you like to use the (a)dvanced or (b)asic calculator?");
    }
}


if (interest === false) {
  alert("If you want to have some more maths fun, just refresh the page whenever you want.");
}
