import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,

	name: {
		'zh-cn': "新叶喵"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [906],
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-cn': "毛茸茸的体毛有着近似于植物的成分。会勤于洗脸以防止干燥。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-cn': "抓"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-cn': "树叶"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 806292,
				cardtrader: 317056,
			},
		},
	]
}

export default card
