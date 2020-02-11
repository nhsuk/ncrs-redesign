$(function() {
  var bnaHeader = "<h1 class='nhsuk-heading-l'>Birth Notification</h1>";
  var bnaCard = "<div class='scra-card'> \
        <div class='scra-card-content'> \
          <div class='nhsuk-grid-row'> \
            <div class='nhsuk-grid-column-full'> \
              <div class='nhsuk-u-reading-width'> \
                <p>Use this feature to submit a birth notification for this patient. You will be asked to provide:</p> \
                <ul class='nhsuk-list nhsuk-list--bullet'> \
                  <li>details about where the birth occurred</li> \
                  <li>details about the person notifying the birth</li> \
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
      </div>"
  if ($('.patient-banner-gender').text() == "Female") {
    $(".patient-details-content").append(bnaHeader);
    $(".patient-details-content").append(bnaCard);
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
