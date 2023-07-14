const search = {
  {
    firstName: "William",
    lastName: "Shakespeare",
    address: "1 Town Street",
    county: "Warwickshire",
    postcode: "AB12CD",
    gender: "Male",
    dob: "30-Jan-2018",
    nhsnumber: "1234567890"
  },
  {
    firstName: "hilliam",
    lastName: "Shakespeare",
    address: "2 Town Street",
    county: "Warwickshire",
    postcode: "AB12CD",
    gender: "Male",
    dob: "30-Jan-2018",
    nhsnumber: "1234567891"
    
  },
  {
    firstName: "Milliam",
    lastName: "Shakespeare",
    address: "3 Town Street",
    county: "Warwickshire",
    postcode: "AB12CD",
    gender: "Male",
    dob: "30-Jan-2018",
    nhsnumber: "1234567892"
  }
};  

function parseDate(formattedDate) {
  const months = {
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
    dec: 11,
  };
  const parts = formattedDate.split("-");
  return new Date(parts[2], months[parts[1].toLowerCase()], parts[0]);
}

function formatPatientList(patients) {
  // Figure out their age based on their date of birth.
  for (const nhsNumber in patients) {
    const patient = patients[nhsNumber];
    const parsedDob = parseDate(patient.dob);
    const currentDate = new Date();
    const diff = currentDate - parsedDob;
    const age = Math.floor(diff / 31536000000);

    // Add the age to the data set.
    patient.age = age;

    // Add the nhsNumber key as a property for convinence.
    patient.nhsNumber = nhsNumber;
  }

  return patients;
}

module.exports = formatPatientList(search);