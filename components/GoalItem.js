import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const press = () => {
    console.log("Button Press")
}


const GoalItem = props => {
    return (

        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
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
        color: 'white'
    }
});

export default GoalItem;

