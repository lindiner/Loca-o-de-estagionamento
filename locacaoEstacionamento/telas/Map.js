import { Button, StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const image = require('../assets/maps.jpg');

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView  style={styles.map}
      initialRegion={{
        latitude: -5.334651,
        longitude: -49.088738,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});