$(".open_modal").click(function() {
  $('#myModal').show();
});

$(".close").click(function() {
  $('.modal').hide();
  $('input:checkbox').removeAttr('checked');
});

$(".close-btn").click(function() {
  $('.modal').hide();
});

$(".emergency-btn").click(function() {
  $('#myModal').hide();
  $('#myModalEmergency').show();
});

$('#submit-ptv').click(function(e) {
  if ($('#more-detail').val() < 4 || $('#more-detail').val() > 50) {
    $('#ptv-char-length-error').removeClass('hidden');
    $('#ptv-char-forbidden-error').removeClass('hidden');
    $('#explanation-form-group').addClass('nhsuk-form-group--error');
    e.preventDefault();
  }
});


$("#select-ra-flag-btn").click(function(){
  $("#raModal").show();
})

$("#add-ra-flag-btn").click(function(){
  $("#raModal").hide();
})

$(".cancel-ra-btn-link").click(function(){
  $("#raModal").hide();
  $('input:checkbox').removeAttr('checked');
})

var val;
$(":checkbox").change(function(){
  $("#raModal").fadeIn(400);
  var val = this.checked ? this.value : '';
});

/* CLOSE MODALS BY CLICKING OUTSIDE */

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal-content,.open_modal,.nhsuk-checkboxes__item").length) {
    $('input[name$="comms-support"]').removeAttr('checked');
    $('input[name$="comms-professional"]').removeAttr('checked');
    $("body").find(".modal").hide();
  }
});
