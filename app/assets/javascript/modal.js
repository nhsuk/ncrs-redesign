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

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal-content,.open_modal").length) {
    $("body").find(".modal").hide();
  }
});
