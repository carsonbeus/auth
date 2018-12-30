// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return ( 
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    )
}


const styles = {
    viewStyle: {
        backgroundColor: '#4ae85f',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    }
}

export { Header };