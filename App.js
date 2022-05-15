import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PokeDataProvider } from "./src/contexts/PokeDataContexts";
import { TrainerProvider } from "./src/contexts/TrainerContexts";
import { Home } from "./src/Pages/Home";
import { Pokedex } from "./src/Pages/Pokedex";
import { Details } from "./src/Pages/Details";
import { Login } from "./src/Pages/Login";
import { Register } from "./src/Pages/Register";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PokeDataProvider>
        <TrainerProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerLeft: false,
              }}
            />
            <Stack.Screen name="Pokédex" component={Pokedex} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </TrainerProvider>
      </PokeDataProvider>
    </NavigationContainer>
  );
}
