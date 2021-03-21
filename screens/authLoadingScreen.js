import React from 'react';
import { StyleSheet,ActivityIndicator, View,} from 'react-native';

class  AuthLoadingScreen extends React.Component{
    render(){
        return(
        <View style={styles.container}>
        <ActivityIndicator/>
        </View>
        )
    }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
  
    
    
})