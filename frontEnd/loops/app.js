const max=prompt("enter your max number");

const random=Math.floor(Math.random()*max)+1;

let guess =
prompt("guess the number ");
while (true){
        if(guess=="quit"){
                console.log("user has been quit the game");
                break;
        }
        if(guess==random){
                console.log("you are right : congrats! random number was ",random);
        }
        else if (guess<random){
                guess=prompt("hint: your guess ");

        }else {
                guess=prompt("hint:your guess was too large. please try again");
        }
}