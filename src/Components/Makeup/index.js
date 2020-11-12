import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Makeup(props){

    function filterDesc(desc){
        if(desc.length < 27){
            return desc;
        }
        return `${desc.substring(0, 22)}...`;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
            source={props.img}
            style={styles.cosmImg}
            />
            <Text style={styles.cosmText}>
                {filterDesc(props.children)}
            </Text>
            <View >
                <Text style={styles.cosmText}> {props.cost} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cosmImg:{
        width: 175,
        height: 175
    },
    cosmText:{
        fontSize: 16
    }
});