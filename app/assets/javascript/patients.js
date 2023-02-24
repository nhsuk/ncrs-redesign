/* Save patient details to session storage when clicking a search result*/
$(".nhsuk-promo").click(function () {
  var patientName = $(this).find(".search-results-name").text();
  var patientAddress = $(this).find(".search-results-address").text();
  var patientNhsNo = $(this).find(".search-results-nhs-no").text();
  var patientDob = $(this).find(".search-results-dob").text();
  var patientGender = $(this).find(".search-results-gender").text();
  var patientPostcode = $(this).find(".search-results-postcode").text();

  sessionStorage.setItem("patientName", patientName);
  sessionStorage.setItem("patientAddress", patientAddress);
  sessionStorage.setItem("patientNhsNo", patientNhsNo);
  sessionStorage.setItem("patientDob", patientDob);
  sessionStorage.setItem("patientGender", patientGender);
  sessionStorage.setItem("patientPostcode", patientPostcode);
});

$(".patient-search-result").click(function () {
  var patientName = $(this).find(".name-results-td").text();
  var patientAddress = $(this).find(".address-results-td").text();
  var patientNhsNo = $(this).find(".nhs-no-results-td").text();
  var patientDob = $(this).find(".dob-results-td").text();
  var patientGender = $(this).find(".gender-results-td").text();
  var patientPostcode = $(this).find(".postcode-results-td").text();
  var patientPob = $(this).find(".patient-pob-td").text();

  sessionStorage.setItem("patientName", patientName);
  sessionStorage.setItem("patientAddress", patientAddress);
  sessionStorage.setItem("patientNhsNo", patientNhsNo);
  sessionStorage.setItem("patientDob", patientDob);
  sessionStorage.setItem("patientGender", patientGender);
  sessionStorage.setItem("patientPostcode", patientPostcode);
  sessionStorage.setItem("patientPob", patientPob);

  window.location.href = "patient-overview";
});

$("#confirm-name-changes-btn").click(function () {
  var patientName = "Dr William TELL";
  sessionStorage.setItem("patientName", patientName);
});

$("#confirm-address-changes-btn").click(function () {
  var patientAddress =
    "1 Henley Street, Stratford-upon-Avon, Warwickshire, CV37 6QW";
  sessionStorage.setItem("patientAddress", patientAddress);
});

/* Retrieve patient details to session storage when document is ready*/
var patientName = sessionStorage.getItem("patientName");
var patientAddress = sessionStorage.getItem("patientAddress");
var patientNhsNo = sessionStorage.getItem("patientNhsNo");
var patientDob = sessionStorage.getItem("patientDob");
var patientGender = sessionStorage.getItem("patientGender");
var patientPostcode = sessionStorage.getItem("patientPostcode");
var patientAge = sessionStorage.getItem("patientAge");
var patientAddressWithPostcode = patientAddress;

var cpisAltName;

if (
  window.location.href.indexOf("cpis") > -1 ||
  window.location.href.indexOf("fgm") > -1
) {
  cpisAltName = localStorage.altName;
} else {
  cpisAltName = "";
}

var parsedDob = moment(patientDob, "DD-MMM-YYYY").format("DD-MM-YYYY");
var patientAge = moment(new Date()).diff(
  moment(parsedDob, "DD-MM-YYYY"),
  "years",
  false
);

if (cpisAltName == "Amelia MILLER") {
  $(".patient-banner-name, .card-content-name").text(cpisAltName);
  $(".patient-banner-dob, .card-content-detail-dob").text("16-Dec-2003");
  $(".patient-banner-nhs-no, .card-content-detail-nhs-no").text("123 456 7890");
  $(".patient-banner-address").text(
    "1 Town Street, Leeds, West Yorkshire, LS8 2CD"
  );
  $(".patient-banner-gender, .card-content-detail-gender").text("Female");
  $(".patient-banner-age").text("16 years old");
  $(".card-content-detail-pob").text("Leeds");
  $(".card-content-detail-address").html(
    "1 Town Street, Leeds, West Yorkshire, LS8 2CD"
  );
  $(".name-dob-floater").html(cpisAltName + " | 16-Dec-2003");
  $(".mobile-nav-patient-details").html(cpisAltName + " <br/> 16-Dec-2003");
} else if (!patientName) {
  $(".patient-banner-name, .card-content-name").text("Mr William SHAKESPEARE");
  $(".patient-banner-dob, .card-content-detail-dob").text("30-Jan-2018");
  $(".patient-banner-nhs-no, .card-content-detail-nhs-no").text("123 456 7890");
  if (!patientAddress) {
    $(".patient-banner-address").text(
      "1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD"
    );
    $(".card-content-detail-address").html(
      "1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD"
    );
  } else {
    $(".patient-banner-address").text(patientAddress);
    $(".card-content-detail-address").html(patientAddress);
  }
  $(".patient-banner-gender, .card-content-detail-gender").text("Male");
  $(".patient-banner-age").text("4 years old");
  $(".card-content-detail-pob").text("Stratford-upon-Avon");
  $(".name-dob-floater").html("Mr William SHAKESPEARE | 30-Jan-2018");
  $(".mobile-nav-patient-details").html(
    "Mr William SHAKESPEARE <br/> Date of birth: 30-Jan-2018"
  );
} else if (patientName == "Dr William TELL") {
  $(".patient-banner-name, .card-content-name").text(patientName);
  $(".patient-banner-dob, .card-content-detail-dob").text("30-Jan-2018");
  $(".patient-banner-nhs-no, .card-content-detail-nhs-no").text("123 456 7890");
  if (!patientAddress) {
    $(".patient-banner-address").text(
      "1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD"
    );
    $(".card-content-detail-address").html(
      "1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD"
    );
  } else {
    $(".patient-banner-address").text(patientAddress);
    $(".card-content-detail-address").html(patientAddress);
  }
  $(".patient-banner-gender, .card-content-detail-gender").text("Male");
  $(".patient-banner-age").text("4 years old");
  $(".card-content-detail-pob").text("Stratford-upon-Avon");
  $(".name-dob-floater").html("Dr William TELL | 30-Jan-2018");
  $(".mobile-nav-patient-details").html(
    "Dr William TELL <br/> Date of birth: 30-Jan-2018"
  );
} else {
  $(".patient-banner-name, .card-content-name").text(patientName);
  $(".patient-banner-dob, .card-content-detail-dob").text(patientDob);
  $(".patient-banner-nhs-no, .card-content-detail-nhs-no").text(patientNhsNo);
  $(".patient-banner-address").text(patientAddressWithPostcode);
  $(".patient-banner-gender, .card-content-detail-gender").text(patientGender);
  $(".patient-banner-age").text(patientAge + " years old");
  $(".card-content-detail-pob").text(sessionStorage.getItem("patientPob"));
  $(".card-content-detail-address").html(
    patientAddressWithPostcode.replace(/\,/g, "<br/>")
  );
  $(".name-dob-floater").html(patientName + " | " + patientDob);
  $(".mobile-nav-patient-details").html(patientName + " <br/> " + patientDob);
}

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
