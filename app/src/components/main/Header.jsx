import { View, Text, StyleSheet } from 'react-native';

export function Header(props) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.label}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    color: '#fff',
  },
});
