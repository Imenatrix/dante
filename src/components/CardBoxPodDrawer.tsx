import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addCardBox } from 'src/reducers/cardBoxesSlice'
import { RootState } from 'src/reducers'
import CardBoxPod from 'src/components/CardBoxPod'
import SideMenu from 'src/components/SideMenu'
import NewPod from 'src/components/NewPod'

interface Props {
	open : boolean,
	onBackgroundPress : (event : GestureResponderEvent) => void,
	onSelect : (event : GestureResponderEvent, selected : number) => void
}

const CardBoxPodDrawer : React.FC<Props> = (props) => {

	const dispatch = useDispatch()

	const cardBoxes = useSelector((state : RootState) => state.cardBoxes)

	return (
		<SideMenu onBackgroundPress={props.onBackgroundPress} open={props.open}>
			{cardBoxes.map((cardBox) => (
				<CardBoxPod onPress={(event) => props.onSelect(event, cardBox.id)} key={cardBox.id} title={cardBox.title}/>
			))}
			<NewPod onPress={() => dispatch(addCardBox())}/>
		</SideMenu>
	)
}

export default CardBoxPodDrawer