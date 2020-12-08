export default class Task {
	id : number
	title : string
	timeFlex : number

	constructor(id : number) {
		this.id = id
		this.title = ''
		this.timeFlex = 1
	}

}