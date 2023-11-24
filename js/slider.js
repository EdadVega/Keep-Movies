document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExampleAutoplaying');
  
    var intervalTime = 2000;
  
    if (myCarousel) {
      myCarousel.addEventListener('slide.bs.carousel', function() {
        myCarousel.carousel('pause');
      });
  
      myCarousel.setAttribute('data-bs-interval', intervalTime);
    }
  });
  