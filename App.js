

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  
} from 'react-native';

class App extends Component{
  render(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello, Guy!</Text>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent:'center',
    alignItems : 'center'
  },
  text : {
    fontWeight:'bold'
  }
})
export default App;
