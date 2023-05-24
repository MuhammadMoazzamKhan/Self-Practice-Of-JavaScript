// Ex = 1 //

/* 
let num = Math.floor(Math.random() * 100);
num = parseInt(num);
let chances = 100;
let get ;
while(num != get){
    get = prompt("Guess the number");
    chances--
    if(num == get){
        console.log("Congratulation! You guess the correct number");
        console.log(`You guess the actual number in ${100 - chances} chances`);
}else if(num > get && get < 100){
    console.log("Your number is greater than the actual number");
}else if(num < get && get > 0){
    console.log("Your number is smaller than the actual number");
}else{
    console.log("Enter the number between 0 and 100");
}
}
 */

// Ex = 1 //
/* 
let user = confirm("do you wanna play Water Gun snake game");
if(user){
    alert("10 Rounds in it");
}
let ask;
let userPoint = 0;
let machinePoint = 0;
let inGame = ["water", "snake", "gun"];
let rounds = 0;
while (rounds < 10) {
    if (user) {
        ask = prompt("what do U take Water or Gun or snake ..");
    }
    let userSay = ask.toLowerCase();
    let random = inGame[Math.floor(Math.random() * 3)];
    if (userSay == "water" && random == "gun") {
        if (random == userSay) {
            console.log("Draw match");
        } else {
            userPoint++;
        }
    } else if (userSay == "water" && random == "snake") {
        machinePoint++;
    }
    if (userSay == "gun" && random == "snake") {
        if (random == userSay) {
            console.log("Draw match");
        } else {
            userPoint++;
        }
    } else if (userSay == "gun" && random == "water") {
        machinePoint++;
    }
    if (userSay == "snake" && random == "water") {
        if (random == userSay) {
            console.log("Draw match");
        } else {
            userPoint++;
        }
    } else if (userSay == "snake" && random == "gun") {
        machinePoint++;
    }
    rounds++
}
if(machinePoint > userPoint){
    console.log(`I'm Sorry 😢! You lost the match 😔.\nYour points are ${userPoint} and our points ${machinePoint}.`)
}else if(userPoint > machinePoint){
    console.log(`Congratulation 😍🥰! You won the match 🫣.\nYour points are ${userPoint} and our points ${machinePoint}.` )
}else if(userPoint == machinePoint){
    console.log(`Math draw  🤷‍♀️🤷.\nYour points are ${userPoint} and our points ${machinePoint}.`)
}
 */