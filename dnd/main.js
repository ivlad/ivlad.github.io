
$( document ).ready(function() {
  $('.main-body').load('./spells.html', () => {
    prepareLifeDomainSpells();
  });
  $(document).on('click', '.header-tab__spells-db', () => {
    $('.main-body').load('./spells.html', () => {
      markChosenSpells();
    });
    return false;
  });

  let preparedSpells = [];
  let preparedCantrips = [];
  const lifeDomainSpells = ['bless', 'cure-wounds', 'lesser-restoration', 'spiritual-weapon'];
  const maxCantrips = 4;
  const maxPreparedSpells = 8 + 4;
  const maxSpells = {
    lvl1: 4,
    vlv2: 3,
  };

  const spellListItem = (val) => {
    return `
    <div class="prepared-spell">
        <span class="remove-spell" data-name="${val.name}" data-lvl="${val.level}">✖</span> 
        <strong>${val.name.replace(/-/g, ' ')}</strong> - ${val.level}
      </div>
    `};

  const vriteChosenSpells = () => {
    $('.prepared-spells .spells, .prepared-spells .cantrips').html('');
    for (let val of preparedSpells) {
      $('.prepared-spells .spells').append(spellListItem(val));
    };
    for (let val of preparedCantrips) {
      $('.prepared-spells .cantrips').append(spellListItem(val));
    };
  };

  function ChosenSpell(name, level) {
    this.name = name;
    this.level = level;
  }

  const markChosenSpells = () => {
    vriteChosenSpells();
    $('.spell').removeClass('already-chosen');
    for (let val of preparedCantrips) {
      $('#' + val.name).addClass('already-chosen');
    }
    for (let val of preparedSpells) {
      $('#' + val.name).addClass('already-chosen');
    };
  };

  const SortByLevel = (a, b) => {
    const aLevel = a.level;
    const bLevel = b.level; 
    return ((aLevel < bLevel) ? -1 : ((aLevel > bLevel) ? 1 : 0));
  };

  // prepare life domain spells
  const prepareLifeDomainSpells = () => {
    for (let spell of lifeDomainSpells) {
      $('#' + spell).find('.prepare-spell').click();
    }
  };

  // prepare spell
  $(document).on('click', '.prepare-spell', function(){
    const spell = $(this).closest('.spell').attr('id');
    const level = $(this).closest('.spell-container').data('level');
    const chosenSpell = new ChosenSpell(spell, level);
    if (preparedSpells.length + 1 <= maxPreparedSpells) {
      preparedSpells.push(chosenSpell);
      preparedSpells.sort(SortByLevel);
      markChosenSpells();
    }
    return false;
  });

  // prepare cantrip
  $(document).on('click', '.prepare-cantrip', function(){
    const spell = $(this).closest('.spell').attr('id');
    const chosenSpell = new ChosenSpell(spell, 0);
    if (preparedCantrips.length + 1 <= maxCantrips) {
      preparedCantrips.push(chosenSpell);
      markChosenSpells();
    }
    return false;
  });


  // remove spell
  $(document).on('click', '.remove-spell', function() {
    const spellName = $(this).data('name');
    const isSpell = (spell) => {
      return spell.name === spellName; 
    };
    let spellToRemove =  preparedSpells.find(isSpell);
    if ($(this).data('lvl') === 0) {
      spellToRemove =  preparedCantrips.find(isSpell);
    }
    
    preparedCantrips = $.grep(preparedCantrips, (spell) => {
      return spell != spellToRemove;
    });
    preparedSpells = $.grep(preparedSpells, (spell) => {
      return spell != spellToRemove;
    });
    $(this).closest('.prepared-spell').fadeOut(() => {
      markChosenSpells();
    });
  });


  $(document).on('click', '.header-tab__spells-slots', function() {
    $('.main-body').load('./spellslots.html', function() {
      markChosenSpells();
    });
  });

  $(document).on('click', '.spell-slot', function() {
    const cnfirmSlotUsage = confirm('Use this spell slot?');
    if (cnfirmSlotUsage == true) {
      $(this).addClass('used');
    } 
  });

  $(document).on('click', '.rest--long', function() {
    const cnfirmSlotUsage = confirm('Rest long rest?');
    if (cnfirmSlotUsage == true) {
      $('.spell-slot').removeClass('used');
    } 
  });

  $(document).on('click', '.rest--short', function() {
    const cnfirmSlotUsage = confirm('Rest short rest?');
    if (cnfirmSlotUsage == true) {
      $('.spell-slot--channel-divinity').removeClass('used');
    } 
  });

  $(document).on('click', '.prepared-spells--spellsolots .prepared-spell', function() {
    $('.spell-data').remove();
    $(this).append(`
      <div class='spell-data'>spell data</div>
    `);
    const spellName = $(this).find('.remove-spell').data('name');
    $('.spell-data').load('./spells.html #' + spellName, function() {
    });
  });

  $(document).on('click', '.spell-data', function() {
    $('.spell-data').remove();
    return false;
  });
});