import { View, Text } from 'react-native';

export function PeopleDetailPage({ route }) {
  const { person } = route.params;
  return (
    <View>
      <Text>{person.name.first}</Text>
    </View>
  );
}
