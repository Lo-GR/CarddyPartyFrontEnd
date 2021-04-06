
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIReturn from './apod.js';


$(document).ready(function () {

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
});