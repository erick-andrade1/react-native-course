import { View, Text, StyleSheet } from 'react-native';

export function PeopleList(props) {
  const { people } = props;

  const peopleElements = people.map((person, index) => {
    return (
      <View key={index} style={styles.line}>
        <Text style={styles.lineText}>{person.name.first}</Text>
      </View>
    );
  });

  return <View style={styles.container}>{peopleElements}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  },
});
