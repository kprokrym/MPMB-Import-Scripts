/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet"
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).

	-INFORMATION-
	Subject:    Weapons
	Effect:     This script adds a full set of martial weapons with Thrown and Ricochet properties.
				Details the "Ricochet" property for thrown weapons.
				Details suggested cost of added weapons.
				An optional "Thrown Weapon Mastery Variant" feat is added.
	Code by: kprokrym
	Date:		2019-02-07 (sheet v12.999)
*/

var iFileName = "Thrown Martial Weapons & Ricochet [Ki].js";
RequiredSheetVersion(12.999);

SourceList["HB:TMW&R"] = {
	name : "Thrown Martial Weapons & Ricochet [Ki]",
	abbreviation : "HB:TMW&R",
	group : "Homebrew",
	date : "2019/02/07"
};

/*
Ricochet:
This thrown weapon can ricochet, bouncing off targets, surfaces, and boomeranging through the air to return to the creature that threw it. When thrown, the weapon has a chance to not return, designated by the Ricochet score.
When a ranged attack roll is made using the Thrown property of a weapon with Ricochet, and the dice roll is equal to or lower than the weapon's ricochet score, the thrown weapon will fail to return and land in the nearest open space adjacent to its target.
Creatures not proficient with the Thrown weapon increase the weapon's ricochet score by 1.

This was inspired by Matt Mercer's Gunslinger Misfire property to avoid Chakrams being scritcly superior javalins and ammoless ranged weapons. The thresholds are higher than the misfire chance because you do not have to spend an action to repair the weapon, but instead use movement to retrieve the weapon near enemies or additional ricochet weapons to continue attacking.
*/

/*
Martial Melee Weapons

Chakram
Cost: 10g
Damage: 1d8 slashing
Weight: 1 lb
Properties: Finesse, thrown (range 20/60), ricochet 2

Sawtooth Chakram
Cost: 20g
Damage: 1d10 slashing
Weight: 3 lb
Properties: Finesse, thrown (range 40/80), ricochet 2

War Chakram
Cost: 50g
Damage: 1d12 slashing
Weight: 6 lb
Properties: Finesse, heavy, two-handed, thrown (range 40/120), ricochet 3

Elven Glaive
Cost: 25g
Damage: 2d4 piercing
Weight: 0.5 lb
Properties: Finesse, light, thrown (range 30/80), ricochet 2

Elven War Glaive
Cost: 35g
Damage: 1d10 piercing
Weight: 2 lb
Properties: Finesse, thrown (range 40/100), ricochet 2

Sentinel Glaive
Cost: 75g
Damage: 2d6 piercing
Weight: 4 lb
Properties: Finesse, two-handed, thrown (range 40/140), ricochet 3

Boomerang
Cost: 8g
Damage: 1d8 bludgeoning
Weight: 1 lb
Properties: Finesse, thrown (range 20/40), ricochet 2

Hunting Boomerang
Cost: 15g
Damage: 1d10 bludgeoning
Weight: 4 lb
Properties: Finesse, thrown (range 30/60), ricochet 2

War Boomerang
Cost: 50g
Damage: 1d12 bludgeoning
Weight: 8 lb
Properties: Finesse, heavy, two-handed, thrown (range 40/80), ricochet 3
*/

WeaponsList["chakram"] = {
	regExpSearch : /chakram/i,
	name : "Chakram",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, thrown, ricochet 2",
	abilitytodamage : true
};

WeaponsList["sawtooth chakram"] = {
	regExpSearch : /sawtooth chakram/i,
	name : "Sawtooth Chakram",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee, 40/80 ft",
	weight : 3,
	description : "Finesse, thrown, ricochet 2",
	abilitytodamage : true
};

WeaponsList["war chakram"] = {
	regExpSearch : /war chakram/i,
	name : "War Chakram",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [1, 12, "slashing"],
	range : "Melee, 40/120 ft",
	weight : 6,
	description : "Finesse, heavy, two-handed, thrown, ricochet 3",
	abilitytodamage : true
};

WeaponsList["elven glaive"] = {
	regExpSearch : /elven glaive/i,
	name : "Elven Glaive",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [2, 4, "piercing"],
	range : "Melee, 30/80 ft",
	weight : 0.5,
	description : "Finesse, light, thrown, ricochet 2",
	abilitytodamage : true
};

WeaponsList["elven war glaive"] = {
	regExpSearch : /elven war glaive/i,
	name : "Elven War Glaive",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [1, 10, "piercing"],
	range : "Melee, 40/100 ft",
	weight : 2,
	description : "Finesse, thrown, ricochet 2",
	abilitytodamage : true
};

WeaponsList["sentinel glaive"] = {
	regExpSearch : /sentinel glaive/i,
	name : "Sentinel Glaive",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [2, 6, "piercing"],
	range : "Melee, 40/140 ft",
	weight : 4,
	description : "Finesse, two-handed, thrown, ricochet 3",
	abilitytodamage : true
};

WeaponsList["boomerang"] = {
	regExpSearch : /boomerang/i,
	name : "Boomerang",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [1, 8, "bludgeoning"],
	range : "Melee, 20/40 ft",
	weight : 1,
	description : "Finesse, thrown, ricochet 2",
	abilitytodamage : true
};

WeaponsList["hunting boomerang"] = {
	regExpSearch : /hunting boomerang/i,
	name : "Hunting Boomerang",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [1, 10, "bludgeoning"],
	range : "Melee, 30/60 ft",
	weight : 4,
	description : "Finesse, thrown, ricochet 2",
	abilitytodamage : true
};

WeaponsList["war boomerang"] = {
	regExpSearch : /war boomerang/i,
	name : "War Boomerang",
	source : ["HB:TMW&R", 0],
	list : "melee",
	ability : 1,
	type: "Martial",
	damage : [1, 12, "bludgeoning"],
	range : "Melee, 40/80 ft",
	weight : 8,
	description : "Finesse, heavy, two-handed, thrown, ricochet 3",
	abilitytodamage : true
};

// Thrown Weapon Mastery Variant feat

FeatsList["thrown weapon mastery variant"] = {
	name : "Thrown Weapon Mastery Variant",
	source : ["HB:TMW&R", 0],
	calculate : "event.value = \"With a thrown weapon, I get +1 to hit. On hits made with thrown weapons, enemies within 5 ft of the target must make a Dex save DC \" + (8 + Number(What(\"Proficiency Bonus\")) + What(\"Dex Mod\")) + \" (8 + prof. bonus + Dex mod) or suffer 1d6 weapon damage.\"",
	calcChanges : {
		atkAdd : ["if (isMeleeWeapon && (/thrown/i).test(fields.Description)) {fields.Description += (fields.Description ? '; ' : '') + 'On hit, enemies within 5 ft Dex save or 1d6 weapon dmg';}; ", "With a thrown weapon, I get the following benefits:\n - +1 to hit;\n - On hit, enemies within 5 ft must make a Dexterity saving throw (DC 8 + proficiency bonus + Dexterity modifier) or suffer 1d6 weapon damage."],
		atkCalc : ["if (isMeleeWeapon && (/thrown/i).test(fields.Description)) {output.extraHit += 1;}; ", ""]
	}
};
