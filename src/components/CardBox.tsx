import React from 'react'
import {
	ScrollView,
	Dimensions,
	StyleSheet,
	View,
} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { CardBox as ICardBox } from 'src/reducers/cardBoxesSlice'
import Card from 'src/components/Card'
import NewCard from 'src/components/NewCard'

interface Props {
	cardBox : ICardBox
}

const CardBox : React.FC<Props> = (props) => {

	const cardBox = props.cardBox
	const cards = useSelector((state : RootState) => state.cards).filter(card => card.cardBoxId == cardBox.id)

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal
				disableIntervalMomentum
				contentContainerStyle={styles.contentContainerStyle}
				snapToInterval={Dimensions.get('window').width - 30}
				decelerationRate='fast'>
				{cards.map(card => (
					<Card key={card.id} card={card}/>
				))}
				<NewCard/>
			</ScrollView>
		</View>
	)

}

export default CardBox

const styles = StyleSheet.create({
	container : {
		flex : 1
	},
	header : {
		flexDirection : 'row',
		alignItems : 'center',
		backgroundColor : 'gray',
		justifyContent : 'space-between',
		padding : 5
	},
	btnSideMenu : {

	},
	iconBtnSideMenu : {
		fontSize : 40
	},
	btnConfirm : {
		backgroundColor : 'green',
		borderRadius : 99999
	},
	iconBtnConfirm : {
		fontSize : 40
	},
	txtTitle : {
		fontSize : 25
	},
	contentContainerStyle : {
		paddingLeft : 10,
		paddingRight : 20
	}
})