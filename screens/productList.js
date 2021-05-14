import React from 'react';
import {View,Text,StyleSheet, ScrollView,Image,Dimensions} from 'react-native';
import Colors from '../UI/colors';
const img = require('../assets/itemImages/sugar.jpg');
import ItemAddButton from '../UI/itemAddButton';

export default productList = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerHead}><Text style={styles.containerHeadText}>फैशन</Text></View>
            <ScrollView>
                <View style={styles.listContainer}>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productDetailCard}>
                        <View style={styles.discount}><Text style={styles.discountText}>₹10 off</Text></View>
                        <Image source={img} style={styles.img}></Image>
                        <Text style={styles.itemName} numberOfLines={2}>यार्डली लंदन इंग्लिश रोज परफ्यूम्ड टैल्को  (250 g)</Text>
                        <Text style={styles.itemSP}>₹100 <Text style={styles.itemCP}>₹120</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.quantityContainer}>
                                <ItemAddButton>+</ItemAddButton><View style={styles.quantityValueContainer}><Text style={styles.quantityValue}>0</Text></View><ItemAddButton>-</ItemAddButton>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
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
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },  
    productDetailCard: {
        width: Dimensions.get('screen').width/2,
        borderColor: '#dbdbdb',
        borderWidth: 0.5,
        // height: Dimensions.get('screen').width/2 + 30,
        padding: 10
    },
    img: {
        width: Dimensions.get('screen').width/2 - 20,
        height: Dimensions.get('screen').width/2 - 20,
        borderRadius: 5
    },
    itemName: {
        marginTop: 5,
        fontSize: 16
    },
    itemSP: {
        fontWeight: '700'
    },
    itemCP: {
        fontWeight: '400',
        color: 'grey',
        textDecorationLine: 'line-through'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 2,
        width: 'auto'
    },
    quantityValueContainer: {
        // justifyContent: 'center'
        minWidth: 40,
        paddingHorizontal: 5
    },
    quantityValue: {
        textAlign: 'center'
    },
    discount: {
        position: 'absolute',
        zIndex: 1,
        minWidth: 65,
        backgroundColor: '#76ba3f',
        paddingVertical: 2,
        paddingHorizontal: 5 
    },
    discountText: {
        color: 'white'
    }
});