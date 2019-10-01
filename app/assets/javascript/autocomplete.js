$(function() {
  var availableTags = [
    "Lloyds Pharmacy (FK994), Broadgate Lane, LS18 4SE",
    "Mitchell’s Chemist (FXR93), 88 New Road Side, LS18 4QB",
    "Well Horsforth (FY647), 74 Town Street, LS18 4AP"
  ];
  $("#sites").autocomplete({
    source: availableTags
  });

});

$("#confirm-locum-site").submit(function(e) {

  if (!$('input[name=locum-site]').val().length > 0) {
    $('#site-error-error').show();
    $('#locum-site').addClass('nhsuk-input--error');
    $('#nhsuk-form-group-site').addClass('nhsuk-form-group--error');
    $('.nhsuk-error-summary__list').html('<li><a href="#nhsuk-form-group-site">You must choose a locum site</a></li>');
  }

  if (!$('input[name=locum-site]').val().length > 0) {
    $('#site-error-summary').show();
    e.preventDefault();
  } else {
    return true;
  }

});
