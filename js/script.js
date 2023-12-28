// JavaScript code 




// jQurey Code
$(document).ready(function () {

  // Countdown
  var seconds = new Date().getTime() / 1000;

  var endTime = 120000;
  

  $('.countdown').final_countdown({
    start: '1362139200',
end: '1388461320',
now: '1387461319',
  });
});
