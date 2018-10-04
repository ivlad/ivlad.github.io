export default (vriteSpellsToStorage, stats) => {

  const  cantrips = [
    {
      name: 'Acid Splash',
      castingTime: '1 action',
      type: 'action',
      range: '60 feet',
      components: 'V S',
      duration: 'Instantaneous',
      description: `
        You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.
        <br><br>
        This spell's damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6).
      `,
    },
    {
      name: 'Poison Spray',
      castingTime: '1 action',
      type: 'action',
      range: '10 feet',
      components: 'V S',
      duration: 'Instantaneous',
      description: `
        You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.
        <br><br>
        This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).
      `,
    },
    {
      name: 'Mage Hand',
      castingTime: '1 action',
      type: 'action',
      range: '30 feet',
      components: 'V S',
      duration: '1 minute',
      description: `
        A spectral, floating hand appears at a point you choose within range. The hand lasts for the Duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.
        <br><br>
        You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.
        <br><br>
        The hand can't Attack, activate magical items, or carry more than 10 pounds.
      `,
    },
  ]

  const  lvl1Spells = [
    {
      name: 'Fog Cloud',
      castingTime: '1 action',
      type: 'Concentration',
      range: '120 feet',
      components: 'V S',
      duration: 'Conc. Up to 1 hour',
      description: `
        You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere spreads around corners, and its area is heavily obscured. It lasts for the Duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.
        <br><br>
        At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.
        <br><br>
        When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.
      `,
    },
    {
      name: 'Tenser\'s Floating Disk',
      castingTime: '1 action (Ritual)',
      type: 'ritual',
      range: '30 feet',
      components: 'V S M (Mercury)',
      duration: '1 hour',
      description: `
        This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the Duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.
        <br><br>
        The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can more across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.
        <br><br>
        If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.
      `,
    },
  ]

  const  lvl2Spells = [
    {
      name: 'LVL 2 STUFF',
      castingTime: '1 action',
      type: 'Concentration',
      range: '120 feet',
      components: 'V S',
      duration: 'Conc. Up to 1 hour',
      description: `
        You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere spreads around corners, and its area is heavily obscured. It lasts for the Duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.
        <br><br>
        At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.
        <br><br>
        When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.
      `,
    },
    {
      name: 'LVL 2 SHIT',
      castingTime: '1 action (Ritual)',
      type: 'ritual',
      range: '30 feet',
      components: 'V S M (Mercury)',
      duration: '1 hour',
      description: `
        This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the Duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.
        <br><br>
        The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can more across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.
        <br><br>
        If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.
      `,
    },
  ]

  const markButtonsAsSelected = () => {
    const updatedStorage = JSON.parse(localStorage.getItem('preparedSpells'));
    $('.gold-button').removeClass('gold-button--disabled');
    Object.keys(updatedStorage).forEach(function(key) {
        $(`#${key}`).find('.gold-button').addClass('gold-button--disabled');
    });
  }

  const updatePreparedSpellsLIst = () => {
    $('.prepared-spells-box__list').html('');
    const updatedStorage = JSON.parse(localStorage.getItem('preparedSpells'));
    Object.keys(updatedStorage).forEach(function(key) {
      $('.prepared-spells-box__list').append(`
        <li data-level="${updatedStorage[key].spellLevel}">
          <div class="prepared-spells-box__remove-spell dialog-red__cancel"></div>
          <span class="prepared-spell-name">${updatedStorage[key].spellName}</span>&nbsp;(${updatedStorage[key].spellLevel})
        </li>
      `)
    });
    var $wrapper = $('.prepared-spells-box__list');
    $wrapper.find('li').sort(function(a, b) {
      return +a.dataset.level - +b.dataset.level;
    })
    .appendTo($wrapper);
  }

  const learnedSpells =
    [
      cantrips,
      lvl1Spells,
      lvl2Spells
    ]

  $.get( 'spell-db/spell-db.html', function( data ) {
    $('body').append( data );
    learnedSpells.forEach((learnedSpellType, index) => {
      learnedSpellType.forEach(val => {
        $('.spells-db-lvl' + index).append(`
          <div class='spell-db-item dialog-blue' id="${val.name.replace(/\W/g, '')}">
            <h1>${val.name}</h1>
            <small>
              Casting Time: ${val.castingTime} <br>
              Range: ${val.range} <br>
              Duration: ${val.duration} <br>
              Type: ${val.type}<br>
              Components: ${val.components}<br>
            </small>
            <p>
              ${val.description}
            </p>
            <a class="gold-button prepare-spell">PREPARE</a>
          </div>
        `);
      });
    });
    markButtonsAsSelected();
    updatePreparedSpellsLIst();
  });

  $(document).on('click', '.lvl-flag', e => {
    $('.lvl-flag').removeClass('lvl-flag--selected');
    $(e.target).addClass('lvl-flag--selected');
    $('.spells-db-lvl').hide();
    $('.spells-db-lvl' + $(e.target).text() ).removeClass('hide').show();
  });

  $(document).on('click', '.prepare-spell', e => {
    const spellLevel = $(e.target).closest('.spells-db-lvl').data('spell-lvl');
    const spellName = $(e.target).closest('.spell-db-item').find('h1').text();
    const spellsInStorage = JSON.parse(localStorage.getItem('preparedSpells'));

    // Here is where I calculate limit of available spells like some kind of a retard.
    let preparedCantrips = 0;
    let preparedSpells = 0;
    Object.keys(spellsInStorage).forEach(function(key) {
      if (spellsInStorage[key].spellLevel === '0' ) {
        preparedCantrips = preparedCantrips + 1;
      } else {
        preparedSpells = preparedSpells + 1;
      }
    });
    if (spellLevel === 0) {
      if (preparedCantrips === stats.cantrips) {
        return false;
      }
    } else {
      if ((stats.inteligence - 10) / 2 + stats.level === preparedSpells ) {
        return false;
      }
    }

    vriteSpellsToStorage({spellLevel, spellName});
    markButtonsAsSelected();
    updatePreparedSpellsLIst();
  });

  $(document).on('click', '.prepared-spells-box h1', e => {
    $('.prepared-spells-box').toggleClass('prepared-spells-box--active');
  });

  $(document).on('click', '.prepared-spells-box__remove-spell', e => {
    const $this = $(e.target);
    const spellName = $this.closest('li').find('.prepared-spell-name').text().replace(/\W/g, '');
    const spellStorage = JSON.parse(localStorage.getItem('preparedSpells'));
    delete spellStorage[spellName];
    localStorage.setItem('preparedSpells', JSON.stringify(spellStorage));
    markButtonsAsSelected();
    updatePreparedSpellsLIst();
  });
};
