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

  $('#prefer-not-to-say-checkbox').change(function() {
    // "this" is current checkbox
    $(':checkbox').not(this).prop('disabled', this.checked);
    $(':checkbox').not(this).prop('checked', false);
    if (this.checked) {
      $(".nhsuk-checkboxes__conditional").addClass("nhsuk-checkboxes__conditional--hidden");
    }
  });



});
