import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const press = () => {
    console.log("Button Press")
}


const GoalItem = props => {
    return ( 
            <View style={styles.goalItem}>
                   <Pressable style={({pressed}) => pressed && styles.pressedItem} android_ripple={{color: '#dddddd'}} onPress={props.onDelete.bind(this, props.id)}>
                    <Text style={styles.goalText}>{props.title}</Text>
                </Pressable>
            </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
    goalItem: { 
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        color: 'white',
        padding: 8
    },
    pressedItem: {
        opacity: 0.5,
    }
});

export default GoalItem;

