import { View, Text, Image, StyleSheet } from 'react-native';

import { Line } from '../components/PeopleDetail/Line';

export function PeopleDetailPage({ route }) {
  const { person } = route.params;
  const { large } = person.picture;
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image style={style.avatar} source={{ uri: large }} />
      </View>
      <View style={style.detailContainer}>
        <Line label='Email:' content={person.email} />
        <Line label='Cidade:' content={person.location.city} />
        <Line label='Estado:' content={person.location.state} />
        <Line label='Celular:' content={person.cell} />
        <Line label='Telefone:' content={person.phone} />
        <Line label='Nacionalidade:' content={person.nat} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 15,
  },
  imageContainer: {
    padding: 30,
  },
  detailContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C5C5C5',
  },
  avatar: {
    aspectRatio: 1,
    alignContent: 'center',
    borderRadius: 300,
  },
});
