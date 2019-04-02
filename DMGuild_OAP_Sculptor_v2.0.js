/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet"
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).

	-INFORMATION-
	Subject:    Class
	Effect:     This script adds the class called "Sculptor" and its 9 subclasses: "Shape of the Axe", "Shape of the Bow", "Shape of the Hammer", "Shape of the Shield", "Shape of the Trident", and "Shape of the Twin Blades" along with "Shape of the Chakram", "Shape of the Flail", and "Shape of the Kunai" (from the 'Outlandish Shape Weapons' expansion).
				This is taken from the DMs Guild website (https://www.dmsguild.com/product/207218/OAP-The-Sculptor-Class) v2.0
				An optional "Thrown Weapon Mastery" feat is also taken from the DMs Guild website (https://www.dmsguild.com/product/212239/OAP-Outlandish-Shape-Weapons) v1.1
				Adds Shape weapon entries to the weapons list.
				This content is made by Ross Leiser (Outlandish Adventure Productions)
        Important Note: Elementalist Spell List option not included.
	Code by: kprokrym
	Date:		2019-02-06 (sheet v12.999)
	Please support the creator of this content (Ross Leiser) and download his material from the DMs Guild website:
	https://www.dmsguild.com/browse.php?author=Ross%20Leiser

	Check out their great subreddit for more Outlandish Adventure Productions:
	https://www.reddit.com/r/OutlandishAdventure/
*/

var iFileName = "Sculptor [OAP Ross Lesier's work, transcribed by sigh-and-test].js";
RequiredSheetVersion(12.999);

SourceList["OAP:S"] = {
	name : "The Sculptor Class v2.0 (Outlandish Adventure Productions)",
	abbreviation : "OAP:S",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/207218",
	date : "2018/03/11"
};
SourceList["OAP:OSW"] = {
	name : "Outlandish Shape Weapons v1.1 (Outlandish Adventure Productions)",
	abbreviation : "OAP:OSW",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/212239",
	date : "2017/05/11"
};

// create Thrown Weapon Mastery Feat
FeatsList["thrown weapon mastery"] = {
	name : "Thrown Weapon Mastery",
	source : ["OAP:OSW", 4],
	calculate : "event.value = \"With a thrown weapon, I gain +1 bonus to attack rolls and have double short and long range. Once per turn on a ranged hit within a thrown weapon's short range, I can have the attack deal no damage and attempt to disarm the target of an item it is holding or carrying. Target makes a Strength save for held items or Dexterity save for carried items, dropping the item on a fail. DC \" + (8 + Number(What(\"Proficiency Bonus\")) + What(\"Dex Mod\")) + \" or \" + (8 + Number(What(\"Proficiency Bonus\")) + What(\"Str Mod\")) + \" (8 + prof. bonus + choice of Dex mod or Str mod).\"",
	calcChanges : {
		atkAdd : ["if (isMeleeWeapon && (/thrown/i).test(fields.Description) && (/\\d+(\\.\\d+|,\\d+)? ?(f.{0,2}t|m)/i).test(fields.Range)) { var rangeNmbr = fields.Range.match(/\\d+(\\.\\d+|,\\d+)?/g); var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|'))); fields.Range = ''; rangeNmbr.forEach(function (dR, idx) { fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2)); }); if (notNmbrs.length > rangeNmbr.length) { fields.Range += notNmbrs[notNmbrs.length - 1]; }; }; ", "My thrown weapon's short and long range are doubled."],
		atkCalc : ["if (isMeleeWeapon && (/thrown/i).test(fields.Description)) {output.extraHit += 1;}; ", "With a thrown weapon, I get +1 to attack rolls."]
	},
	eval : "AddAction('action', 'Disarm Held or Carried Item', 'the Thrown Weapon Mastery feat');",
	removeeval : "RemoveAction('action', 'Disarm Held or Carried Item', 'the Thrown Weapon Mastery feat');"
};

//create Sculptor Shape Weapons
WeaponsList["shape axe"] = {
	regExpSearch : /^(?=.*shape)(?=.*axe).*$/i,
	name : "Shape Axe",
	source : ["OAP:S", 6],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 4,
	description : "Versatile (1d12)",
	abilitytodamage : true
};
WeaponsList["shape bow"] = {
	regExpSearch : /^(?=.*shape)(?=.*bow).*$/i,
	name : "Shape Bow",
	source : ["OAP:S", 7],
	list : "ranged",
	ability : 2,
	type : "Natural",
	damage : [1, 8, "piercing"],
	range : "150/600 ft",
	weight : 2,
	description : "Ammunition, heavy, two-handed",
	abilitytodamage : true,
	ammo : "arrow"
};
WeaponsList["shape hammer"] = {
	regExpSearch : /^(?=.*shape)(?=.*hammer).*$/i,
	name : "Shape Hammer",
	source : ["OAP:S", 7],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	weight : 10,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
WeaponsList["shape shield"] = {
	regExpSearch : /^(?=.*shape)(?=.*shield).*$/i,
	name : "Shape Shield",
	source : ["OAP:S", 7],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 10, "bludgeoning"],
	range : "Melee",
	weight : 6,
	description : "Two-handed, counts as an equipped Shield (+2 AC)",
	abilitytodamage : true
};
WeaponsList["shape trident"] = {
	regExpSearch : /^(?=.*shape)(?=.*trident).*$/i,
	name : "Shape Trident",
	source : ["OAP:S", 8],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 8, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 4,
	description : "Thrown, versatile (1d10, reach)",
	abilitytodamage : true
};
WeaponsList["shape twin blade"] = {
	regExpSearch : /^(?=.*shape)(?=.*twin)(?=.*blade).*$/i,
	name : "Shape Twin Blade",
	source : ["OAP:S", 8],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light",
	abilitytodamage : true
};
WeaponsList["shape chakram"] = {
	regExpSearch : /^(?=.*shape)(?=.*chakram).*$/i,
	name : "Shape Chakram",
	source : ["OAP:OSW", 2],
	list : "melee",
	ability : 1,
	type: "Natural",
	damage : [1, 8, "slashing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, thrown, ricochet 0",
	abilitytodamage : true,
};
WeaponsList["shape flail"] = {
	regExpSearch : /^(?=.*shape)(?=.*flail).*$/i,
	name : "Shape Flail",
	source : ["OAP:OSW", 2],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 8, "bludgeoning"],
	range : "Melee, 15 ft",
	weight : 2,
	description : "Special Reach (15 ft)",
	abilitytodamage : true
};
WeaponsList["shape kunai"] = {
	regExpSearch : /^(?=.*shape)(?=.*kunai).*$/i,
	name : "Shape Kunai",
	source : ["OAP:OSW", 3],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, light, thrown",
	abilitytodamage : true
};
// Start of Sculptor class content
// Get the sheet to know which spells are sculptor spells. Refer to the correct Mana Source spell list.
[
].forEach( function (s) {
	if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("sculptor") === -1) SpellsList[s].classes.push("sculptor");
});

// Create the custom spell slot progression table
sculptorSpellTable = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[2, 0, 0, 0, 0, 0, 0, 0, 0],
	[3, 0, 0, 0, 0, 0, 0, 0, 0],
	[3, 0, 0, 0, 0, 0, 0, 0, 0],
	[4, 2, 0, 0, 0, 0, 0, 0, 0],
	[4, 2, 0, 0, 0, 0, 0, 0, 0],
	[4, 3, 0, 0, 0, 0, 0, 0, 0],
	[4, 3, 0, 0, 0, 0, 0, 0, 0],
	[4, 3, 2, 0, 0, 0, 0, 0, 0],
	[4, 3, 2, 0, 0, 0, 0, 0, 0],
	[4, 3, 3, 0, 0, 0, 0, 0, 0],
	[4, 3, 3, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 1, 0, 0, 0, 0, 0],
  [4, 3, 3, 1, 0, 0, 0, 0, 0],
	[4, 3, 3, 2, 0, 0, 0, 0, 0],
	[4, 3, 3, 2, 0, 0, 0, 0, 0],
	[4, 3, 3, 3, 1, 0, 0, 0, 0],
	[4, 3, 3, 3, 1, 0, 0, 0, 0],
	[4, 3, 3, 3, 2, 0, 0, 0, 0],
	[4, 3, 3, 3, 2, 0, 0, 0, 0]
]

// Make this a separate variable so we can call it while making the object and avoid duplications
var sculptorSpellsKnownArray = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];

// Create the sculptor class
ClassList["sculptor"] = {
	regExpSearch : /sculptor/i,
	name : "Sculptor",
	source : ["OAP:S", 3],
	primaryAbility : "\n \u2022 Sculptor: Strength or Dexterity; and Intelligence;",
	abilitySave : 4,
	prereqs : "\n \u2022 Sculptor: Strength or Dexterity 13, Intelligence 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Dex", "Int"],
	skills : ["\n\n" + toUni("Sculptor") + ": Choose two from Arcana, History, Medicine, Nature, Perception, and Sleight of Hand."],
	armor : [
		[true, true, true, false],
		[true, true, true, false]
	],
	weapons : [
		[false, false],
		[false, false]
	],
	equipment : "Sculptor starting equipment:\n \u2022 Leather armor -or- scale mail -or- chain mail;\n \u2022 A short bow and 20 arrows -or- 5 javelins -or- a shield (if proficient);\n \u2022 A dungeoneer's pack -or- a scholar's pack -or- a priest's pack.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Battle Sculpt", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : "sculptor1",
	spellcastingKnown : {
		spells : sculptorSpellsKnownArray
	},
	spellcastingList : {
		class : "sculptor",
		level : [1, 5]
	},
	features : {
		"mana shaper" : {
			name : "Mana Shaper",
			source : ["OAP:S", 4],
			minlevel : 1,
			description : desc([
        "Focus for 1 min to sculpt any set of artisan's tools, singular simple object, or use an action to sculpt any simple weapon or my shape weapon.",
        "I am proficient with any sculpted tool or weapon.",
        "Only 1 tool kit, object, or weapon can be maintained at a time. Can be dismissed at any time (no action required)."
		  ]),
			additional : levels.map(function(n) {
				return n < 12 ? "object can be Medium or smaller" : n < 20 ? "object can be Large or smaller" : "object can be Huge or smaller";
			}),
			skillstxt : "\n\n" + toUni("Mana Shaper (feature)") + ":Proficiency with artisan's tools sculpted from mana.",
			toolProfs : [["Shape tool", 1]],
      action : ["action", ""]
		},
    "subclassfeature1" : {
      name: "Battle Sculpt",
      source: ["OAP:S", 4],
			description : desc([
				"Choose a Battle Sculpt and put it in the \"Class\" field on the first page",
				"Shape weapons can be found as Shape 'your weapon type' in the weapon list."
			])
    },
		"fighting style" : {
			name : "Fighting Style",
			source : ["OAP:S", 4],
			minlevel : 2,
			description : "\n   " + "Choose a Fighting Style for the sculptor using the \"Choose Feature\" button above",
			choices : ["Archery", "Close Quarters Shooting", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting", "Mobile Fighting", "Throwing"],
			"archery" : FightingStyles.archery,
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"protection" : FightingStyles.protection,
			"two-weapon fighting" : FightingStyles.two_weapon,
			"close quarters shooting" : {
				name : "Close Quarters Shooting Fighting Style",
				description : desc([
					"When I make a ranged weapon attack vs. a target within 20 ft of me, I gain bonuses:",
					"I don't have disadv. if a hostile is within 5 ft, and I ignore half and three-quarters cover"
				])
      },
      "mobile fighting" : {
        name: "Mobile Fighting Style",
        description : desc([
          "When I'm not wearing heavy armor or using a shield, I have a swimming and climbing speed equal to my walking speed.",
          "I gain +1 bonus to AC."
        ]),
				eval : "AddACMisc(1, 'Mobile Fighting Style', 'When not wearing heavy armor or a shield, the class feature Mobile Fighting Style gives a +1 bonus to AC', 'CurrentArmour.known && !ArmourList[CurrentArmour.known].type')",
				removeeval : "AddACMisc(0, 'Mobile Fighting Style', 'When not wearing heavy armor or a shield, the class feature Mobile Fighting Style gives a +1 bonus to AC')"
			},
      "throwing" : {
        name: "Throwing Fighting Style",
        description : desc([
          "+1 bonus to damage rolls when using Thrown weapons.",
          "No disadvantage due to range on long ranged attack rolls with Thrown weapons."
        ]),
				calcChanges: {
					atkCalc : ["if (isMeleeWeapon && (/thrown/i).test(fields.Description)) {output.extraDmg += 1;}; ", ""],
				}
      }
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["OAP:S", 5],
			minlevel : 2,
			description : desc([
				"I can cast sculptor spells that I know, using Intelligence as my spellcasting ability",
				"I regain all sculptor spell slots on a long rest and can use my shape weapon as a spellcasting focus."
			]),
			additional : levels.map(function(n) {
				return n < 2 ? "" : sculptorSpellsKnownArray[n] + " spells known from Mana Source";
			})
		},
    "mana source" : {
			name : "Mana Source",
			source : ["OAP:S", 4],
			minlevel : 2,
			description : "\n   " + "Choose a Mana Source for the sculptor using the \"Choose Feature\" button above",
			choices : ["Abyssal", "Arcane", "Divine", "Natural"],
			"abyssal" : {
        name : "Abyssal",
        description : desc([
          "Warlock spell list."
        ]),
        spellcastingBonus : {
          name : "Abyssal Source",
          class: "warlock",
          level: [1,5]
        }
      },
			"arcane" : {
        name : "Arcane",
        description : desc([
          "Sorcerer spell list."
        ]),
        spellcastingBonus : {
          name : "Arcane Source",
          class: "sorcerer",
          level: [1,5]
        }
      },
			"divine" : {
        name : "Divine",
        description : desc([
          "Paladin spell list."
        ]),
        spellcastingBonus : {
          name : "Divine Source",
          class: "paladin",
          level: [1,5]
        }
      },
      "natural" : {
        name : "Natural",
        description : desc([
          "Ranger spell list."
        ]),
        spellcastingBonus : {
          name : "Natural Source",
          class: "ranger",
          level: [1,5]
        }
      }
		},
    "battle ready" : {
      name: "Battle Ready",
      source: ["OAP:S", 5],
      minlevel : 3,
      description : desc([
        "Instinctually shape weapon as a reaction when I roll initiative or as bonus action on my turn."
      ]),
      action: ["bonus action", ""],
      action: ["reaction", "On Init."]
    },
    "expert craftsman" : {
      name: "Expert Craftsman",
      source: ["OAP:S", 5],
      minlevel: 3,
      description : desc([
        "Proficiency bonus is doubled for any ability check using my mana sculpted artisan's tools."
      ]),
			skillstxt : "\n\n" + toUni("Expert Craftsman (feature)") + ":Proficiency bonus doubled for any ability check using my mana sculpted artisan's tools."
    },
    "mana potency" : {
      name: "Mana Potency",
      source: ["OAP:S", 5],
      minlevel: 6,
      description : desc([
        "Mana sculpted weapons count as magical for overcoming resistances and immunity to nonmagical attacks and damage."
      ])
    },
    "artist's intuition" : {
      name: "Artist's Intuition",
      source: ["OAP:S", 5],
      minlevel: 7,
      description : desc([
        "Add my proficiency bonus to Intelligence (Investigation) and Wisdom (Perception) checks, including passive, even if already proficient in either."
      ]),
      skillstxt : "\n\n" + toUni("Sculptor") + ": Gain proficiency or expertise in Investigation and Perception.",
      skills: ["Perception", "Investigation"]
    },
    "mana artist" : {
      name: "Mana Artist",
      source: ["OAP:S", 5],
      minlevel: 10,
      description : desc([
        "When I sculpt my weapon, choose acid, cold, fire, lightning, necrotic, or radiant damage for damage type. Lasts until dismissed or sculpt something else."
      ])
    },
    "artist's eye": {
      name: "Artist's Eye",
      source: ["OAP:S", 5],
      minlevel: 14,
      description : desc([
        "As a bonus action with concentration, I can focus on a creature or object within 30 ft. While focused:",
			  "\u2022 The target cannot become hidden from me except by magical means",
			  "\u2022 Attacks made against the target critical hit on a roll of 19 or 20 on the d20",
			  "\u2022 Advantage on Intelligence (Investigation \u0026 Nature) and Wisdom (Insight) involving the target",
			  "Ends if the target gets beyond 60 ft of me or I lose line of sight, lose concentration, or change targets."
      ]),
      action: ["bonus action", ""]
    },
    "master sculptor": {
      name: "Master Sculptor",
      source: ["OAP:S", 6],
      minlevel: 18,
      description : desc([
        "I can cast Spiritual Weapon once per long rest as a 6th-level spell in the form of my shape weapon without using a spell slot.",
        "When cast I may choose acid, cold, fire, lightning, necrotic, radiant, or force damage for its attacks."
      ]),
      spellcastingBonus: {
        name: "Spiritual Weapon",
        spells: ["spiritual weapon"],
        selection: ["spiritual weapon"],
        oncelr: true,
      },
			usages : 1,
			recovery: "long rest",
      action: ["action", ""]
    },
    "mana armory": {
      name: "Mana Armory",
      source: ["OAP:S", 6],
      minlevel: 20,
      description : desc([
        "Once per long rest as an action, any number of creatures within 30 ft of me gain a copy of my shape weapon.",
        "Creatures gain my Battle Sculpt's 1st-, 6th-, and 11th-level features with the shape weapon.",
        "Instead of its normal type, I may choose acid, cold, fire, lightning, necrotic, or radiant damage for each shape weapon."
      ]),
			usages : 1,
			recovery: "long rest",
      action: ["action", ""]
    }
  }
};
// Add the subclasses
AddSubClass("sculptor", "shape of the axe", {
	regExpSearch : /^(?=.*shape)(?=.*axe).*$/i,
	subname : "Shape of the Axe",
	source : ["OAP:S", 6],
	features : {
		"subclassfeature1" : {
			name : "Barbaric Design",
			source : ["OAP:S", 6],
			minlevel : 1,
			description : desc([
				"I can use the Shape Axe. My shape weapon is a battleaxe with a versatile damage die of d12 rather than d10."
			])
		},
		"subclassfeature1.1" : {
			name: "Bonus Proficiency",
			source : ["OAP:S", 6],
			minlevel : 1,
			description : desc([
				"I gain proficiency with shields."
			]),
			armor : [false, false, false, true]
		},
		"subclassfeature6" : {
			name : "Barbaric Cleave",
			source : ["OAP:S", 6],
			minlevel : 6,
			description : desc([
				"When I make melee weapon attacks, I may choose to swing wildly in wide arcs.",
				"Wild swings allow hits to deal damage to each creature of my choice within 5 ft of myself and the target.",
				"When I swing wildly, the first attack targeting me before the start of my next turn is made with advantage."
			]),
			additional : levels.map(function(n) {
				return n < 11 ? ": damage = Str mod (min 1)" : ": damage = Str mod (min 1) + Int mod (minimum +1)";
			})
		},
		"subclassfeature11" : {
			name : "Sharpened Focus",
			source : ["OAP:S", 7],
			minlevel : 11,
			description : desc([
				"Add your Intelligence modifier (minimum +1) to the damage of your melee weapon attacks and Barbaric Cleave."
			]),
			calcChanges : {
				atkCalc : ["if ((/^(?=.*shape)(?=.*axe).*$/i).test(WeaponName))  {output.extraDmg += What('Int Mod'); }; ","My melee weapon attacks and Barbaric Cleave get my Intelligence modifier added to their damage."]
			}
		},
		"subclassfeature15" : {
			name: "Critical Edge",
			source: ["OAP:S", 7],
			minlevel : 15,
			description : desc([
				"Wild swings with Barbaric Cleave can now critical hit on an attack roll of 19 or 20 on the d20",
				"You also roll 1 additional damage die on a critical hit.",
				"When the target is the focus of Artist's Eye, wild swings can now critical hit on 18-20 on the d20.",
				"With an Artist's Eye critical hit, the additional die rolled can be added to the damage of your Barbaric Cleave."
			])
		}
	}
});
AddSubClass("sculptor", "shape of the bow", {
	regExpSearch : /^(?=.*shape)(?=.*bow).*$/i,
	subname : "Shape of the Bow",
	source : ["OAP:S", 7],
	features : {
		"subclassfeature1" : {
			name : "Mobile Ballistician",
			source : ["OAP:S", 7],
			minlevel : 1,
			description : desc([
				"I can use the Shape Bow. My shape weapon is a longbow, but I ignore the Heavy property if I am Small or smaller."
			])
		},
		"subclassfeature6" : {
			name : "Alert Archer",
			source : ["OAP:S", 7],
			minlevel : 6,
			description : desc([
				"Add your Intelligence modifier (minimum +1) to your initiative rolls.",
				"I cannot be surprised except by magical means."
			]),
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature11" : {
			name : "Quick Shot",
			source : ["OAP:S", 7],
			minlevel : 11,
			description : desc([
				"I can use a bonus action to make a ranged attack against one of the targets I attacked as part of my Attack action."
			]),
			action: ["bonus action", "an Attack action target"]
		},
		"subclassfeature15" : {
			name: "Missile Guidance",
			source: ["OAP:S", 7],
			minlevel : 15,
			description : desc([
				"Once per turn, coat arrorws with mana to make a ranged attack with advantage.",
				"Additionally, the range of Artist's Eye increases to 60ft."
			]),
			eval : "RemoveAction(\"bonus action\", \"Artist's Eye\"); AddAction(\"bonus action\", \"Artist's Eye 60 ft\", \"Shape of the Bow\")",
			removeeval : "RemoveAction(\"bonus action\", \"Artist's Eye 60 ft\"); AddAction(\"bonus action\", \"Artist's Eye\", \"Sculptor\")",
		}
	}
});
AddSubClass("sculptor", "shape of the hammer", {
	regExpSearch : /^(?=.*shape)(?=.*hammer).*$/i,
	subname : "Shape of the Hammer",
	source : ["OAP:S", 7],
	features : {
		"subclassfeature1" : {
			name : "Hammer Time",
			source : ["OAP:S", 7],
			minlevel : 1,
			description : desc([
				"I can use the Shape Hammer. My shape weapon is a maul, but I ignore the Heavy property if I am Small or smaller.",
				"My shape weapon still counts as heavy for the purpose of Great Weapon Master feat."
			])
		},
		"subclassfeature6" : {
			name : "Line Breaker",
			source : ["OAP:S", 7],
			minlevel : 6,
			description : desc([
				"Once during my turn when I hit with my shape weapon melee attack, I can push the target up to 10 ft away from me in a straight line.",
				"A creature cannot be pushed this way if there are no unoccupied spaces within range of the push."
			])
		},
		"subclassfeature11" : {
			name : "Mana Infusion",
			source : ["OAP:S", 7],
			minlevel : 11,
			description : desc([
				"Your shape weapon is infused with extra mana. Its damage becomes 2d10 bludgeoning."
			]),
			calcChanges : {
				atkAdd : ["if (WeaponName === 'shape hammer') { fields.Damage_Die = fields.Damage_Die === '2d6' ? '2d10' : fields.Damage_Die ; } ; ", ""]
			}
		},
		"subclassfeature15" : {
			name: "Bring Down the Hammer",
			source: ["OAP:S", 7],
			minlevel : 15,
			description : desc([
				"Once per long rest as an action, slam the ground to create a mighty shockwave, making all ground within 30 ft difficult terrain until cleared.",
				"Each creature in the area must succeed a Strength saving throw against your spell save DC or take 8d6 shape weapon damage type and be knocked prone.",
				"A creature takes half damage on a successful saving throw and is not knocked prone.",
				"Each 5-ft-square portion of the area requires at least 1 min to clear by hand."
			]),
			usages : 1,
			recovery: "long rest",
			action : ["action", ""],
		}
	}
});
AddSubClass("sculptor", "shape of the shield", {
	regExpSearch : /^(?=.*shape)(?=.*shield).*$/i,
	subname : "Shape of the Shield",
	source : ["OAP:S", 7],
	features : {
		"subclassfeature1" : {
			name : "Mobile Bulwark",
			source : ["OAP:S", 7],
			minlevel : 1,
			description : desc([
				"I can use the Shape Shield. My shape weapon is a two-handed, melee weapon shield that deals 1d10 bludgeoning.",
				"This shape weapon provides the AC bonus of a shield."
			]),
		},
		"subclassfeature1.1" :{
			name: "Bonus Proficiency",
			source : ["OAP:S", 7],
			minlevel : 1,
			description : desc([
				"I gain proficiency with simple weapons."
			]),
			weapon : [true, false, false]
		},
		"subclassfeature6" : {
			name : "Impromptu Battlements",
			source : ["OAP:S", 8],
			minlevel : 6,
			description : desc([
				"As an action, entrench my shape shield in the ground to create a 4-ft tall, 15-ft long, 1-ft thick wall.",
				"I lose the AC bonus of my shape shield while it is entrenched.",
				"The wall provides half cover to all creatures along its 15-ft side.",
				"While my shape weapon is entrenched, I can move and act normally, but my shape weapon does not move with me."
			]),
			action : ["action", ""]
		},
		"subclassfeature6.1" : {
			name : "Charging Bulwark",
			source : ["OAP:S", 8],
			minlevel : 6,
			description : desc([
				"If I move at least 20 ft straight toward and then hit a target using my shape weapon's melee attack on the same turn,",
				"I can force the target to make a Strength saving throw against my spell save DC, knocking the target prone on a fail."
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action: ["action", "20 ft straight move, shape shield atk"]
		},
		"subclassfeature11" : {
			name : "Hardened Focus",
			source : ["OAP:S", 8],
			minlevel : 11,
			description : desc([
				"I add my Intelligence modifier (minimum +1) to Constitution saving throws made to maintain concentraion on spells."
			])
		},
		"subclassfeature11.1" : {
			name: "Crushing Bulwark",
			source: ["OAP:S", 8],
			minlevel : 11,
			description : desc([
				"When I knock a target prone using my Charging Bulwark, I can use a bonus action this turn to make a melee shape weapon attack against that target."
			]),
			action : ["bonus action", " (on successful prone)"]
		},
		"subclassfeature15" : {
			name : "Improved Impromptu Battlements",
			source : ["OAP:S", 8],
			minlevel : 15,
			description : desc([
				"Once per short or long rest when I use Impromptu Battlements, I can choose to immediately sculpt another shape weapon.",
				"If I do, the Impromptu Battlements wall remains for 1 minute, after which it dissipates.",
				"I can't pick up an entrenched shape weapon while wielding a copy of the shape weapon.",
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	}
});
AddSubClass("sculptor", "shape of the trident", {
	regExpSearch : /^(?=.*shape)(?=.*trident).*$/i,
	subname : "Shape of the Trident",
	source : ["OAP:S", 8],
	features : {
		"subclassfeature1" : {
			name : "Hoplite Tactician",
			source : ["OAP:S", 8],
			minlevel : 1,
			description : desc([
				"I can use the Shape Trident. My shape weapon is a trident that deals 1d8 piercing and is versatile (1d10).",
				"While used in two-hands, the trident also has reach."
			])
		},
		"subclassfeature1.1" :{
			name: "Bonus Proficiency",
			source : ["OAP:S", 8],
			minlevel : 1,
			description : desc([
				"I gain proficiency with shields."
			]),
			armor : [false, false, false, true]
		},
		"subclassfeature6" : {
			name : "Hold the Line",
			source : ["OAP:S", 8],
			minlevel : 6,
			description : desc([
				"As a bonus action, I select a target at least 20 ft away. If it moves in reach of my shape weapon on its next turn, I can attack it as a reaction.",
				"If the attack hits, I gain an extra 1d8 piercing damage die or 1d10 piercing if using my shape weapon with two-hands.",
				"I cannot perform this attack if the creature used the Disengage action before moving."
			]),
			action : ["bonus action", " (set vs. charge)"],
			eval : "AddAction('bonus action', 'Hold the Line', 'Shape of the Trident feature');",
			removeeval : "RemoveAction('bonus action', 'Hold the Line');"
		},
		"subclassfeature11" : {
			name : "Flexible Sculpt",
			source : ["OAP:S", 8],
			minlevel : 11,
			description : desc([
				"Once on each of my turns when I miss a shape weapon attack, I can make another shape weapon attack as part of the same action."
			])
		},
		"subclassfeature15" : {
			name: "Tactical Targeting",
			source: ["OAP:S", 8],
			minlevel : 15,
			description : desc([
				"When I hit a creature with a shape weapon attack, I can choose to mana mark that creature until the end of my next turn.",
				"When I or an allied creature hit a mana marked target with an attack, the target takes an extra 1d6 damage of the attack damage type.",
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		}
	}
});
AddSubClass("sculptor", "shape of the twin blades", {
	regExpSearch : /^(?=.*shape)(?=.*twin)(?=.*blade).*$/i,
	subname : "Shape of the Twin Blades",
	source : ["OAP:S", 8],
	features : {
		"subclassfeature1" : {
			name : "Blade Dancer",
			source : ["OAP:S", 8],
			minlevel : 1,
			description : desc([
				"I can use the Shape Twin Blade. My shape weapon is a pair of blades.",
				"I can engage in two weapon fighting using my shape weapon, but I do not add my ability modifier to the damage of the second attack, as normal.",
				"My shape twin blades count as two weapons for the purposes of the Duel Wielder feat."
			])
		},
		"subclassfeature6" : {
			name : "Dancer's Defense",
			source : ["OAP:S", 9],
			minlevel : 6,
			description : desc([
				"When a melee attack would hit me while wielding my shape weapons, I can use my reaction to add my proficiency bonus to my AC against the attack.",
				"If this causes the attack to miss, and the attacker is within 5 ft of me, I can make a melee weapon attack again the creature as part of the reaction."
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature11" : {
			name : "Dance Partners",
			source : ["OAP:S", 9],
			minlevel : 11,
			description : desc([
				"When using Mana Artist to change my shape weapon's damage type, I can choose a different damage type for each of my shape weapon blades.",
				"Additionally, when I hit a creature using one of my shape weapons, the attack deals additional damage of the type dealt by my other shape weapon.",
				"The additional damage is equal to the other shape weapon's damage die."
			])
		},
		"subclassfeature15" : {
			name: "Dance of Death",
			source: ["OAP:S", 9],
			minlevel : 15,
			description : desc([
				"As an action, I can choose a target within my reach to immediately make 4 attacks against with my shape weapon, 2 per weapon.",
				"After the attacks, the target must make a Constitution saving throw against my spell DC or become stunned for 1 min.",
				"If all 4 attacks hit, the target makes the initial saving throw with disadvantage.",
				"A target stunned this way can repeat the saving throw at the end of each of its turns, ending the condition on a successful save."
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	}
});
AddSubClass("sculptor", "shape of the chakram", {
	regExpSearch : /^(?=.*shape)(?=.*chakram).*$/i,
	subname : "Shape of the Chakram",
	source : ["OAP:OSW", 2],
	features : {
		"subclassfeature1" : {
			name : "Ricochet Ring",
			source : ["OAP:OSW", 2],
			minlevel : 1,
			description : desc([
				"I can use the Shape Chakram. My shape weapon is a melee, thrown (20/60) chakram. If I make a ranged attack with my shape weapon, it returns to my hand."
			])
		},
		"subclassfeature6" : {
			name : "Centrifugal Cyclone",
			source : ["OAP:OSW", 2],
			minlevel : 6,
			description : desc([
				"When I use the Attack action with my shape weapon, I can use my bonus action this turn to generate a small cyclone in my space.",
				"While it persists, other creature's ranged attacks that would pass into or through the cyclone are made with disadvantage.",
				"As I move, the cyclone remains centered on me for its duration. Lasts until the start of my next turn."
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Complex Calculation",
			source : ["OAP:OSW", 2],
			minlevel : 11,
			description : desc([
				"As an action, I can choose a number of creatures and objects up to my Intelligence modifier (minimum 2 targets) that I can see.",
				"Each target must be within 60 feet of me and within 20 feet of at least one other target.",
				"Make a ranged weapon attack roll with my shape weapon as though I were attacking the closet target.",
				"I use that attack roll for each target but make separate daqmage rolls for each target I successfully hit."
			]),
			usages : " possible targets ",
			usagescalc : "event.value = Math.max(2, What('Int Mod'));",
			action : ["action", ""]
		},
		"subclassfeature15" : {
			name: "Mana Seeker",
			source: ["OAP:OSW", 2],
			minlevel : 15,
			description : desc([
				"When I hit a creature with a shape weapon attack, I can choose to mana mark that creature for 1 min.",
				"Shape weapon attacks made against the mana marked creature do not require me to see the target as long as the creature is within range.",
				"Shape weapon attacks made against the mana marked creature ignore all cover (including full) and any disadvantage I may have on the attack roll."
			]),
			usages : 1,
			recovery : "short rest"
		}
	}
});
AddSubClass("sculptor", "shape of the Flail", {
	regExpSearch : /^(?=.*shape)(?=.*flail).*$/i,
	subname : "Shape of the Flail",
	source : ["OAP:OSW", 2],
	features : {
		"subclassfeature1" : {
			name : "The Old Ball and Chain",
			source : ["OAP:OSW", 2],
			minlevel : 1,
			description : desc([
				"I can use the Shape Flail. My shape weapon is a flail with a reach of 15 ft.",
			]),
			additional : levels.map(function(n) {
				return n < 6 ? ": Shape weapon attacks made >5 ft while a hostile creature within 5 ft of me can see me and isn't incapacitated give my attack disadvantage." : "";
			})
		},
		"subclassfeature1.1" :{
			name: "Bonus Proficiency",
			source : ["OAP:OSW", 2],
			minlevel : 1,
			description : desc([
				"I gain proficiency with shields."
			]),
			armor : [false, false, false, true]
		},
		"subclassfeature6" : {
			name : "Contraband Confiscation",
			source : ["OAP:OSW", 3],
			minlevel : 6,
			description : desc([
				"I can use a bonus action on melee shape weapon attack hits to attempt to disarm the target, forcing them to drop an item they are holding of my choice.",
				"If I do, the target must succeed on a Strength saving throw against my spell save DC or drop the object, landing at the creature's feet.",
				"Being within 5 ft of a hostile creature no longer imposes disadvantage on shape weapon attacks >5 ft from me."
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature11" : {
			name : "Entangling Chain",
			source : ["OAP:OSW", 3],
			minlevel : 11,
			description : desc([
				"When I hit a creature with a shape weapon melee attack within 5 ft of me, I can use my bonus action to attempt to wrap the creature in my shape weapon's chain.",
				"The creature must succeed a Strength saving throw against me spell save DC or become restrained.",
				"A creature at least 1 size category larger than me automaticcaly succeeds the saving throw.",
				"A creature restrained this way can repeat the saving throw as an action during each of its turns, freeing itself on a successful save.",
				"If you make a shape weapon attack while a creature is restrained using this feature, or you sculpt something else, the creature is freed.",
				"While you have a creature restrained this way, you can hurl the creature at a space you can see within 15 ft of you.",
				"The creature then takes 3d8 shape weapon damage type, is knocked prone in the nearest unoccupied space, and is freed.",
				"If the chosen space is occupied, the creature in that space must succeed a Dexterity saving throw against your spell save DC or be knocked prone and take the same 3d8 damage."
			])
		},
		"subclassfeature15" : {
			name: "Wrecking Ball",
			source: ["OAP:OSW", 3],
			minlevel : 15,
			description : desc([
				"Use an action to empower your shape weapon for 1 min, gaining the following benefits:",
				"\u2022 Reach increased to 25 ft.",
				"\u2022 Shape weapon attack hits release a shockwave hitting the target and all creatures within 5 ft of the target, other than you, for  1d6 shape weapon damage type.",
				"\u2022 Shape weapon deals double damage to objects and structures."
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});
AddSubClass("sculptor", "shape of the kunai", {
	regExpSearch : /^(?=.*shape)(?=.*kunai).*$/i,
	subname : "Shape of the Kunai",
	source : ["OAP:OSW", 3],
	features : {
		"subclassfeature1" : {
			name : "Bukijutsu",
			source : ["OAP:OSW", 3],
			minlevel : 1,
			description : desc([
				"I can use the Shape Kunai. My shape weapon is a dagger.",
				"If I make a ranged attack with my shape weapon, I can immediately sculpt a new copy after the attack (no action required).",
				"If I make a shape weapon attack using the Attack action while not wearing a shield, I can make an additional melee attack this turn as a bonus action."
			]),
			action : ["bonus action",""]
		},
		"subclassfeature6" : {
			name : "Nimble Striker",
			source : ["OAP:OSW", 3],
			minlevel : 6,
			description : desc([
				"While not wearing a shield, if I make a melee attack against a creature, that creature can't make opportunities attacks against me for the rest of my turn."
			])
		},
		"subclassfeature11" : {
			name : "Sudden Transmission",
			source : ["OAP:OSW", 3],
			minlevel : 11,
			description : desc([
				"Once per turn when I hit acreature with a ranged shape weapon attack, I can teleport to the nearest unoccupied space near that enemy.",
				"If I do while not wearing a shield, the attack deals an additional 1d6 shape weapon damage type."
			])
		},
		"subclassfeature1" : {
			name : "Bukijutsu",
			source : ["OAP:OSW", 3],
			minlevel : 11,
			description : desc([
				"I can use the Shape Kunai. My shape weapon is a dagger.",
				"If I make a ranged attack with my shape weapon, I can immediately sculpt a new copy after the attack (no action required).",
				"If I make a shape weapon attack using the Attack action while not wearing a shield, I can make an additional melee attack this turn as a bonus action.",
				"When I reach 11th level in this class, my shape weapon damage becomes 1d6 piercing."
			]),
			calcChanges : {
				atkAdd : ["if (WeaponName === 'shape kunai') { fields.Damage_Die = fields.Damage_Die === '1d4' ? '1d6' : fields.Damage_Die ; } ; ", ""]
			}
		},
		"subclassfeature15" : {
			name: "Torrent of Blades",
			source: ["OAP:OSW", 3],
			minlevel : 15,
			description : desc([
				"Use your action to conjure hundreds of copies of your shape weapon, throwing them out in a volley to pin foes to the ground and walls.",
				"Each creature in a 60 ft cone originating from me must make a Dexterity saving throw against my spell save DC.",
				"Creatures further than 20 ft from me have advantage on the saving throw.",
				"On a failed save, a target takes 5d8 shape weapon damage type, and, if the target is within 5 ft of the ground or object of its size or larger, they are restrained for 1 min.",
				"On a successful save, a target takes half damage and is not restrained.",
				"A creature restrained this way can use its action to make a Strength (Athletics) check against your spell save DC, freeing itseld on success.",
				"Alternatively, an unrestrained creature within 5 ft can use its action to free a creature restrained this way."
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});
