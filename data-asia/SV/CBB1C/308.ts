import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,

	name: {
		'zh-cn': "呆火鳄"
	},

	illustrator: "kantaro",
	rarity: "Triple Rare",
	category: "Pokemon",
	dexId: [909],
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-cn': "会躺在温暖的岩石上，利用四边形的鳞片吸收的热量来制造火之能量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-cn': "发呆"
		},

		effect: {
			'zh-cn': "抛掷1次硬币如果为正面，则回复这只宝可梦「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-cn': "火焰"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
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
			thirdParty: {
				cardmarket: 806313,
				cardtrader: 318904,
			},
		},
	]
}

export default card
