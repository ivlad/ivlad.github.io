$( document ).ready(function() {
  $('.main-body').load('./spells.html');
  $(document).on('click', '.header-tab__spells-db', function() {
    $('.main-body').load('./spells.html');
    return false;
  });
});

const vriteChosenSpells = function() {
  $('.prepared-spells').html('');
  preparedSpells.forEach(function(val) {
    $('.prepared-spells').append(`
      <div class="prepared-spell">
        <span class="remove-spell" data-name="${val.name}">(X)</span> 
        <strong>${val.name.replace(/-/g, ' ')}</strong> - ${val.level}
      </div>
    `);
  });
};

let preparedSpells = [];

function ChosenSpell(name, level) {
  this.name = name;
  this.level = level;
}

const markChosenSpells = function() {
  $('.spell').removeClass('already-chosen');
  preparedSpells.forEach(function(val) {
    $('#' + val.name).addClass('already-chosen');
  });
};

function SortByLevel(a, b){
  var aLevel = a.level;
  var bLevel = b.level; 
  return ((aLevel < bLevel) ? -1 : ((aLevel > bLevel) ? 1 : 0));
}


$(document).on('click', '.prepare-spell', function(){
  if ($(this).hasClass('.already-chosen')) {
    return false;
  }
  const spell = $(this).closest('.spell').attr('id');
  const level = $(this).closest('.spell-container').data('level');
  const chosenSpell = new ChosenSpell(spell, level);
  preparedSpells.push(chosenSpell);
  preparedSpells.sort(SortByLevel);
  vriteChosenSpells();
  markChosenSpells();
  return false;
});

$(document).on('click', '.remove-spell', function() {
  const spellName = $(this).data('name');
  function isSpell(spell) { 
    return spell.name === spellName;
  }
  const spellToRemove = preparedSpells.find(isSpell);

  preparedSpells = jQuery.grep(preparedSpells, function(value) {
    return value != spellToRemove;
  });
  vriteChosenSpells();
  markChosenSpells();
});
