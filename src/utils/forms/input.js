import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const input = ( props ) => {
    let template = null;

    switch(props.type) {
        case 'textInput':
             template = 
                <TextInput
                   
                    { ...props }
                    style={styles.input}
                />
            break;
        default : return template;
    }

    return template;
}
const styles = StyleSheet.create({
    input : {
        borderBottomColor:'#eaeaea',
        borderBottomWidth:1,
        fontSize:16,
        fontWeight:'bold',
        padding:10,
        marginTop:10,
      
    }
})
export default input;