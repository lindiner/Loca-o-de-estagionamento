import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function Home( {navigation} ) {
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
        <Text style={styles.welcomeProfileName}>Bom dia Chris</Text>
        <Text style={styles.message}>Encontre o melhor lugar para estacionar</Text>
        
        <View style={styles.itemDivisor}></View>
        <View style={styles.mainContent}>
         <View style={styles.inputContent}>
            <Image style={styles.inputImage} source={require('../assets/searchIcon.png')}/>
            <TextInput style={styles.input} placeholder="Pesquisar "/>
          </View>
        </View>
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
    justifyContent:'center'
  },
  itemDivisor:{
    flex: 0.15,
  },  
  mainContent:{
    backgroundColor:"#EFEFEF",
    flex: 3,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
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
  inputContent:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:25,
    paddingLeft: 10,
    borderWidth: 0.25,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    elevation: 5,
    marginLeft: 35,
    marginRight: 35,
  },
  input:{
    padding: 10,
    margin: 5,
    fontSize: 15,
  },
  inputImage:{
    width: 12,
    height: 12
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
