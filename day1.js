//Day 1: Review JavaScript Functions

//Declarations
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

//Parameters
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

//Do...while...
    let cupsOfSugarNeeded = 5
    let cupsAdded = 0
    do {
    cupsAdded++;
    } while (cupsAdded<cupsOfSugarNeeded)

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
  