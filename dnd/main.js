$( document ).ready(function() {
  $('.main-body').load('./spells.html');
  $(document).on('click', '.header-tab__spells-db', function() {
    $('.main-body').load('./spells.html');
    return false;
  });
});

let preparedSpells = [];
let preparedCantrips = [];

const spellListItem = function(val) {
  return `
  <div class="prepared-spell">
      <span class="remove-spell" data-name="${val.name}">✖</span> 
      <strong>${val.name.replace(/-/g, ' ')}</strong> - ${val.level}
    </div>
  `};

const vriteChosenSpells = () => {
  $('.prepared-spells .spells, .prepared-spells .cantrips').html('');
  preparedSpells.forEach((val) => {
    $('.prepared-spells .spells').append(spellListItem(val));
  });
  preparedCantrips.forEach((val) => {
    $('.prepared-spells .cantrips').append(spellListItem(val));
  });
};

function ChosenSpell(name, level) {
  this.name = name;
  this.level = level;
}

const markChosenSpells = () => {
  $('.spell').removeClass('already-chosen');
  preparedSpells.forEach((val) => {
    $('#' + val.name).addClass('already-chosen');
  });
};

const SortByLevel = (a, b) => {
  const aLevel = a.level;
  const bLevel = b.level; 
  return ((aLevel < bLevel) ? -1 : ((aLevel > bLevel) ? 1 : 0));
};

// prepare spell
$(document).on('click', '.prepare-spell', function(){
  const spell = $(this).closest('.spell').attr('id');
  const level = $(this).closest('.spell-container').data('level');
  const chosenSpell = new ChosenSpell(spell, level);
  if (level === 0) {
    preparedCantrips.push(chosenSpell);
  } else {
    preparedSpells.push(chosenSpell);
  }
  preparedSpells.sort(SortByLevel);
  vriteChosenSpells();
  markChosenSpells();
  return false;
});

// remove spell
$(document).on('click', '.remove-spell', function() {
  const spellName = $(this).data('name');
  const isSpell = (spell) => {
    return spell.name === spellName; 
  };
  const spellToRemove = preparedSpells.find(isSpell);
  $(this).closest('.prepared-spell').fadeOut(() => {
    preparedSpells = $.grep(preparedSpells, (spell) => {
      return spell != spellToRemove;
    });
    vriteChosenSpells();
    markChosenSpells();
  });
});
