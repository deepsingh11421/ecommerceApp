import React from 'react';
import {View,Text,StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
const img = require('../assets/itemImages/sugar.jpg');

export default categoryContainer = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>फैशन</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItemCard}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.itemCard}>
                            <Image source={img} style={styles.image}/>
                            <Text style={styles.itemCardText}>चीनी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.itemCard}>
                            <Image source={img} style={styles.image}/>
                            <Text style={styles.itemCardText}>चीनी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.itemCard}>
                            <Image source={img} style={styles.image}/>
                            <Text style={styles.itemCardText}>चीनी</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.itemCard}>
                            <Image source={img} style={styles.image}/>
                            <Text style={styles.itemCardText}>चीनी</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        borderColor: '#dbdbdb',
        borderWidth: 1
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700'
    },
    categoryItemCard: {
        flexDirection: 'row',
        marginTop: 10
    },
    itemCard: {
        // borderColor: 'grey',
        // borderWidth: 1,
        height: 130,
        width: 100,
        // padding: 10,
        marginRight: 10
    },
    itemCardText: {
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 5
    }
});