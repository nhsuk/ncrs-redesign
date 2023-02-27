/* Save patient details to session storage when clicking a search result*/
$(".nhsuk-promo").click(function () {
  var patientNhsNo = $(this).find(".search-results-nhs-no").text();
  window.location.href = `patient-overview?nhs-number=${patientNhsNo.replace(
    /\s/g,
    ""
  )}`;
});

$(".patient-search-result").click(function () {
  var patientNhsNo = $(this).find(".nhs-no-results-td").text();
  window.location.href = `patient-overview?nhs-number=${patientNhsNo.replace(/\s/g, '')}`;
});

$("#confirm-name-changes-btn").click(function () {
  var patientName = "Dr William TELL";
  // TODO
});

$("#confirm-address-changes-btn").click(function () {
  var patientAddress =
    "1 Henley Street, Stratford-upon-Avon, Warwickshire, CV37 6QW";
  // TODO
});

$(".add-tel-number-btn").click(function () {
  $(".tel-number-section").show();
  $(".add-tel-number-btn").hide();
});

$("#cancel-adding-tel-number").click(function () {
  $(".tel-number-section").hide();
  $(".add-tel-number-btn").show();
});

$("#add-preferred-name-btn").click(function () {
  $(".preferred-name-section").show();
  $("#add-preferred-name-btn").hide();
  $("#cancel-preferred-name-btn").show();
});

$("#cancel-preferred-name-btn").click(function () {
  $(".preferred-name-section").hide();
  $("#add-preferred-name-btn").show();
  $("#cancel-preferred-name-btn").hide();
});

$("#remove-bachelor-name-btn").click(function () {
  $(".bachelor-name-section").hide();
  $("#add-bachelor-name-btn").show();
  $(".bachelor-name-support-text").show();
  $("#remove-bachelor-name-btn").hide();
});

$("#add-bachelor-name-btn").click(function () {
  $(".bachelor-name-section-hidden").show();
  $("#add-bachelor-name-btn").hide();
});

$("#cancel-adding-bachelor-name").click(function () {
  $(".bachelor-name-section-hidden").hide();
  $("#add-bachelor-name-btn").show();
});

$(".remove-name-update-btn").click(function () {
  $(this).parentsUntil(".review-updated-section").hide();
});

/* DECEASED PATIENT STYLES */
$(document).ready(function () {
  if (window.location.toString().includes("deceased")) {
    $(".patient-banner").addClass("patient-banner-deceased");
    $(".patient-banner-name").append(" (DECEASED)");
  }
});
