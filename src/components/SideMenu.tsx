import React, {useState, useEffect, useRef} from 'react'
import {
	StyleSheet,
	View,
	Animated,
	Pressable,
	GestureResponderEvent,
	Dimensions,
	Easing
} from 'react-native'

interface Props {
	open? : boolean
	onBackgroundPress? : (event : GestureResponderEvent) => void,
}

interface State {
	backgroundOpacity : Animated.Value
	bodyFlex : Animated.Value
	zIndex : number,
	open : boolean
}

const width = Dimensions.get('window').width

const SideMenu : React.FC<Props> = (props) => {

	const backgroundOpacity = useRef(props.open ? new Animated.Value(0.4) : new Animated.Value(0)).current
	const bodyX = useRef(props.open ? new Animated.Value(0) : new Animated.Value(-(width * 3) / 4)).current
	const [isOpen, setOpen] = useState(props.open != undefined ? props.open : false)

	function open() {
		setOpen(true)
		Animated.timing(bodyX, {
			toValue : 0,
			duration : 500,
			useNativeDriver : true,
			easing : Easing.out(Easing.exp)
		}).start()
		Animated.timing(backgroundOpacity, {
			toValue : 0.4,
			duration : 500,
			useNativeDriver : true,
			easing : Easing.out(Easing.exp)
		}).start()
	}

	function close() {
		Animated.timing(bodyX, {
			toValue : -(width * 3) / 4,
			duration : 500,
			useNativeDriver : true,
			easing : Easing.out(Easing.exp)
		}).start()
		Animated.timing(backgroundOpacity, {
			toValue : 0,
			duration : 500,
			useNativeDriver : true,
			easing : Easing.out(Easing.exp)
		}).start(() => setOpen(false))
	}

	useEffect(() => {
		if (props.open) {
			open()
		}
		else {
			close()
		}
	}, [props.open])

	const onBackgroundPress = props.onBackgroundPress

	return (
		<View style={styles.container}>
			{isOpen && <>
				<Animated.View style={[styles.background, {opacity : backgroundOpacity}]}>
					<Pressable onPress={onBackgroundPress} style={styles.backgroundPressable}/>
				</Animated.View>
				<Animated.View style={[styles.body, {transform : [{translateX : bodyX}]}]}>
					{props.children}
				</Animated.View>
			</>}
		</View>
	)

}

export default SideMenu

const styles = StyleSheet.create({
	container : {
		position : 'absolute',
		width : '100%',
		height : '100%',
		flexDirection : 'row'
	},
	body : {
		position : 'absolute',
		width : '75%',
		height : '100%',
		backgroundColor : 'white'
	},
	background : {
		flex : 1,
		backgroundColor : 'black',
	},
	backgroundPressable : {
		flex : 1
	}
})