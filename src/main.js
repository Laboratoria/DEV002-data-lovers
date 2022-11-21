// import {bla,bla,bla...bla}
// import data from './data/harrydata.js';

const spells = [
  {
    "id": 1,
    "name": "Aberto",
    "other_name": null,
    "pronunciation": "Ah-bare-toh",
    "spell_type": "Charm",
    "description": null,
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 2,
    "name": "Accio",
    "other_name": "Summoning Charm",
    "pronunciation": "Various, including: AK-ee-oh or AK-see-oh , AK-see-oh , AS-see-oh (US), and AT-chee-oh (Anglo-Catholic pronunciation)",
    "spell_type": "Charm",
    "description": "Summons an object towards the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation (unless the spell is casted nonverbally). This spell needs thought behind it, and the object must be clear in the casters mind before trying to summon it. The caster doesn't necessarily need to know the location of the target if they say the name of the object to be summoned, such as when Hermione Granger summoned some books from Dumbledore's office simply by saying \"Accio Horcrux books!\" while in Gryffindor Tower.",
    "mention": "Harry Potter summoned his broom to complete the first task of the Triwizard Tournament in 1994, and to summon the Portkey to escape Voldemort and the Death Eaters in the Little Hangleton Graveyard in 1995. Also, in the Battle of the Seven Potters Harry summoned Hagrid when he fell. Molly Weasley used it to get the twins' candy. The twins used it to summon their brooms from Dolores Umbridge's office",
    "etymology": "The Latin word accio means \"I call\" or \"I summon\".",
    "note": null
  },
  {
    "id": 3,
    "name": "Age Line",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Charm",
    "description": "Prevents people above or below a certain age from access to a target.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 4,
    "name": "Aguamenti",
    "other_name": "Water-Making Spell",
    "pronunciation": "AH-gwah-MEN-tee",
    "spell_type": "Charm, Conjuration",
    "description": "Produces a clean, drinkable jet of water from the wand tip.",
    "mention": "Used by Fleur Delacour in 1994 to extinguish her skirt, which had caught flame during a fight against a dragon. Harry used this spell twice in 1997, both on the same night; once to attempt to provide a drink for Dumbledore, then again to help douse Hagrid's hut after it was set aflame by Thorfinn Rowle, who used the Fire-Making Spell.",
    "etymology": null,
    "note": null
  },
  {
    "id": 5,
    "name": "Alarte Ascendare",
    "other_name": null,
    "pronunciation": "a-LAR-tay a-SEN-der-ay",
    "spell_type": "Charm",
    "description": "Shoots the target high into the air.",
    "mention": "Used by Gilderoy Lockhart in 1992 to send a snake high into the air during the first and last meeting of the Duelling Club.",
    "etymology": null,
    "note": null
  },
  {
    "id": 6,
    "name": "Albus Dumbledore's forceful spell",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Spell",
    "description": "This spell was, supposedly, quite powerful as when it was cast, the opponent was forced to conjure a silver shield to deflect it.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 7,
    "name": "Alohomora",
    "other_name": "Unlocking Charm",
    "pronunciation": "ah-LOH-ho-MOR-ah",
    "spell_type": "Charm",
    "description": "Unlocks doors and other objects. It can also unlock doors that have been sealed with a Locking Spell, although it is possible to bewitch doors to become unaffected by this spell.",
    "mention": "Used by Hermione Granger in 1991 to allow her and her friends to access the Third-floor corridor at her school, which was at the time forbidden; she used it again two years later to free Sirius's cell in her teacher's prison room.",
    "etymology": null,
    "note": null
  },
  {
    "id": 8,
    "name": "Amato Animo Animato Animagus",
    "other_name": "Animagus Spell",
    "pronunciation": "ah-MAH-toh ah-NEE-moh ah-nee-MAH-toh an-a-MAY-jus",
    "spell_type": "Transfiguration",
    "description": "Spell used as part of the process of becoming an Animagus. The incantation has to be recited at sunrise and sundown, every day before the consumption of the Animagus Potion. The incantation is also recited just prior to the consumption of the potion, which has to take place just after a lightning storm starts. The incantation is recited while placing the wand's tip over one's heart.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 9,
    "name": "Anapneo",
    "other_name": null,
    "pronunciation": "ah-NAP-nee-oh",
    "spell_type": "Healing Spell, Vanishment",
    "description": "Clears the target's airway if they are choking on something.",
    "mention": "Used by Horace Slughorn, cast upon Marcus Belby when the latter choked on a pheasant in 1996.",
    "etymology": null,
    "note": null
  },
  {
    "id": 10,
    "name": "Anteoculatia",
    "other_name": null,
    "pronunciation": "an-tee-oh-kyoo-LAY-chee-ah",
    "spell_type": "Hex",
    "description": "Causes the target to grow antlers.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 11,
    "name": "Anti-Cheating Spell",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Charm",
    "description": "Used to prevent cheating.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 12,
    "name": "Anti-Disapparition Jinx",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Jinx",
    "description": "Prevents Disapparation in an area. It is used to entrap an enemy in an area.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 13,
    "name": "Anti-intruder jinx",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Jinx",
    "description": "Prevents intruders from entering an area.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 14,
    "name": "Antonin Dolohov's curse",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Curse",
    "description": "An unknown curse that causes injuries that are capable of killing with enough power.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 15,
    "name": "Aparecium",
    "other_name": "Revealing Charm",
    "pronunciation": "AH-par-EE-see-um",
    "spell_type": "Charm",
    "description": "Reveals secret messages written in invisible ink, or any other hidden markings. Also works against Concealing charms",
    "mention": "Used (to no avail) in 1993 by Hermione Granger to attempt to reveal any hidden writing in a diary.",
    "etymology": null,
    "note": null
  },
  {
    "id": 16,
    "name": "Appare Vestigium",
    "other_name": "Tracking Spell",
    "pronunciation": "ah-PAR-ay ves-TEE-jee-um",
    "spell_type": "Charm",
    "description": "Reveals traces of magic, including footprints and track marks.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 17,
    "name": "Apparition",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Transportation",
    "description": "Magically transports the caster to another location instantaneously. The destination is one that the primary user has been to or seen in some fashion previously. Can be used to apparate multiple people at once if holding each other. No incantation required.",
    "mention": null,
    "etymology": null,
    "note": null
  },
  {
    "id": 18,
    "name": "Aqua Eructo",
    "other_name": "Aqua Eructo Charm",
    "pronunciation": "A-kwa ee-RUCK-toh",
    "spell_type": "Charm",
    "description": "This spell is used to create, and control, a jet of clear water from the tip of the wand; it is probably related to Aguamenti.",
    "mention": "Used multiple times to extinguish fires in 1994.",
    "etymology": null,
    "note": null
  },
  {
    "id": 19,
    "name": "Arania Exumai",
    "other_name": "Spider repelling spell",
    "pronunciation": "ah-RAHN-ee-a EKS-su-may",
    "spell_type": "Charm",
    "description": "Drives away spiders, including Acromantulas.",
    "mention": "Jacob's sibling used this spell to repel an Acromantula that guarded the Forest Vault in the Forbidden Forest.",
    "etymology": null,
    "note": null
  },
  {
    "id": 20,
    "name": "Arresto Momentum",
    "other_name": "Slowing Charm",
    "pronunciation": "ah-REST-oh mo-MEN-tum",
    "spell_type": "Charm",
    "description": "Decreases the velocity of a moving target. Can be used on multiple targets, as well as on the caster themselves. It was invented by Daisy Pennifold in 1711 for use on the Quaffle in Quidditch.",
    "mention": "Used by Dumbledore to save one of his students from a fall in 1993; Hermione Granger used it, to little effect, in 1998 to cushion an otherwise deadly fall.",
    "etymology": null,
    "note": null
  },
];

const selectCharacters = document.querySelector('.select');
console.log(selectCharacters)

const test1 = document.querySelector('.test');
console.log()

selectCharacters.addEventListener('change', () => {
  let valorOption = selectCharacters.value;
  console.log(valorOption)
  if(valorOption=='a-z'){
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    spells.forEach(element => {
      const createElement= document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
        const templateTest = `
        // <div class=">
         <p class="data">Nombre: ${element.name}</p>
           <p class="data">Libro: ${element.other_name}</p>
          <p class="data">Especie: ${element.etymology}</p>
          <p class="data">id: ${element.id}</p>
        </div>
      `;
        createElement.innerHTML =templateTest;
        test1.appendChild(createElement);
    });
  }

});
