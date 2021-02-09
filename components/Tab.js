import React from 'react'
import styled from 'styled-components'
import Images from '../Icons'

const Tab = ({label, accessibilityState, onPress}) => {

    const focused = accessibilityState.selected;
    
    const icon = focused  ? Images.icons[label] : Images.icons[`${label}Focused`];
    
    return (
        <Container onPress={onPress}>
            <Background focused={focused} label={label}>
               <Icon source={icon}/>
            <Label label={label}>{label}</Label>
            </Background>         
        </Container>
    )
}

const bgColors = {
    home: '#2874a6',
    search: '#16a085'
}

const textColors = {
    home: '#154360',
    search: '#004d40'
}

const Container = styled.TouchableWithoutFeedback`

    
`;

const Background = styled.View`
    flex: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.focused ? bgColors[props.label] : 'white')}
    margin: 5px;

`;

const Icon = styled.Image`
    height: 24px;
    width: 24px;

`;
const Label = styled.Text`
    color: ${(props) => textColors[props.label]};
    font-weight: 600;
    margin-left: 8px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;

export default Tab
