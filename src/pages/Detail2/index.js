import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native'

export default function Detail2() {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: null
  })

 return (
    <ScrollView style={styles.container}>
        <Image
        source={require('../../assets/azul.jpeg')}
        style={styles.image}
        resizeMode='cover'
        />

        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$25.00</Text>
          <Text style={[styles.title, { fontSize: 30 }]}>Sombra Azul 1,5g</Text>       
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textContent}>
          O formato em refil te deixa livre pra combinar as cores que mais ama em um dos nossos estojos. Depois é só levar pra onde quiser! Sombra refil é vegana, ou seja, não utiliza nenhuma matéria-prima de origem animal.
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