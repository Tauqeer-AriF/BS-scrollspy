

    $(document).ready(function(){

  $('body').scrollspy({target: ".navbar", offset: 50});   

  $("#navbarToggle a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }  
  });
});
