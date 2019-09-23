import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Platform,
    Button
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
                }},
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
    
    updateInput( name, value){
        this.setState({
            hasErrors:false
        });

        let formCopy = this.state.form;
        formCopy[name].value = value;

        this.setState({
            form:formCopy
        })

    }
    confirmPassword = () => (
      this.state.type != 'Login' ?
                <Input
                placeholder = "Confirm your password"
                placeholderTextColor = "white"
                type = { this.state.form.confirmPassword.type}
                value = {this.state.form.confirmPassword.value}
                autoCapitalize = {'none'}
                onChangeText = { value => this.updateInput("confirmPassword",value)}
                secureTextEntry
            />
            :null
    )
    submitButton = () => {
        const type = this.state.type;
        this.setState({
            type : type === 'Login' ? 'Register' : 'Login',
            action : type === 'Login' ? 'Register' : 'Login',
            actionMode : type === 'Login' ? 'I want to Login' : 'I want to Register'
        })
    }
    hasErrorsFunction = () => (
        this.state.hasErrors == true ?
            <View style={styles.errorContainer}>
                <Text style = {styles.errorLabel}>Ops,check your informations!</Text>
            </View>
            :null
    )
    render(){
        return(
            <View>
                <Input
                    placeholder = "Enter email"
                    placeholderTextColor = "white"
                    type = { this.state.form.email.type}
                    value = {this.state.form.email.value}
                    autoCapitalize = {'none'}
                    keyboardType = {'email-address'}
                    onChangeText = { value => this.updateInput("email",value)}
                />
                <Input
                    placeholder = "Enter a password"
                    placeholderTextColor = "white"
                    type = { this.state.form.password.type}
                    value = {this.state.form.password.value}
                    autoCapitalize = {'none'}
                    onChangeText = { value => this.updateInput("password",value)}
                    secureTextEntry
                />

                {this.confirmPassword()}
                {this.hasErrorsFunction()}
                <View style={{marginTop:20}}>
                    <View style={styles.button}>
                        <Button
                            title = {this.state.action}
                            onPress = {() => this.submitButton()}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                        
                        title = {this.state.actionMode}
                        onPress = {() =>this.submitButton()}
                    />
                    </View>
                    <View style={styles.button}>
                        <Button
                        
                        title = {"I'll do it later"}
                        onPress = {() =>this.props.goNext()}
                    />
                    </View>
                   
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    errorContainer : {
        backgroundColor:'#f44336',
        marginBottom :10,
        marginTop : 30,
        padding:10
    },
    errorLabel : {
        fontSize : 10,
        textAlignVertical:'center',
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    button : {
        ...Platform.select({
            ios : {
                marginBottom:0
            },
            android : {
                marginBottom: 10,
                marginTop : 10,
               
            }
        })
    }
})
export default AuthForm;