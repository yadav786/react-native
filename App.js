import React, {useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
 const [goals, setGoals] = useState('');
 const [modalVisible, setModalVisible] = useState(false);
 const listGoal = (goalTobeAdded) => {
        setGoals(prevGoal => [...prevGoal, { id : Math.random().toString(), value: goalTobeAdded } ]);
        setModalVisible(false);
 }
 const onCancelGoal = () => {
    setModalVisible(false)
 }
 
 const onDeleteGoal = (goalId) => {
    setGoals(prevGoal => prevGoal.filter(value => value.id !== goalId ));
 }

  return (
    <View style={styles.screen}>
    <Button title="Add Goal" onPress={() => setModalVisible(!modalVisible)}/>
    <GoalInput onAddGoal={listGoal} onCancelGoal={onCancelGoal} visible={modalVisible} />
    <View>
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={goals}
      renderItem={ (itemData) =>  <GoalItem onDelete={onDeleteGoal} id={itemData.item.id} title={itemData.item.value} />}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
});
