import Task from './Task'
export default class Card {
	id : number
	title : string
	endTime : Date
	tasks : Array<Task>

	constructor(id : number) {
		this.id = id
		this.title = ''
		this.tasks = []
		this.endTime = new Date()
	}

	addtask() {
		const id = this.tasks.map(task => task.id).sort().reverse()[0] + 1
		this.tasks.push(new Task(id))
	}

}