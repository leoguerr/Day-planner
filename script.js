//Current time to display at #currentDay
$("#currentDay").text(moment().format("LLL"));

//function to set background of entry based on moment.js
function updateTime() {
    //selecting each "time-block" using jQuery
    $(".time-block").each(function() {
    //ParseInt to replace hour- for each "id" in block
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    //fetching current hour from moment  
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

//Local storage to save entries 

