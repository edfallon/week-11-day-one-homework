var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
//This will print my name is bob.




score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// result will be 3.



var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//myAnimals will be ducks, dogs, lions.






var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

//Suspects include: Ally, Alan, Colin, Alister.

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//suspect three is: Upul.




var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// This will return Poirot



var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
// innerFunction will change the murderer to Jerry.
}

outerFunction();
// outerFunction will change the murderer to Morty.
console.log('the murderer is ', murderer);
//the murderer is Rick.
