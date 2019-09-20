import React, { Component } from 'react';
import{
    View,
    Text
} from 'react-native';
import Input from '../../utils/forms/input';

class AuthForm extends Component{
    state = {
        type:'Login',
        action:'Login',
        actionMode:'I want to register',
        hasErrors : false,

        form : {
            email : {
                value:'',
                valid:false,
                type:'textInput',
                rules : {
                    isRequired:true,
                    isEmail:true
                }  
            },
            password : {
                value:'',
                valid:false,
                type:'textInput',
                rules : {
                    isRequired:true,
                    minLength:6
                },
            confirmPassword : {
                value:'',
                valid:false,
                type:'textInput',
                rules : {
                    confirmPass:'password'
                }  
            }  
            }
        }
    }
    render(){
        return(
            <View>
                <Input
                    placeholder = "Enter email"
                    placeholderTextColor = "#cecece"
                    type = { this.state.form.email.type}
                    value = {this.state.form.value}
                    autoCapitalize = {'none'}
                    keyboardType = {'email-address'}
                />
            </View>
        )
    }
}

export default AuthForm;