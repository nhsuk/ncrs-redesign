/* Adding BNA functionality and journey to Patient tab */

$(function() {
  var bnaHeader = "<h1 class='nhsuk-heading-l' id='bna-section'>Birth Notification</h1>";
  var bnaCard = "<div class='scra-card'> \
        <div class='scra-card-content'> \
          <div class='nhsuk-grid-row'> \
            <div class='nhsuk-grid-column-full'> \
              <div class='nhsuk-u-reading-width'> \
                <p>Use this feature to submit a birth notification for this patient. You will be asked to provide:</p> \
                <ul class='nhsuk-list nhsuk-list--bullet'> \
                <li>details about the person notifying the birth</li> \
                  <li>details about where the birth occurred</li> \
                  <li>details about the baby and the birth</li> \
                  <li>the baby's usual address and contact information</li> \
                  <li>a separate discharge address if this is necessary</li> \
                </ul> \
                <p>There are 5 steps to complete</p> \
                <div class='nhsuk-action-link'> \
                  <a class='nhsuk-action-link__link' href='step-1'> \
                    <svg class='nhsuk-icon nhsuk-icon__arrow-right-circle' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true'> \
                      <path d='M0 0h24v24H0z' fill='none'></path> \
                      <path d='M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z'></path> \
                    </svg> \
                    <span class='nhsuk-action-link__text'>Create a birth notification</span> \
                  </a> \
                </div> \
              </div> \
            </div> \
          </div> \
        </div> \
      </div>";
  if ($('.patient-banner-gender').text() == "Female") {
    $(".patient-details-content").append(bnaHeader);
    $(".patient-details-content").append(bnaCard);
    $("#patient-card-list").append("<li class='overview-card__list-item'><a href='patient-details#bna-section'>Birth notification</a></li>");
  }
});

$("#delivery-place-dropdown").change(function() {
  var choice = $(this).val();
  console.log(choice);

  if (choice == 0 || choice == 2 || choice == 3 || choice == 4 || choice == 5 || choice == 6 || choice == 7) {
    $("#delivery-place-code").parent().show();
    $("#delivery-place-name").parent().show();
  } else {
    $("#delivery-place-code").parent().hide();
    $("#delivery-place-name").parent().hide();
  }
});

$('input:radio[name="number-of-births"]').change(function() {
  if ($(this).val() == 'births-multiple') {
    $('.birth-order-container').show();
  } else {
    $('.birth-order-container').hide();
  }
});

$('.change-address-link').click(function(){
  $(".change-address-container").show();
  $('.existing-address-container').hide();
})

if (returnedPatientsList.length == 0) {
  $('.number-of-results p').remove();
  $('.number-of-results').append("<p class='nhsuk-body'>You can <a href='advanced-details-search'>refine your search</a> to find a match or <a href='nhs-number-search'>perform a new search</a>.</p><p class='nhsuk-body'>Alternatively, you can <a href='allocate-nhs-number-1'>allocate a new NHS Number</a> or <a href='create-birth-notification-1'>create a birth notification without mother's NHS details</a>.</p>")
} else {

  $('.number-of-results p').remove();
  $('.number-of-results').append("<p class='nhsuk-body'>By selecting the mother's name below, you will be taken to her record and able to create a birth notification for the baby.</p><p class='nhsuk-body'>If this isn't the patient you are looking for, you can <a href='allocate-nhs-number-1'>allocate a new NHS Number</a> or <a href='create-birth-notification-1'>create a birth notification without mother's NHS details</a></p>")

}
