import { View, Text } from 'react-native';

import { lineStyle } from './lineStyle';

export function Line({ label = '', content = '-' }) {
  return (
    <View style={lineStyle.line}>
      <Text
        style={[
          lineStyle.cell,
          lineStyle.label,
          label.length > 8 ? lineStyle.longLabel : '',
        ]}
      >
        {label}
      </Text>
      <Text style={[lineStyle.cell, lineStyle.content]}>{content}</Text>
    </View>
  );
}
