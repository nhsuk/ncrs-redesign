/* jshint shadow:true*/ /*jshint funcscope:true*/
/* Define dummy patients */

var patientsList = [
  ['9550972968', 'Elisha', 'Sapsed', '55 Troy Place', 'Sutton', 'X563TG', 'Female', '06-Sep-1968'],
  ['5974163354', 'Jordanna', 'Collop', '285 Chinook Trail', 'Bradford', 'E83JZ', 'Female', '27-Feb-2006'],
  ['4126104984', 'Justina', 'Collop', '285 Chinook Trail', 'Bradford', 'E83JZ', 'Female', '27-Feb-2006'],
  ['9015678065', 'Ranna', 'Enochsson', '6 Steensland Circle', 'Burnside', 'EB717QM', 'Female', '10-Mar-1967'],
  ['9397085291', 'Quincy', 'Cramphorn', '519 Raven Way', 'West End', 'DN36 7TU', 'Male', '22-Sep-1963'],
  ['9762318315', 'Angelle', 'Peeke-Vout', '4473 Fair Oaks Alley', 'Preston', 'F348ZS', 'Female', '16-Dec-1998'],
  ['9453238023', 'Giacobo', 'Erni', '05584 Luster Point', 'Sheffield', 'S52NF', 'Male', '01-Sep-2004'],
  ['9397084291', 'Raquel', 'Twinbrow', '9451 Burning Wood Lane', 'Whitwell', 'N94AL', 'Female', '04-Apr-2008'],
  ['0768832756', 'Georgia', 'Lamba', '4560 Portage Trail', 'Linton', 'PM151DJ', 'Female', '20-Apr-1994'],
  ['5655050595', 'Jacynth', 'Petett', '71016 Kings Plaza', 'Belfast', 'M061CP', 'Female', '07-Oct-1956'],
  ['7472972134', 'Gamaliel', 'Potkins', '14 Utah Drive', 'Whitchurch', 'UE60LF', 'Male', '02-Oct-1944'],
  ['2063825688', 'Lizzie', 'Arnecke', '1 Bayside Circle', 'Linton', 'AY05XG', 'Female', '02-Jun-2013'],
  ['1316950344', 'Dorella', 'Smith', '80 Holmberg Lane', 'Upton', 'BS130LQ', 'Female', '26-Apr-1998'],
  ['8344690382', 'Hali', 'Smith', '2169 Ludington Terrace', 'Upton', 'BR54HN', 'Female', '26-Apr-1998'],
  ['5275198353', 'Neddy', 'Smith', '38301 Vidon Trail', 'Langley', 'FY81UB', 'Female', '26-Apr-1998'],
  ['2977560009', 'Leland', 'Smith', '31599 Dunning Street', 'London', 'MK183EW', 'Female', '26-Apr-1998'],
  ['0344362957', 'Tome', 'Smith', '693 Spenser Pass', 'Hatton', 'RG193PQ', 'Female', '26-Apr-1998'],
  ['8825402473', 'Avie', 'Smith', '9768 Gerald Terrace', 'London', 'BD226DF', 'Female', '26-Apr-1998'],
  ['0135644305', 'Osbert', 'Smith', '55 Stang Trail', 'Normanton', 'SK87DJ', 'Female', '26-Apr-1998'],
  ['5217192623', 'Timoteo', 'Smith', '13416 Bashford Drive', 'Marston', 'BA25AB', 'Female', '26-Apr-1998'],
  ['6705809256', 'Katharine', 'Smith', '9621 Kedzie Center', 'London', 'PA308HU', 'Female', '26-Apr-1998'],
  ['7479065205', 'Carroll', 'Smith', '94894 Hagan Avenue', 'London', 'OX110PG', 'Female', '26-Apr-1998'],
  ['5298187064', 'Katie', 'Smith', '25 Guild Street', 'London', 'EC1V7QZ', 'Female', '21-Mar-1953'],
  ['9887780707', 'Louise', 'Smith', '65 Main Road', 'London', 'RH54JJ', 'Female', '02-Aug-1989'],
  ['2441861271', 'Lauren', 'Smith', '57 Crown Street', 'London', 'W1D4LD', 'Female', '20-Oct-1987'],
  ['1991798466', 'Joe', 'Pearson', '98 Manor Close', 'Bristol', 'BS1 3ZR', 'Male', '20-Oct-1987']
];
/* Capture search details */

/* NHS Number */

$("#nhs-number-search-button").submit(function(e) {
  sessionStorage.clear();
  var patientNhsSearch = $("#nhs-number-input").val();
  sessionStorage.setItem("patientNhsSearch", patientNhsSearch);

  if (!$('input[name=nhs-number]').val().length > 0) {
    $('#nhs-no-error-error').show();
    $('#nhs-number').addClass('nhsuk-input--error');
    $('#nhsuk-form-group-nhs-number').addClass('nhsuk-form-group--error');
    $('.nhsuk-error-summary__list').append('<li><a href="#nhsuk-form-group-last-name">You must enter an NHS number for the patient, like 123 456 7890</a></li>');
  }

  if (!$('input[name=nhs-number]').val().length > 0) {
    $('#nhsuk-nhs-no-error-summary').show();
    e.preventDefault();
  } else {
    return true;
  }

});

var patientNhsSearch = sessionStorage.getItem("patientNhsSearch");

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

$("#patient-details-search").submit(function(e) {
  sessionStorage.clear();

  function formatString(str) {
    return str
      .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
      .replace(/^[^ ]/g, match => (match.toUpperCase()));
  }
  var patientGenderSearch = $('input[name=gender]:checked', '#patient-details-search').val();
  if ($('#first-name').length > 0) {
    var patientFirstNameCapitalise = formatString($('#first-name').val());
    var patientFirstNameSearch = patientFirstNameCapitalise;
  } else {
    var patientFirstNameSearch = "";
  }
  var patientLastNameCapitalise = formatString($('#last-name').val());
  var patientLastNameSearch = patientLastNameCapitalise;
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
  if ($('#postcode-input').length > 0) {
    var patientPostcodeSearch = $('#postcode-input').val();
    var patientPostcodeSearchUpper = patientPostcodeSearch.toUpperCase();
    var patientPostcodeSearchFormatted = patientPostcodeSearchUpper.replace(/\s/g, '');
  } else {
    var patientPostcodeSearchFormatted = "";
  }

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
    $('#nhsuk-form-group-gender').addClass('nhsuk-form-group--error');
    $('#error-summary-gender').show();
  }

  if (!$('input[name=last-name]').val()) {
    $('#last-name-error-error').show();
    $('#last-name').addClass('nhsuk-input--error');
    $('#nhsuk-form-group-last-name').addClass('nhsuk-form-group--error');
    $('#error-summary-last-name').show();
  }
  if (!$('input[name=dob-day]').val() || !$('input[name=dob-month]').val() || !$('input[name=dob-year]').val()) {
    $('#dob-error-error').show();
    $('.nhsuk-date-input__input').addClass('nhsuk-input--error');
    $('#nhsuk-form-group-dob').addClass('nhsuk-form-group--error');
    $('#error-summary-dob').show();
  }

  if (!$('input[name=gender]').is(':checked') || !$('#last-name').val() || !$('#dob-day').val() || !$('#dob-month').val() || !$('#dob-year').val()) {
    $('#nhsuk-patient-details-error-summary').show();
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

/*Advanced Search */

$("#advanced-details-search").submit(function(e) {
  sessionStorage.clear();

  function formatString(str) {
    return str
      .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
      .replace(/^[^ ]/g, match => (match.toUpperCase()));
  }
  var patientGenderAdvanced = $('input[name=gender-advanced]:checked', '#advanced-details-search').val();
  sessionStorage.setItem("patientGenderAdvanced", patientGenderAdvanced);

  if ($('#first-name-advanced').length > 0) {
    var patientFirstNameCapitalise = formatString($('#first-name-advanced').val());
    var patientFirstNameAdvanced = patientFirstNameCapitalise;
  } else {
    var patientFirstNameAdvanced = "";
  }

  sessionStorage.setItem("patientFirstNameAdvanced", patientFirstNameAdvanced);

  var patientLastNameCapitalise = formatString($('#last-name-advanced').val());
  var patientLastNameAdvanced = patientLastNameCapitalise;
  sessionStorage.setItem("patientLastNameAdvanced", patientLastNameAdvanced);

if ($('input[name=widen-search]:checked').length > 0 ) {
  var widenSearch = true;
} else {
  var widenSearch = false;
}

sessionStorage.setItem("widenSearch", widenSearch);



  if ($('#postcode-advanced').length > 0) {
    var patientPostcodeAdvanced = $('#postcode-advanced').val();
    var patientPostcodeAdvancedUpper = patientPostcodeAdvanced.toUpperCase();
    var patientPostcodeAdvancedFormatted = patientPostcodeAdvancedUpper.replace(/\s/g, '');
  } else {
    var patientPostcodeAdvancedFormatted = "";
  }
  sessionStorage.setItem("patientPostcodeAdvanced", patientPostcodeAdvancedFormatted);

  var patientDobDayFrom = $('#dob-day-from').val();
  sessionStorage.setItem("dobDayFrom", patientDobDayFrom);
  var patientDobMonthFrom = ($('#dob-month-from').val());
  sessionStorage.setItem("dobMonthFrom", patientDobMonthFrom);
  var patientDobYearFrom = $('#dob-year-from').val();
  sessionStorage.setItem("dobYearFrom", patientDobYearFrom);
  var fullDobFrom = patientDobDayFrom + "/" + patientDobMonthFrom + "/" + patientDobYearFrom;
  var dobFrom = moment(fullDobFrom, "DD-MM-YYYY").format("MM/DD/YYYY");
  sessionStorage.setItem("dobFrom", dobFrom);

  var patientDobDayTo = $('#dob-day-to').val();
  sessionStorage.setItem("dobDayTo", patientDobDayTo);
  var patientDobMonthTo = ($('#dob-month-to').val());
  sessionStorage.setItem("dobMonthTo", patientDobMonthTo);
  var patientDobYearTo = $('#dob-year-to').val();
  sessionStorage.setItem("dobYearTo", patientDobYearTo);
  var fullDobTo = patientDobDayTo + "/" + patientDobMonthTo + "/" + patientDobYearTo;
  var dobTo = moment(fullDobTo, "DD-MM-YYYY").format("MM/DD/YYYY");
  sessionStorage.setItem("dobTo", dobTo);

  /*
  var patientDeathDayFrom = $('#dod-day-from').val();
  var patientDeathMonthFrom = ($('#dod-month-from').val() - 1);
  var patientDeathYearFrom = $('#dod-year-from').val();
  var fullDeathFrom = patientDeathDayFrom + "/" + patientDeathMonthFrom + "/" + patientDeathYearFrom;
  var deathFromDate = moment(fullDeathFrom, "DD-MM-YYYY").format("MM/DD/YYYY");
  sessionStorage.setItem("deathFromDate", deathFromDate);
  var patientDeathDayTo = $('#dod-day-to').val();
  var patientDeathMonthTo = ($('#dod-month-to').val() - 1);
  var patientDeathYearTo = $('#dod-year-to').val()
  var fullDeathTo = patientDeathDayTo + "/" + patientDeathMonthTo + "/" + patientDeathYearTo;
  var deathToDate = moment(fullDeathTo, "DD-MM-YYYY").format("MM/DD/YYYY");
  sessionStorage.setItem("deathToDate", deathToDate);
  var patientGpAdvanced = $('#gp-input').val();
  sessionStorage.setItem("patientGpAdvanced", patientGpAdvanced);
  */
  if ($("#address-name-number").length > 0) {
    var patientHouseNum = $("#address-name-number").val();
  } else {
    var patientHouseNum = "";
  }
  sessionStorage.setItem("patientHouseNum", patientHouseNum);

  if ($("#address-street").length > 0) {
    var patientStreet = $("#address-street").val().toLowerCase();
  } else {
    var patientStreet = "";
  }
  sessionStorage.setItem("patientStreet", patientStreet);

  if ($("#address-town-city").length > 0) {
    var patientTownCity = $("#address-town-city").val().toLowerCase();
  } else {
    var patientTownCity = "";
  }
  sessionStorage.setItem("patientTownCity", patientTownCity);

  if ($("#address-county").length > 0) {
    var patientCounty = $("#address-county").val().toLowerCase();
  } else {
    var patientCounty = "";
  }
  sessionStorage.setItem("patientCounty", patientCounty);

  if ($("#address-postcode").length > 0) {
    var patientPostcodeAdvanced = $('#address-postcode').val();
    var patientPostcodeAdvancedUpper = patientPostcodeAdvanced.toUpperCase();
    var patientPostcodeAdvancedFormatted = patientPostcodeAdvancedUpper.replace(/\s/g, '');
  } else {
    var patientPostcodeAdvancedFormatted = "";
  }
  sessionStorage.setItem("patientPostcodeAdvanced", patientPostcodeAdvancedFormatted);


  if (!$('input[name=gender-advanced]').is(':checked')) {
    $('#advanced-gender-error-error').show();
    $('#nhsuk-form-group-gender-advanced').addClass('nhsuk-form-group--error');
    $('#error-summary-advanced-gender').show();
  } else {
    $('#advanced-gender-error-error').hide();
    $('#nhsuk-form-group-gender-advanced').removeClass('nhsuk-form-group--error');
    $('#error-summary-advanced-gender').hide();
  }

  if (!$('input[name=last-name]').val()) {
    $('#advanced-last-name-error-error').show();
    $('#last-name-advanced').addClass('nhsuk-input--error');
    $('#nhsuk-form-group-last-name-advanced').addClass('nhsuk-form-group--error');
    $('#error-summary-advanced-last-name').show();
  } else {
    $('#advanced-last-name-error-error').hide();
    $('#last-name-advanced').removeClass('nhsuk-input--error');
    $('#nhsuk-form-group-last-name-advanced').removeClass('nhsuk-form-group--error');
    $('#error-summary-advanced-last-name').hide();
  }

  if (!$('input[name=dob-day-from]').val() || !$('input[name=dob-month-from]').val() || !$('input[name=dob-year-from]').val() || !$('input[name=dob-day-to]').val() || !$('input[name=dob-month-to]').val() || !$('input[name=dob-year-to]').val()) {
    $('#dob-from-error-error').show();
    $('#dob-to-error-error').show();
    $('.nhsuk-dob-input__input').addClass('nhsuk-input--error');
    $('#nhsuk-form-group-dob-advanced').addClass('nhsuk-form-group--error');
    $('#error-summary-advanced-dob').show();
  } else {
    $('#dob-from-error-error').hide();
    $('#dob-to-error-error').hide();
    $('.nhsuk-dob-input__input').removeClass('nhsuk-input--error');
    $('#nhsuk-form-group-dob-advanced').removeClass('nhsuk-form-group--error');
    $('#error-summary-advanced-dob').hide();
  }
  if ((!$('input[name=first-name]').val() && !$('input[name=address-postcode]').val()) && $('input[name=widen-search]:checked').length > 0) {

    if (!$('input[name=first-name]').val()) {
      $('#advanced-first-name-error-error').show();
      $('#first-name-advanced').addClass('nhsuk-input--error');
      $('#nhsuk-form-group-first-name-advanced').addClass('nhsuk-form-group--error');
      $('#error-summary-advanced-first-name').show();
    } /*else {
      $('#advanced-first-name-error-error').hide();
      $('#first-name-advanced').removeClass('nhsuk-input--error');
      $('#nhsuk-form-group-first-name-advanced').removeClass('nhsuk-form-group--error');
      $('#error-summary-advanced-first-name').hide();
    }*/

    if (!$('input[name=address-postcode]').val()) {
      $('#advanced-postcode-error-error').show();
      $('#address-postcode').addClass('nhsuk-input--error');
      $('#nhsuk-form-group-postcode-advanced').addClass('nhsuk-form-group--error');
      $('#error-summary-advanced-postcode').show();
    } /*else {
      $('#advanced-postcode-error-error').hide();
      $('#address-postcode').removeClass('nhsuk-input--error');
      $('#nhsuk-form-group-postcode-advanced').removeClass('nhsuk-form-group--error');
      $('#error-summary-advanced-postcode').hide();
    }*/
  }

  if (!$('input[name=gender-advanced]').is(':checked') || !$('#last-name-advanced').val() || !$('#dob-day-from').val() || !$('#dob-month-from').val() || !$('#dob-year-from').val() || !$('#dob-day-to').val() || !$('#dob-month-to').val() || !$('#dob-year-to').val() || ((!$('input[name=first-name]').val() && !$('input[name=address-postcode]').val()) && $('input[name=widen-search]:checked').length > 0) ) {
    $('#nhsuk-advanced-error-summary').show();
    e.preventDefault();
  } else {
    return true;
  }

});

var patientGenderAdvanced = sessionStorage.getItem("patientGenderAdvanced");
var patientFirstNameAdvanced = sessionStorage.getItem("patientFirstNameAdvanced");
var patientLastNameAdvanced = sessionStorage.getItem("patientLastNameAdvanced");
var widenSearch = sessionStorage.getItem("widenSearch");
var patientPostcodeAdvanced = sessionStorage.getItem("patientPostcodeAdvanced");
var dobFrom = sessionStorage.getItem("dobFrom");
var dobTo = sessionStorage.getItem("dobTo");
var deathFromDate = sessionStorage.getItem("deathFromDate");
var deathToDate = sessionStorage.getItem("deathToDate");
var patientGpAdvanced = sessionStorage.getItem("patientGpAdvanced");
var parsedDob = sessionStorage.getItem("parsedDob");
var patientHouseNum = sessionStorage.getItem("patientHouseNum");
var patientStreet = sessionStorage.getItem("patientStreet");
var patientTownCity = sessionStorage.getItem("patientTownCity");
var patientCounty = sessionStorage.getItem("patientCounty");

/* Copy input details between forms */

$("#advanced-details-link").click(function() {
  var patientGenderSearch = $('input[name=gender]:checked', '#patient-details-search').val();
  if (patientGenderSearch) {
    sessionStorage.setItem("patientGenderSearch", patientGenderSearch);
  } else {
    sessionStorage.setItem("patientGenderSearch", "");
  }
  var patientLastNameSearch = $("#last-name").val();
  var patientDobDay = $("#dob-day").val();
  var patientDobMonth = $("#dob-month").val();
  var patientDobYear = $("#dob-year").val();
  if (patientLastNameSearch) {
    var patientLastNameAdvanced = $('#last-name').val();
    sessionStorage.setItem("patientLastNameAdvanced", patientLastNameAdvanced);
  } else {
    sessionStorage.setItem("patientLastNameAdvanced", "");
  }
  if (patientDobDay) {
    var dobDayFrom = $('#dob-day').val();
    sessionStorage.setItem("dobDayFrom", dobDayFrom);
  } else {
    sessionStorage.setItem("dobDayFrom", "");
  }
  if (patientDobMonth) {
    var dobMonthFrom = $('#dob-month').val();
    sessionStorage.setItem("dobMonthFrom", dobMonthFrom);
  } else {
    sessionStorage.setItem("dobMonthFrom", "");
  }
  if (patientDobYear) {
    var dobYearFrom = $('#dob-year').val();
    sessionStorage.setItem("dobYearFrom", dobYearFrom);
  } else {
    sessionStorage.setItem("dobYearFrom", "");
  }

});

$("#refine-search-link").click(function() {
  sessionStorage.setItem("patientGenderAdvanced", patientGenderAdvanced);
  sessionStorage.setItem("patientLastNameAdvanced", patientLastNameAdvanced);
  sessionStorage.setItem("patientHouseNum", patientHouseNum);
});

if (patientGenderSearch) {
  $("input[name=gender-advanced][value='" + sessionStorage.getItem('patientGenderSearch') + "']").attr('checked', true);
} else if (patientGenderAdvanced) {
  $("input[name=gender-advanced][value='" + sessionStorage.getItem('patientGenderAdvanced') + "']").attr('checked', true);
}

if (patientFirstNameSearch) {
  $("#first-name-advanced").val(sessionStorage.getItem('patientFirstNameSearch'));
} else if (patientLastNameAdvanced) {
  $("#first-name-advanced").val(sessionStorage.getItem('patientFirstNameAdvanced'));
}

if (patientLastNameAdvanced) {
  $("#last-name-advanced").val(sessionStorage.getItem('patientLastNameAdvanced'));
} else {
  $("#last-name-advanced").val("");
}


if (sessionStorage.getItem('dobDayFrom')) {
  $("#dob-day-from").val(sessionStorage.getItem('dobDayFrom'));
}
if (sessionStorage.getItem('dobMonthFrom')) {
  $("#dob-month-from").val(sessionStorage.getItem('dobMonthFrom'));
}
if (sessionStorage.getItem('dobYearFrom')) {
  $("#dob-year-from").val(sessionStorage.getItem('dobYearFrom'));
}

if (sessionStorage.getItem('dobDayTo')) {
  $("#dob-day-to").val(sessionStorage.getItem('dobDayTo'));
}
if (sessionStorage.getItem('dobMonthTo')) {
  $("#dob-month-to").val(sessionStorage.getItem('dobMonthTo'));
}
if (sessionStorage.getItem('dobYearTo')) {
  $("#dob-year-to").val(sessionStorage.getItem('dobYearTo'));
}

if (patientHouseNum) {
  $("#address-name-number").val(sessionStorage.getItem('patientHouseNum'));
}

if (patientStreet) {
  $("#address-street").val(sessionStorage.getItem('patientStreet'));
}

if (patientTownCity) {
  $("#address-town-city").val(sessionStorage.getItem('patientTownCity'));
}

if (patientCounty) {
  $("#address-county").val(sessionStorage.getItem('patientCounty'));
}

if (patientPostcodeAdvanced) {
  $("#address-postcode").val(sessionStorage.getItem('patientPostcodeAdvanced'));

}

/* Clear session storage when performing new search */

$("#nhs-number-link").click(function() {
  sessionStorage.clear();
});

$("#find-patient").click(function() {
  sessionStorage.clear();
});

$(".index-page-link").click(function() {
  sessionStorage.clear();
});

$("#index-page-link").click(function() {
  sessionStorage.clear();
});


/* Find patient in patientList */

var returnedPatientsList = [];

for (var i in patientsList) {
  /* NHS Number search */
  if ((patientNhsSearch == patientsList[i][0])) {
    var returnedPatients = (patientsList[i]);
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients);
  }
  /* Patient Details search */
  if ((patientFirstNameSearch == "") && (patientPostcodeSearchFormatted == "")) {
    if ((patientGenderSearch == patientsList[i][6] || patientGenderSearch == "Not known") && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7])) {
      var returnedPatients = (patientsList[i]);
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients);
    } else {

    }
  } else if (patientPostcodeSearchFormatted == "") {
    if ((patientGenderSearch == patientsList[i][6] || patientGenderSearch == "Not known") && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7]) && (patientFirstNameSearch == patientsList[i][1])) {
      var returnedPatients = (patientsList[i]);
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients);
    } else {

    }

  } else if (patientFirstNameSearch == "") {
    if ((patientGenderSearch == patientsList[i][6] || patientGenderSearch == "Not known") && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7]) && (patientPostcodeSearchFormatted == patientsList[i][5])) {
      var returnedPatients = (patientsList[i]);
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients);
    } else {

    }
  } else if ((patientGenderSearch == patientsList[i][6] || patientGenderSearch == "Not known") && (patientLastNameSearch == patientsList[i][2]) && (patientFormattedDob == patientsList[i][7]) && (patientPostcodeSearchFormatted == patientsList[i][5]) && (patientFirstNameSearch == patientsList[i][1])) {
    var returnedPatients = (patientsList[i]);
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients);
  } else {

  }

  /* Advanced Search details */

  var dateString = patientsList[i][7];

  var wholeDate = moment(dateString, 'DD-MMM-YYYY').format("MM/DD/YYYY");

  if ((patientGenderAdvanced == patientsList[i][6] || patientGenderAdvanced == "Not known") && ((patientFirstNameAdvanced == "") || (patientFirstNameAdvanced !== "" && patientFirstNameAdvanced == patientsList[i][1]) || (patientsList[i][1].includes(patientFirstNameAdvanced) && widenSearch == "true")) && (patientLastNameAdvanced == patientsList[i][2]) && ((moment(wholeDate).isBetween(dobFrom, dobTo, null, '[]'))) && ((patientHouseNum == "") || (patientHouseNum !== "" && patientsList[i][3].includes(patientHouseNum))) && ((patientStreet == "") || (patientStreet !== "" && patientsList[i][3].toLowerCase().includes(patientStreet))) && ((patientTownCity == "") || (patientTownCity !== "" && patientsList[i][4].toLowerCase().includes(patientTownCity))) && ((patientPostcodeAdvanced == "") || (patientPostcodeAdvanced !== "" && patientPostcodeAdvanced == patientsList[i][5]))) {
    var returnedPatients = (patientsList[i]);
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients);
  } else {

  }

}

for (var i in returnedPatientsList) {


  var patientNhsNo = returnedPatientsList[i][0];
  $('.patient-results').append('<tr role="row" class="patient-search-result"><td role="gridcell"><span class="table-heading" aria-hidden="true">Name</span><span><a href="patient-overview" class="name-results-td">' + returnedPatientsList[i][1] + " " + returnedPatientsList[i][2] + '</span></a></td><td role="gridcell"><span class="table-heading" aria-hidden="true">Gender</span><span class="gender-results-td">' + returnedPatientsList[i][6] + '</span></td><td role="gridcell"><span class="table-heading" aria-hidden="true">Date of birth</span><span class="dob-results-td">' + returnedPatientsList[i][7] + '</span></td><td role="gridcell"><span class="table-heading" aria-hidden="true">Address</span><span class="address-results-td">' + returnedPatientsList[i][3] + "," + "&nbsp;" + "<span class='patient-pob-td'>" + returnedPatientsList[i][4] + "</span>" + "," + "&nbsp;" + "<span class='postcode-results-td'>" + returnedPatientsList[i][5].replace(/^(.*)(\d)/, '$1 $2') + "</span></span>" + '</td> + <td role="gridcell"><span class="table-heading" aria-hidden="true">NHS Number</span><span class="nhs-no-results-td">' + returnedPatientsList[i][0].substr(0, 3) + " " + returnedPatientsList[i][0].substr(2, 3) + " " + returnedPatientsList[i][0].substr(5, 4) + '</span></td></tr>');
}

/* Populate search results page */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if (patientNhsSearch) {
  var nhsNo = "NHS Number " + patientNhsSearch;
} else {
  var nhsNo = "";
}

if (patientGenderSearch) {
  var gender = "gender " + patientGenderSearch + ", ";
} else if (patientGenderAdvanced !== null) {
  var gender = "gender " + patientGenderAdvanced + ", ";
} else {
  var gender = "";
}

if (patientFirstNameAdvanced) {
  var firstNameFormatted = "first name " + capitalizeFirstLetter(patientFirstNameAdvanced) + ", ";
} else {
  var firstNameFormatted = "";
}

if (patientLastNameSearch) {
  var lastNameFormatted = "last name " + capitalizeFirstLetter(patientLastNameSearch) + ", ";
} else if (patientLastNameAdvanced) {
  var lastNameFormatted = "last name " + capitalizeFirstLetter(patientLastNameAdvanced) + ", ";
} else {
  var lastNameFormatted = "";
}

if (patientFormattedDob !== null) {
  var dob = "date of birth " + patientFormattedDob + ", ";
} else if (patientDobFrom !== null && patientDobTo !== null) {
  var dob = "date of birth between " + moment(patientDobFrom, "MMDDYYYY").format("DD-MMM-YYYY") + " and " + moment(patientDobTo, "MMDDYYYY").format("DD-MMM-YYYY") + ", ";
} else {
  var dob = "";
}

if (patientHouseNum || patientStreet || patientTownCity || patientCounty || patientPostcodeAdvanced) {
  var address = "address ";
} else {
  var address = "";
}

if (patientHouseNum) {
  var houseNum = patientHouseNum + " ";
} else {
  var houseNum = "";
}

if (patientStreet) {
  var street = patientStreet + ", ";
} else {
  var street = "";
}

if (patientTownCity) {
  var townCity = patientTownCity + ", ";
} else {
  var townCity = "";
}

if (patientCounty) {
  var county = patientCounty + ", ";
} else {
  var county = "";
}

if (patientPostcodeAdvanced) {
  var postcode = patientPostcodeAdvanced;
} else {
  var postcode = "";
}

var resultsList = nhsNo + gender + firstNameFormatted + lastNameFormatted + dob + address + houseNum;
var formattedResults = resultsList.replace(/,\s*$/, "");

function insertBeforeLastOccurrence(strToSearch, strToFind, strToInsert) {
  var n = strToSearch.lastIndexOf(strToFind);
  if (n < 0) return strToSearch;
  return strToSearch.substring(0, n) + strToInsert + strToSearch.substring(n);
}

var formattedResultsList = insertBeforeLastOccurrence(formattedResults, "address", "and ");



if (returnedPatientsList.length == 0) {
  $('.search-results-container').hide();
  $('.number-of-results').html("<h3 class='nhsuk-heading-xs'>Sorry. We couldn't find any patients with " + formattedResultsList + "</h3>");
  $('.number-of-results').append("<p>You can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> to find a match, or <a href='nhs-number-search'>perform a new search</a>.</p>");

} else if (returnedPatientsList.length == 1) {
  $('.number-of-results').html("<h3 class='nhsuk-heading-xs'>We found <b>1</b> result for patients with " + formattedResultsList + "</h3>");
  $('.number-of-results').append("<p>If this isn't the patient you're looking for you can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> or <a href='nhs-number-search'>perform a new search</a>.</p>");
  $('.results-count').html("Showing 1 of 1 results");

} else if (returnedPatientsList.length > 5) {
  $('.number-of-results').html("<h3 class='nhsuk-heading-xs'>We found " + returnedPatientsList.length + " results for patients with " + formattedResultsList + "</h3>");
  $('.number-of-results').append("<p>If you can't find the patient you're looking for you can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> or <a href='nhs-number-search'>perform a new search</a>.</p>");
  var numShown = 5;
  var numMore = 5; // Increment

  var $table = $('table').find('tbody'); // tbody containing all the rows
  var numRows = $table.find('tr').length; // Total # rows

  $(function() {
    // Hide rows and add clickable div
    $table.find('tr:gt(' + (numShown - 1) + ')').hide().end();
    if (numShown >= 5) {
      $(".load-more").html('<a class="nhsuk-button" id="more"><tr><td colspan="' +
        $table.find('tr:first td').length + '"><div>Show <span>' +
        numMore + '</span> More</div</a></td></tr>');
    } else {

    }

    $('#more').click(function() {
      $("html, body").animate({
        scrollTop: $(document).height()
      }, 1000);
      numShown = numShown + numMore;
      // no more "show more" if done
      if (numShown >= numRows) {
        $('#more').remove();
      }
      // change rows remaining if less than increment
      if (numRows - numShown < numMore) {
        $('#more span').html(numRows - numShown);

      }
      $table.find('tr:lt(' + numShown + ')').show();
      if (numShown <= numRows) {
        $('.results-count').html("Showing " + numShown + " of " + numRows + " results");
      } else {
        $('.results-count').html("Showing " + (numShown - (numShown - numRows)) + " of " + numRows + " results");
      }
    });

    $('.results-count').html("Showing " + numShown + " of " + numRows + " results");
  });
} else {
  $('.number-of-results').html("<h3 class='nhsuk-heading-xs'>We found " + returnedPatientsList.length + " results for patients with " + formattedResultsList + "</h3>");
  $('.number-of-results').append("<p>If you can't find the patient you're looking for you can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> or <a href='nhs-number-search'>perform a new search</a>.</p>");
  $('.results-count').html("Showing " + returnedPatientsList.length + " of " + returnedPatientsList.length + " results");
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

$(".patient-search-result").click(function() {
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

  window.location.href = "patient-overview"
});

$("#confirm-name-changes-btn").click(function() {
  var patientName = "William Tell"
  sessionStorage.setItem("patientName", patientName);
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



var parsedDob = moment(patientDob, "DD-MMM-YYYY").format("DD-MM-YYYY");
var patientAge = moment(new Date()).diff(moment(parsedDob, "DD-MM-YYYY"), 'years', false);



if (!patientName) {
  $('.patient-banner-name, .card-content-name').text("William Shakespeare");
  $('.patient-banner-dob, .card-content-detail-dob').text("30-Jan-1970");
  $('.patient-banner-nhs-no, .card-content-detail-nhs-no').text("123 456 7890");
  $('.patient-banner-address').text("1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD");
  $('.patient-banner-gender, .card-content-detail-gender').text("Male");
  $('.patient-banner-age').text("49 years old");
  $('.card-content-detail-pob').text("Stratford-upon-Avon");
  $('.card-content-detail-address').html("1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD");
  $('.name-dob-floater').html("William Shakespeare | 30-Jan-1970");
} else if (patientName="William Tell") {
  $('.patient-banner-name, .card-content-name').text(patientName);
  $('.patient-banner-dob, .card-content-detail-dob').text("30-Jan-1970");
  $('.patient-banner-nhs-no, .card-content-detail-nhs-no').text("123 456 7890");
  $('.patient-banner-address').text("1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD");
  $('.patient-banner-gender, .card-content-detail-gender').text("Male");
  $('.patient-banner-age').text("49 years old");
  $('.card-content-detail-pob').text("Stratford-upon-Avon");
  $('.card-content-detail-address').html("1 Town Street, Stratford-upon-Avon, Warwickshire, AB1 2CD");
  $('.name-dob-floater').html("William Shakespeare | 30-Jan-1970");
} else {
  $('.patient-banner-name, .card-content-name').text(patientName);
  $('.patient-banner-dob, .card-content-detail-dob').text(patientDob);
  $('.patient-banner-nhs-no, .card-content-detail-nhs-no').text(patientNhsNo);
  $('.patient-banner-address').text(patientAddressWithPostcode);
  $('.patient-banner-gender, .card-content-detail-gender').text(patientGender);
  $('.patient-banner-age').text(patientAge + " years old");
  $('.card-content-detail-pob').text(sessionStorage.getItem("patientPob"));
  $('.card-content-detail-address').html(patientAddressWithPostcode.replace(/\,/g, '<br/>'));
  $('.name-dob-floater').html(patientName + " | " + patientDob);
}


$(".add-tel-number-btn").click(function() {
  $(".tel-number-section").append("<div class='nhsuk-grid-row'><div class='nhsuk-grid-column-one-quarter'><div class='nhsuk-form-group'><label class='nhsuk-label' for='select-1'>Telephone number type</label><select class='nhsuk-select' id='number-type' name='select phone number type'><option value='1' selected>Main home</option><option value='2'>Mobile</option><option value='3'>Work</option></select><br /><br /><label class='nhsuk-label' for='tel-number'>Telephone number</label><input class='nhsuk-input nhsuk-input--width-10' id='tel-number' name='telephone number' input type='text' inputmode='numeric'></div></div></div><hr />");
  $(".add-tel-number-btn").text("Add another telephone number");
})
