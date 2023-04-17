import { View, Text } from 'react-native';

import { HeaderStyle } from './headerStyle';

export function Header(props) {
  return (
    <View style={HeaderStyle.container}>
      <Text style={HeaderStyle.title}>{props.label}</Text>
    </View>
  );
}
