import { StyleSheet } from 'react-native';

export const lineStyle = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    fontSize: 16,
    paddingLeft: 10,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  content: {
    flex: 3,
  },
  longLabel: {
    fontSize: 12,
  },
});
