import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal}]);
    setEnteredGoal('')
  }
  return (
    <View style={styles.screen}>
     <GoalInput enteredGoal={enteredGoal}goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
      <FlatList data= {courseGoals} renderItem={itemData => 
        <GoalItem title={itemData.item.value}/>
      }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
  

});
