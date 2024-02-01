// Guessing game generates a number between 1 to 10 and user have to guess the number thorugh prompt until user do not quit the game
const max=prompt("Enter the maximum number")
const randomnum=Math.floor(Math.random()*max)+1;
let guess =prompt("Guess the number");

while(true){
    
    if(guess=="quit"){
        console.log(`Quiting the game better luck next time!`);   
        break;
    }
    if(guess==randomnum){
        console.log(`You win your guess ${guess} is the right number`);     
        break;
    }
    else{
        if(guess<randomnum){
            console.log(`Hint! Your guess is close Enter a more larger number`)
            guess=prompt("Guess the number")
        }
        else{
            console.log(`Your guess is to far Try small number again`)
            guess=prompt("Guess the number")
        }
        

    }
}