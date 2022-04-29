import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';

const image = require('../assets/imageBackgroundWelcome.png')

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode='cover' style={styles.image}>

         <View style={styles.contentCenter}>
          <Text style={styles.welcomeTitle}>Bem vindo</Text>
          <Text style={styles.textWelcome}>
            Bem-vindo ao Design Diário, 
            o maior portal para se informar sobre design
          </Text>   

          <Pressable style={styles.buttonNewUser} onPress={() => navigation.navigate('Cadastro')}>
            <Text  style={styles.textButtonNewUser}>Sou novo</Text>
          </Pressable>
          <Pressable style={styles.buttonUserRegistred} onPress={() => navigation.navigate('Login')}>
            <Text  style={styles.textButtonUserRegistred}>Já tenho conta</Text>
          </Pressable>
         </View>
        <StatusBar style="auto" />
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0
  },
  image:{
    flex: 1,
    justifyContent:'center',
  },
  contentCenter:{
    backgroundColor:'#fff',
    padding: 10,
    margin: 50,
    borderRadius: 12
  },
  welcomeTitle:{
    textAlign:'center',
    fontSize: 27,
    marginBottom:10,
    fontWeight:'bold'
  },
  textWelcome:{
    textAlign:'center',
    fontSize:19,
    padding: 15
  },
  buttonNewUser: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    margin: 15,
    marginBottom:10,
    backgroundColor: '#5F93FB',
  },
  textButtonNewUser:{
    color: '#fff',
    fontWeight:'700',
    fontSize:18
  },
  buttonUserRegistred: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginTop:0,
    backgroundColor: '#fff',
  },
  textButtonUserRegistred:{
    color: '#5F93FB',
    fontWeight:'700',
    fontSize:18
  }
});
