import { View, StyleSheet } from 'react-native';

import { PeopleListItem } from '../Items/PeopleListItem';

export function PeopleList({ people, onPressItem }) {
  const items = people.map((person, index) => {
    return (
      <PeopleListItem
        key={index}
        person={person}
        navigateToPeopleDetail={onPressItem}
      />
    );
  });

  return <View style={styles.container}>{items}</View>;
}

const styles = StyleSheet.create({
  container: {},
});
