let generate_rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
let rand = generate_rand(1, 101);
console.log(rand);

const max_attempt = 100;

// for (let i = 0; i <= max_attempt; i++) {
//   let inp = prompt("Guess the number: ");
//   console.log(inp);
//   if (inp == rand) {
//     console.log("You got it right");
//     break;
//   } else if (inp > rand) {
//     console.log("try guessing a number smaller");
//   } else {
//     console.log("try guessing a number bigger");
//   }
// }

let attempts = 0;
while (attempts <= max_attempt) {
    let inp = prompt("Guess the number: ");
    console.log(inp);
    console.log(`Attempts left: ${max_attempt-attempts-1}`)
  
    if (inp == rand) {
      console.log("You got it right");
      break;
    } else if (inp > rand) {
      console.log("Try guessing a number smaller");
    } else {
      console.log("Try guessing a number bigger");
    }
  
    attempts++;
}
