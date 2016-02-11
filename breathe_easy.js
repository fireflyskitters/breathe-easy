$(document).ready(function() {  
  var animate = false;

   
$("button").click(function() {
  if ($(this).text() !== "Stop") {
    animate = true;    $("button").addClass("hidden"); $("#stop").removeClass("hidden");
    $("#time").removeClass("hidden");
    $("#breathing").removeClass("hidden");
  }
  else {
animate = false;
    count = 0;
  }
});
  $("#sweet_dreams").click(function() {
    countDown([3, 3], ["inhale", "exhale"]);
  });
  
  $("#coffee").click(function() {
    //$("#time").addClass("hidden");
    countDown([3, 3, 3, 3], ["close left nostril, inhale", "close right nostril, exhale", "close right nostril, inhale", "close left nostril, exhale"]);
  });
  
  $("#sunshine").click(function() {
    $("#time").addClass("hidden");
    countDown([0, 0], ["inhale", "exhale"]);
  });
  
  $("#chill_pill").click(function() {
    countDown([3, 6, 7], ["inhale", "hold", "exhale"]);
  });
 
var count = 0;  
function countDown(num, words) {
  var current = num[count];
 
  var i = setInterval(function() {
     if (!animate) {      
       stop(i);
     } else {    $("#time").html(current);
  $("#breathing").html(words[count]);
    if (current > 0)
      current--;
    else {
      if (count < num.length-1) 
       count++;
      else
        count = 0;
      current = num[count];
    }
            }
  }, 1000);
}
  
  function stop(i) {
     $("button").removeClass("hidden");
    $("#stop").addClass("hidden");
                    $("#time").html("");
    $("#breathing").html("");
    clearInterval(i);
  }
});

