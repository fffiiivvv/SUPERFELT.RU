$(document).ready(function() {
   
   
    
    $('#productsMenuWrp').affix({
        offset: {
          top: 150
        , bottom: function () {
            return (this.bottom = $('.bs-footer').outerHeight(true))
          }
        }
    });
    
    
    //$('body').scrollspy({ target: '#productsList' });
});