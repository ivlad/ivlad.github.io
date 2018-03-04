/*jshint esversion: 6 */


// MODULE TEST FOR THE FUTURE
import setSpellSlots from './spell-slots.js';

$( document ).ready(function() {
  $('.main-body').load('./spells.html', () => {
    prepareLifeDomainSpells();
    markChosenSpells();
  });
  $(document).on('click', '.header-tab__spells-db', () => {
    $('.main-body').load('./spells.html', () => {
      markChosenSpells();
    });
    return false;
  });
  if (!localStorage.getItem('cantrips')) {
    localStorage.setItem('cantrips', '[]');
  }
  if (!localStorage.getItem('spells')) {
    localStorage.setItem('spells', '[]');
  }

  let preparedSpells = [];
  const lifeDomainSpells = ['bless', 'cure-wounds', 'lesser-restoration', 'spiritual-weapon'];
  const maxCantrips = 4;
  const maxPreparedSpells = 8 + 4;
  const spellListItem = (val) => {
    return `
    <div class="prepared-spell ${val.name}">
        <span class="remove-spell" data-name="${val.name}" data-lvl="${val.level}">✖</span> 
        <strong>${val.name.replace(/-/g, ' ')}</strong> - ${val.level}
      </div>
    `;};

  const vriteChosenSpells = () => {
    $('.prepared-spells .spells, .prepared-spells .cantrips').html('');
    const preparedSpells = JSON.parse(localStorage.getItem('spells'));
    for (let val of preparedSpells) {
      $('.prepared-spells .spells').append(spellListItem(val));
    }
    const preparedCantrips = JSON.parse(localStorage.getItem('cantrips'));
    for (let val of preparedCantrips) {
      $('.prepared-spells .cantrips').append(spellListItem(val));
    }
  };

  function ChosenSpell(name, level) {
    this.name = name;
    this.level = level;
  }

  const markChosenSpells = () => {
    vriteChosenSpells();
    $('.spell').removeClass('already-chosen');
    const preparedCantrips = JSON.parse(localStorage.getItem('cantrips'));
    const preparedSpells = JSON.parse(localStorage.getItem('spells'));

    for (let val of preparedCantrips) {
      $('#' + val.name).addClass('already-chosen');
    }
    for (let val of preparedSpells) {
      $('#' + val.name).addClass('already-chosen');
    }
  };

  const SortByLevel = (a, b) => {
    const aLevel = a.level;
    const bLevel = b.level; 
    return ((aLevel < bLevel) ? -1 : ((aLevel > bLevel) ? 1 : 0));
  };

  // prepare life domain spells
  const prepareLifeDomainSpells = () => {
    if (!localStorage.getItem('LifeSpellsPrepared')) {
      localStorage.setItem('LifeSpellsPrepared', 'true');
      for (let spell of lifeDomainSpells) {
        $('#' + spell).find('.prepare-spell').click();
      }
    }
  };

  // prepare spell
  $(document).on('click', '.prepare-spell', function(){
    const spell = $(this).closest('.spell').attr('id');
    const level = $(this).closest('.spell-container').data('level');
    const chosenSpell = new ChosenSpell(spell, level);
    const preparedSpells = JSON.parse(localStorage.getItem('spells'));
    if (preparedSpells.length + 1 <= maxPreparedSpells) {
      preparedSpells.push(chosenSpell);
      localStorage.setItem('spells', JSON.stringify(preparedSpells));
      markChosenSpells();
    }
    return false;
  });

  // prepare cantrip
  $(document).on('click', '.prepare-cantrip', function(){
    const cantrip = $(this).closest('.spell').attr('id');
    const chosenCantrip = new ChosenSpell(cantrip, 0);
    const preparedCantrips = JSON.parse(localStorage.getItem('cantrips'));
    if (preparedCantrips.length + 1 <= maxCantrips) {
      preparedCantrips.push(chosenCantrip);
      localStorage.setItem('cantrips', JSON.stringify(preparedCantrips));
      markChosenSpells();
    }
    return false;
  });


  // remove spell
  $(document).on('click', '.remove-spell', function() {
    let preparedCantrips = JSON.parse(localStorage.getItem('cantrips'));
    let preparedSpells = JSON.parse(localStorage.getItem('spells'));
    const spellName = $(this).data('name');
    const isSpell = (spell) => {
      return spell.name === spellName; 
    };
    let cantripToRemove =  preparedCantrips.find(isSpell);
    preparedCantrips = $.grep(preparedCantrips, (spell) => {
      return spell != cantripToRemove;
    });
    localStorage.setItem('cantrips', JSON.stringify(preparedCantrips));

    let spellToRemove =  preparedSpells.find(isSpell);
    preparedSpells = $.grep(preparedSpells, (spell) => {
      return spell != spellToRemove;
    });
    localStorage.setItem('spells', JSON.stringify(preparedSpells));
    $(this).closest('.prepared-spell').fadeOut(() => {
      markChosenSpells();
    });
  });

  // Spell slot page
  $(document).on('click', '.header-tab__spells-slots', function() {
    $('.main-body').load('./spellslots.html', function() {
      markChosenSpells();
      setSpellSlots();
    });
  });

  // Activate Spell slot
  $(document).on('click', '.spell-slot', function() {
    $('.spell-slot').not(this).removeClass('selected');
    $(this).toggleClass('selected');
    const slotLvl = $('.spell-slot.selected').data('lvl');
    $('.prepared-spells--spellsolots .prepared-spell').removeClass('disabled');
    for (let spell of $('.prepared-spells--spellsolots .prepared-spell')) {
      if ($(spell).find('.remove-spell').data('lvl') < slotLvl) {
        $(spell).addClass('disabled');
      }
    }
  });
  
  // Long rest
  $(document).on('click', '.rest--long', function() {
    const cnfirmSlotUsage = confirm('Rest long rest?');
    if (cnfirmSlotUsage == true) {
      $('.spell-slot').removeClass('used');
    } 
  });

  // Short rest
  $(document).on('click', '.rest--short', function() {
    const cnfirmSlotUsage = confirm('Rest short rest?');
    if (cnfirmSlotUsage == true) {
      $('.spell-slot--channel-divinity').removeClass('used');
    } 
  });

  // Click prepared spell
  $(document).on('click', '.prepared-spells--spellsolots .prepared-spell', function() {
    if($('.spell-slot.selected').length) {
      $('.spell-slot.selected').removeClass('selected').addClass('used');
      $('.prepared-spells--spellsolots .prepared-spell').removeClass('disabled');
    } else {
      $('.spell-data').remove();
      $(this).append(`
        <div class='spell-data'>spell data</div>
      `);
      const spellName = $(this).find('.remove-spell').data('name');
      $('.spell-data').load('./spells.html #' + spellName, function() {
      });
    }
  });

  // Hide spell info on spell slot page
  $(document).on('click', '.spell-data', function() {
    $('.spell-data').remove();
    return false;
  });
});