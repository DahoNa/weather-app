import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native';

const SearchBar = () => {


        const navigation = useNavigation()

        const [city, setCity] = useState('')

        const AppButton = () => (
        
            <TouchableOpacity
                onPress={() => {

                    if(city === ''){

                        Alert.alert('Please enter the name of a city to know its weather')

                    }else {

                        navigation.navigate('Result', {city: city})

                    }
                } }

                activeOpacity={0.8}
                style={styles.appButtonContainer}
            >

                <Text style={styles.appButtonText}>Search</Text>
            </TouchableOpacity>
        );
    
    
    return (

        <View style={styles.container}>
            <TextInput  
                onChangeText={(text) => setCity(text)}
                placeholder={'City Name'}
                placeholderTextColor={'#fff'}
                type={'text'}
                style={styles.inputContainer}
            />
            <AppButton/>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        height: 540,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#16a085'    
    },

    appButtonContainer: {
        
        marginTop: 50,
        elevation: 20,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: 'center',
        width: 250,
    },

    appButtonText: {

        fontSize: 16,
        color: '#0e6655',
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

    inputContainer: {

        marginTop: 50,
        padding: 15,
        fontSize: 20,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        backgroundColor: 'transparent',
        borderRadius: 0,
        width: 320,
        color: '#fff'
    }
});


export default SearchBar


