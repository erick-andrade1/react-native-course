import { View, StyleSheet } from 'react-native';

import { PeopleListItem } from '../items/PeopleListItem';

export function PeopleList(props) {
  const { people } = props;

  const items = people.map((person, index) => {
    return <PeopleListItem key={index} person={person} />;
  });

  return <View style={styles.container}>{items}</View>;
}

const styles = StyleSheet.create({
  container: {},
});
