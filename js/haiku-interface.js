import { Haiku } from './../js/haiku.js';


$(document).ready(function() {
  $("#haikuForm").submit(function(event){
    event.preventDefault();

    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();
    debugger;
    let readHaiku = new Haiku(lineOne, lineTwo, lineThree);
    readHaiku.readingHaiku();
    $("#result").append(readHaiku);
  });
});
