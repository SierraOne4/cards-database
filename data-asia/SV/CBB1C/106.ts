import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,

	name: {
		'zh-cn': "新叶喵"
	},

	illustrator: "kurumitsu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [906],
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-cn': "毛茸茸的体毛有着近似于植物的成分。会勤于洗脸以防止干燥。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-cn': "日光收集"
		},

		effect: {
			'zh-cn': "选择自己牌库中最多2张基本能量，在给对手看过之后，加入手牌。并重洗牌库。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-cn': "种子炸弹"
		},

		damage: 10,
		cost: ["Grass"]
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
				cardmarket: 806294,
				cardtrader: 317057,
			},
		},
	]
}

export default card
