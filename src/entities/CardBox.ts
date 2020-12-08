import Card from './Card'
export default class CardBox {
	id : number
	title : string
	cards : Array<Card>

	constructor(id : number) {
		this.id = id
		this.title = ''
		this.cards = []
	}

	addCard() {
		const id = this.cards.map(card => card.id).sort().reverse()[0] + 1
		this.cards.push(new Card(id))
	}

}