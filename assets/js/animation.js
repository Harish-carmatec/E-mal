$(document).ready(function() {
    $('.banner-content').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated-zoomin', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.servc-points').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated-fromright', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.servc-img, .contact-address').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated-fromleft', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.home-two .about-con').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated-fadein', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.team.summery').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated-frombottom', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.contact.summery').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated-spin', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.contact-form button').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated-spin', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.home-two').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animation-bgcolor', // Class to add to the elements when they are visible
      offset: 200    
    });
});