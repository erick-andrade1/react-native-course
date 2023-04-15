import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from './src/components/main/Header';
import { PeopleList } from './src/components/generalList/PeopleList';

import Axios from 'axios';

async function getAllUsers() {
  return Axios.get('https://randomuser.me/api/?nat=br&results=5').then(
    (response) => response.data,
  );
}

export default function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { results } = await getAllUsers();
      setPeople(results);
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <Header label='Pessoas!' />
      <PeopleList people={people} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
