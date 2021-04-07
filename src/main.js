import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIReturn from './functions.js';

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

$(document).ready(function () {
  // let submits = 0;
  let cardNumber = 1;

  // This will display Card #2's data on Card 1 visually
  // $("#getCardButton").click(function () {
  //   if (submits > 2) {
  //     submits === 0;
  //   }
  //   submits++;
  //   let promise2 = APIReturn.testAPI();
  //   promise2.then(function (response) {
  //     const body = JSON.parse(response);
  //     $(`.card-${submits}`).text(body[getRandomInt(56)].answer);
  //     // Lots of fun stuff behind-the-scenes here
  //     console.log(`submits is ${submits}`);
  //   }, function (error) {
  //     $('.output').text(`There was an error processing your request: ${error}`);
  //     console.log(error);
  //   });
  // });

  // This is going to be the button to fetch Prompts
  // $("#promptButton").click(function () {
  //   let promise = APIReturn.promptAPI();
  //   promise.then(function (response) {
  //     const body = JSON.parse(response);
  //     $('.prompt-window-text').text(body.description);
  //     // console.log(body);
  //   }, function (error) {
  //     $('.output').text(`There was an error processing your request: ${error}`);
  //     console.log(error);
  //   });
  // });

  // This is the function to submit the card to the database
  $("#submitButton").click(function () {
    let promise = APIReturn.submitAPI();
    promise.then(function (response) {
      const body = JSON.parse(response);
      $(`.output`).text(body.answer);
      console.log("test");
    }, function (error) {
      $('.output').text(`There was an error processing your request: ${error}`);
      console.log(error);
    });

    // DOM elements only
    // Take the given answer from the text box and pass it to the card on screen
    let answer = document.getElementById("answer").value;
    $(`#card-${cardNumber}`).text(answer);
    $(`#card-style-${cardNumber}`).show(500);
    // console.log(cardNumber);
    cardNumber++;
    $("#answer").val("");
    
    // Hide the submit button when
    if (cardNumber > 3) {
      // $("#submitButton").hide();
      $("#submitButton").prop("disabled",true);

    }
  });

  $("#cyclePlayer").click(function () {
    let answer = document.getElementById("answer").value;
    $("#playerId").text(answer);
  });

  // Events to happen on any mouse click
  // window.addEventListener("click", function () {

  //   const clicked = event.target;
  //   const currentID = clicked.id || "No ID!";
  //   const coords = currentID.split("-");

  //   $(".output").text(`Chosen card is: ${coords[1]}`);
  // });
  // End mouse listener
});