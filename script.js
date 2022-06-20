'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// Remember that spread operator builds arrays and puts multiple values into a function

// REST IS TO PACK ELEMENTS INTO AN ARRAY

// written on RIGHT side of the equal sign is SPREAD
const arr = [1, 2, ...[3,4]];

//you can write ... on LEFT side equal sign as well - that is REST
// IT IS CALLED REST BECAUSE IT WILL TAKE THE REST OF THE ELEMENTS AND PUT THEM IN A NEW ARRAY

const[a,b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

// It collects the elements that are unused at the end--the rest--and puts them in an array

// restElement must be last element in array on LEFT side of the equal sign

// THIS ALSO WORKS IN OBJECTS
// the remaining elements will be collected into an object

const {sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays)

// REST OPERATOR CAN ALSO WORK WITH FUNCTIONS

//this is a working function which can accept any number of parameters
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  console.log(sum)
}

// the restparameter syntax then makes 3 arrays out of the numbers below

add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 3, 4, 3, 2, 1)

// SPREAD ing the numbers
const x = [23, 5, 7];
// numbers will immediatly be connected to the numbers array that is part of the add function
add(...x);

// THE BENEFIT HERE IS THAT THE ADD FUNCTION CAN TAKE SINGLE VALUES WHEN YOU CALL IT
// AND IT CAN ALSO TAKE AN ARRAY

// SPREAD AND REST WORK IN OPPOSITE WAYS DEPENING ON WHERE THEY ARE USED
// SPREAD is where values are separated by commas
// REST is where we have variable names separated by commas



