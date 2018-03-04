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

};