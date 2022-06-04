import { Button, StyleSheet, View, Dimensions, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, {Marker, Callout} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView  style={styles.map}
      initialRegion={{
        latitude: -5.334651,
        longitude: -49.088738,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>

      <Marker style={styles.imageIcon}
        coordinate={{ latitude : -5.356894856231483 , longitude : -49.08642305710392 }}
        image={require('../assets/carMapIcon.png')}
        title="Estacionamento Disponível"
        description="Shopping Pátio Marabá"
        onPress={() => navigation.navigate('Home')}
        />

      <Marker style={styles.imageIcon}
        coordinate={{ latitude : -5.345658560291988, longitude : -49.099901206524045 }}
        image={require('../assets/carMapIcon.png')}
        title="Estacionamento Disponível"
        description="Shopping Verdes Mares"
        onPress={() => navigation.navigate('Home')}
        />
        </MapView>
        
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
  imageIcon: {
    width: 5,
    height: 5,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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