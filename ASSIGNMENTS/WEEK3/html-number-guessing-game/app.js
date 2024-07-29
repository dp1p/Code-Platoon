console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
//to create a func to randomly generate num

//intializing variables
let guessThis = Math.floor(Math.random()*100) + 1 //randomly generates a num from 0-99, + 1 adds the last num
let oldResultsArr = [] //mystery,

//the event || the function 
const getGuess = () =>{

    
    const inputFromHtml = document.getElementById('myInput'); //essentially we are transferring the input from html to javascript
    const inputValue =  inputFromHtml.value //the .value is so we can retrieve the data entered from the user
    
    if (inputValue < guessThis){ 
        
        result = inputValue + "? BZZZT TRY AGAIN! Try going higher!";
        document.querySelector("#old-results").innerHTML = oldResultsArr; //
        oldResultsArr.push(inputValue);  //appends the old results that were wrong to array
        document.querySelector("#old-results").innerHTML = guessThis;
    } else if (inputValue > guessThis) {
        
        result = inputValue + "? BZZZT TRY AGAIN! Try going Lower!";
        document.querySelector("#old-results").innerHTML = oldResultsArr;
        oldResultsArr.push(inputValue);
    
    } else if (inputValue === guessThis) {
        result = ("CORRECT! THE RANDOM NUMBER IS " + guessThis);
        
        //document.body.style.backgroundColor = "red";
    }
    
    document.querySelector("#screen").innerHTML = result;
     //this will display the input value inside the HTML (innerHTML) of the div id called #screen
            //query selector essentially selects the class ID, and we can used to modify it with any method (in this case, inner HTML)
}



// console.log( getGuess())

//create a seperate container to store old results
//something to generate p tags