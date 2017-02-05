
var guessedletters = "";
//unique variable for user input

var wordarray = ["testone", "testtwo", "testthree", "testfour"];
//word to check against, a variable to store the word
var randomwordarray = randomwordarray[Math.floor(Math.random() * randomwordarray.length)]; 
//generate a random word from the list

var triesremaining = 0;
//variable to store the number of guesses

var storedletters = "";
//a variable as a string to store the guesses

var wins = 0;
var losses = 0;
//variable for wins and losses

//checks against the guessed letters
function myFunction() {
    var str = guessedletters;
    var res = str.charAt(str.length-1);
    document.getElementById(guessedletters).innerHTML = res;
}

//attempt at a function
guessedletters.storedletters = function(){
	guessedletters.wordarray();
	for(i=0; i<guessedletters.wordarray.length; i++){
	guessedletters.wordarray[i] = guessedletters.wordarray.charAt(i);
	guessedletters.wordarray[i] = "_";
	}
	guessedletters.storedletters = guessedletters.wordarray.join("");
	document.getElementById("").innerHTML = guessedletters.wordarray;
	document.getElementByID("numLetters").innerHTML = guessedletters.wordarray.length;

} //confused: insert sad face here.


/*

unique variable for user input
word to check against, a variable to store the word
variable to store the number of guesses

name of the function that allows me to search for the letter in the string

a variable as a string to store the guesses

array of winning words
array of letters guessed
string for current guess

---
Create a container

Left panel
	//Shows an image that corresponds to the 
	//answer

Right Panel

	//As soon as users get to the page, they can 
	//start playing right away by pressing a 
	//letter
	Press any key to get started

	//Displays the number of times the user has
	//won
	Wins
	
	//Under this section, the letter that the user
	//guesses will appear inplace of an underscore
	Current word
	_ _ _ _ _ _ _ _ 

	//this area displays the number of chances
	// that the user still has
	Number of Guesses Remaining
	15
	
	//when users type a letter, it counts as a
	// guess and displays under this section
	//if they type a letter in once, and try it 
	//again, it should not count against their 
	//score
	Letters Already Guessed 

The User:
See's the input field
Guesses a Letter
See's winning stats

*/
