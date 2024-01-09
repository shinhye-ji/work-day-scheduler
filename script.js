// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDate = dayjs();
$('#currentDay').text(currentDate.format('MMM DD, YYYY'));
const currentTime = dayjs();
$('#currentTime').text(currentTime.format('hh:mm a'));

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


$(".saveBtn").on("click", function() {
  const timeBlockId = $(this).parent(".time-block").attr("id");
  const userToDo = $(this).siblings(".description").val();

  localStorage.setItem(timeBlockId, userToDo);

});

timeBlock.each(function() {
  const timeBlockId = $(this).attr("id");
  const storedToDo = localStorage.getItem(timeBlockId);

  if (storedToDo) {
    $(this).find(".description").val(storedToDo);
  }
  
});

