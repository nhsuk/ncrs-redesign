$( ".open_modal" ).click(function() {
  $('#myModal').show();
});

$( ".close" ).click(function() {
  $('.modal').hide();
});

$( ".close-btn" ).click(function() {
  $('.modal').hide();
});

$( ".emergency-btn" ).click(function() {
  $('#myModal').hide();
  $('#myModalEmergency').show();

});

$('#submit-ptv').click(function(e){
   if($('#more-detail').val() < 4 || $('#more-detail').val() > 50){
      $('#ptv-char-length-error').removeClass('hidden');
      $('#ptv-char-forbidden-error').removeClass('hidden');
      $('#explanation-form-group').addClass('nhsuk-form-group--error');
      e.preventDefault();
   }
});


$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal-content,.open_modal").length) {
    $("body").find(".modal").hide();
  }
});
