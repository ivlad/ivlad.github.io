$(document).ready(function() {

  setTimeout(function(){
    $('.prolog').fadeOut('slow', function() {
      $('.container').fadeIn(function() {
        setTimeout(function(){
          $('.gate.side').removeClass('side');
         }, 500);
        setTimeout(function(){
          $('.card').removeClass('side');
         }, 1500);
        setTimeout(function(){
          $('.card-focus').fadeIn();
         }, 2000);
        setTimeout(function(){
          $('.test-info').fadeIn();
         }, 3500);


        $(document).on('click', '.roll-button.roll-button--int', function() {
          $('.roll-button').removeClass('roll-button--int');
          $('.dice-pool-dice').each(function(){
            const left = $(this).css('left').replace('px', '');
            const top = $(this).css('top').replace('px', '');
            $(this).css('left', parseInt(left) + 880 + 'px');
            $(this).css('top', parseInt(top) + Math.floor(Math.random() * 220) + 370  + 'px');
            if ($(this).index() === 1) {
              $(this).addClass('dice-pool-dice-4');
            } else {
              $(this).addClass('dice-pool-dice-6');
            }
          });
          setTimeout(function(){
            $('.card-focus').addClass('step2')
            $('.roll-button').addClass('roll-button--lore');
            $('.test-header').text('TEST LORE');
            $('.dice-pool-dice').remove();
            $('.dice-pool-dices').append('<div class="dice-pool-dice dice-pool-dice--undifined"></div>');
            $('.dice-pool-dices').append('<div class="dice-pool-dice dice-pool-dice--undifined"></div>');
            $('.dice-pool-dices').append('<div class="dice-pool-dice dice-pool-dice--undifined"></div>');
            $('.dice-pool-dices').append('<div class="dice-pool-dice dice-pool-dice--undifined"></div>');
            $('.dice-pool-dices').append('<div class="dice-pool-dice dice-pool-dice--undifined"></div>');
            $('.dice-pool-dices').append('<div class="dice-pool-dice dice-pool-dice--undifined"></div>');
           }, 4500);
        });

        $(document).on('click', '.roll-button.roll-button--lore', function() {
          $('.roll-button').removeClass('roll-button--lore');
          $('.dice-pool-dice').each(function(){
            const left = $(this).css('left').replace('px', '');
            const top = $(this).css('top').replace('px', '');
            $(this).css('left', parseInt(left) + 880 + 'px');
            $(this).css('top', parseInt(top) + Math.floor(Math.random() * 220) + 370  + 'px');
            $(this).addClass('dice-pool-dice-1');
          });
          setTimeout(function(){
            $('.container').addClass('zoom');

            $('.container *').addClass('fadeOut');
            $('.dice-pool-dices, .dice-pool-dice, .dice-pool, .roll-area, .health').removeClass('fadeOut');

             $('body').append('<span class="video-container"><iframe width="0" class="last-iframe" height="0" src="https://www.youtube.com/embed/qm8OERzynpg?autoplay=1&start=15&showinfo=0&loop=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe></span>');
             setTimeout(function(){
               $('.container').css('transition', '2s' );
               $('.container').css('opacity', 0 );
              setTimeout(function(){
                $('body').append('<span class="video-container"><iframe width="0" class="last-iframe" height="0" src="https://www.youtube.com/embed/gI-rJcVKTHg?autoplay=1&&showinfo=0&loop=1&start=7" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe></span>');

                $('body').append('<iframe class="movie-credits" src="credits.htm"></iframe>');


                setTimeout(function(){
                  $('.life-story--4').fadeIn(function() {
                    setTimeout(function(){
                      $('.life-story--4').fadeOut();
                    }, 5000);
                  });
                }, 80000);

                setTimeout(function(){
                  $('.life-story--5').fadeIn(function() {
                    setTimeout(function(){
                      $('.life-story--5').fadeOut();
                    }, 5000);
                  });
                }, 90000);

                setTimeout(function(){
                  $('.life-story--6').fadeIn(function() {
                    setTimeout(function(){
                      $('.life-story--6').fadeOut();
                    }, 5000);
                  });
                }, 100000);

                setTimeout(function(){
                  $('.life-story--7').fadeIn(function() {
                    setTimeout(function(){
                      $('.life-story--7').fadeOut();
                    }, 5000);
                  });
                }, 110000);

                setTimeout(function(){
                  $('body').append('<span class="video-container glithch"><iframe width="0" class="last-iframe" height="0" src="https://www.youtube.com/embed/dqq-UwKurV4?autoplay=1&&showinfo=0&loop=1&start=5" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe></span>');
                  $('body').append('<span class="video-container glithch"><iframe width="0" class="last-iframe" height="0" src="https://www.youtube.com/embed/Ocw8K42sM9s?autoplay=1&&showinfo=0&loop=1&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe></span>');
                  $('body').append('<span class="video-container glithch"><iframe width="0" class="last-iframe" height="0" src="https://www.youtube.com/embed/jsw0dl50nxg?autoplay=1&&showinfo=0&loop=1&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe></span>');
                  $('body').append('<span class="video-container glithch"><iframe width="0" class="last-iframe" height="0" src="https://www.youtube.com/embed/bf7NbRFyg3Y?autoplay=1&&showinfo=0&loop=1&start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe></span>');
                  $('body').append('<span class="video-container glithch"><iframe width="0" class="last-iframe" height="0" src="https://www.youtube.com/embed/TX_X685TGtc?autoplay=1&&showinfo=0&loop=1&start=36" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe></span>');
                }, 115000);

                setTimeout(function(){
                  $('.movie-credits').addClass('movie-credits--glitched');
                  $('.life-story--8').fadeIn(function() {
                    setTimeout(function(){
                      $('.movie-credits').removeClass('movie-credits--glitched');
                      $('.life-story--8').fadeOut();
                      $('.glithch').remove();
                      $('.movie-credits').removeClass('glithch');
                    }, 10000);
                  });
                }, 120000);


                setTimeout(function(){
                  $('.life-story--9').fadeIn();
                }, 135000);


                setTimeout(function(){
                  $('.skeleton-1')
                  .fadeIn()
                  .css({
                    'left': Math.floor(Math.random() * 80)+'%',
                    'top': Math.floor(Math.random() * 80)+'%'
                  });
                }, 140000);

                setTimeout(function(){
                  $('.skeleton-2')
                  .fadeIn()
                  .css({
                    'left': Math.floor(Math.random() * 80)+'%',
                    'top': Math.floor(Math.random() * 80)+'%'
                  });
                }, 150000);
                setTimeout(function(){
                  $('.skeleton-3')
                  .fadeIn()
                  .css({
                    'left': Math.floor(Math.random() * 80)+'%',
                    'top': Math.floor(Math.random() * 80)+'%'
                  });
                }, 160000);

                setTimeout(function(){
                  $('.skeleton-4')
                  .fadeIn()
                  .css({
                    'left': Math.floor(Math.random() * 80)+'%',
                    'top': Math.floor(Math.random() * 80)+'%'
                  });
                }, 170000);

                setTimeout(function(){
                  $('.skeleton-5')
                  .fadeIn();
                }, 180000);

                setTimeout(function(){
                  $('.skeleton-6')
                  .fadeIn()
                  .css({
                    'left': Math.floor(Math.random() * 80)+'%',
                    'top': Math.floor(Math.random() * 80)+'%'
                  });
                }, 190000);

                setTimeout(function(){
                  $('.skeleton-7')
                  .fadeIn()
                  .css({
                    'left': Math.floor(Math.random() * 80)+'%',
                    'top': Math.floor(Math.random() * 80)+'%'
                  });
                }, 200000);

                setTimeout(function(){
                  $('.movie-credits').fadeOut(function(){
                    $('.container').remove();
                    $('.the-end').css('display', 'flex');
                    $('.life-story--9').fadeOut();
                    $('.skeleton').fadeOut();
                  });
                }, 204000);

                setTimeout(function(){
                  window.close();
                }, 254000);

              }, 1000);
            }, 150000);
          }, 2000);
        });
      });
    });
  }, 6000);

});

