if (!localStorage.getItem('preparedSpells')) {
  localStorage.setItem('preparedSpells', '{}');
}

const stats = {
  level: 1,
  cantrips: 3,
  spellSlots: {
  // lvl: slots
    1: 3,
    2: 2,
    3: 2,
    4: 1,
  },
  proficencyBonus: 2,
  inteligence: 16,
}

if (!localStorage.getItem('spellSlots')) {
  localStorage.setItem('spellSlots', JSON.stringify(stats.spellSlots));
}

const vriteSpellsToStorage = (data) => {
    const oldItems = JSON.parse(localStorage.getItem('preparedSpells'));
    const spellId = data.spellName.replace(/\W/g, '');
    oldItems[spellId] = {
      'spellLevel': `${data.spellLevel}`,
      'spellName': `${data.spellName}`,
    };
    localStorage.setItem('preparedSpells', JSON.stringify(oldItems));
    return false;
}


import importSpellDb from './spell-db/spell-db.js';
importSpellDb(vriteSpellsToStorage, stats);

import importPreparedSpells from './prepared-spells/prepared-spells.js';
importPreparedSpells(stats);

$(document).on('click', '.long-rest', () => {
  var r = confirm('Long Rest?');
  if (r == true) {
    localStorage.setItem('spellSlots', JSON.stringify(stats.spellSlots));
    importPreparedSpells();
  }
})
