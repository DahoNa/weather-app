import React from 'react'
import SearchBar from './SearchBar'
import Result from './Result'
import { createStackNavigator } from '@react-navigation/stack';

// Trouver un autre moyen d'envoyer le nom de la ville sur le screen Result avec React-Navigation (Screen options with nested navigators) !!

const Stack = createStackNavigator();

const Search = () => {


    return (

      <Stack.Navigator>
        <Stack.Screen name="SearchBar" component={SearchBar} options={{ title: 'Search City' }} />
        <Stack.Screen name="Result" component={Result} options={({route}) => ({ title: `Weather | ${route.params.city} ` })} />
      </Stack.Navigator>

    );

  }

export default Search
