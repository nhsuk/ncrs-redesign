/* ---------- REASONABLE ADJUSTMENTS ---------- */

$(function() {
  var numFlags = $(".added-ra-flag").length;
  $('.adjustments-floater').html("Adjustments added: " + numFlags);

  $('#select-ra-flag-btn').click(function(e) {
    var flagVal = $("#ra-flags").val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    $(".modal-flag-category").text(catVal);
    $(".modal-flag-desc").text(flagVal);
    $("#ra-flags").val("");
  });

  var adjustmentsList = [];

  $('#add-ra-flag-btn').click(function(e) {
    var flagVal = $(".modal-flag-desc").text();
    var catVal = $(".modal-flag-category").text();
    var infoVal = $("#ra-supporting-info").val();
    var numFlags = $(".added-ra-flag").length;
    if (infoVal == "") {
      var infoVal = "No supporting information added"
    } else {
      var infoVal = $("#ra-supporting-info").val();
    }
    if (flagVal != "" && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='ra-support-info'>" + infoVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
      var numFlags = $(".added-ra-flag").length;
    } else if (flagVal != "") {
      $('.no-adjustments-placeholder').hide();
      $(".added-adjustments-list").append("<div class='added-ra-flag'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='ra-support-info'>" + infoVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
    }
    $("#ra-supporting-info").val("");
    adjustmentsList.push(catVal + " | " + flagVal + " | " + infoVal);
    sessionStorage.setItem("adjustmentsList", JSON.stringify(adjustmentsList));
  });


  $(document).on('click', '.remove-flag-link', function() {
    var numFlags = $(".added-ra-flag").length;
    if (numFlags === 1) {
      $('.no-adjustments-placeholder').show();
      $(this).parent().parent().remove();
    } else {
      $(this).parent().parent().remove();
    }
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("Adjustments added: " + numFlags);
  });

  var numFlags = $(".added-ra-flag").length;

  $(":checkbox").change(function() {
    var flagVal = $(this).val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    var trimFlag = flagVal.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
    $(".modal-flag-category").text(catVal);
    $(".modal-flag-desc").text(flagVal);
  });

  $('#add-bespoke-flag-btn').click(function() {
    var flagVal = $("#bespoke-flags").val();
    var catVal = "Bespoke Adjustment";
    var numFlags = $(".added-ra-flag").length;
    if (flagVal != "" && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
      var numFlags = $(".added-ra-flag").length;
    } else if (flagVal != "") {
      $('.no-adjustments-placeholder').hide();
      $(".added-adjustments-list").append("<div class='added-ra-flag'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
    }
    $("#bespoke-flags").val('');
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("Adjustments added: " + numFlags);
  });

});

$(function() {
  var adjustmentsList = JSON.parse(sessionStorage.getItem("adjustmentsList"));
  var arrayLength = adjustmentsList.length;
  if (arrayLength >= 1) {
    $(".no-adjustments-added-text").hide();
  }
  for (i = 0; i < arrayLength; i++) {
    var adjustmentArray = adjustmentsList[i].split('|');
    $('<div class="scra-card-content"><div class="nhsuk-grid-row"><div class="nhsuk-grid-column-three-quarters nhsuk-u-three-quarters-tablet"><div class="card-content-section"><h4 class="nhsuk-heading-s"><span class="nhsuk-caption-s nhsuk-caption--bottom">' + adjustmentArray[0] + '</span><span role="text">' + adjustmentArray[1] + '</span></h4><h5 class="nhsuk-heading-xs"><span role="text">Supporting information:</span><span class="nhsuk-caption-m nhsuk-caption--bottom">' + adjustmentArray[2] + '</span></h5><p class="nhsuk-body-s">Added: 26-Apr-2019 by James Smith (GO) at Leeds Teaching Hospitals NHS Trust</p></div></div><div class="nhsuk-grid-column-one-quarter nhsuk-u-one-quarter-tablet"><a href="ra-step-3" class="nhsuk-button nhsuk-button--blue ra-edit">Edit</a><a href="ra-step-3" class="nhsuk-button nhsuk-button--red ra-delete">Delete</a></div></div></div>').appendTo($("#added-adjustments-summary"));
  }
});
