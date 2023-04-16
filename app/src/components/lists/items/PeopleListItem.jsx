import { View, Text, StyleSheet, Image } from 'react-native';
import { capitalizeFirstLetter } from '../../../utils';

export function PeopleListItem(props) {
  const { person } = props;
  const { title, first, last } = person.name;
  const { thumbnail } = person.picture;

  return (
    <View style={styles.line}>
      <Image style={styles.avatar} source={{ uri: thumbnail }} />
      <Text style={styles.lineText}>
        {`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(
          first,
        )} ${capitalizeFirstLetter(last)}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    marginBottom: 5,
  },
  lineText: {
    flex: 7,
    fontSize: 20,
    paddingLeft: 15,
  },
  avatar: {
    flex: 1,
    aspectRatio: 1,
    marginLeft: 15,
    borderRadius: 300,
  },
});
