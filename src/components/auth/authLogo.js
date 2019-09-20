import React from 'react';
import { View, Image } from 'react-native';
import LogoImage from '../../assets/logos/nba_login_logo.png';

const LogoComponent = () => {
    return (
        <View
            style={{
                alignItems:'center',
                justifyContent:'center',
                padding:10
            }}
        >
            <Image
                source={LogoImage}
                resizeMode='center'
                style={{
                    width:170,
                    height:150
                }}
            />
        </View>
    )
}

export default LogoComponent;