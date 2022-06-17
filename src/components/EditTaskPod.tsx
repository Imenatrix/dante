import React from 'react'
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import { useDispatch } from 'react-redux'
import { setTitle, Task } from 'src/reducers/tasksSlice'
import Counter from './Counter'

interface Props {
    task : Task
}

const EditTaskPod : React.FC<Props> = (props) => {

    const dispatch = useDispatch()

    const task = props.task
    
    function handleTxtTileChange(event : NativeSyntheticEvent<TextInputChangeEventData>) {
		dispatch(setTitle({
			id : task.id,
			value : event.nativeEvent.text
		}))
	}

    return (
        <DropShadow style={styles.shadow}>
            <View style={styles.container}>
                <TextInput onChange={handleTxtTileChange} style={styles.txtTitle}>{task.title}</TextInput>
                <Counter task={task}/>
            </View>
        </DropShadow>
    )
}

export default EditTaskPod

const styles = StyleSheet.create({
    shadow : {
        shadowColor : 'black',
        shadowOpacity : 0.3,
        shadowRadius : 1,
    },
    container : {
        flexDirection : 'row',
		alignItems : 'center',
		justifyContent : 'space-between',
		backgroundColor : colors.background,
        margin : 5,
        borderRadius : 5,
        padding : 5
    },
    txtTitle : {
		fontSize : 20,
		marginLeft : 5
	}
})