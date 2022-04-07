import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/Pages/Home";
import { Pokedex } from "./src/Pages/Pokedex";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokédex" component={Pokedex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
