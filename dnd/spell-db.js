/*jshint esversion: 6 */

const maxCantrips = 4;
const maxPreparedSpells = 8 + 4;
const sortByLevel = (a, b) => {
  const aLevel = a.level;
  const bLevel = b.level; 
  return ((aLevel < bLevel) ? -1 : ((aLevel > bLevel) ? 1 : 0));
};

function newSpell(name, level) {
  this.name = name;
  this.level = level;
}

export function setSpellLimits() {
  $('.cantrips').attr('data-limit', maxCantrips);
  $('.spells').attr('data-limit', maxPreparedSpells);
}

export function prepareSpell(markChosenSpells) {
  $(document).on('click', '.prepare-cantrip, .prepare-spell', function(){
    const container = $(this).closest('.spell-container');
    const spell = $(this).closest('.spell').attr('id');
    const chosenSpell = new newSpell(spell, container.data('level'));
    const preparedSpells = JSON.parse(localStorage.getItem(container.data('type')));
    if (preparedSpells.length  >= container.data('limit')) {
      return false;
    }
    preparedSpells.push(chosenSpell);
    preparedSpells.sort(sortByLevel);
    localStorage.setItem(container.data('type'), JSON.stringify(preparedSpells));
    markChosenSpells();
    return false;
  });
}
