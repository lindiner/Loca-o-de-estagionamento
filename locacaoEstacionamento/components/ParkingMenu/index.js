import { StyleSheet, Text, View, Image } from "react-native";

export default function ParkinkMenu(){
    return (
        <View style={styles.container}>
            <View style={styles.itemContent}>
                <View style={styles.selectedOption}>
                    <Image style={styles.image} source={require('../../assets/carIcon.png')}/>
                </View>
                <Text style={styles.text}>Carro</Text>
            </View>

            <View style={styles.itemContent}>
                <View style={styles.itemMenuOption}>
                    <Image style={styles.image} source={require('../../assets/bikeMotorIcon.png')}/>
                </View>
                <Text style={styles.text}>Moto</Text>
            </View>

            <View style={styles.itemContent}>
                <View style={styles.itemMenuOption}>
                    <Image style={styles.image} source={require('../../assets/transporterIcon.png')}/>
                </View>
                <Text style={styles.text}>Van</Text>
            </View>

            <View style={styles.itemContent}>
                <View style={styles.itemMenuOption}>
                    <Image style={styles.image} source={require('../../assets/bikeIcon.png')}/>
                </View>
                <Text style={styles.text}>Bicicleta</Text>
            </View>

            <View style={styles.itemContent}>
                <View style={styles.itemMenuOption}>
                    <Image style={styles.image} source={require('../../assets/gradeIcon.png')}/>
                </View>
                <Text style={styles.text}>Mais</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
        marginLeft:30,
        marginRight:35
    },
    itemContent:{

    },
    itemMenuOption:{
        width: 60,
        height: 50,
        padding: 10,
        backgroundColor:'#FFF',
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:5
    },
    selectedOption:{
        width: 60,
        height: 50,
        padding: 10,
        backgroundColor:'#5F93FB',
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:5
    },
    image:{
        resizeMode:'contain',
        flex: 1,
        aspectRatio: 0.85
    },
    text:{  
        textAlign:'center'
    }
})