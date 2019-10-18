$(document).ready(function() {
  $("input[name$='consent']").click(function() {
    var test = $(this).val();
    $(".nhsuk-radios__conditional").addClass("nhsuk-radios__conditional--hidden");
    $("#" + test).removeClass("nhsuk-radios__conditional--hidden");
  });

  $("input[name$='impairment']").change(function() {
    var test = $(this).val();

      $("#" + test).toggleClass("nhsuk-checkboxes__conditional--hidden");

  });

});
