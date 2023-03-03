// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

  // Show current date and time on page that updates each second
  function showDateTime() {
    var currentDate = new Date();
    var dateTime = currentDate.toLocaleString();
    $("#currentDay").html(dateTime);
}

  setInterval(showDateTime, 1000);

// Get saved data and print to correct time-Block
  $(".time-block").each(function() {
    var id = $(this).attr("id");
    var text = localStorage.getItem(id);
    if (text !== null) {
      $(this).find(".description").val(text);
    }
  });

  // Allow save of entered value into local storage
  $(".saveBtn").on("click", function() {
      var text = $(this).siblings(".description").val();
      var id = $(this).parent().attr("id");
      localStorage.setItem(id, text);
  });

  var currentHour = dayjs().hour();

  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id"));
    
    // apply past class if the block hour is less than the current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    }
    // apply present class if the block hour is equal to the current hour
    else if (blockHour === currentHour) {
      $(this).addClass("present");
    }
    // apply future class if the block hour is greater than the current hour
    else {
      $(this).addClass("future");
    }
  });

});
