/* Define dummy patients */

var patientsList = [
  ['9550972968', 'Elisha', 'Sapsed', '55 Troy Place', 'Sutton', 'X563TG', 'Female', '06-Sep-1968'],
  ['5974163354', 'Jordanna', 'Collop', '285 Chinook Trail', 'Bradford', 'E83JZ', 'Female', '27-Feb-2006'],
  ['5974163355', 'Justina', 'Collop', '285 Chinook Trail', 'Bradford', 'E83JZ', 'Female', '27-Feb-2006'],
  ['9015678065', 'Ranna', 'Enochsson', '6 Steensland Circle', 'Burnside', 'EB717QM', 'Female', '10-Mar-1967'],
  ['9762318315', 'Angelle', 'Peeke-Vout', '4473 Fair Oaks Alley', 'Preston', 'F348ZS', 'Female', '16-Dec-1998'],
  ['9453238023', 'Giacobo', 'Erni', '05584 Luster Point', 'Sheffield', 'S52NF', 'Male', '01-Sep-2004'],
  ['9397084291', 'Raquel', 'Twinbrow', '9451 Burning Wood Lane', 'Whitwell', 'N94AL', 'Female', '04-Apr-2008'],
  ['0768832756', 'Georgia', 'Lamba', '4560 Portage Trail', 'Linton', 'PM151DJ', 'Female', '20-Apr-1994'],
  ['5655050595', 'Jacynth', 'Petett', '71016 Kings Plaza', 'Belfast', 'M061CP', 'Female', '07-Oct-1956'],
  ['7472972134', 'Gamaliel', 'Potkins', '14 Utah Drive', 'Whitchurch', 'UE60LF', 'Male', '02-Oct-1944'],
  ['2063825688', 'Lizzie', 'Arnecke', '1 Bayside Circle', 'Linton', 'AY05XG', 'Female', '02-Jun-2013'],
]

/*$(document).ready(function() {
  sessionStorage.setItem("patientNhsSearch", false);
  sessionStorage.setItem("patientGenderSearch", false);
  sessionStorage.setItem("patientFirstNameSearch", false);
  sessionStorage.setItem("patientLastNameSearch", false);
  sessionStorage.setItem("patientDobDaySearch", false);
  sessionStorage.setItem("patientDobMonthSearch", false);
  sessionStorage.setItem("patientDobYearSearch", false);
  sessionStorage.setItem("date", false);
  sessionStorage.setItem("parsedDob", false);
  sessionStorage.setItem("formattedDob", false);
  sessionStorage.setItem("patientPostcodeSearch", false);
  sessionStorage.setItem("patientPostcodeSearchFormatted", false);
});*/


/* Capture search details */

/* NHS Number */

$("#nhs-number-search-button").submit(function(e) {
  sessionStorage.clear();
  var patientNhsSearch = $("#nhs-number-input").val();
  sessionStorage.setItem("patientNhsSearch", patientNhsSearch);

  if (!$('input[name=nhs-number]').val().length > 0) {
    $('#nhs-no-error-error').show();
    $('#nhs-number').addClass('nhsuk-input--error')
    $('#nhsuk-form-group-nhs-number').addClass('nhsuk-form-group--error')
    $('.nhsuk-error-summary__list').append('<li><a href="#nhsuk-form-group-last-name">You must enter an NHS number for the patient, like 123 456 7890</a></li>');
  }

  if (!$('input[name=nhs-number]').val().length > 0) {
    $('#nhsuk-nhs-no-error-summary').show()
    e.preventDefault();
  } else {
    return true;
  }

})

var patientNhsSearch = sessionStorage.getItem("patientNhsSearch");

for (var i in returnedPatientsList) {
  $('.search-results-container').append("<div class='nhsuk-grid-row nhsuk-promo-group search-result-item'><div class='nhsuk-grid-column-full nhsuk-promo-group__item'><div class='nhsuk-promo'><a class='nhsuk-promo__link-wrapper' href='patient-overview'><div class='nhsuk-promo__content'><h3 class='nhsuk-promo__heading search-results-name'>" + returnedPatientsList[i][1] + " " + returnedPatientsList[i][2] + "</h3><div class='nhsuk-grid-row'><div class='nhsuk-grid-column-full'><p class='nhsuk-promo__description search-results-description search-results-address'>" + returnedPatientsList[i][3] + ", " + returnedPatientsList[i][4] + "</p></div></div><div class='nhsuk-grid-row'><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>NHS Number: <span class='search-results-nhs-no'>" + returnedPatientsList[i][0] + "</span></p></div><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>Date of birth: <span class='search-results-dob'>" + returnedPatientsList[i][7] + "</span></p></div></div><div class='nhsuk-grid-row'><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>Gender: <span class='search-results-gender'>" + returnedPatientsList[i][6] + "</span></p></div><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>Postcode: <span class='search-results-postcode'>" + returnedPatientsList[i][5].replace(/^(.*)(\d)/, '$1 $2') + "</span></p></div></div></div></a></div></div></div>");
}

/* Convert date format */

function parseDate(s) {
  var months = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
  };
  var p = s.split('-');
  return new Date(p[2], months[p[1].toLowerCase()], p[0]);
}

/* Find searched details in patientsList*/

for (var i in patientsList) {
  if (patientsList[i][0] == patientNhsSearch) {
    var patientDetails = patientsList[i];
    var patientName = patientDetails[1] + " " + patientDetails[2];
    var patientAddress = patientDetails[3] + ", " + patientDetails[4] + ", " + patientDetails[5];
    var patientDob = patientDetails[7];
    var parsedDob = parseDate(patientDetails[7]);
    var currentDate = new Date();
    var diff = currentDate - parsedDob;
    var age = Math.floor(diff / 31536000000);
    sessionStorage.setItem("patientAge", age);
    var gender = patientDetails[6];

  } else {

  }
}


/* Patient Details */

$("#patient-details-search-button").submit(function(e) {
  sessionStorage.clear();
  var patientGenderSearch = $('input[name=gender]:checked', '#patient-details-search').val()
  var patientFirstNameSearch = $('#first-name').val();
  var patientLastNameSearch = $('#last-name').val();
  var patientDobDaySearch = $('#dob-day').val();
  var patientDobMonthSearch = ($('#dob-month').val() - 1);
  var patientDobYearSearch = $('#dob-year').val();
  var date = new Date(Date.UTC(patientDobYearSearch, patientDobMonthSearch, patientDobDaySearch));
  var dateOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  };
  var formattedDob = date.toLocaleDateString('en-GB', dateOptions).replace(/\s/g, '-');
  var patientPostcodeSearch = $('#postcode-input').val();
  var patientPostcodeSearchUpper = patientPostcodeSearch.toUpperCase();
  var patientPostcodeSearchFormatted = patientPostcodeSearchUpper.replace(/\s/g, '');
  sessionStorage.setItem("patientGenderSearch", patientGenderSearch);
  sessionStorage.setItem("patientFirstNameSearch", patientFirstNameSearch);
  sessionStorage.setItem("patientLastNameSearch", patientLastNameSearch);
  sessionStorage.setItem("patientDobDaySearch", patientDobDaySearch);
  sessionStorage.setItem("patientDobMonthSearch", patientDobMonthSearch);
  sessionStorage.setItem("patientDobYearSearch", patientDobYearSearch);
  sessionStorage.setItem("date", date);
  sessionStorage.setItem("formattedDob", formattedDob);
  sessionStorage.setItem("patientPostcodeSearch", patientPostcodeSearch);
  sessionStorage.setItem("patientPostcodeSearchFormatted", patientPostcodeSearchFormatted);

  if (!$('input[name=gender]').is(':checked')) {
    $('#gender-error-error').show();
    $('#nhsuk-form-group-gender').addClass('nhsuk-form-group--error')
    $('#error-summary-gender').show();
  }

  if (!$('input[name=last-name]').val()) {
    $('#last-name-error-error').show();
    $('#last-name').addClass('nhsuk-input--error')
    $('#nhsuk-form-group-last-name').addClass('nhsuk-form-group--error')
    $('#error-summary-last-name').show();
  }
  if (!$('input[name=dob-day]').val() || !$('input[name=dob-month]').val() || !$('input[name=dob-year]').val()) {
    $('#dob-error-error').show();
    $('.nhsuk-date-input__input').addClass('nhsuk-input--error')
    $('#nhsuk-form-group-dob').addClass('nhsuk-form-group--error')
    $('#error-summary-dob').show();
  }

  if (!$('input[name=gender]').is(':checked') || !$('#last-name').val() || !$('#dob-day').val() || !$('#dob-month').val() || !$('#dob-year').val()) {
    $('#nhsuk-patient-details-error-summary').show()
    e.preventDefault();
  } else {
    return true;
  }

})

/*Advanced Search */

$("#advanced-search-button").submit(function(e) {
  sessionStorage.clear();
  var patientGenderSearch = $('input[name=gender-advanced]:checked', '#advanced-details-search').val();
  sessionStorage.setItem("patientGenderSearch", patientGenderSearch);
  var patientFirstNameSearch = $('#first-name-advanced').val();
  sessionStorage.setItem("patientFirstNameSearch", patientFirstNameSearch);
  var patientLastNameSearch = $('#last-name-advanced').val();
  sessionStorage.setItem("patientLastNameSearch", patientLastNameSearch);
  var patientWidenSearch = $('input[name=widen-search]:checked', '#advanced-details-search').val();

  var patientPostcodeSearch = $('#postcode-input-advanced').val();
  var patientPostcodeSearchUpper = patientPostcodeSearch.toUpperCase();
  var patientPostcodeSearchFormatted = patientPostcodeSearchUpper.replace(/\s/g, '');
  sessionStorage.setItem("patientPostcodeSearchFormatted", patientPostcodeSearchFormatted);

  var patientDobDayFromSearch = $('#dob-day-from').val();
  var patientDobMonthFromSearch = $('#dob-month-from').val();
  var patientDobYearFromSearch = $('#dob-year-from').val();
  var dobFrom = new Date(Date.UTC(patientDobYearFromSearch, patientDobMonthFromSearch, patientDobDayFromSearch));
  var dobOptionsFrom = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  };
  var formattedDobFrom = dobFrom.toLocaleDateString('en-GB', dobOptionsFrom).replace(/\s/g, '-');
  sessionStorage.setItem("dobFrom", dobFrom);
  sessionStorage.setItem("formattedDobFrom", formattedDobFrom);

  var patientDobDayToSearch = $('#dob-day-to').val();
  var patientDobMonthToSearch = $('#dob-month-to').val();
  var patientDobYearToSearch = $('#dob-year-to').val();
  var dobTo = new Date(Date.UTC(patientDobYearToSearch, patientDobMonthToSearch, patientDobDayToSearch));
  var dodOptionsTo = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  };
  var formattedDobTo = dobTo.toLocaleDateString('en-GB', dodOptionsTo).replace(/\s/g, '-');
  sessionStorage.setItem("dobTo", dobTo);
  sessionStorage.setItem("formattedDobTo", formattedDobTo);

  var patientDodDayFromSearch = $('#dod-day-from').val();
  var patientDodMonthFromSearch = $('#dod-month-from').val();
  var patientDodYearFromSearch = $('#dod-year-from').val();
  var dodFrom = new Date(Date.UTC(patientDodYearFromSearch, patientDodMonthFromSearch, patientDodDayFromSearch));
  var dodOptionsFrom = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  };
  var formattedDodFrom = dodFrom.toLocaleDateString('en-GB', dodOptionsFrom).replace(/\s/g, '-');
  sessionStorage.setItem("formattedDodFrom", formattedDodFrom);

  var patientDodDayToSearch = $('#dod-day-to').val();
  var patientDodMonthToSearch = $('#dod-month-to').val();
  var patientDodYearToSearch = $('#dod-year-to').val();
  var dodTo = new Date(Date.UTC(patientDodYearToSearch, patientDodMonthToSearch, patientDodDayToSearch));
  var dodOptionsTo = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  };
  var formattedDodTo = dodTo.toLocaleDateString('en-GB', dodOptionsTo).replace(/\s/g, '-');
  sessionStorage.setItem("formattedDodTo", formattedDodTo);

  if (!$('input[name=gender-advanced]').is(':checked')) {
    $('#advanced-gender-error-error').show();
    $('#nhsuk-form-group-gender-advanced').addClass('nhsuk-form-group--error')
    $('#error-summary-advanced-gender').show();
  } else {
    return true;
  }

  if (!$('input[name=last-name-advanced]').val()) {
    $('#advanced-last-name-error-error').show();
    $('#last-name-advanced').addClass('nhsuk-input--error')
    $('#nhsuk-form-group-last-name-advanced').addClass('nhsuk-form-group--error')
    $('#error-summary-advanced-last-name').show();
  } else {
    return true;
  }
  if (!$('input[name=dob-day-from]').val() || !$('input[name=dob-month-from]').val() || !$('input[name=dob-year-from]').val() || !$('input[name=dob-day-to]').val() || !$('input[name=dob-month-to]').val() || !$('input[name=dob-year-to]').val()) {
    $('#dob-from-error-error').show();
    $('#dob-to-error-error').show();
    $('.nhsuk-dob-input__input').addClass('nhsuk-input--error')
    $('#nhsuk-form-group-dob-advanced').addClass('nhsuk-form-group--error')
    $('#error-summary-advanced-dob').show();
  } else {
    return true;
  }

  if (!$('input[name=gender-advanced]').is(':checked') || !$('#last-name-advanced').val() || !$('#dob-day-from').val() || !$('#dob-month-from').val() || !$('#dob-year-from').val() || !$('#dob-day-to').val() || !$('#dob-month-to').val() || !$('#dob-year-to').val()) {
    $('#nhsuk-advanced-error-summary').show()
    e.preventDefault();
  } else {
    return true;
  }

});

var patientGenderSearch = sessionStorage.getItem("patientGenderSearch");
var patientFirstNameSearch = sessionStorage.getItem("patientFirstNameSearch");
var patientLastNameSearch = sessionStorage.getItem("patientLastNameSearch");
var patientDobDaySearch = sessionStorage.getItem("patientDobDaySearch");
var patientDobMonthSearch = sessionStorage.getItem("patientDobMonthSearch");
var patientDobYearSearch = sessionStorage.getItem("patientDobYearSearch");
var patientDate = sessionStorage.getItem("date");
var patientParsedDob = sessionStorage.getItem("parsedDob");
var patientFormattedDob = sessionStorage.getItem("formattedDob");
var patientDobFrom = sessionStorage.getItem("dobFrom");
var patientFormattedDobFrom = sessionStorage.getItem("formattedDobFrom");
var patientDobTo = sessionStorage.getItem("dobTo");
var patientFormattedDobTo = sessionStorage.getItem("formattedDobTo");
var patientFormattedDodFrom = sessionStorage.getItem("formattedDodFrom");
var patientFormattedDodTo = sessionStorage.getItem("formattedDodTo");
var patientPostcodeSearch = sessionStorage.getItem("patientPostcodeSearch");
var patientPostcodeSearchFormatted = sessionStorage.getItem("patientPostcodeSearchFormatted");



/* Find patient in patientList */

var returnedPatientsList = [];

for (var i in patientsList) {
  /* NHS Number search */
  if ((patientNhsSearch == patientsList[i][0])) {
    var returnedPatients = (patientsList[i]);
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients)
  }
  /* Patient Details search */
  if ((patientFirstNameSearch == "") && (patientPostcodeSearchFormatted == "")) {
    if ((patientGenderSearch == patientsList[i][6]) && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7])) {
      var returnedPatients = (patientsList[i]);
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients)
    } else {

    }
  } else if (patientPostcodeSearchFormatted == "") {
    if ((patientGenderSearch == patientsList[i][6]) && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7]) && (patientFirstNameSearch == patientsList[i][1])) {
      var returnedPatients = (patientsList[i]);
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients)
    } else {

    }

  } else if (patientFirstNameSearch == "") {
    if ((patientGenderSearch == patientsList[i][6]) && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7]) && (patientPostcodeSearchFormatted == patientsList[i][5])) {
      var returnedPatients = (patientsList[i]);
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients)
    } else {

    }
  } else if ((patientGenderSearch == patientsList[i][6]) && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7]) && (patientPostcodeSearchFormatted == patientsList[i][5]) && (patientFirstNameSearch == patientsList[i][1])) {
    var returnedPatients = (patientsList[i]);
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients)
  } else {

  };

  console.log(patientFormattedDob);
  console.log(patientsList[i][7])
  /* Advanced Search details */

  /*if ((patientGenderSearch == patientsList[i][6]) && ((patientFirstNameSearch == '') || (patientFirstNameSearch !== ''  && patientFirstNameSearch == patientsList[i][1])) && ((patientPostcodeSearchFormatted == '') || (patientPostcodeSearchFormatted !== ''  && patientPostcodeSearchFormatted == patientsList[i][5])) && (patientLastNameSearch == patientsList[i][2]) && (parseDate(patientFormattedDobFrom) <= parseDate(patientsList[i][7])) && (parseDate(patientFormattedDobTo) >= parseDate(patientsList[i][7]))) {
    var returnedPatients = (patientsList[i]);
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients)

  } else {

  };*/

};

for (var i in returnedPatientsList) {
  $('.search-results-container').append("<div class='nhsuk-grid-row nhsuk-promo-group search-result-item'><div class='nhsuk-grid-column-full nhsuk-promo-group__item'><div class='nhsuk-promo'><a class='nhsuk-promo__link-wrapper' href='patient-overview'><div class='nhsuk-promo__content'><h3 class='nhsuk-promo__heading search-results-name'>" + returnedPatientsList[i][1] + " " + returnedPatientsList[i][2] + "</h3><div class='nhsuk-grid-row'><div class='nhsuk-grid-column-full'><p class='nhsuk-promo__description search-results-description search-results-address'>" + returnedPatientsList[i][3] + ", " + returnedPatientsList[i][4] + "</p></div></div><div class='nhsuk-grid-row'><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>NHS Number: <span class='search-results-nhs-no'>" + returnedPatientsList[i][0] + "</span></p></div><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>Date of birth: <span class='search-results-dob'>" + returnedPatientsList[i][7] + "</span></p></div></div><div class='nhsuk-grid-row'><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>Gender: <span class='search-results-gender'>" + returnedPatientsList[i][6] + "</span></p></div><div class='nhsuk-grid-column-one-half'><p class='nhsuk-promo__description search-results-description'>Postcode: <span class='search-results-postcode'>" + returnedPatientsList[i][5].replace(/^(.*)(\d)/, '$1 $2') + "</span></p></div></div></div></a></div></div></div>");
}


if (returnedPatientsList.length == 0 ) {
  $('.number-of-results').html("Sorry, there were no results matching your search. You can try <a href='nhs-search-alt'>searching again</a>.")
} else if ((returnedPatientsList.length == 1 )){
  $('.number-of-results').html("We found " + returnedPatientsList.length + " result matching your search.")
} else {
  $('.number-of-results').html("We found " + returnedPatientsList.length + " results matching your search.")
}

/* Save patient details to session storage when clicking a search result*/
$(".nhsuk-promo").click(function() {
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
/* Retrieve patient details to session storage when document is ready*/
var patientName = sessionStorage.getItem("patientName");
var patientAddress = sessionStorage.getItem("patientAddress");
var patientNhsNo = sessionStorage.getItem("patientNhsNo");
var patientDob = sessionStorage.getItem("patientDob");
var patientGender = sessionStorage.getItem("patientGender");
var patientPostcode = sessionStorage.getItem("patientPostcode");
var patientAge = sessionStorage.getItem("patientAge");
var patientAddressWithPostcode = patientAddress + ", " + patientPostcode;

$('.patient-banner-name').text(patientName);
$('.patient-banner-dob').text(patientDob);
$('.patient-banner-nhs-no').text(patientNhsNo);
$('.patient-banner-address').text(patientAddressWithPostcode);
$('.patient-banner-gender').text(patientGender);
$('.patient-banner-age').text(patientAge + " years old");
