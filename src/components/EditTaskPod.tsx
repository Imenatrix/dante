import React from 'react'
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from 'react-native'
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
        <View style={styles.container}>
            <TextInput onChange={handleTxtTileChange} style={styles.txtTitle}>{task.title}</TextInput>
            <Counter task={task}/>
        </View>
    )
}

export default EditTaskPod

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
		alignItems : 'center',
		justifyContent : 'space-between',
		backgroundColor : 'gray',
        margin : 5,
        borderRadius : 5
    },
    txtTitle : {
		fontSize : 20,
		marginLeft : 5
	}
})