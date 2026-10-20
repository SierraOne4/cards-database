import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,

	name: {
		'zh-cn': "呆火鳄"
	},

	illustrator: "OKACHEKE",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [909],
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-cn': "会躺在温暖的岩石上，利用四边形的鳞片吸收的热量来制造火之能量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-cn': "撞击"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 806311,
				cardtrader: 318902,
			},
		},
	]
}

export default card
