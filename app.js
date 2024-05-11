// //Question 1
// //Install Node.js, TypeScript and VS Code on your computer
// // All installion done
// // *Question 2:* Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Abdul Rehman, would you like tolearn some TypeScript today?
//  let name:string ="Abdul Rehman";
//  console.log(`Hello ${name},would you like learn some typescript today?`);
// //  *Question 3:* Name Cases: Store a person’s name in a variable, and then print  that person’s name in lowercase, uppercase, and titlecase.
// let name: string = "Abdul Rehman";
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// // *Question 4:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//  console.log('Adolf Hitler once said,"If you want to shine like a sun you have to burn like it".');
// // *Question 5:* Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person: string ="Adolf Hitler";
// let message: string = `${famous_person} once said "If you want to shine like a sun burn like it".`;
// console.log (message)
// // *Question 6:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
// let name:string = "\t\n Abdul Rehman \t\n";
// console.log(name);
// console.log(name.trim());
// // *Question 7:* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
// console.log(5+3); //Addition
// console.log(12-4); //Subtraction
// console.log(4*2); //Multiplication
// console.log(32/4); //Division
// // *Question 8:* You should create four lines that look like this:console.log(5 + 3)Your output should simply be four lines with the number 8 appearing once on each line.
// //8
// console.log(5+3);
// console.log(16-8);
// console.log(8*1);
// console.log(24/3);
// // *Question 9:* Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
// let favorsiteNumber: number = 10;
// console.log(`My Favorite Number is ${favorsiteNumber}.`);
// // *Question 10:* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// // Abdul Rehman 2024/3/18
// let myName: string ="Abdul Rehman";
// console.log (`Hello ${myName}, would you like to learn some TypeScript today?`);
// // *Question 11:* Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
//let name:string []= ["M Hafeez", "Aamair Ali", "M Rafi","A Sammad"];
// console.log(name[0]);
//  console.log(name[1]);
//  console.log(name[2]);
//  console.log(name[3]);
// // *Question 12:* Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
// let message: string = "is my best friend";
// console.log(name[0] +" "+ message);
// console.log(name[1] +" "+ message);
// console.log(name[2] +" "+ message);
// console.log(name[3] +" "+ message);
// // *Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transport: string[] =["Hondo motorcycle", "Hondo City", "Hondo Civic"];
// transport.forEach(transport =>{
// console.log(`I would like to own a ${transport}.`)
// });
// // *Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//let Guest: string[]=["Noman Ali", "Asad","Rehman"]
// Guest.forEach(Guest =>{console.log(`Dear ${Guest}, Would you like to join me for dinner ?`);});
// // *Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
// let canNotAttend: string = "Asad";
// console.log(canNotAttend +" "+ "can not it, for dinner");
// let newGuest = "A Rehmain";
// Guest[Guest.indexOf(canNotAttend)] = newGuest;
//  Guest.forEach(Guest =>{console.log(`Dear ${Guest}, Would you like to join me for dinner ?`);});
// // *Question 16:* More Guests: You've found a bigger dinner table, so there's room for more guestsUnfortunately, your new table won’t arrive in time, and you can only invite two guestsUnfortunately, your new table won’t arrive in time, and you can only invite two guests.Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// let Guests = ["Abdul Rehman", "M.Hafeez", "Aamair Ali", "Noman Ali"];
// console.log("Great News! I found a bigger table!");
// Guests.unshift("M.Rafi");
// Guests.splice(Guests.length / 2, 0, "Abdul Sammad");
// Guests.push("Rehan");
// Guests.forEach(Guests => {
// console.log(`Dear ${Guests}, Would you like to jion me for dinner?`);});
// // *Question 17:* Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
//  //print message
// console.log("Unfortunately! your new table won’t arrive in time, and you can only invite two guests.");
// Guests.unshift("Saqib ", "Ali");
// //printer updated list
// console.log("updated list of guest:", Guests);
// // remove guest from the list
// while (Guests.length > 2) {
//   let removedGuest = Guests.pop();
//  if (removedGuest !== undefined) {
// console.log(`Sorry, ${removedGuest}, we cant invite you`);
//  }
// }
// //Pint a message to each of the two people still on your list,
// Guests.forEach(guest => {
// console.log(`Dear ${guest},you both are invited for the dinner`);
// });
// //remove 2 names from the list
// Guests.splice(0, Guests.length);
// //print updatedempty list
// console.log("updated list of guest:", Guests);
// //Question 18
// //Seeing the World: Think of at least five places in the world you’d like to visit
// let palceVist: string[] = ["karachi", "dubi", "new york", "paris", "china"];
// // print in original order
// console.log("original order", palceVist);
// // Print  array in alphabetical order without modifying the actual list
//  console.log("alphabetical order", palceVist.slice().sort());
// //•  array is still in its original order by printing it
//  console.log("original order", palceVist);
// //array in reverse alphabetical order without changing the order of the original list.
// console.log(" reverse order", palceVist.slice().sort().reverse());
// //• array is still in its original order by printing it again
// console.log("original order", palceVist);
// // Reverse the order of your list. Print the array to show that its order has changed
//  console.log("reverse order has changed");
//  palceVist.reverse();
//  console.log(palceVist);
// //Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log("original order", palceVist.sort());
//  console.log(palceVist);
// //• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
//  console.log ("reverse alphabetical order changed",palceVist.sort().reverse());
// console.log(palceVist);
// //• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
//  console.log ("reverse alphabetical order changed",palceVist.reverse().sort());
//  console.log(palceVist);
// //Question 19
// //Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
// let Guests = ["Abdul Rehman", "M.Hafeez", "Aamair Ali", "Noman Ali"];
// //print message
// console.log("Unfortunately! your new table won’t arrive in time, and you can only invite two guests.");
// Guests.unshift("Saqib ", "Ali");
// //printer updated list
// console.log("updated list of guest:", Guests);
// // remove guest from the list
// while (Guests.length > 2) {
//      let removedGuest = Guests.pop();
//      if (removedGuest !== undefined) {
//         console.log(`Sorry, ${removedGuest}, we cant invite you`);
//    }
//  }
// //Pint a message to each of the two people still on your list,
// Guests.forEach(guest => {
// console.log(`Dear ${guest},you both are invited for the dinner`);
// });
// //remove 2 names from the list
// Guests.splice(0, Guests.length);
// //print updatedempty list
// console.log("updated list of guest:", Guests);
// //Question 20
////Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//  let countries: string[]=["pakistan","india","china","usa","japan"]
//  //print list of countries
//  console.log("list of countries:",countries.forEach(country =>{
//     console.log(country);
//  }));
// //Question 21
// //They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let electricDevice: { [key: string]: any } = {
//   iPhone: {
//     name: "iphone 15 pro",
//     price: 300000,
//     describe: "Good desgin and long battery timing and good camera quality",
//   },
//   "Apple charger": {
//     name: "Apple 25 Watt charger",
//     price: 20000,
//     describe: "Good desgin and fast charging speed",
//   },
//   "Apple watch": {
//     name: "Apple smart watch ",
//     price: 100000,
//     describe: "Good desgin and long battery timing and help to fitnes ",
//   },
// };
// console.log(electricDevice);
// //Question 22
// //Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
// let IntentionalError: number[] = [1, 2,3,4,5,6,7,8,9,10];
// console.log(IntentionalError[11]);
// let IntentionalError1: number[] = [1, 2,3,4,5,6,7,8,9,10];
// console.log(IntentionalError1[3])
//// Question 23
//// Conditional Tests: Write a series of conditional tests. 10 tests print
// //test 1  //true
// let car = "subaru";
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == "subaru");
// //test 2  //false
// console.log("Is car == 'toyota'? I predict false.");
// console.log(car == "toyota");
// //test 3  //true
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === "subaru");
// //test 4  //true
// console.log("Is car === 'subaru'? I predict false.");
// console.log(car === "subaru");
// //test 5  //true
// console.log("Is car.lenght >0? I predict true");
// console.log(car.length > 0);
// //test 6  //false
// console.log("Is car.lenght >0? I predict false");
// console.log(car.length < 5);
// //test 7  //true
// console.log("Is car.toUpperCase() === 'SUBARU' I predict true");
// console.log(car.toUpperCase()==="SUBARU");
// //test 8  //false
// console.log("Is car.toUpperCase() === 'subaru' I predict true");
// console.log(car.toUpperCase()==="subaru");
// //test 9  //true
// console.log("Is car.toLowerCase() === 'subaru' I predict true");
// console.log(car.toLowerCase()==="subaru");
// //test 10 //true
// console.log("Is car.includes('u')? I predict true");
// console.log(car.includes('u'));
// //QUESTION NO 24
// // • Tests for equality and inequality with strings
// const string1: string= "Hello";
// const string2: string= "World";
// console.log (string1 === string2);  //false
// console.log(string1 !== string2);   //true
// // Tests using the lower case function
// const uppercase:string= "HELLO";
// const lowercase:string= "hello";
// console.log(uppercase.toLowerCase() === lowercase);  //true
// // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// const number1: number= 10;
// const number2: number= 20;
// console.log( number1===number2); //fasle
// console.log( number1!==number2);  // true
// console.log( number1 > number2);  //fasle
// console.log( number1 < number2);  //true
// console.log( number1>= number2);  //fasle
// console.log( number1 <= number2);  //true
// //  Tests using "and" and "or" operators
// const a: number= 10;
// const b: number= 20;
// const c: number= 30;
// console.log(a < b && b < c) //true
// console.log(a >b || b < c) //true
// // Test whether an item is in a array
// const array1: number[]= [1,2,3,4,5,6,];
// const itemTofind: number= 3;
// console.log(array1.indexOf(itemTofind) !== -1); //true
// // Test whether an item is not in a array
// console.log(array1.indexOf(10) === -1); //true
// // Question 25
// //Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//  let alien_color = "green"
// //• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// if (alien_color === "green")
// console.log( "you earn 5 points")
// //Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//  let alien_color = "red"
// if (alien_color == "green")
//     console.log("no output")
// // Question 27
// // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// let alien_color = "green"
// if (alien_color == "green"){
//     console.log("player just earned 5 points for shooting the alien.")}
//     else{
//          console.log("player just earned 10 points.")
// }
//  //Write one version of this program that runs the if block and another that runs the else block
//   let alien_color = "red"
//   if (alien_color == "green"){
//       console.log("player just earned 5 points for shooting the alien.")}
//       else{
//           console.log("player just earned 10 points.")}
// //Question 28
// //Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// // • If the person is less than 2 years old, print a message that the person is a baby.
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// // • If the person is age 65 or older, print a message that the person is an elder.
// let age: number = 77;
// if (age < 2) {
//   console.log("you are a baby");
// } else if (age < 4) {
//   console.log("you are a toddler");
// } else if (age < 13) {
//   console.log("you are a kid ");
// } else if (age < 20) {
//   console.log("you are an teenager");
// } else if (age < 65) {
//   console.log("the person is a adult");
// } else {
//   console.log("you are older");
// }
// //Question 29
// // Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// // • Make a array of your three favorite fruits and call it favorite_fruits.
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits: string[] = ["Mango", "Apple", "Orange",];
// if (favorite_fruits.includes("Mango")) {
//   console.log("Mango");
// }
// if (favorite_fruits.includes("Apple")) {
//   console.log("Apple");
// }
// if (favorite_fruits.includes("Orange")) {
//   console.log("Orange");
// }
// if (favorite_fruits.includes("Watermelon")) {
//   console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("Grapes")) {
//   console.log("You really like bananas!");
// }
// //Question 30
// // Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// //• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
// let users: string[] = ["Admin", "Eric", "Ali", "Hafeez", "Aamir"];
// for (let user of users) {
//   if (user === "Admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log(`Hello ${user} thank you for logging in again
//     `); } }
// //Question 31
// //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// // • If the list is empty, print the message We need to find some users!
// // • Remove all of the usernames from your array, and make sure the correct message is printed.
// //1st task
// let userNames:string[]=['Abdul Rehman',' Aamir','Hafeez','Rehan']
// if(userNames.length === 0){
//     console.log('We need to find some users')
// }else{
//     for(let i=0; i<userNames.length; i++);}
// console.log(userNames);
// // 2nd task
// let userNames:string[]=[]
// if(userNames.length === 0){
//     console.log('We need to find some users')
// }else{
//     for(let i=0; i<userNames.length; i++);}
// console.log(userNames);
// // Question 32
// // Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // • Make a list of five or more usernames called current_users.
// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// let current_users: string[] = ["sammad", "Ali ", "Farhan", "Arif", "awais"];
// let new_users: string[] = ["awais", "sammad", "Rehan", "Aamir", "Hafeez"];
// let current_users_lower: string[] = current_users.map((user) =>
//   user.toLowerCase()
// );
// for (let new_user of new_users) {
//   if (current_users_lower.includes(new_user.toLowerCase())) {
//     console.log(`Sorry ${new_user}, that name is taken`);
//   } else {
//     console.log(`Yes ${new_user}, is still in avaliable list`);
//   }
// }
// //Question 33
// //Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// // • Store the numbers 1 through 9 in a array.
// // • Loop through the array.
// // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers) {
//   if (number === 1) {
//     console.log(`${number}st`);
//   } else if (number === 2) {
//     console.log(`${number}nd`);
//   } else if (number === 3) {
//     console.log(`${number}rd`);
//   } else {
//     console.log(`${number}th`);
//   }
// }
//Question  34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza
let favorite_pizza = ["pepperoni", "chicken", "vegatable"];
for (let pizza of favorite_pizza) {
    console.log(pizza);
}
for (let pizza of favorite_pizza) {
    console.log(`I really like ${pizza} pizza!`);
}
console.log("I really love pizza");
export {};
//Question 35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animals : string[]= ["cat","dog","lion"]
// for(let animal of animals){
//     console .log(animal)
// }
// for(let animal of animals){
//     console.log(`A ${animal} has tail`)
// }console.log ("All of these are great pets! but i like lion more")
//Question 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
// function make_shirt(size: string, text: string): void {
//   console.log(`you order a ${size} shirt that says ${text}`);
// }
// make_shirt(`large`, `"I love typescript`);
// make_shirt("medium", `"I need a big shirt`);
// Question 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function makeShirt(
//   size: string = "large",
//   text: string = "I love typescript"
// ): void {
//   console.log(`you have order a ${size}, shirt that says ${text}`);
// }
// makeShirt();
// makeShirt(`medium`);
// //different message
// makeShirt(`small`,  `I need a big shirt to wear`)
//Question 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(
//   city: string ,
//   country: string = "Pakistan"
// ): void {
//   console.log(` ${city}, is in ${country}`);
// }
// describe_city("Karachi")
// describe_city("Hyderabad")
// describe_city("Dubi","UAE")
//Question 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned
// function city_country(city: string, country: string): void {
//   console.log(` ${city}, ${country}`);
// }
// city_country(`Lahore`, `Pakistan`);
// city_country(`New Delhi`, `India`);
// city_country(`London`, `United Kingdom`);
//Question 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album
// function make_album(
//   artist: string,
//   title: string
// ): { artist: string; title: string } {
//   const dictionaries = {
//     artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//     title: title.charAt(0).toUpperCase() + title.slice(1),
//   };
//   return dictionaries;
// }
// let album = make_album("ali", "light");
// console.log(album);
// album = make_album("bilal", "red wave");
// console.log(album);
// album = make_album("hamza", "seenbreez");
// console.log(album);
//QUESTION 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
// function show_magicians(magicians: string[]): void {
//   for (const magician of magicians) {
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }
// }
// const magician: string[] = ["lachman", "salam", "arif"];
// show_magicians(magician);
//Question 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
// function make_great(magicians: string[]): void {
//   for (let magician of magicians) {
//     console.log(magician + " " + "the great");
//   }
// }
// const magician2: string[] = ["Lachman", "Salam", "Arif"];
// make_great(magician2);
//Question 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
// function make_great(magicians: string[]): void {
//   for (let magician of magicians) {
//     console.log(magician)
//     console.log(magician + " " + "the great");
//   }
// }
// const magician2: string[] = ["Lachman", "Salam", "Arif"];
// make_great(magician2);
//QUESTION 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function sandwich(...items: string[]): void {
//   console.log("Sandwich Order:");
//   for (let i = 0; i < items.length; i++) {
//     console.log(` -${items[i]}`);
//   }
// }
// console.log("Enjoy your sandwich Abdul Rehman");
// sandwich("Capsicum", "Tamoto", "Chicken");
// sandwich("Breef", "Cheese");
// sandwich("Garlic chicken", "Moyo sauce");
//Question 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
// type car = {
//   manufacturer: string
//   model: string
//   [key: string]: any;
// }
// function createCar(
//   manufacturer: string,
//   model: string,
//   optional: Record<string, any>
// ): car {
//   return{
//     manufacturer,
//     model,
//     ...optional
//   };
// }
// const mycar: car = createCar("Toyota", "Corolla", {
//   color: "Black",
//   year: 2024,
// });
// console.log(mycar);
