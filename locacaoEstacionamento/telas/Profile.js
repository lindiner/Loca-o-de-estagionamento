import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.topContent}>
            <View style={styles.contentImageProfile}>
              <Image style={styles.imageProfile}  source={require('../assets/cris.jpg')}/>
            </View>
            <View style={styles.contentNotification}>
              <Image style={styles.imageBellIcon}  source={require('../assets/bellIcon.png')}/>
            </View>
        </View>

        <Text style={styles.welcomeProfileName}>Olá, Chris!</Text>
        <Text style={styles.message}>Seu perfil</Text>

        <View style={styles.itemDivisor}></View>

        <View style={styles.mainContent}>
          <View style={styles.campos}>
            <Text>Seu nome:</Text>
            <Text>Chris</Text>
          </View>

          <View style={styles.campos}>
            <Text>Seu email:</Text>
            <Text>chrisTodoMundoOdeia@gmail.com</Text>
          </View>

          <View style={styles.campos}>
            <Text>Sua senha:</Text>
            <Text>***************</Text>
          </View>
          
        </View>

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
    backgroundColor:'#5F93FB',
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
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
  topContent:{
    flex: 0.4,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop: 50,
    paddingLeft:30,
  },
  contentImageProfile:{
    borderColor:'#fff',
    width: 50,
    height: 50,
  },
  imageProfile:{
    width: 50,
    height: 50,
    borderWidth:3,
    borderRadius:50,
    borderColor:'#fff',
  },
  welcomeProfileName:{
    fontSize:16,
    color: "#fff",
    marginLeft:30,
  },
  message:{
    fontSize:28,
    fontWeight:'700',
    color: "#fff",
    marginLeft:30,
    marginTop:10,
    paddingRight:120
  },
  itemDivisor:{
    flex: 0.15,
  },
  contentNotification:{
    backgroundColor:'#fff',
    width: 50,
    height: 50,
    marginRight:30,
    borderRadius:15,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  imageBellIcon:{
    width: 25,
    height: 25
  },
  mainContent:{
    backgroundColor:"#EFEFEF",
    flex: 4,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  campos:{
    padding: 10,
    backgroundColor:'#FFF',
    display: "flex",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:10,
    marginTop:25,
  },
});
