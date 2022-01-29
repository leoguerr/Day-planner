//variable for moment 
var time = document.getElementById('currentDay');
//Variables for each hour 9am-5pm
var hour9 = document.getElementById('hour-9');
var hour10 = document.getElementById('hour-10');
var hour11 = document.getElementById('hour-11');
var hour12 = document.getElementById('hour-12');
var hour13 = document.getElementById('hour-13');
var hour14 = document.getElementById('hour-14');
var hour15 = document.getElementById('hour-15');
var hour16 = document.getElementById('hour-16');
var hour17 = document.getElementById('hour-17');

//Current time 
$("#currentDay").text(moment().format("LLL"));