import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './screens/Search/Search'
import Home from './screens/Home'
import TabComponent from './components/Tab'

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name="Home" component={Home} options={{
          tabBarButton: (props) => <TabComponent label="home" {...props}/>, 
        }} />

        <Tab.Screen name="Search" component={Search} options={{
          title: 'Search City',
          tabBarButton: (props) => <TabComponent label="search" {...props}/>,
        }}/>

      </Tab.Navigator>

    </NavigationContainer>

  );

}
