/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

const hasPotion = true;
const hasCompass = true;

console.log("A new day has dawned. It is time to complete your journey.");

const choice2 = readline.question("Do you drink a potion from your bag? [Yes] or [No]");

if (choice2 === "Yes" && hasPotion) {
  console.log("The potion teleports you to a bustling market square.");
} else if (choice2 === "Yes" && !hasPotion) {
  console.log("Looks like you forgot to pack your potion before leaving.");
} else if (choice2 === "No" || hasCompass) {
  console.log("You use your Compass to head towards the west; a direction you know leads to a village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

const hasCoin = false;
const theivery = false;

console.log("The market square of the village is surrounded by shops while the streets are filled with market stalls.");

const choice3 = readline.question("Do you shop the storefronts or stalls? [storefront] or [stalls]");

if (choice3 === "storefront" && hasCoin) {
  console.log("You head into the nearest storefront to peruse their wares. You find a neat shiny rock and decide to purchase it for 1 copper.");
} else if (choice3 === "Yes" && !hasCoin) {
  console.log("You realize you left your purse at home, but window shopping is fun too");
} else if (choice3 === "stalls" || theivery) {
  console.log("You realise you left your purse at home but desire a snack. You snatch an apple from a nearby fruit peddler");
} else {
  console.log("You realise you left your purse at home but desire a snack. You snatch an apple from a nearby fruit peddler; however a constable sees you do this. You are chased out of the village with threats of violence if you return.");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/