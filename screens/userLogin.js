import React, { useState } from 'react';
import {View,StyleSheet,Text,TextInput, ImageBackground,Dimensions, KeyboardAvoidingView} from 'react-native';
import PrimaryButton from '../UI/primaryButton';
const background = require('../assets/loginBackground.jpg');

export default function userLogin() {
    const [userValue,setUserValue] = useState('');
    const [userPass,setUserPass] = useState('');
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={background} resizeMode='cover'>
                <View style={styles.head}><Text style={{color:'white',fontSize: 25}}>User Login</Text></View>
                <View style={styles.card}>
                    <View style={styles.inputContainer}>
                        <Text>Email or phone number:</Text>
                        <View style={styles.input}>
                            <KeyboardAvoidingView>
                                <TextInput defaultValue={userValue} onChangeText={text => setUserValue(text)}/>
                            </KeyboardAvoidingView>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Password:</Text>
                        <View style={styles.input}>
                            <KeyboardAvoidingView>
                                <TextInput secureTextEntry={true} defaultValue={userPass} onChangeText={pass => setUserPass(pass)}/>
                            </KeyboardAvoidingView>
                        </View>
                    </View>
                    <PrimaryButton>LOGIN</PrimaryButton>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height
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