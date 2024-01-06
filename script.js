// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDate = dayjs();
$('#currentDay').text(currentDate.format('MMM DD, YYYY'));
const currentTime = dayjs();
$('#currentTime').text(currentTime.format('h:mm a'));

const currentHour = dayjs().format("HH");
console.log(currentHour);
console.log($(".row"));

const timeBlock = $('.row');
timeBlock.each(function(index){
  console.log(($(this).attr("id").replace("hour-", "")));
  
  if (currentHour == $(this).attr("id").replace("hour-", "")) {
    $(this).addClass("present");
  }

  else if (currentHour < $(this).attr("id").replace("hour-", "")) {
    $(this).addClass("future");
  }
  
  else {
    $(this).addClass("past");
  }
})

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// tackle top to bottom of page like a list. 

// color code past present future, by utilizing current time. 

// when i click the save button, it will save to localStorage
// when page is loaded, saved text should render to correlating blocks

