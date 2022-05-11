import { View, Text, Image,StyleSheet, ImageBackground } from "react-native";

export default function ParkingDetails(props){
    return (
        <View style={styles.content}>
            <View>
                <ImageBackground resizeMode='cover' style={styles.imageParking} source={props.image}/>
            </View>
            <View style={styles.contetInformation}>
                <Text style={styles.parkingName}>{props.parkingName}</Text>
                <View style={styles.adressContet}>
                    <Image style={styles.pinMap} source={require('../../assets/pinMapIccon.png')}/>
                    <Text style={styles.adress}>{props.adress}</Text>
                </View>
                <View style={styles.valueHourContet}>
                    <Text style={styles.valueHour}>
                        R$ {props.valueHour}/
                    </Text>
                    <Text style={styles.hrText}>hr</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginLeft:10,
        marginRight:45,
        display: 'flex',
        flexDirection:'row'
    },
    imageParking:{
        width: 150,
        height: 150
    },
    contetInformation:{
      paddingTop:30
    },
    parkingName:{
        fontSize:18
    },
    adressContet:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    adress:{
        color: '#757897',
        marginLeft:5,
        fontSize:16,
    },
    pinMap:{
        width: 12,
        height: 15,
        marginTop:5
    },
    valueHourContet:{
        display: 'flex',
        flexDirection:'row',
    },
    valueHour:{
        color: '#5F93FB',
        fontSize:20,
        fontWeight:'600'
    },
    hrText:{
        marginTop:5,
        fontSize:16,
        color: '#757897',
        fontWeight:'600'
    }
})

