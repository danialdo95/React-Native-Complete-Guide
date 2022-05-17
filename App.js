import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const [courseGoals, setCourseGoal] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = goalTitle => {
    setCourseGoal(
      currentGoals => [...currentGoals,
      {
        uid: Math.random().toString(),
        value: goalTitle
      }])
    endAddGoalHandler();
  }

  const removeGoalHandler =  goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.screen}>
      <Button title='Add new Goal' color="#a065ec" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem id={itemData.item.uid} onDelete={removeGoalHandler} title={itemData.item.value} />
          )} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    //backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});
