import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [courseGoals, setCourseGoal] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoal(
      currentGoals => [...currentGoals,
      {
        uid: Math.random().toString(),
        value: goalTitle
      }])
  }

  const removeGoalHandler =  goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.uid} onDelete={removeGoalHandler} title={itemData.item.value} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
