import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Makeup from '../../Components/Makeup';

export default function Home() {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: 'Início'
  })

 return (
    <View style={styles.container}>
      <View style= {styles.header}>
        <Image
        source={require('../../assets/aurea.png')}
        style={styles.image}
        />
      </View>

      <View style ={styles.line} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Produtos</Text>
        <Text style={[styles.text, {color: 'red'} ]}>•</Text>
        <Text style={[styles.text, {color: 'red'} ]}>Maquiagem</Text>
        <TouchableOpacity style={{position: 'absolute', right: '5%', alignSelf: 'center'}}>
        <MaterialIcons
            name= "filter-list"
            size= {24}
            color= '#000'
            />
        </TouchableOpacity>
      </View>  

    <View style ={styles.line} />

    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Makeup img={require('../../assets/vermelho.jpg')} cost="R$25.00" onClick={()=> navigation.navigate('Detail')}>
           Sombra Vermelha
        </Makeup>
        <Makeup img={require('../../assets/azul.jpeg')} cost="R$25.00" onClick={()=> navigation.navigate('Detail2')}>
            Sombra Azul
        </Makeup>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Makeup img={require('../../assets/amarelo.jpeg')} cost="R$25.00" onClick={()=> navigation.navigate('Detail3')}>
          Sombra Nude
        </Makeup>
        <Makeup img={require('../../assets/preto.jpeg')} cost="R25.00" onClick={()=> navigation.navigate('Detail4')}>
          Paleta Preta
        </Makeup>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Makeup img={require('../../assets/paleta.png')} cost="R$60.00" onClick={()=> navigation.navigate('Detail')}>
           Paleta Sombras Bronzes
        </Makeup>
        <Makeup img={require('../../assets/paletanude.png')} cost="R$50.00" onClick={()=> navigation.navigate('Detail')}>
           Paleta Tons Nudes
        </Makeup>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>        
        <Makeup img={require('../../assets/bronze.png')} cost="R$35.00" onClick={()=> navigation.navigate('Detail')}>
           Iluminador Bronze
        </Makeup>
        <Makeup img={require('../../assets/sombrancelha.png')} cost="R$20.00" onClick={()=> navigation.navigate('Detail')}>
          Paleta Sombrancelha
        </Makeup>
      </View>
        
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Makeup img={require('../../assets/po.jpg')} cost="R$75.00" onClick={()=> navigation.navigate('Detail')}>
          Pó Compacto
        </Makeup>
        <Makeup img={require('../../assets/brush.png')} cost="R$60.00" onClick={()=> navigation.navigate('Detail')}>
           Pincéis Clássicos
        </Makeup>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    alignItems:'center',
    justifyContent: 'center',
  },
  image:{
    width: 375,
    height: 160
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '1%',
    marginHorizontal: '2%',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 23,
    marginHorizontal: '1%'
  },
  line:{
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: '5%'
  }
});