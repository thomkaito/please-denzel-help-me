//HABERT Thomas

// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = "please denzel, help me";

// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';

var inspirational = "Is " + actor + " an inspirational actor ?";

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)

var family = {
'married':1983,
'presidentOfTheUnitedStates':false,
'children':['John David', 'Katia', 'Olivia', 'Malcolm']
};

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};

[stage.name, stage.year] = ["A Raisin in the Sun", 2014]

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};

awards["movie"] = "Training Day";

// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)

earlywork = {
"Carbon Copy": "1981",
"A Soldier Story": "1984",
"Power": "1986",
"Cry Freedom": "1987",
"For Queen and Countryy": "1988"
};

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];

const debatersUpper = [];
for (let i = 0; i < 4; i++){
  debatersUpper.push(debaters[i].toUpperCase());
}

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array

directors.push("tonyscott");

// 2. remove "spikelee" value and store it in a variable called firstDirector

var firstDirector = directors.shift();

// 3. add "himself" value to the start of `directors` array

directors.unshift("himself");

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector

var secondDirector = directors.splice(1, 1)[0];

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector

var thirdDirector = directors.slice(1, 2)[0];


// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']

function duplicate(array){
  const length = array.length;
  for (let i = 0; i < length; i++){
    array.push(array[i]);
  }
  return array;
}

// Q10. Refactor the current ES5-style function `police` in ES6-style.
//const police = function (names) {
//  const results = [];
//
//  for (let i = 0; i < names.length; i++) {
//    results.push(names[i] + 'I am the police');
//  }
//  return results;
//};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

//console.log(police(chorus));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];

const police = (names) => {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(`${names[i]} I am the police`);
  }
  return results;
};

console.log(police(quotes));

// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

document.querySelectorAll('#credits > div > article > div > div > strong > a');

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

//41 requests.

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

//We have a json containing some information of Zach Shirey used on his tvmaze page.

// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q15. Refactor the following codebase with async/await notation
//fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
//  .then(response => {
//    return response.json();
//  })
//  .then(data => {
//    const {person} = data[0];
//    const {id} = person;
//
//    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
//  })
//  .then(response => {
//    return response.json();
//  })
//  .then(console.log);

async function main()
{
  let data = await (
    await fetch("http://api.tvmaze.com/search/people?q=denzel+washington").json());

    const {person} = data[0];
    const {id} = person;

    let personData = await (
      await fetch("http://api.tvmaze.com/people/${id}/castcredits?embed=show"));
    console.log(JSON.stringify(personData));
}

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)

//https://www.touslesprix.com/
//https://myanimelist.net/
//https://www.deviantart.com/

// Q17. Describe an ESILV project that you worked on that you’re proud of?

//This year for the 'PI²' I worked with Naturgy. we had to develop a machine learning
//algorithm to reveal trends on energy consumption of their clients, to identify
//customers that were consuming more than they should. we also had time to generate
//automatically sheets with graphs and scores to explain to the customer where he is.
//I'm proud of this project because parts of it will really be used by the company. Also
//it was a good experience with the company and I'm actually in internship in this company.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?

//Last year for the 'PING' I worked on a Mobile Application to plan your meal
//for a week according to your goals (weightloss/gain, discover new meal, ...), 
//and your constraints (time, allergies, budget, ...). The application also
//prepare your shopping list and can order on a partner supermarket.
//The initial idea was something that all the team (of 6 members) could use
//but all over the year the idea evolved too much (local products, bio/healthy,
//targeted on weightloss, ...) and at the end the project didn't look like me.

// Q19. What are some things you like about the developer tools you use?

//Fetch images on website that are sometimes difficult to have without Web Dev Tools.
//The possibility to test the page with different screens (with phone resizing for example).

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?

//We used through the course different ways to develop a Web App (Python, Node.js, React)
//and the architecture of the applications were
//differents (with the interface and data at different places for example).
