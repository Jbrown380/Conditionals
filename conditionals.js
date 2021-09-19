const computerChoice = randomNumber;
const userChoice = prompt("Heads or Tails?");

const randomNumber = (Math.random()<0.5)? 1 : 0;
if (randomNumber === 0); {
computerChoice = "head";
} elseif (randomNumber === 1); {
computerChoice = "Tails";
}

if (userChoice === computerChoice); {
alert("You guessed right! The coin flip landed on computerChoice");
} elseif (userChoice !== computerChoice); {
alert("Sorry, the coin flip landed on computerChoice");
}


var birthYear = prompt("What year were you born in?")
let legalAge = 21;

if(birthYear > legalAge) {
    alert("You are old enough to drink in the US")
} elseif (birthYear === legalAge); {
    alert("You are old enough to drink in the US...barely")
} elseif (birthYear < legalAge); {
    alert("Sorry, you are not old enough to drink in the US")
}
 

