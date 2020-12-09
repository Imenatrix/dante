import React, {useState, useEffect, useRef} from 'react'
import {
	StyleSheet,
	View,
	Animated,
	Pressable,
	GestureResponderEvent
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

const SideMenu : React.FC<Props> = (props) => {

	const backgroundOpacity = useRef(props.open ? new Animated.Value(0.4) : new Animated.Value(0)).current
	const bodyFlex = useRef(props.open ? new Animated.Value(3) : new Animated.Value(0)).current
	const [zIndex, setZIndex] = useState(props.open ? 1 : 0)
	const [openn, setOpen] = useState(props.open != undefined ? props.open : false)

	function open() {
		setOpen(true)
		Animated.timing(bodyFlex, {
			toValue : 3,
			duration : 300,
			useNativeDriver : false
		}).start()
		Animated.timing(backgroundOpacity, {
			toValue : 0.4,
			duration : 300,
			useNativeDriver : false
		}).start()
	}

	function close() {
		Animated.timing(bodyFlex, {
			toValue : 0,
			duration : 300,
			useNativeDriver : false
		}).start()
		Animated.timing(backgroundOpacity, {
			toValue : 0,
			duration : 300,
			useNativeDriver : false
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
			{openn && <>
				<Animated.View style={[styles.body, {flex : bodyFlex}]}>
					{props.children}
				</Animated.View>
				<Animated.View style={[styles.background, {opacity : backgroundOpacity}]}>
					<Pressable onPress={onBackgroundPress} style={styles.backgroundPressable}/>
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