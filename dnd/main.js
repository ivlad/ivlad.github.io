$( document ).ready(function() {
  $('.main-body').load('./spells.html');
  $(document).on('click', '.header-tab__spells-db', function() {
    $('.main-body').load('./spells.html');
  });
});

