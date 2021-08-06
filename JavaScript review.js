//Review JavaScript

//Switch Keyword
    let athleteFinalPosition = 'first place';
    switch (athleteFinalPosition) {
      case 'first place':
        console.log('You get the gold medal!');
      break;
      case 'second place':
        console.log('You get the silver medal!');
      break;
      case 'third place':
        console.log('You get the bronze medal!');
      break;
      default:
        console.log('No medal awarded.')
      break;
}

//Functions//
//Function Declarations
    getReminder();
    greetInSpanish();

    function getReminder()
    {
      console.log('Water the plants.');
    }   

    function greetInSpanish()
    {
      console.log('Buenas Tardes');
    }

//Functions Parameters
    function sayThanks(name) 
    {
        console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
    }

    sayThanks('Cole');

    function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
        console.log(`Remember to buy ${item1}`);
        console.log(`Remember to buy ${item2}`);
        console.log(`Remember to buy ${item3}`);
      }

//Function Expression
    const plantNeedsWater = function (day){
        if(day=='Wednesday')
        {
          return true;
        } else {
          return false;
        }
    }
    console.log(plantNeedsWater('Tuesday'));

//Arrow functions
    const plantNeedsWater = (day) => {
        if (day === 'Wednesday') {
            return true;
        } else {
            return false;
        }
    };

    const plantNeedsWater = day => day == 'Wednesday';
    console.log(plantNeedsWater('Wed'));

//Array//
//Array Methods
    const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

    console.log(groceryList.shift());
    console.log(groceryList);

    groceryList.unshift('popcorn');
    console.log(groceryList);

    console.log(groceryList.slice(1,4));
    console.log(groceryList);

    const pastaIndex = groceryList.indexOf('pasta');
    console.log(pastaIndex)
    //More methods: 
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Loop
//Do...while...
    let cupsOfSugarNeeded = 5
    let cupsAdded = 0
    do {
    cupsAdded++;
    } while (cupsAdded<cupsOfSugarNeeded)

//Iterator
//Functions as Data
    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
        for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
        }
    }
    let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
    is2p2();
    console.log(is2p2.name);

//Functions as parameters
    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
        for(let i = 1; i <= 1000000; i++) {
          if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
          }
        }
    };
  
    const addTwo = num => num + 2;
  
    const timeFuncRuntime = funcParameter => {
        let t1 = Date.now();
        funcParameter();
        let t2 = Date.now();
        return t2 - t1;
    };

    let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
    let checkConsistentOutput = (func,value) => {
        if (func(value)===func(value))
        {
          return func(value);
        } else {
          return 'This function returned inconsistent results';
        }
    }
    checkConsistentOutput(addTwo,1);
  
//For each iterator
    const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
    fruits.forEach(item=>
    console.log('I want to eat a '+item))

//Map iterator
    const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

    const secretMessage = animals.map(a => {
      return a.substring(0,1);
    });
    console.log(secretMessage.join(''));

    const bigNumbers = [100, 200, 300, 400, 500];

    const smallNumbers = bigNumbers.map(a => {
      return a/100;
    })

//Filter array
    const randomNumbers = [375, 200, 3.14, 7, 13, 852];

    const smallNumbers = randomNumbers.filter(a =>{
      return a < 250;
    })

    const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

    const longFavoriteWords = favoriteWords.filter(a=>{
      return a.length>7;
    })

//findIndex
    const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

    const foundAnimal=animals.findIndex(a=>{
      return a==='elephant';
    });

    const startsWithS=animals.findIndex(a=>{
      return a.substring(0,1)==='s';
    })

//Reduce
    const newNumbers = [1, 3, 5, 7];

    const newSum = newNumbers.reduce((accumulator,currentValue)=>{
      console.log('The value of accumulator: ', accumulator);
      console.log('The value of currentValue: ', currentValue);
      return accumulator + currentValue;
    },10) //10 is an add-on value, which can be any number
    console.log(newSum);

//Some(check if at least an element satisfies a condition) an Every(checks if all elements satisfy a condition;l)
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
    console.log(words.some((word) => {
      return word.length < 6;
    }));

    const interestingWords = words.filter(a=>{
      return a.length>5;
    })

    console.log(interestingWords.every((word) => {
      return word.length>5;
    }));

