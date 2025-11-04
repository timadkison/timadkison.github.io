
"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Tim Adkison
   Date:   11/2/2025

*/
showClock();
setInterval(showClock, 1000);


function showClock()
{
//var thisDay = new Date("May 19, 2021 09:31:27");
var thisDay = new Date();
var localDate = thisDay.toLocaleDateString();
var localTime = thisDay.toLocaleTimeString();
document.getElementById("currentTime").innerHTML = 
        "<span>" + localDate + "</span><span>" + localTime + "</span>";
var j4Date = nextJuly4(thisDay);
j4Date.setHours(21);
    j4Date.setMinutes(0);
    j4Date.setSeconds(0);
    j4Date.setMilliseconds(0);
    // Calculate the difference from "today" in milliseconds
    var msUntil = j4Date.getTime() - thisDay.getTime();
// 1. Calculate Days
    var msInDay = 1000 * 60 * 60 * 24;
    var days = Math.floor(msUntil / msInDay);
    msUntil = msUntil % msInDay;
// 2. Calculate Hours
    var msInHr = 1000 * 60 * 60;
    var hrs = Math.floor(msUntil / msInHr);
    msUntil = msUntil % msInHr;
// 3. Calculate Minutes
var msInMin = 1000 * 60;
    var mins = Math.floor(msUntil / msInMin);
    msUntil = msUntil % msInMin;
// 4. Calculate Seconds
var secs = Math.floor(msUntil / 1000);
document.getElementById("dLeft").textContent = days;
    document.getElementById("hLeft").textContent = hrs;
    document.getElementById("mLeft").textContent = mins;
    document.getElementById("sLeft").textContent = secs;

}
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
