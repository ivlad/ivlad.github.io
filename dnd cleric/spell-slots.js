/*jshint esversion: 6 */
export default slots => {

  if (!localStorage.getItem('slots')) {
    localStorage.setItem('slots', '[{"lvl": "1", "available": "4", "active": 4}, {"lvl": "2", "available": "3", "active": 3}]');
  }

  const spellSlots = JSON.parse(localStorage.getItem('slots'));

  for (let spellSlot of spellSlots) {
    let step;
    for (step = 0; step < spellSlot.active; step++) {
      $('.spell-slots').append(`
          <div class="spell-slot" data-lvl='${spellSlot.lvl}'>${spellSlot.lvl}</div>
        `
      );
    }
  }

  if (!localStorage.getItem('divinity')) {
    localStorage.setItem('divinity', '1');
  }

  let channelDivinity = JSON.parse(localStorage.getItem('divinity'));

  if (channelDivinity >= 1) {
    $('.channel-divinity').show();
  }

  // Click channel divinity
  $(document).on('click', '.channel-divinity', function() {
    const r = confirm('Use Channel Divinity?');
    if (r == true) {
        localStorage.setItem('divinity', channelDivinity - 1);
        channelDivinity = JSON.parse(localStorage.getItem('divinity'));
        $('.channel-divinity strong').text(`channelDivinity X ${channelDivinity}`);
      if (channelDivinity < 1 ) {
        $('.channel-divinity').hide();
      }
    }
  });

};
