export default stats => {
  const hideLowLevelSlots = () => {
    var list = document.getElementsByClassName('spell-slot');
    for (let i=0; i<list.length; i++) {
      const spellLevel = list[i].closest('li').dataset.level;
      const spellSlotLevel = list[i].textContent;
      if (spellSlotLevel < spellLevel) {
        list[i].setAttribute('style', 'display: none');
      };
    }
  }

  $.get( 'prepared-spells/prepared-spells.html', function( data ) {
    $('body').append( data );
    writeSpells();
  });

  let remainingSpells = JSON.parse(localStorage.getItem('spellSlots'));

  const writeSpells = () => {
    const preparedSpellsLIst = JSON.parse(localStorage.getItem('preparedSpells'));
    $('.prepared-spells').html('');
    console.log('here1');
    Object.keys(preparedSpellsLIst).forEach(function(key) {
      console.log('here2')
      $('.prepared-spells')
      .append(`
        <li class="prepared-spell dialog-blue" data-level="${preparedSpellsLIst[key].spellLevel}" data-id="${preparedSpellsLIst[key].spellName.replace(/\W/g, '')}">
          <h2>${preparedSpellsLIst[key].spellName}</h2>
            <a class="gold-button spell-info">INFO</a>
            <div class="spell-slots-container"></div>
        </li>
      `)
      hideLowLevelSlots();
    });

    var $wrapper = $('.prepared-spells');
    $wrapper
      .find('li')
      .sort(function(a, b) {
        return +a.dataset.level - +b.dataset.level;
      })
      .appendTo($wrapper);

      Object.keys(remainingSpells).forEach(function(key) {
        for (let i = 0; i < remainingSpells[key]; i++) {
          $('.spell-slots-container').append(`<div class="spell-slot">${key}</div>`);
        }
      });
      hideLowLevelSlots();
    };

  $(document).on('click', '.tab__prepared-spells', () => {
    writeSpells();
  });

  $(document).on('click', '.spell-info', e => {
    const spellId = $(e.target).closest('li').data('id');
    const spellData = $('.learned-spells').find(`#${spellId}`).clone();
    $('.spell-data-modal').remove();
    spellData
      .addClass('spell-data-modal')
      .find('.gold-button')
      .hide()
      .after(`
        <a class="gold-button spell-data-modal__close">CLOSE</a>
      `);

    $('.prepared-spells').append(spellData)
  });

  $(document).on('click', '.spell-data-modal__close', () => {
    $('.spell-data-modal').remove();
  });

  $(document).on('click', '.spell-slot', e => {
    const currentLevel = $(e.target).text()
    remainingSpells[currentLevel] = remainingSpells[currentLevel] - 1;
    localStorage.setItem('spellSlots', JSON.stringify(remainingSpells));
    writeSpells();
  });

};
