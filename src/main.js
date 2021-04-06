
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIReturn from './apod.js';


$(document).ready(function () {

  // This is the Submit button currently
  $("#randomButton").click(function () {
    let promise2 = APIReturn.testAPI();
    promise2.then(function (response) {
      const body = JSON.parse(response);
      $('.output').append(body[1].answer);
      console.log(body);
    }, function (error) {
      $('.output').text(`There was an error processing your request: ${error}`);
      console.log(error);
    });
  });

  // This is going to be the button to fetch Prompts
  $("#promptButton").click(function () {
    let promise = APIReturn.promptAPI(0);
    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.prompt-window-text').text(body.description);
      console.log(body);
    }, function (error) {
      $('.prompt-window-text').text(`There was an error processing your request: ${error}`);
      console.log(error);
    });
  });

});