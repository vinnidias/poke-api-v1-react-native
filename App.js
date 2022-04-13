import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PokeDataProvider } from "./src/contexts/PokeDataContexts";
import { Home } from "./src/Pages/Home";
import { Pokedex } from "./src/Pages/Pokedex";
import { Details } from "./src/Pages/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PokeDataProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pokédex" component={Pokedex} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </PokeDataProvider>
    </NavigationContainer>
  );
}
