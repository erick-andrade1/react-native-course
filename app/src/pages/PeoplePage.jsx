import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { PeopleList } from '../components/lists/GeneralList/PeopleList';

import Axios from 'axios';

async function getAllUsers() {
  return Axios.get('https://randomuser.me/api/?nat=br&results=20').then(
    (response) => response.data,
  );
}

export function PeoplePage({ navigation }) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(Boolean);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      await getAllUsers()
        .then((response) => {
          const { results } = response;
          setPeople(results);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    };

    setTimeout(() => {
      fetch();
    }, 1500);
  }, []);

  const render = () => {
    if (loading === true) {
      return <ActivityIndicator size='large' color='#6ca2f7' />;
    }
    if (error === true) {
      return <Text style={styles.error}>Deu erro manokkkk</Text>;
    }
    return (
      <PeopleList
        people={people}
        onPressItem={(person) =>
          navigation.navigate('Detalhes', { person: person })
        }
      />
    );
  };

  return <View style={styles.container}>{render()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    alignSelf: 'center',
    fontSize: 18,
  },
});
