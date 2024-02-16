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
       
}

