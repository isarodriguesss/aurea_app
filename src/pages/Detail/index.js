import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native'

export default function Detail() {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: null
  })

 return (
    <ScrollView style={styles.container}>
        <Image
        source={require('../../assets/vermelho.jpg')}
        style={styles.image}
        resizeMode='cover'
        />

        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$25.00</Text>
          <Text style={[styles.title, { fontSize: 30 }]}>Sombra Vermelha 1,5g</Text>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textContent}>
          Sombra refil matte com ótima pigmentação, fixação e durabilidade, além de cores incríveis, uma mais linda que a outra! O formato em refil te deixa livre pra combinar as cores que mais ama em um dos nossos estojos. Depois é só levar pra onde quiser! Além disso é vegana  é vegana, ou seja: não utilizamos nenhuma matéria-prima de origem animal em sua composição e fabricação!
          </Text>
          <Button onClick={()=> navigation.navigate('Sale')}/>
        </View>

        
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor:'#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    marginHorizontal: '3%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    marginHorizontal: '2%',
  }
})