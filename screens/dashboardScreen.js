import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

class  DashboardScreen extends React.Component{
    render(){
        return(
        <View style={styles.container}>
        <View style={styles.dashboardWrapper}>
        <Text style={styles.userText}> hey user</Text>
        <TouchableOpacity style={styles.logouBtn}>
         <Text style={styles.logouBtnText}>Logout</Text>   
        </TouchableOpacity>
        </View>
        </View>
        )
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    dashboardWrapper:{ },
    userText:{
        fontSize:30,
        fontWeight:"bold",
        marginBottom:10
    },
    logouBtn:{
        backgroundColor:"red",
        paddingVertical:10,
        width:100,
        alignSelf:"center"
    },
    logouBtnText:{
        color:'#fff',
        textAlign:"center",
        fontWeight:"bold"
    }
})