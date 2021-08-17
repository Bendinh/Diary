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
    console.log(words.some((word) => {
      return word.length < 6;
    }));

    const interestingWords = words.filter(a=>{
      return a.length>5;
    })

    console.log(interestingWords.every((word) => {
      return word.length>5;
    }));

//Objects
//Properties
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 4;
  delete spaceship['Secret Mission'];

//Methods
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

  let alienShip = {
    retreat() {
      console.log(retreatMessage);
    },
    takeOff() {
      console.log('Spim... Borp... Glix... Blastoff!');
    }
  };
  alienShip.retreat();
  alienShip.takeOff();

//Nested Objects
  let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 

  let capFave = spaceship.crew.captain['favorite foods'][0];
  spaceship.passengers = [{name:'Cathy'}];
  let firstPassenger = spaceship.passengers[0];

//Functions tempering with objects
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };

  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
  };
  let remotelyDisable = obj => {
    obj.disabled = true;
  } 

  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);

//Looping through objects
  let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
  }; 

  for (let n in spaceship.crew){
  console.log(`${spaceship.crew[n].name}: ${spaceship.crew[n].degree}`);
  }

//Advanced Objects
//This Keyword
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  console.log(robot.provideInfo());
  ///////Don't use arrow fucntions while using this keyword

//Getters for JavaScript
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if (typeof this._energyLevel === 'number')
      {
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  console.log(robot.energyLevel);

//Setter for JavaScript
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number'&&num>=0){
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  robot.numOfSensors = 100;
  console.log(robot.numOfSensors);

//Object Factory(Mass produce objects)
  const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep(){ 
        console.log('Beep Boop')
      }
    }
  }
  const tinCan = robotFactory('P-500',true);  
  tinCan.beep();
  //Truncated version
  function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }

//Shortcut when accessing properties inside object to assign to a const
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot;
  functionality.beep();

