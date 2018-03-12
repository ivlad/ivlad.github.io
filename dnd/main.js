/*jshint esversion: 6 */

import setSpellSlots from './spell-slots.js';
import * as spellDb from './spell-db.js';

$( document ).ready(function() {
  // Initial load
  if (!localStorage.getItem('cantrips')) {
    localStorage.setItem('cantrips', '[]');
  }
  if (!localStorage.getItem('spells')) {
    localStorage.setItem('spells', '[]');
  }
  $('.main-body').load('./spell-db.html', () => {
    const lifeDomainSpells = ['bless', 'cure-wounds', 'lesser-restoration', 'spiritual-weapon'];
    spellDb.markAndWriteChosenSpells();
    spellDb.setSpellLimits();
    if (!localStorage.getItem('LifeSpellsPrepared')) {
      localStorage.setItem('LifeSpellsPrepared', 'true');
      for (let spell of lifeDomainSpells) {
        $('#' + spell).find('.prepare-spell').click();
      }
    }
  });
  // Enter spells database
  $(document).on('click', '.header-tab__spells-db', () => {
    $('.main-body').load('./spell-db.html', () => {
      spellDb.markAndWriteChosenSpells();
      spellDb.setSpellLimits();
    });
    return false;
  });
  // Enter spells slot page
  $(document).on('click', '.header-tab__spells-slots', function() {
    $('.main-body').load('./spellslots.html', function() {
      spellDb.markAndWriteChosenSpells();
      setSpellSlots();
    });
    return false;
  });

  spellDb.prepareSpellListener();
  spellDb.removeSpellListener();



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
      $('.spell-data').load('./spell-db.html #' + spellName, function() {
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
});