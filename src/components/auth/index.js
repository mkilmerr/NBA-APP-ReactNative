import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import LogoComponent from './authLogo';
import FormComponent from './authForm';

class AuthComponent extends Component{
  state = {
    loading :false
  }
  goNext = () => {
    this.props.navigation.navigate('App')
  }
  render(){
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator/>
       </View>
      )
    }else {
      return (
        <View style={styles.container}>
           <LogoComponent/>
           <FormComponent
              goNext = {this.goNext}
           />
        </View>
       
      )
    }
  }
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#1d428a',
    
    
  },
  loading : {
  }
})
export default AuthComponent;
