import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { Task } from 'src/reducers/tasksSlice'
import EditTaskPod from './EditTaskPod'
import GoTaskPod from './GoTaskPod'

interface Props {
	task : Task,
	color : string,
	onFinishedTask : (task : Task) => void
}

const TaskPod : React.FC<Props> = (props) => {

	const task = props.task
	const color = props.color
	const onFinishedTask = props.onFinishedTask
	const mode = useSelector((state : RootState) => state.mode.value)

	return (
		mode === 'go' ?
			<GoTaskPod color={color} task={task} onFinishedTask={onFinishedTask}/>
		:
			<EditTaskPod task={task}/>
	)

}

export default TaskPod