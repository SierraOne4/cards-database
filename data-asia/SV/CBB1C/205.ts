import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,

	name: {
		'zh-cn': "蒂蕾喵"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'zh-cn': "新叶喵"
	},

	description: {
		'zh-cn': "灵巧地操控长长的体毛下隐藏着的藤蔓，接着把坚硬的花苞甩向敌人。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-cn': "种子炸弹"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-cn': "魔法鞭打"
		},

		effect: {
			'zh-cn': "将对手的战斗宝可梦与备战宝可梦互换。[放于战斗场的宝可梦由对手选择。]"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
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
			foil: "masterball",
			thirdParty: {
				cardmarket: 806302,
				cardtrader: 318890,
			},
		},
	]
}

export default card
