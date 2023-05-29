// 1. Initialization
const btnE1 = document.getElementById("btn"); //target button from index.HTML
const jokeE1 = document.getElementById("joke"); //Access the joke and show it in the container
const apikey = "5bcIRr65A05WwQt9jtcCIw==Ogx4vv8z1BM4ejnW"; //get from profile in apininjas.
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};

// 2. Function getJoke()
/* async = It allows the getJoke function to use the await keyword inside it to 
pause the execution of the function until promises are resolved.
[0] =gets the joke in an object
[0].joke = see joke by itself 
*/
async function getJoke() {
  try {
    jokeE1.innerText = "Relax Jokes are updating... "; //shows message before fetching api jokes
    btnE1.disabled = true; //disables the button so that joke can load
    btnE1.innerText = "Loading...."; //message which appears on the button
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeE1.innerText = data[0].joke; //shows joke INSIDE container,[0]=gets first joke in data array

    btnE1.disabled = false; //removes disabled button allowing button to be pressed again
    btnE1.innerText = "Tell me a joke ...."; //message which appears on the button
  } catch (error) {
    jokeE1.innerText = "Error happened, try again later";
    console.log(error);
  }
}

// 3. Event listener
btnE1.addEventListener("click", getJoke);

//FINISH!

/*  EXTRA INFO................
KEYWORD:
Asynchronous: Asynchronous function is a special type of function that can pause its execution and 
resume later, allowing for better handling of asynchronous operations like fetching data.



STEPS
//1.Initailise - all functionality here, buttons etc..........
const apikey = 
const apiURL = Get API URL from 'sample request url' -in ninjas, so it can be checked 
const options = //5.Add apikey inside headers to get the jokes,use info below to get the jokes
//only add the 'apikey' word below into the headers part 




//2.FUNCTION
/* getJoke function fetches a joke from the API
First: sends a request to get the apiURL and options
2nd: waits for that response before moving to the next line.
3rd:It waits again to understand joke then converts response into called JSON format
4th:prints joke on console printing it on the console so that you can see and enjoy the joke.

can use this INSIDE FUNCTION to show jokes in console .console.log(data[0].joke);//shows joke in browser console


//2.EVENT LISTENERS:  /*click this button want to trigger the function 'getJoke'.
This will get the joke when we call it 







HOW TO GET THE API.......................

Use API ninjas to get Dadjokes into our webapp its free and has many,
signup
profile - click show api key and copy the key 
go to whatever api you want e.g. dad jokes
go to code examples
click javascript
copy '   headers: { 'X-Api-Key': 'YOUR_API_KEY'},
now enter this key in section "YOUR API.." LIKE ABOVE

*/
