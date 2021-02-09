import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fr'
import styled from 'styled-components'

moment.locale('fr')

// TROUVER UNE SOLUTION EN FUNCTIONNAL COMPONENT ! En Class, c'est juste pour le test...

class Row extends React.Component {
    
    static propTypes = {

        day: PropTypes.object,
        index: PropTypes.number

      };

    day () {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return(
            <Day>{day.toUpperCase()}</Day>
        )
    }

    date () {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return(
            <Date>{day}</Date>
        )
    }

    time () {
        let day = moment(this.props.day.dt * 1000).format('LT')
        return(
            <Time>{day}</Time>
        )
    }
    wind() {

        let day = (this.props.day.wind.speed * 3.6).toFixed(0)
        return (
            <Description>{day}</Description>
        )
        
    }

    icon () {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch(type) {
            case 'clouds':
                image = require('./icon/cloudy.png')
                break;
            case 'rain' :
                image = require('./icon/rain.png')
                break;
            default: 
                image = require('./icon/sun.png')
        }
        return <Image source={image} style={styles.iconWeather}/>
    }

    render(){

        if(parseInt(this.props.index) === 0) {
            
            return (
                <FirstView>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>  {this.day()} {this.date()} | {this.time()}</Text>
                    {this.icon()} 
                    <Temp style={{fontSize: 55}}>{Math.round(parseInt(this.props.day.main.temp))}°C</Temp>
                    <ContainerInfo>
                        <Description>{this.props.day.weather[0].description} | </Description>
                        <Wind>{this.wind()} km/h</Wind> 
                    </ContainerInfo>
                </FirstView>
            )

        }else {

            return (
                <Container>
                    <View style={styles.headerInfo}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>  {this.day()} {this.date()} | {this.time()}</Text>
                        <Text style={styles.line}></Text>
                    </View>
                    {this.icon()}
                    <Temp>{Math.round(parseInt(this.props.day.main.temp))}°C</Temp>
                    <ContainerInfo>
                        <Description>{this.props.day.weather[0].description} | </Description>
                        <Wind>{this.wind()} km/h</Wind> 
                    </ContainerInfo>
                        
                </Container>
            )
        }
        
    }
    
}

const styles = StyleSheet.create({
    iconWeather: {
        marginTop: 20,
        marginBottom: 20,
        width: 150, 
        height: 150,
        backgroundColor: '#d0ece7',
        borderRadius: 100
    },

    line: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        width: 245
    }
  });

const Container = styled.View`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #138d75 ; 
    border: 7px solid #fff;
    padding: 15px
`;

const ContainerInfo = styled.View`
    
    flex: 1;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 20px;
`;

const Temp = styled.Text`

    color: #fff;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;

`;

const Day = styled.Text`

    color: #fff;
    font-weight: bold;
    font-size: 25px;

`;

const Date = styled.Text`

    color: #fff;
    font-weight: bold;
    font-size: 25px;
`;

const Time = styled.Text`

    color: #fff;
    font-weight: bold;
    font-size: 25px;
`;


const Description = styled.Text`

    color: #138d75;
    font-weight: bold;
    font-size: 22px;
`;

const Wind = styled.Text`

    color: #138d75;
    font-weight: bold;
    font-size: 22px;
`;



const FirstView = styled.View`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 7px solid #fff;
    padding: 20px;
    background-color:  #0b5345 ;
`;
export default Row
