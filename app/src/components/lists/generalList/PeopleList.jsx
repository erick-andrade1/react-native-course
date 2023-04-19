import { StyleSheet, FlatList } from 'react-native';

import { PeopleListItem } from '../Items/PeopleListItem';

export function PeopleList({ people, onPressItem }) {
  return (
    <FlatList
      style={styles.container}
      data={people}
      renderItem={({ item }) => (
        <PeopleListItem person={item} navigateToPeopleDetail={onPressItem} />
      )}
      keyExtractor={(item) => item.login.uuid}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
