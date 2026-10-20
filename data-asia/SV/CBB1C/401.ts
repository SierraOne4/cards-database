import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,

	name: {
		'zh-cn': "炙烫鳄"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		'zh-cn': "呆火鳄"
	},

	description: {
		'zh-cn': "由于火之能量与过剩的生命力相互结合，使它头上出现了蛋状的火球。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-cn': "吐火"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-cn': "巨声"
		},

		damage: 70,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			foil: "energy",
			thirdParty: {
				cardmarket: 806315,
				cardtrader: 318905,
			},
		},
	]
}

export default card
