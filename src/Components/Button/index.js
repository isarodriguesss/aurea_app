import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button(props) {
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.bntContainer} onPress={props.onClick}>
           <Text style={styles.title}>QUERO COMPRAR!</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    bntContainer:{
        backgroundColor: '#000',
        width: '95%',
        height: 50,
        borderRadius: 50,
        marginVertical: '3%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 16,
        color: '#FFF'
    }
})