var patientsList = [
  [
    "9550972968",
    "Elisha",
    "Sapsed",
    "55 Troy Place",
    "Sutton",
    "X563TG",
    "Female",
    "06-Sep-1968",
  ],
  [
    "5974163354",
    "Jordanna",
    "Collop",
    "285 Chinook Trail",
    "Bradford",
    "E83JZ",
    "Female",
    "27-Feb-2006",
  ],
  [
    "4126104984",
    "Justina",
    "Collop",
    "285 Chinook Trail",
    "Bradford",
    "E83JZ",
    "Female",
    "27-Feb-2006",
  ],
  [
    "9015678065",
    "Ranna",
    "Enochsson",
    "6 Steensland Circle",
    "Burnside",
    "EB717QM",
    "Female",
    "10-Mar-1967",
  ],
  [
    "9397085291",
    "Quincy",
    "Cramphorn",
    "519 Raven Way",
    "West End",
    "DN36 7TU",
    "Male",
    "22-Sep-1963",
  ],
  [
    "9762318315",
    "Angelle",
    "Peeke-Vout",
    "4473 Fair Oaks Alley",
    "Preston",
    "F348ZS",
    "Female",
    "16-Dec-1998",
  ],
  [
    "9453238023",
    "Giacobo",
    "Erni",
    "05584 Luster Point",
    "Sheffield",
    "S52NF",
    "Male",
    "01-Sep-2004",
  ],
  [
    "9397084291",
    "Raquel",
    "Twinbrow",
    "9451 Burning Wood Lane",
    "Whitwell",
    "N94AL",
    "Female",
    "04-Apr-2008",
  ],
  [
    "0768832756",
    "Georgia",
    "Lamba",
    "4560 Portage Trail",
    "Linton",
    "PM151DJ",
    "Female",
    "20-Apr-1994",
  ],
  [
    "5655050595",
    "Jacynth",
    "Petett",
    "71016 Kings Plaza",
    "Belfast",
    "M061CP",
    "Female",
    "07-Oct-1956",
  ],
  [
    "7472972134",
    "Gamaliel",
    "Potkins",
    "14 Utah Drive",
    "Whitchurch",
    "UE60LF",
    "Male",
    "02-Oct-1944",
  ],
  [
    "2063825688",
    "Lizzie",
    "Arnecke",
    "1 Bayside Circle",
    "Linton",
    "AY05XG",
    "Female",
    "02-Jun-2013",
  ],
  [
    "1316950344",
    "Dorella",
    "Smith",
    "80 Holmberg Lane",
    "Upton",
    "BS130LQ",
    "Female",
    "26-Apr-1998",
  ],
  [
    "8344690382",
    "Hali",
    "Smith",
    "2169 Ludington Terrace",
    "Upton",
    "BR54HN",
    "Female",
    "26-Apr-1998",
  ],
  [
    "5275198353",
    "Neddy",
    "Smith",
    "38301 Vidon Trail",
    "Langley",
    "FY81UB",
    "Female",
    "26-Apr-1998",
  ],
  [
    "2977560009",
    "Leland",
    "Smith",
    "31599 Dunning Street",
    "London",
    "MK183EW",
    "Female",
    "26-Apr-1998",
  ],
  [
    "0344362957",
    "Tome",
    "Smith",
    "693 Spenser Pass",
    "Hatton",
    "RG193PQ",
    "Female",
    "26-Apr-1998",
  ],
  [
    "8825402473",
    "Avie",
    "Smith",
    "9768 Gerald Terrace",
    "London",
    "BD226DF",
    "Female",
    "26-Apr-1998",
  ],
  [
    "0135644305",
    "Osbert",
    "Smith",
    "55 Stang Trail",
    "Normanton",
    "SK87DJ",
    "Female",
    "26-Apr-1998",
  ],
  [
    "5217192623",
    "Timoteo",
    "Smith",
    "13416 Bashford Drive",
    "Marston",
    "BA25AB",
    "Female",
    "26-Apr-1998",
  ],
  [
    "6705809256",
    "Katharine",
    "Smith",
    "9621 Kedzie Center",
    "London",
    "PA308HU",
    "Female",
    "26-Apr-1998",
  ],
  [
    "7479065205",
    "Carroll",
    "Smith",
    "94894 Hagan Avenue",
    "London",
    "OX110PG",
    "Female",
    "26-Apr-1998",
  ],
  [
    "5298187064",
    "Katie",
    "Smith",
    "25 Guild Street",
    "London",
    "EC1V7QZ",
    "Female",
    "21-Mar-1953",
  ],
  [
    "9887780707",
    "Louise",
    "Smith",
    "65 Main Road",
    "London",
    "RH54JJ",
    "Female",
    "02-Aug-1989",
  ],
  [
    "2441861271",
    "Lauren",
    "Smith",
    "57 Crown Street",
    "London",
    "W1D4LD",
    "Female",
    "20-Oct-1987",
  ],
  [
    "1991798466",
    "Joe",
    "Pearson",
    "98 Manor Close",
    "Bristol",
    "BS1 3ZR",
    "Male",
    "20-Oct-1987",
  ],
];
/* Capture search details */

/* NHS Number */

var patientNhsSearch = sessionStorage.getItem("patientNhsSearch");

/* Patient Details */

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
var patientPostcodeSearchFormatted = sessionStorage.getItem(
  "patientPostcodeSearchFormatted"
);

/*Advanced Search */

var patientGenderAdvanced = sessionStorage.getItem("patientGenderAdvanced");
var patientFirstNameAdvanced = sessionStorage.getItem(
  "patientFirstNameAdvanced"
);
var patientLastNameAdvanced = sessionStorage.getItem("patientLastNameAdvanced");
var widenSearch = sessionStorage.getItem("widenSearch");
var patientPostcodeAdvanced = sessionStorage.getItem("patientPostcodeAdvanced");
var dobFrom = sessionStorage.getItem("dobFrom");
var dobTo = sessionStorage.getItem("dobTo");

$("#refine-search-link").click(function () {
  sessionStorage.setItem("patientGenderAdvanced", patientGenderAdvanced);
  sessionStorage.setItem("patientLastNameAdvanced", patientLastNameAdvanced);
  sessionStorage.setItem("patientHouseNum", patientHouseNum);
});

/* Find patient in patientList */

var returnedPatientsList = [];

for (var i in patientsList) {
  /* NHS Number search */
  if (patientNhsSearch == patientsList[i][0]) {
    var returnedPatients = patientsList[i];
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients);
  }
  /* Patient Details search */
  if (patientFirstNameSearch == "" && patientPostcodeSearchFormatted == "") {
    if (
      (patientGenderSearch == patientsList[i][6] ||
        patientGenderSearch == "Not known") &&
      patientLastNameSearch == patientsList[i][2] &&
      patientFormattedDob == patientsList[i][7]
    ) {
      var returnedPatients = patientsList[i];
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients);
    } else {
    }
  } else if (patientPostcodeSearchFormatted == "") {
    if (
      (patientGenderSearch == patientsList[i][6] ||
        patientGenderSearch == "Not known") &&
      patientLastNameSearch == patientsList[i][2] &&
      patientFormattedDob == patientsList[i][7] &&
      patientFirstNameSearch == patientsList[i][1]
    ) {
      var returnedPatients = patientsList[i];
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients);
    } else {
    }
  } else if (patientFirstNameSearch == "") {
    if (
      (patientGenderSearch == patientsList[i][6] ||
        patientGenderSearch == "Not known") &&
      patientLastNameSearch == patientsList[i][2] &&
      patientFormattedDob == patientsList[i][7] &&
      patientPostcodeSearchFormatted == patientsList[i][5]
    ) {
      var returnedPatients = patientsList[i];
      returnedPatientsList.push(returnedPatients);
      sessionStorage.setItem("returnedPatients", returnedPatients);
    } else {
    }
  } else if (
    (patientGenderSearch == patientsList[i][6] ||
      patientGenderSearch == "Not known") &&
    patientLastNameSearch == patientsList[i][2] &&
    patientFormattedDob == patientsList[i][7] &&
    patientPostcodeSearchFormatted == patientsList[i][5] &&
    patientFirstNameSearch == patientsList[i][1]
  ) {
    var returnedPatients = patientsList[i];
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients);
  } else {
  }

  /* Advanced Search details */

  var dateString = patientsList[i][7];

  var wholeDate = moment(dateString, "DD-MMM-YYYY").format("MM/DD/YYYY");

  if (
    (patientGenderAdvanced == patientsList[i][6] ||
      patientGenderAdvanced == "Not known") &&
    (patientFirstNameAdvanced == "" ||
      (patientFirstNameAdvanced !== "" &&
        patientFirstNameAdvanced == patientsList[i][1]) ||
      (patientsList[i][1].includes(patientFirstNameAdvanced) &&
        widenSearch == "true")) &&
    patientLastNameAdvanced == patientsList[i][2] &&
    moment(wholeDate).isBetween(dobFrom, dobTo, null, "[]") &&
    (patientPostcodeAdvanced == "" ||
      (patientPostcodeAdvanced !== "" &&
        patientPostcodeAdvanced == patientsList[i][5]))
  ) {
    var returnedPatients = patientsList[i];
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients);
  } else {
  }

  /* postcode only search */
  var patientPostcodeOnly = sessionStorage.getItem("patientPostcodeOnly");
  if (patientPostcodeOnly == patientsList[i][5]) {
    var returnedPatients = patientsList[i];
    returnedPatientsList.push(returnedPatients);
    sessionStorage.setItem("returnedPatients", returnedPatients);
  }
}

for (var i in returnedPatientsList) {
  var patientNhsNo = returnedPatientsList[i][0];
  $(".patient-results").append(
    '<tr role="row" class="patient-search-result"><td role="gridcell"><span class="table-heading" aria-hidden="true">Name</span><span><a href="patient-overview" class="name-results-td">' +
      returnedPatientsList[i][1] +
      " " +
      returnedPatientsList[i][2].toUpperCase() +
      '</span></a></td><td role="gridcell"><span class="table-heading" aria-hidden="true">Gender</span><span class="gender-results-td">' +
      returnedPatientsList[i][6] +
      '</span></td><td role="gridcell"><span class="table-heading" aria-hidden="true">Date of birth</span><span class="dob-results-td">' +
      returnedPatientsList[i][7] +
      '</span></td><td role="gridcell"><span class="table-heading" aria-hidden="true">Address</span><span class="address-results-td">' +
      returnedPatientsList[i][3] +
      "," +
      "&nbsp;" +
      "<span class='patient-pob-td'>" +
      returnedPatientsList[i][4] +
      "</span>" +
      "," +
      "&nbsp;" +
      "<span class='postcode-results-td'>" +
      returnedPatientsList[i][5].replace(/^(.*)(\d)/, "$1 $2") +
      "</span></span>" +
      '</td> + <td role="gridcell"><span class="table-heading" aria-hidden="true">NHS Number</span><span class="nhs-no-results-td">' +
      returnedPatientsList[i][0].substr(0, 3) +
      " " +
      returnedPatientsList[i][0].substr(2, 3) +
      " " +
      returnedPatientsList[i][0].substr(5, 4) +
      "</span></td></tr>"
  );
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
  var firstNameFormatted =
    "first name " + capitalizeFirstLetter(patientFirstNameAdvanced) + ", ";
} else {
  var firstNameFormatted = "";
}

if (patientLastNameSearch) {
  var lastNameFormatted =
    "last name " + capitalizeFirstLetter(patientLastNameSearch) + ", ";
} else if (patientLastNameAdvanced) {
  var lastNameFormatted =
    "last name " + capitalizeFirstLetter(patientLastNameAdvanced) + ", ";
} else {
  var lastNameFormatted = "";
}

if (patientFormattedDob !== null) {
  var dob = "date of birth " + patientFormattedDob + ", ";
} else if (patientDobFrom !== null && patientDobTo !== null) {
  var dob =
    "date of birth between " +
    moment(patientDobFrom, "MMDDYYYY").format("DD-MMM-YYYY") +
    " and " +
    moment(patientDobTo, "MMDDYYYY").format("DD-MMM-YYYY") +
    ", ";
} else {
  var dob = "";
}

if (patientPostcodeAdvanced) {
  var address = "address ";
} else {
  var address = "";
}

var houseNum = "";
var street = "";
var townCity = "";
var county = "";

if (patientPostcodeAdvanced) {
  var postcode = patientPostcodeAdvanced;
} else {
  var postcode = "";
}

if (patientPostcodeOnly) {
  var postcode = "postcode " + patientPostcodeOnly;
} else {
  var postcode = "";
}

var resultsList =
  nhsNo +
  gender +
  firstNameFormatted +
  lastNameFormatted +
  dob +
  address +
  houseNum;
var formattedResults = resultsList.replace(/,\s*$/, "");

function insertBeforeLastOccurrence(strToSearch, strToFind, strToInsert) {
  var n = strToSearch.lastIndexOf(strToFind);
  if (n < 0) return strToSearch;
  return strToSearch.substring(0, n) + strToInsert + strToSearch.substring(n);
}

var formattedResultsList = insertBeforeLastOccurrence(
  formattedResults,
  "address",
  "and "
);

if (returnedPatientsList.length == 0) {
  $(".search-results-container").hide();
  $(".number-of-results").html(
    "<h3 class='nhsuk-heading-xs'>Sorry. We couldn't find any patients with " +
      formattedResultsList +
      "</h3>"
  );
  $(".number-of-results").append(
    "<p>If this isn't the patient you're looking for, you can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> to find a match or <a href='nhs-number-search'>perform a new search</a>.</p>"
  );
} else if (returnedPatientsList.length == 1) {
  $(".number-of-results").html(
    "<h3 class='nhsuk-heading-xs'>We found <b>1</b> result for patients with " +
      formattedResultsList +
      "</h3>"
  );
  $(".number-of-results").append(
    "<p>If this isn't the patient you're looking for, you can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> to find a match or <a href='nhs-number-search'>perform a new search</a>.</p>"
  );
  $(".results-count").html("Showing 1 of 1 results");
} else if (returnedPatientsList.length > 5) {
  $(".number-of-results").html(
    "<h3 class='nhsuk-heading-xs'>We found " +
      returnedPatientsList.length +
      " results for patients with " +
      formattedResultsList +
      "</h3>"
  );
  $(".number-of-results").append(
    "<p>If this isn't the patient you're looking for, you can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> to find a match or <a href='nhs-number-search'>perform a new search</a>.</p>"
  );
  var numShown = 5;
  var numMore = 5; // Increment

  var $table = $("table").find("tbody"); // tbody containing all the rows
  var numRows = $table.find("tr").length; // Total # rows

  $(function () {
    // Hide rows and add clickable div
    $table
      .find("tr:gt(" + (numShown - 1) + ")")
      .hide()
      .end();
    if (numShown >= 5) {
      $(".load-more").html(
        '<a class="nhsuk-button" id="more"><tr><td colspan="' +
          $table.find("tr:first td").length +
          '"><div>Show <span>' +
          numMore +
          "</span> More</div</a></td></tr>"
      );
    } else {
    }

    $("#more").click(function () {
      $("html, body").animate(
        {
          scrollTop: $(document).height(),
        },
        1000
      );
      numShown = numShown + numMore;
      // no more "show more" if done
      if (numShown >= numRows) {
        $("#more").remove();
      }
      // change rows remaining if less than increment
      if (numRows - numShown < numMore) {
        $("#more span").html(numRows - numShown);
      }
      $table.find("tr:lt(" + numShown + ")").show();
      if (numShown <= numRows) {
        $(".results-count").html(
          "Showing " + numShown + " of " + numRows + " results"
        );
      } else {
        $(".results-count").html(
          "Showing " +
            (numShown - (numShown - numRows)) +
            " of " +
            numRows +
            " results"
        );
      }
    });

    $(".results-count").html(
      "Showing " + numShown + " of " + numRows + " results"
    );
  });
} else {
  $(".number-of-results").html(
    "<h3 class='nhsuk-heading-xs'>We found " +
      returnedPatientsList.length +
      " results for patients with " +
      formattedResultsList +
      "</h3>"
  );
  $(".number-of-results").append(
    "<p>If you can't find the patient you're looking for you can <a id='refine-search-link' href='advanced-details-search'>refine your search</a> or <a href='nhs-number-search'>perform a new search</a>.</p>"
  );
  $(".results-count").html(
    "Showing " +
      returnedPatientsList.length +
      " of " +
      returnedPatientsList.length +
      " results"
  );
}
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
