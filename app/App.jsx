import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PeoplePage } from './src/pages/PeoplePage';
import { PeopleDetailPage } from './src/pages/PeopleDetailPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Pessoas'
        screenOptions={(props) => ({
          title: props.route.name,
          headerStyle: {
            backgroundColor: '#6ca2f7',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 30,
          },
        })}
      >
        <Stack.Screen name='Pessoas' component={PeoplePage} />
        <Stack.Screen
          name='Detalhes'
          component={PeopleDetailPage}
          options={(props) => {
            const peopleName = props.route.params.person.name.first;
            return {
              title: peopleName,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
