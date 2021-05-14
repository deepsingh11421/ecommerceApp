import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import Colors from './colors';

export default primaryButton = (props) => {
    return(
        <TouchableOpacity>
            <View style={{...styles.button , ...props.style}}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 3,
        fontSize: 16
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
})