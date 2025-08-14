let maximum = parseInt(prompt("Enter the maximum number!")); // prompt can only accept numbers

//if false which is NaN, prompt , (!maximum is enough because NaN is inherently false)
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; //Random number is created with your input
console.log(targetNum);

//later parseInt because string and number will never be === equal
let guess = prompt("Enter your first guess! (Type 'q' to quit)"); 
let attempts = 1;

while(parseInt(guess) !== targetNum) {  //We don't wanna do parseInt on prompt beforehand because of string "q"
  if (guess === "q") //to quit
    break;
    guess = parseInt(guess);
  attempts++;
  if (guess > targetNum) {
    if (guess - targetNum <= 3) {
        guess = prompt("Close! Just a few off. High, Enter a new guess:");
    } else {
        guess = prompt("Too high, Enter a new guess:");
    }
} else {
    if (targetNum - guess <= 3) {
        guess = prompt("Close! Just a few off. Low, Enter a new guess:");
    } else {
        guess = prompt("Too low, Enter a new guess:");
    }
}
}

if (guess === "q"){
    console.log("OK, YOU QUIT!");
}
else {
    console.log("Congrats,");
    console.log(`You got it! It took you ${attempts} guesses`);
}










