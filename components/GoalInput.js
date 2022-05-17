import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'



const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    return (
        <Modal  visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}> 
                        <Button title="Add Goal" color="#b180f0" onPress={props.onAddGoal.bind(this, enteredGoal)} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      input: {
        width: '100%',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        borderWidth: 1,
        padding: 10
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
          width: 100,
          marginHorizontal: 8
      },
      image: {
          width: 100,
          height: 100,
          margin: 20
      }
});

export default GoalInput;
