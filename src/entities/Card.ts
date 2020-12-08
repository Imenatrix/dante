import Task from './Task'
export default class Card {
	id : number
	title : string
	tasks : Array<Task>

	constructor(id : number) {
		this.id = id
	}

	addtask() {
		const id = this.tasks.map(task => task.id).sort().reverse()[0] + 1
		this.tasks.push(new Task(id))
	}

}