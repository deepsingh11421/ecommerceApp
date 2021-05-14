import React from 'react';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import Colors from '../UI/colors';
import CategoryContainer from '../components/categoryContainer';

export default categoryHome = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerHead}><Text style={styles.containerHeadText}>श्रेणियाँ</Text></View>
            <ScrollView>
                <CategoryContainer />
                <CategoryContainer />
                <CategoryContainer />
                <CategoryContainer />
                <CategoryContainer />
                <CategoryContainer />
                <CategoryContainer />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHead: {
        paddingTop: 35,
        paddingBottom: 15,
        backgroundColor: Colors.primary,
        marginBottom: 20
    },  
    containerHeadText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})