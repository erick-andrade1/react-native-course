import { View, Text, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../../../utils';

import { ItemStyle } from './itemStyle';

export function PeopleListItem({ person, navigateToPeopleDetail }) {
  const { title, first, last } = person.name;
  const { thumbnail } = person.picture;

  return (
    <TouchableOpacity onPress={() => navigateToPeopleDetail(person)}>
      <View style={ItemStyle.line}>
        <Image style={ItemStyle.avatar} source={{ uri: thumbnail }} />
        <Text style={ItemStyle.lineText}>{`${title} ${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
