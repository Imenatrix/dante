import React from 'react'
import {
	ScrollView,
	StyleSheet,
	View,
	Dimensions,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/reducers'
import TaskPod from 'src/components/TaskPod'
import NewPod from 'src/components/NewPod'
import { Card as ICard } from 'src/reducers/cardsSlice'
import { add } from 'src/reducers/tasksSlice'
import CardHeader from 'src/components/CardHeader'

interface Props {
	card : ICard
}

const Card : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const card = props.card
	const tasks = useSelector((state : RootState) => state.tasks).filter(task => task.cardId == card.id)

	return (
		<View style={styles.container}>
			<CardHeader card={card}/>
			<ScrollView style={styles.podDrawer}>
				{tasks.map((task) => (
					<TaskPod key={task.id} task={task}/>
				))}
				<NewPod onPress={() => dispatch(add({cardId : card.id}))}/>
			</ScrollView>
		</View>
	)

}

export default Card

const styles = StyleSheet.create({
	container : {
		flex : 1,
		width : Dimensions.get('window').width - 40,
		marginVertical : 10,
		marginLeft : 10,
		borderRadius : 5,
		overflow : 'hidden'
	},
	podDrawer : {
		paddingVertical : 5,
		backgroundColor : 'lightgray'
	}
})