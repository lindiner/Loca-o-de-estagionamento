import { View , StyleSheet, Text} from "react-native";

export default function SectionPage(){
    return(
        <View style={style.content}>
            <Text style={style.text}>Estacionamentos próximos</Text>
            <View style={style.pinContet}>
                <View style={style.pin}/>
                <View style={style.pin}/>
                <View style={style.pin}/>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    content:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:35,
        marginRight:35,
        marginTop:20,
        marginBottom:10
    },
    text:{
        fontSize:18,
        fontWeight:'500'
    },
    pinContet:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:4
    },
    pin:{
        width: 6,
        height: 6,
        margin: 2,
        backgroundColor:'#757897',
        borderRadius:50,
    }
})