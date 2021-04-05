
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIReturn from './apod.js';


$(document).ready(function(){

  $("#randomButton").click(function(){
    clearFields();
    const random = parseInt($("#randomAmount").val());
    let promise2 = ApodReturn.randomAPOD(random);
    promise2.then(function (response){
      if (random === 1){
        console.log("got to 1 branch");
        const body = JSON.parse(response);
        if (body[0].media_type === "video"){
          $('#resultVid').html(`<iframe width="840" height="630" src="${body[0].url}"></iframe>`);
          $("#containVid").show();
          $("#resultVid").show();
        } else{
          $('#resultImg').html(`<img src="${body[0].url}" alt="space image">`);
          $("#containImg").show();
          $("#resultImg").show();
        }
        $('#resultDate').text(`${body[0].date}`);
        $('#resultDesc').text(body[0].explanation);
      } else {
        console.log(random);
        console.log("got to multi branch");
        const body = JSON.parse(response);
        const urlArray = body.map(x => x.url);
        const typeArray = body.map(x => x.media_type);
        for (let index = 0; index < urlArray.length; index++){
          if (typeArray[index] === "video"){
            $('#resultVid').append(`<iframe width="210" height="157.5" src="${urlArray[index]}"></iframe>`);
            $("#containVid").show();
            $("#resultVid").show();
          } else {
            $('#resultImg').append(`<a href="${urlArray[index]}" target="_blank"><img src="${urlArray[index]}" alt="space image" class="images">`);
            $("#containImg").show();
            $("#resultImg").show();
            $("#resultDesc").show();
          }
        }
      }
    }, function (error) {
      $('#results').text(`There was an error processing your request: ${error}`);
    });
    $("#resultDesc").append(`<div class="align-center">Below are your ${random} random APODs</div>`);
    $(".moon").show()
    $("#resultDesc").show();
  });
});