import { StyleSheet } from 'react-native';

export const ItemStyle = StyleSheet.create({
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
