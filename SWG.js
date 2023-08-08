function playGame(guess){
    const letters = ["S", "W", "G"]
    const randletter = letters[Math.floor(Math.random()*letters.length)];

    alert("computer choice: " + randletter);

    if (guess == randletter){
        alert("Its a tie...!!!")
    }
    else if (guess == "S" && randletter == "W" || guess == "W" && randletter == "G" || guess == "G" && randletter == "S" ){
        alert("You win..!!")
    }
    else{
        alert("Computer wins...!!!")
    }
}


const guess = prompt("Enter S, W or G: ").toUpperCase();

if (guess == "S" || guess == "W" || guess == "G"){
    const confirmation = confirm("You choose" + guess + ". Ready to play");

    if (confirmation){
        playGame(guess);
    }else{
        alert("Okay maybe next time");
    }
}else{
    alert("Invalid choice, Please choose Either of 3.");
}

