import React from 'react';
import {View,Text,StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
const img = require('../assets/itemImages/sugar.jpg');

export default categoryContainer = (props) => {
    console.log(props.data);
    var list = props.data.map(item => (
        <TouchableOpacity activeOpacity={0.8} key={item.subcategory_id}>
                        <View style={styles.itemCard}>
                            <Image source={{uri: item.subcategory_img}} style={styles.image}/>
                            <Text style={styles.itemCardText}>{item.name}</Text>
                        </View>
        </TouchableOpacity>
    ))
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>{props.data[0].category_name}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryItemCard}>
                    {list}
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
        height: 130,
        width: 100,
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