   // this is regular method for onclick() operation

// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }





/* this is the method of using function for onclick() operation from  utility_function.js file
*/ 

function play(){
    hideElementByID('home');
    showElementById('play-ground');
    gameOn();

    // continueGame();
}




   // key-press events

//    function keyEvent(){
//     console.log("Key pressed");
//    }

//    document.addEventListener("keyup",keyEvent); // "keyup" means the released moment after pressing the key


function keyboardEvent(event){
    const playerPressed = event.key;
    console.log("Player pressed :",playerPressed); // shows which key is being pressed


    // get the expected key to be pressed
    const current_alphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = current_alphabetElement.innerText;
    const expected = currentAlphabet.toLowerCase();
    console.log(playerPressed,expected);


    // check the expected and pressed key
    
    if(playerPressed === expected){
        console.log("Matched! You win.");
        console.log("You pressed correctly.", expected);
        removeBackgroundColor(expected);
        gameOn();
    }
    else{
        console.log("Didn't match. You lost a life.");
        
    }
    
}

document.addEventListener("keyup",keyboardEvent)




function gameOn(){

    const alphabet = getRandomAlphabet();
    console.log("Your random alphabet is :",alphabet);
    
    const currentAlpha = document.getElementById('current_alphabet');
    currentAlpha.innerText = alphabet;

    // setting background color
    setBackgroundColor(alphabet);
    
}



























// function continueGame(){
//     step 1: generate a random alphabet  -----> using external function here. (can do it in here as well)
//     step 2: call the function of random alphabet

//     const alphabet = getRandomAlpha();
//     console.log("Random alphabet it ",alphabet);
//     }











