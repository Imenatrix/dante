import React from 'react'
import {
    View,
    Text,
    Modal,
    Pressable,
    StyleSheet,
    GestureResponderEvent
} from 'react-native'
import { Task } from 'src/reducers/tasksSlice'

interface Props {
    task : Task,
    visible : boolean,
    onBtnContinuePress? : (event : GestureResponderEvent) => void,
    onBtnPausePress? : (event : GestureResponderEvent) => void
}

const CompletionWarning : React.FC<Props> = (props) => {
    return (
        <Modal animationType='fade' visible={props.visible} transparent>
            <View style={styles.background}/>
            <View style={styles.container}>
                <View/>
                    <Text style={styles.txt}>{props.task.title}</Text>
                <View style={styles.buttonGroup}>
                    <Pressable style={styles.btnContinue} onPress={props.onBtnContinuePress}/>
                    <View style={{width : 5}}/>
                    <Pressable style={styles.btnPause} onPress={props.onBtnPausePress}/>
                </View>
            </View>
        </Modal>
    )
}

export default CompletionWarning

const styles = StyleSheet.create({
    background : {
        width : '100%',
        height : '100%',
        backgroundColor : 'black',
        opacity : 0.5,
        position : 'absolute'
    },
    container : {
        flex : 1,
        marginHorizontal : 50,
        marginVertical : 200,
        backgroundColor : 'white',
        borderRadius : 5,
        justifyContent : 'space-between',
        padding : 5
    },
    txt : {
        textAlign : 'center',
        fontSize : 17
    },
    buttonGroup : {
        flexDirection : 'row',
    },
    btnPause : {
        height : 50,
        flex : 1,
        backgroundColor : 'red',
        borderRadius : 5
    },
    btnContinue : {
        height : 50,
        flex : 1,
        backgroundColor : 'green',
        borderRadius : 5
    }
})