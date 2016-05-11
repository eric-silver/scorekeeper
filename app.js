$(document).ready(function() {

var score = 0;

  // Increment points variable by 5
  $(document).on("click", "#increase-5", function () {
    if (score + 5 >= 0) {
      score = score + 5;

      $("#score").html(score);
    }
  });

  //Decrement points by 5
  $(document).on("click", "#decrease-5", function () {
    if (score - 5 >= 0) {
      score = score -  5;

      $("#score").html(score);
    }
  });

  //Store new custom value in points
  $(document).on("click", "#submit-custom-score", function () {
    var scoreEntry = parseInt($("#custom-score").val());

    if (scoreEntry >= 0) {
      score = scoreEntry;

      $("#score").html(score);
    }
  });

});
