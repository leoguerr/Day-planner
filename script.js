//Current time to display at #currentDay
$("#currentDay").text(moment().format("LLL"));

//function to set background of entry based on moment.js
function updateTime() {
    //selecting each "time-block" using jQuery
    $(".time-block").each(function() {
    //ParseInt to replace hour- for each "id" in block
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    //fetching current hour from moment to Parse 
      var currentHour = parseInt(moment().format("Hour"));
    //removing class when needed
      $(this).removeClass("past present future");
    //if else statement to change class based on currentHour
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  }
//calling function 
updateTime();

//jquery to listen to click
$(".saveBtn").on("click", toSave);
//jquery to attach each time-block
$(".time-block").each(function() {
    var blockId = $(this).attr("id");
//jquery for textarea text with moment js 
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYY") + blockId));
  });
//
function toSave(event) {
    // this jquery object from parent 
    var hourId = $(this).parent().attr("id");
    // setItem method with moment js 
    localStorage.setItem(moment().format("DDDYYY") + hourId, $("#" + hourId + " textarea").val());
  };