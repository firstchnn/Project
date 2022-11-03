import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Homepage from '../../pages/Homepage';
import DoctorList from '../../pages/DoctorList';
import Evaluation from '../../pages/Evalution';

//Screen names
const homeName = "Home";
const doctorName = "Doctor";
const evaluationName = "Eval";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === doctorName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === evaluationName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Homepage} />
        <Tab.Screen name={doctorName} component={DoctorList} />
        <Tab.Screen name={evaluationName} component={Evaluation} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;