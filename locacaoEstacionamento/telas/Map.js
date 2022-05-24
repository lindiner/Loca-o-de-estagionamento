import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, ImageBackground, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const image = require('../assets/maps.jpg');

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text style={styles.texto}></Text>
      </ImageBackground>

      
      <StatusBar style="auto" />
        <View style={styles.footer}>
          <Feather name="home" size={30} marginLeft={25} color={"#B0B0B0"} onPress={() => navigation.navigate('Home')} ></Feather>
          <Ionicons name="map-outline" size={30} marginLeft={25} color={"#B0B0B0"} onPress={() => navigation.navigate('Map')} ></Ionicons>
          <Ionicons name="newspaper-outline" size={30} marginLeft={25} color={"#B0B0B0"} onPress={() => navigation.navigate('Record')} ></Ionicons>
          <Ionicons name="person-outline" size={30} marginLeft={25} color={"#B0B0B0"} onPress={() => navigation.navigate('Profile')} ></Ionicons>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    justifyContent:'center',
  },
  texto:{
    padding:20,
    paddingLeft: 200,
    paddingRight: 200,
  },
  footer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0, 
    right: 0,
    padding:20,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
});
