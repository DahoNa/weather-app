
import React, { useState, useEffect} from 'react'
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import WeatherRow from '../../components/Weather/Row'
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Result = (props) => {

    const [report, setReport] = useState(null);

    // const routeName = getFocusedRouteNameFromRoute(route)

    const fetchWeather = async () => {

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${props.route.params.city}&units=metric&cnt=16&appid=bd97ea5c04b2728ea87191ad4b9ab956`).then((response) => {
            setReport(response.data)
        }).catch(error=>{

        });
    }
    
    useEffect(() => {
        setTimeout(() => {
            fetchWeather()
        }, 1000)
    }, [])
    
    if(report === null) {
        
        return (

            <ActivityIndicator color="red" size="large" style = {styles.activityIndicator}/>
        )

    }else {

        return (

            <View >
                <FlatList
                    data={[

                        {key: report.list[0], id: 0},
                        {key: report.list[1], id: 1},
                        {key: report.list[2], id: 2},
                        {key: report.list[3], id: 3},
                        {key: report.list[4], id: 4},
                        {key: report.list[5], id: 5},
                        {key: report.list[6], id: 6},
                        {key: report.list[7], id: 7}

                    ]}
                    
                    renderItem={({ item }) => <WeatherRow day={item.key} index={item.id}/>} 
                    keyExtractor={(item, index) => index.toString()}
                />  
            </View>
                
        )
    }
    
}

const styles = StyleSheet.create ({
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    }
 })

export default Result
