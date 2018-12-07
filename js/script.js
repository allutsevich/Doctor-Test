$(function(){

    $('.content-block__link').on('click', function() {
       $('.invisible-box').show(0, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');

            } 
       });

    });

});