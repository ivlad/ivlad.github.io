/*jshint esversion: 6 */

import setSpellSlots from './spell-slots.js';
import * as spellDb from './spell-db.js';

$( document ).ready(function() {
  $('.main-body').load('./spells.html', () => {
    markChosenSpells();
    spellDb.setSpellLimits();
    prepareLifeDomainSpells();
  });
  $(document).on('click', '.header-tab__spells-db', () => {
    $('.main-body').load('./spells.html', () => {
      markChosenSpells();
      spellDb.setSpellLimits();
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

  // prepare life domain spells
  const prepareLifeDomainSpells = () => {
    if (!localStorage.getItem('LifeSpellsPrepared')) {
      localStorage.setItem('LifeSpellsPrepared', 'true');
      for (let spell of lifeDomainSpells) {
        $('#' + spell).find('.prepare-spell').click();
      }
    }
  };

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
      if ($(spell).find('.remove-spell').data('lvl') > slotLvl) {
        $(spell).addClass('disabled');
      }
    }
  });

  // Click prepared spell
  $(document).on('click', '.prepared-spells--spellsolots .prepared-spell', function() {
    if($('.spell-slot.selected').length) {
      $(this).fadeOut(200).fadeIn(200);
      const spellSlots = JSON.parse(localStorage.getItem('slots'));
      const lvl = $('.spell-slot.selected').data('lvl') - 1;
      spellSlots[lvl].active = spellSlots[lvl].active - 1;
      localStorage.setItem('slots', JSON.stringify(spellSlots));
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
  
  // Click channel divinity
  $(document).on('click', '.spell-slot--channel-divinity', function() {
    var r = confirm('Use Channel Divinity?');
    if (r == true) {
      $(this).removeClass('selected').addClass('used');
    }
  });

  // Long rest
  $(document).on('click', '.rest--long', function() {
    const cnfirmSlotUsage = confirm('Rest long rest?');
    if (cnfirmSlotUsage == true) {
      $('.spell-slot').remove();
      localStorage.removeItem('slots');
      setSpellSlots();
    } 
  });

  // Short rest
  $(document).on('click', '.rest--short', function() {
    const cnfirmSlotUsage = confirm('Rest short rest?');
    if (cnfirmSlotUsage == true) {
      $('.spell-slot--channel-divinity').removeClass('used');
    } 
  });

  // Hide spell info on spell slot page
  $(document).on('click', '.spell-data', function() {
    $('.spell-data').remove();
    return false;
  });

  spellDb.prepareSpell(markChosenSpells);
  spellDb.removeSpell(markChosenSpells);

  
});