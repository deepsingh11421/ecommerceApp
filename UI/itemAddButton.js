import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Colors from '../UI/colors';

export default itemAddButton = (props) => {
    function handlePress(){
        // console.log('element pressed');
    }

    return (
        <TouchableHighlight onPress={handlePress} underlayColor='#7c222e'>
            <View style={styles.container}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        width: 30
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});