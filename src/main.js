import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIReturn from './functions.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function () {
  let submits = 0;

  // This will display Card #2's data on Card 1 visually
  $("#getCardButton").click(function () {
    if (submits > 2)
    {
      submits === 0;
    }
    submits++;
    let promise2 = APIReturn.testAPI();
    promise2.then(function (response) {
      const body = JSON.parse(response);
      $(`.card-${submits}`).text(body[getRandomInt(56)].answer);
      // Lots of fun stuff behind-the-scenes here
      console.log(`submits is ${submits}`);
    }, function (error) {
      $('.output').text(`There was an error processing your request: ${error}`);
      console.log(error);
    });
  });

  // This is going to be the button to fetch Prompts
  $("#promptButton").click(function () {
    let promise = APIReturn.promptAPI();
    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.prompt-window-text').text(body.description);
      // console.log(body);
    }, function (error) {
      $('.output').text(`There was an error processing your request: ${error}`);
      console.log(error);
    });
  });

  // This is the function to submit the card to the database
  $("#submitButton").click(function () {
    // Old Code
    // let submits = 1;
    // if (submits < 4) {
    let promise = APIReturn.submitAPI();
    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.output').text("Success");
      // $(`.card-${submits}`).text(body.answer);
      $(`.output`).text(body.answer);
      console.log("test");
    }, function (error) {
      $('.output').text(`There was an error processing your request: ${error}`);
      console.log(error);
    });
    // submits++;
    // }
  });

  $("#cyclePlayer").click(function () {
    let answer = document.getElementById("answer").value;
    $("#playerId").text(answer);
  });

  window.addEventListener("click", function () {
    // Events to happen on any mouse click

    const clicked = event.target;
    const currentID = clicked.id || "No ID!";
    const coords = currentID.split("-");

    $(".output").text(`Chosen card is: ${coords[1]}`);
  });

});