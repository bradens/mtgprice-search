const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const GauntletFetch = require("./parsers/gauntlet.js");
const FusionFetch = require("./parsers/fusion.js");
const FaceFetch = require("./parsers/facetoface.js");
const StrongFetch = require("./parsers/stronghold.js");

const modernHunterCards = [
  "Lightning Bolt",
  "Engineered Explosives",
  "Spell Pierce",
  "Teferi, Time Raveler",
  "Ragavan, Nimble Pilferer",
  "Flusterstorm",
  "Mystical Dispute",
  "Fury",
  "Chalice of the Void",
  "Force of Vigor",
  "Unlicensed Hearse",
  "Pithing Needle",
  "Veil of Summer",
  "Dress Down",
  "Counterspell",
  "Expressive Iteration",
  "Endurance",
  "Blood Moon",
  "Unholy Heat",
  "Mishra's Bauble",
  "Relic of Progenitus",
  "Leyline Binding",
  "Wrenn and Six",
  "Subtlety",
  "Shadowspear",
  "Prismatic Ending",
  "Thoughtseize",
  "Springleaf Drum",
  "Fire // Ice	  //",
  "Fable of the Mirror-Breaker",
  "Solitude",
  "Force of Negation",
  "Ledger Shredder",
  "Dragon's Rage Channeler",
  "Magus of the Moon",
  "Tormod's Crypt",
  "Nature's Claim",
  "March of Otherworldly Light",
  "Fatal Push",
  "Path to Exile",
  "Supreme Verdict",
  "Wear // Tear	  //",
  "Jace, the Mind Sculptor",
  "Leyline of the Void",
  "Brazen Borrower",
  "Tourach, Dread Cantor",
  "Murktide Regent",
  "Dismember",
  "Hallowed Moonlight",
  "Consider",
];

const edhHunterCards = [
  "Sol Ring",
  "Arcane Signet",
  "Swords to Plowshares",
  "Cultivate",
  "Counterspell",
  "Beast Within",
  "Rampant Growth",
  "Izzet Signet",
  "Path to Exile",
  "Rakdos Signet",
  "Kodama's Reach",
  "Dimir Signet",
  "Orzhov Signet",
  "Cyclonic Rift",
  "Farseek",
  "Azorius Signet",
  "Chaos Warp",
  "Boros Signet",
  "Blasphemous Act",
  "Rhystic Study",
  "Heroic Intervention",
  "Talisman of Creativity",
  "Smothering Tithe",
  "Demonic Tutor",
  "Brainstorm",
  "Boros Charm",
  "Assassin's Trophy",
  "Lightning Greaves",
  "Eternal Witness",
  "Swiftfoot Boots",
  "Dovin's Veto",
  "Talisman of Dominance",
  "Anguished Unmaking",
  "Llanowar Elves",
  "Sakura-Tribe Elder",
  "Generous Gift",
  "Negate",
  "Three Visits",
  "Rhythm of the Wild",
  "Birds of Paradise",
  "Talisman of Hierarchy",
  "Nature's Lore",
  "Ignoble Hierarch",
  "Growth Spiral",
  "Talisman of Indulgence",
  "Terminate",
  "Despark",
  "Vampiric Tutor",
  "Talisman of Conviction",
  "Elvish Mystic",
  "Esper Sentinel",
  "Teferi's Protection",
  "Ruinous Ultimatum",
  "Putrefy",
  "Simic Signet",
  "Arcane Denial",
  "Swan Song",
  "Dockside Extortionist",
  "Mind Stone",
  "Avacyn's Pilgrim",
  "Faithless Looting",
  "Mirari's Wake",
  "Fellwar Stone",
  "Reclamation Sage",
  "Dark Ritual",
  "Fierce Guardianship",
  "Fyndhorn Elves",
  "Enlightened Tutor",
  "Eladamri's Call",
  "Mystic Remora",
  "Damn",
  "Jeska's Will",
  "Vandalblast",
  "Mystical Tutor",
  "Eerie Ultimatum",
  "Ponder",
  "Commander's Sphere",
  "Noble Hierarch",
  "Sun Titan",
  "Windfall",
  "Temur Ascendancy",
  "Sylvan Library",
  "Feed the Swarm",
  "Solemn Simulacrum",
  "Mana Drain",
  "Elves of Deep Shadow",
  "Deathrite Shaman",
  "Golgari Signet",
  "Nature's Claim",
  "Toxic Deluge",
  "Gruul Signet",
  "Return of the Wildspeaker",
  "Rakdos Charm",
  "Bedevil",
  "Deflecting Swat",
  "Beast Whisperer",
  "Mortify",
  "Supreme Verdict",
  "Preordain",
  "Faeburrow Elder",
  "Krosan Grip",
  "Baleful Strix",
  "Abrupt Decay",
  "Worldly Tutor",
  "Talisman of Progress",
  "Ghostly Prison",
  "Thought Vessel",
  "Pongify",
  "Reanimate",
  "Skullclamp",
  "Austere Command",
  "Avenger of Zendikar",
  "Mana Crypt",
  "Selesnya Signet",
  "Harrow",
  "Bala Ged Recovery",
  "Zulaport Cutthroat",
  "Utter End",
  "Blood Artist",
  "Viscera Seer",
  "Tatyova, Benthic Druid",
  "Garruk's Uprising",
  "Phyrexian Arena",
  "Aura Shards",
  "Morophon, the Boundless",
  "Shamanic Revelation",
  "Frantic Search",
  "Notion Thief",
  "Whirlwind of Thought",
  "Reality Shift",
  "Harmonize",
  "Bolas's Citadel",
  "Propaganda",
  "Crop Rotation",
  "Skyshroud Claim",
  "Goblin Anarchomancer",
  "Wild Growth",
  "Force of Will",
  "Thrill of Possibility",
  "Seedborn Muse",
  "Coiling Oracle",
  "Moldervine Reclamation",
  "Victimize",
  "Gray Merchant of Asphodel",
  "Animate Dead",
  "Wayfarer's Bauble",
  "Sterling Grove",
  "Talisman of Resilience",
  "Fact or Fiction",
  "Fracture",
  "Guardian Project",
  "Shalai, Voice of Plenty",
  "Read the Bones",
  "Talisman of Curiosity",
  "Goblin Electromancer",
  "Sign in Blood",
  "Wear // Tear",
  "Arbor Elf",
  "Etali, Primal Storm",
  "Wood Elves",
  "Village Rites",
  "Scute Swarm",
  "Rapid Hybridization",
  "Dauthi Voidwalker",
  "Rishkar's Expertise",
  "Villainous Wealth",
  "Merciless Eviction",
  "Opposition Agent",
  "Damnation",
  "Sanctum of All",
  "Veil of Summer",
  "Crackling Doom",
  "Mayhem Devil",
  "The Great Henge",
  "Abrade",
  "Pact of Negation",
  "Cruel Celebrant",
  "Opt",
  "Fist of Suns",
  "Mulldrifter",
  "Malakir Rebirth",
  "Finale of Devastation",
  "Dryad of the Ilysian Grove",
  "Valakut Awakening",
  "Vindicate",
  "Culling Ritual",
  "Esika, God of the Tree",
  "Thassa's Oracle",
  "Drannith Magistrate",
  "Niv-Mizzet, Parun",
  "Time Wipe",
  "Gamble",
  "Anointed Procession",
  "Akroma's Will",
  "Force of Negation",
  "Storm-Kiln Artist",
  "Syr Konrad, the Grim",
  "Jegantha, the Wellspring",
  "Diabolic Tutor",
  "Ashiok, Dream Render",
];

const fetch = async (cardName) => {
  let resultsAll = [];
  const cardsArr = cardName.split("|");
  for (let i = 0; i < cardsArr.length; i++) {
    try {
      const promises = [];
      promises.push(GauntletFetch.fetch(cardsArr[i]));
      promises.push(FusionFetch.fetch(cardsArr[i]));
      promises.push(FaceFetch.fetch(cardsArr[i]));
      promises.push(StrongFetch.fetch(cardsArr[i]));

      const results = await Promise.all(promises);

      const flatResults = results.flat();
      flatResults.sort((a, b) => a.price - b.price);
      resultsAll = [...resultsAll, ...flatResults];
    } catch (e) {
      console.log(e);
    }
  }

  return resultsAll;
};

const fetchDeal = async (cardName) => {
  let resultsAll = [];
  const cardsArr = cardName.split("|");
  for (let i = 0; i < cardsArr.length; i++) {
    try {
      const promises = [];
      promises.push(GauntletFetch.fetch(cardsArr[i]));
      promises.push(FusionFetch.fetch(cardsArr[i]));
      promises.push(FaceFetch.fetch(cardsArr[i]));
      promises.push(StrongFetch.fetch(cardsArr[i]));

      const results = await Promise.all(promises);

      const flatResults = results.flat();
      flatResults.sort((a, b) => a.price - b.price);

      if (
        flatResults[0] &&
        flatResults[1] &&
        flatResults[0].price / flatResults[1].price < 0.75
      ) {
        flatResults[0].name += ` (Deal ${
          (flatResults[0].price / flatResults[1].price).toFixed(2) * 100
        }%)`;

        resultsAll = [...resultsAll, flatResults[0]];
      }
    } catch (e) {
      console.log(e);
    }
  }

  return resultsAll;
};
const dealHunter = async (key) => {
  let results = [];

  let hunterCards;
  switch (key) {
    case "modern":
      hunterCards = modernHunterCards;
      break;
    case "edh":
      hunterCards = edhHunterCards;
      break;
    default:
      return;
  }

  for (let i in hunterCards) {
    const cardName = hunterCards[i];
    const promises = [];
    promises.push(GauntletFetch.fetch(cardName));
    promises.push(FusionFetch.fetch(cardName));
    promises.push(FaceFetch.fetch(cardName));
    promises.push(StrongFetch.fetch(cardName));

    try {
      const promiseResults = await Promise.all(promises);

      const flatResults = promiseResults
        .flat()
        .filter((i) => i.name.indexOf(" Art ") === -1);
      flatResults.sort((a, b) => a.price - b.price);

      if (
        !flatResults[0] ||
        !flatResults[1] ||
        flatResults[0].price / flatResults[1].price > 0.75
      )
        continue;

      flatResults[0].name = `${(
        (flatResults[0].price / flatResults[1].price) *
        100
      ).toFixed(2)}% - $${flatResults[0].price} - ${
        flatResults[0].name
      } (versus $${flatResults[1].price} at ${flatResults[1].store}) - ${
        flatResults[0].store
      }`;

      results = [...results, flatResults[0]];

      console.log(flatResults[0].name);
    } catch (e) {
      console.log(e);
    }
    await waitFor(1000);
  }

  return results;
};

exports.fetch = fetch;
exports.fetchDeal = fetchDeal;
exports.dealHunter = dealHunter;
