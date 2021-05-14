import React, { useState } from 'react';
import {View,StyleSheet,Text,TextInput, ImageBackground, Keyboard, TouchableWithoutFeedback} from 'react-native';
import PrimaryButton from '../UI/primaryButton';
const background = require('../assets/loginBackground.jpg');

export default function userLogin() {
    const [userValue,setUserValue] = useState('');
    const [userPass,setUserPass] = useState('');

    function loginUser() {
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        const data = {
            email: userValue,
            pass: userPass
        }
        axios.post('http://localhost:4000/user/login',QueryString.stringify(data),config)
        .then(res => {
            console.log('Logged in ',res);
        })
        .catch(err => console.log(err));
    }

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={background} resizeMode='cover'>
                    <View style={styles.head}><Text style={{color:'white',fontSize: 25}}>User Login</Text></View>
                    <View style={styles.card}>
                        <View style={styles.inputContainer}>
                            <Text>Email or phone number:</Text>
                            <View style={styles.input}>    
                                <TextInput defaultValue={userValue} onChangeText={text => setUserValue(text)}/>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Password:</Text>
                            <View style={styles.input}>
                                <TextInput secureTextEntry={true} defaultValue={userPass} onChangeText={pass => setUserPass(pass)}/>
                            </View>
                        </View>
                        <PrimaryButton>LOGIN</PrimaryButton>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head: {
        paddingBottom: 10
    },  
    inputContainer: {
        marginVertical: 20,
        width: '80%'
    },
    input: {
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 40,
        width: '90%',
        borderRadius: 5,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})