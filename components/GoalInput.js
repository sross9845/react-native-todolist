import React from 'react'
import {TextInput, Button, View, StyleSheet} from 'react-native'

const GoalInput = props => {
    return  <View style={styles.inputContainer}>
    <TextInput 
    placeholder="Course Goal" 
    style={styles.input}
    onChangeText={props.goalInputHandler}
    value={props.enteredGoal}
    />
    <Button title="ADD" onPress={props.addGoalHandler} />
  </View>
}

export default GoalInput

const styles = StyleSheet.create({
    input: {
        width: "80%", 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
        },
    inputContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center" 
        },
})