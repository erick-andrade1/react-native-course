import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { PeopleList } from '../components/lists/GeneralList/PeopleList';

import Axios from 'axios';

async function getAllUsers() {
  return Axios.get('https://randomuser.me/api/?nat=br&results=5').then(
    (response) => response.data,
  );
}

export function PeoplePage({ navigation }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { results } = await getAllUsers();
      setPeople(results);
    };
    fetch();
  }, []);

  return (
    <View>
      <PeopleList
        people={people}
        onPressItem={(person) =>
          navigation.navigate('Detalhes', { person: person })
        }
      />
    </View>
  );
}
