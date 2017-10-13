$( document ).ready(function() {
  $(document).on('click', '.scene1 .next', function() {
    var $this = $(this).closest('.scene');
    $this.addClass('transition');
    window.setTimeout(function() {
      $this.removeClass('current-scene');
      $('.scene1').hide();
      $('.scene2').addClass('current-scene');
    }, 800);
  });

  $(document).on('click', '.scene2 .next', function() {
    var $this = $(this).closest('.scene');
    $this.addClass('transition');
    window.setTimeout(function() {
      $this.removeClass('current-scene');
      $('.scene2').hide();
      $('.scene3').addClass('current-scene');
    }, 800);
  });

  $(document).on('click', '.scene3 .next', function() {
    var $this = $(this).closest('.scene');
    $this.addClass('transition');
    window.setTimeout(function() {
      $this.removeClass('current-scene');
      $('.scene3').hide();
      $('.scene4').addClass('current-scene');
    }, 800);
  });

  $(document).on('click', '.scene4 .next', function() {
    var $this = $(this).closest('.scene');
    $this.addClass('transition');
    window.setTimeout(function() {
      $this.removeClass('current-scene');
      $('.scene4').hide();
      $('.scene5').addClass('current-scene');
      startVision();
    }, 800);
  });

  var flickerNumber = 0;

  var startVision = function() {
    window.setTimeout(function() {
      $('.scene5').addClass('vision-starts');
      $('.horrible-visions').addClass('glitch');
    }, 14000);
    window.setTimeout(function() {
      $('.scene5').css('opacity', 0);
      $('body').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/0-OS06n2My0?start=1008&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    }, 20000);
    window.setTimeout(function() {
      $('body').css('background-image', 'url(https://media.giphy.com/media/l3q2N3zQsKzC99UIM/giphy.gif)');
    }, 20500);
    window.setTimeout(function() {
      $('body').css('background-image', 'none').find('iframe').remove();
    }, 45000);
    window.setTimeout(function() {
      $('body').css({
        'background-image': 'url(https://image.prntscr.com/image/v9kz6SPmRcKK5nmfoQXzaA.png)',
        'background-size': '30%',
        'transition': '.2s'
      }).find('iframe').remove();
      $('.scene5').hide();
      turnOff();
    }, 47000);

    window.setTimeout(function() {
      $('.scene').remove();
      $('body').append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZWO6TQHw7is?autoplay=1" frameborder="0" allowfullscreen ></iframe>');
      turnOff();
    }, 107000);

  }

  var turnOff = function() {
    window.setTimeout(function() {
      $('body').css('background-image', 'url(https://image.prntscr.com/image/jPqck1yLQJiWUmgACG7L7g.jpg');
      if (flickerNumber < 6) {
        flickerNumber = flickerNumber + 1;
        turnOn();
      } else {
        $('.date').show();
        window.setTimeout(function() {
          $('.date').css('opacity', 1);
        }, 3000);
      }
    }, (Math.random() * 300) + 1);
  }
   var turnOn = function() {
    window.setTimeout(function() {
      $('body').css('background-image', 'url(https://image.prntscr.com/image/v9kz6SPmRcKK5nmfoQXzaA.png)');
      turnOff();
    }, (Math.random() * 300) + 1);
  }
});
