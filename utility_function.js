function hideElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementById(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}


           // geting random alphabet

function getRandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');

    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);   

    const alphabet = alphabets[index];
    return alphabet;
     
}

            // adding background color to the key

 function setBackgroundColor(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-500');
            
            }



// function getRandomAlpha(){
//     // first create an alphabet array

//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";  // also can use an array of each alphabet
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // secondly generate a random index between 0 to 25 (length-1) 

//     const randomNum = Math.random()*25;
//     const index = Math.round(randomNum);   // Math.round() means the random number will be integer
//     // console.log(index);

//     const alphabet = alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet;
// }



