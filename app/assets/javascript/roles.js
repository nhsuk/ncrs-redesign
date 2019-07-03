$( ".role-permissions-link" ).click(function() {
    $(this).closest('.nhsuk-grid-row').find('.role-permissions-content').toggleClass("hidden open");
});
