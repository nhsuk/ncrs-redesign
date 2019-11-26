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

$("#ra-step-1-form").submit(function(e) {
  if ($('#consent-best-interest').is(':checked') && !$('#bi-consent').val().length > 0) {
    $('.nhsuk-error-summary__list').empty();
    $('.nhsuk-error-summary').show();
    $('#best-interest-consent-error').show();
    $('.nhsuk-error-summary__list').append('<li><a href="#best-interest-consent-error">You must enter more details about a best interest consent decision</a></li>');
    $('#best-interest').css('border-left', '4px solid #d5281b');
    e.preventDefault();
  }

  if ($('#consent-other').is(':checked') && !$('#other-consent-input').val().length > 0) {
    $('.nhsuk-error-summary__list').empty();
    $('.nhsuk-error-summary').show();
    $('#other-consent-error').show();
    $('.nhsuk-error-summary__list').append('<li><a href="#other-consent-error">You must enter more details about a consent decision obtained by other methods</a></li>');
    $('#other-consent').css('border-left', '4px solid #d5281b');
    e.preventDefault();
  }

});
