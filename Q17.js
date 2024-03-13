"use strict";
//make a guest list array;
let guestList = ["Sara", "Sana", "Sadaf", "Samreen", "Sanober"];
// make a varaible for those guest who cant come;
let wontCome = guestList[0];
// print the name of the guest who cant com;
console.log(wontCome, "cant come");
// Add and Remove values  from guestList array;
guestList.splice(0, 1, "Maham");
console.log("Good News! We have found a bigger table for dinner");
//Adding a new guest at a starting index of an array;
guestList.unshift("Afia");
// Adding a new guest at the end of an array;
guestList.push("Sadia");
// get the middle value of the guest list
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at the middle of an array;
guestList.splice(middleIndex, 0, "Roman");
// print message to updated list
console.log("updated guest list of an array");
//Sending an invitition to our guest one by one with their name;
guestList.forEach(oneguest => console.log(`Salam,${oneguest},I would like to invite you at dinner`));
// inform guest only two person can come
console.log("Unfortunately,the new table wont arrive so only two people can do dinner with me");
// Remove guest from an array one by one by using pop
// using whileloop to remove guest from an array until two guest remaining
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}, I cant invite you at dinner`);
}
// inviting remaining two guest 
console.log("Inviting remaining two guest");
guestList.forEach(lasttwoguest => console.log(`Salam luckily ${lasttwoguest}, you are still invited to dinner`));
// remove remaining two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
