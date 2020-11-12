import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Sale() {

  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: null
  })

 return (
   <KeyboardAvoidingView style={styles.container}>
     <ScrollView>
      <View style={styles.textContainer}>
          <View style={{marginTop: '10%'}}>
            <Text style={styles.title}>DADOS DO CLIENTE</Text>
          </View>
          <View style={styles.box}>
            <TextInput style={styles.text}
            placeholder='Nome'
            autoCorrect={false}
            onChangeText={()=> {}}
            />
          </View>
          <View style={styles.box}>
          <TextInput style={styles.text}
            placeholder='Whatsapp'
            autoCorrect={false}
            onChangeText={()=> {}}
            />
          </View>
          <View style={styles.box}>
          <TextInput style={styles.text}
            placeholder='Endereço'
            autoCorrect={false}
            onChangeText={()=> {}}
            />
          </View>
          <View style={styles.box}>
          <TextInput style={styles.text}
            placeholder='CEP'
            autoCorrect={false}
            onChangeText={()=> {}}
            />
          </View>
          <View style={[styles.box, {height:'20%'}, {borderRadius:20}, {justifyContent:'flex-start'}]}>
            <TextInput style={[styles.text, {marginTop:'3%'}]}
            placeholder='Observações'
            autoCorrect={false}
            onChangeText={()=> {}}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>FORMA DE PAGAMENTO</Text>
          </View>
          <View style={[styles.box,]}>
            <Text style={styles.text}>Em dinheiro</Text>
            <TouchableOpacity style={{position: 'absolute', right: '5%', alignSelf: 'center'}}>
            <MaterialIcons
            name= "filter-list"
            size= {24}
            color= "#000"
            />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
          <TextInput style={[styles.text]}
            placeholder='Troco para quanto?'
            autoCorrect={false}
            onChangeText={()=> {}}
          />
          </View>

          <View style={styles.box2}>
            <Text style={[styles.text, {color:'#FFF'}, {fontSize: 16}]}>CONFIRMAR PEDIDO</Text>
          </View>
      </View>
   </ScrollView>
   </KeyboardAvoidingView>
   

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  textContainer:{
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:'20%'
  },
  titleContainer:{
    alignItems: 'center',
    justifyContent:'center',
    
  },
  title:{
    fontSize: 22,
    fontFamily:'Anton_400Regular',
    marginVertical: '5%'
  },
  box:{
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    marginVertical: '3%',
    width: '95%',
    height: 40,
    justifyContent:'center'
  },
  text:{
    fontSize: 18,
    marginHorizontal: '5%',
  },
  box2:{
    backgroundColor: '#000',
    width: '95%',
    height: 50,
    borderRadius: 50,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});