$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'gender-not-known-advanced') {
            $('.gender-search-inset-text').show();
       }

       else {
            $('.gender-search-inset-text').hide();
       }
   });
});
