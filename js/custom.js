
  (function ($) {
  
  "use strict";
// For a sticky navigaton header property
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    $('.sticky-header').addClass('sticky')
  }
  else{
    $('.sticky-header').removeClass('sticky')
  }
});

// For the expanding cards section 
const images = document.querySelectorAll('.dispImages');

images.forEach(dispImages => {
  dispImages.addEventListener('click', () => {
    removeActiveClasses();
    dispImages.classList.add('active');
    return false;

  })

})

function removeActiveClasses(){
  images.forEach(dispImages => { 
  dispImages.classList.remove('active');
  })
}

// For the expanding cards section 
// const photos = document.querySelectorAll('.imgDisplays');

// photos.forEach(imgDisplays => {
//   imgDisplays.addEventListener('click', () => {
//     removeActiveClasses();
//     imgDisplays.classList.add('active');

//   })

// })

// function removeActiveClasses(){
//   photos.forEach(imgDisplays => { 
//   imgDisplays.classList.remove('active');
//   })
// }


// WAS MEANT FOR NAVBAR COLLAPSING
    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
  })(window.jQuery);