// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/25/2023
// This file contains the JS functions for index.html

"use strict";

// This function allows for a specific output when the user input text field is left empty
function isEmpty(str) {
  return !str || 0 === str.length;
}

function InfoGiven() {
  
  // Setting constants: children are a maximum of 5, elderly people are a minimum of 95 and students are between 12 & 21
  const CHILD_FREE = 5;
  const ELDERLY_FREE = 95;
  const STUDENT_MINIMUM = 12;
  const STUDENT_MAXIMUM = 21;

  //  Define cost that will bes displayed as result later on
  let cost = "";

  // Get the user's age and the day of the week from input form
  let userAge = parseInt(document.getElementById("user-age").value);
  let day = document.getElementById("day").value;

  // If age is less than 0, display that they must enter a valid age
  if (userAge < 0) {
    cost = "Please enter a valid age.";
  }
  
  // If the user does not enter their age, display that they must enter their age
  else if (isEmpty(userAge)) {
    cost = "Please enter your age.";
  }

  // Otherwise, if the user does not enter the day of the week, display that they must do so
  else if (day == "Day of week") {
    cost = "Please enter a day of the week.";
  }
  
  // Otherwise, if the user is under 5 OR over 95 years old, display that they get in for free
  else if ((userAge < CHILD_FREE) || (userAge > ELDERLY_FREE)) {
    cost = "You can visit the museum for free!";
  }

  // Otherwise, if the user is between 12 and 21 years old, OR if it is Tuesday or Thursday, display that they get a discount
  else if (((userAge >= STUDENT_MINIMUM) && (userAge <= STUDENT_MAXIMUM)) || ((day == "Thursday") || (day == "Tuesday"))) {
    cost = "You get a student discount.";
  }

  // Else, display that they do not get a discount
  else {
    cost = "You are not eligible for a discount and must pay the full price.";
  }

  // Display the results to the user in the "results" div
  document.getElementById("results").innerHTML = cost;
}