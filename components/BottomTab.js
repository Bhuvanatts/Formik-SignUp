import { createBottomTabNavigator } from 'react-navigation-bottom-tabs';
//import SignUpScreen from '../screens/SignupScreen';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../screens/LoginScreen';
import PostScreen from '../screens/PostScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LoginScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs