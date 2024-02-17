   // this is regular method for onclick() operation

// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }


/* this is the method of using function for onclick() operation from
    utility_function.js file
*/ 




function play(){
    hideElementByID('home');
    showElementById('play-ground');
    gameOn();

    // continueGame();
}


// function continueGame(){
//     step 1: generate a random alphabet  -----> using external function here. (can do it in here as well)
//     step 2: call the function of random alphabet

//     const alphabet = getRandomAlpha();
//     console.log("Random alphabet it ",alphabet);
//     }


function gameOn(){
    const alphabet = getRandomAlphabet();
    const currentAlpha = document.getElementById('current_alphabet');
    currentAlpha.innerText = alphabet;

    
    // setting background color

    setBackgroundColor(alphabet);
    
}








