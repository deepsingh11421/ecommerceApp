import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import Colors from '../UI/colors';
import CategoryContainer from '../components/categoryContainer';
import Axios from 'axios';

export default categoryHome = () => {
    const [categories,setCategories] = useState(null);

    useEffect(() => {
        Axios({
            method: "GET",
            url: "http://localhost:4000/category/allWithSubcategory",
            headers: {
              "Content-Type": "application/json"
            }
        })
        .then(function (response) {
            setCategories(response.data);
        })
        .catch(function (error) {
            console.log(error.message);
        })
    },[]);
    var contentToShow = <ActivityIndicator size="large" color="#000"/>
    if(categories !== null){
        console.log(true);
        contentToShow = <FlatList 
            data={Object.keys(categories)}
            keyExtractor={(item,index) =>   categories[item][0].category_id.toString()}
            renderItem={({item}) => <CategoryContainer data={categories[item]}/>}
        />
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerHead}><Text style={styles.containerHeadText}>श्रेणियाँ</Text></View>
            {contentToShow}
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