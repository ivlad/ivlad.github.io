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
      $('.scene').remove();
      $('.ambient').remove();
      $('body').append('<span class="video-container"><span class="text-of-video"></span><iframe width="100%" class="last-iframe" height="100%" src="https://www.youtube.com/embed/IwLSrNu1ppI?autoplay=1&showinfo=0&loop=0" frameborder="0" allowfullscreen ></iframe></span>');
    }, 7000);
  }

  const whatToSay = [
  'Help me',
  'This will never stop',
  'I got you',
  'I controll you',
  "Don't move",
  'No escape',
  'Abandon your hope',
  'Party never ends',
  'You cannot resist',
  'Your existance means nothing',
  'Obey me',
  'You are under my command'
  ]

  $(document).on('click', '.video-container', function() {
    $('.text-of-video').addClass('visible').text(whatToSay[Math.floor((Math.random() * 12))]);
    window.setTimeout(function() {
      $('.text-of-video').removeClass('visible');
    }, 1000);
  });
});
