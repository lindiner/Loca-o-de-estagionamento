import { Pressable, StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default function Cadastro({ navigation }) {
  return (
<View style={styles.container}>
      <View style={styles.contentCenter}>
        <Text style={styles.textInformation}>Insira suas informações para realizar o Cadastro</Text>

        <View style={styles.contentForm}>
        <View>
            <Text style={styles.textInputElement}>Nome completo</Text>
            <TextInput style={styles.input} placeholder="Clara Lacerda"/>
          </View>

          <View>
            <Text style={styles.textInputElement}>E-mail</Text>
            <TextInput style={styles.input} placeholder="usuario@email.com"/>
          </View>

          <View>
            <Text style={styles.textInputElement}>Senha</Text>
            <TextInput style={styles.input} placeholder="***********"/>
          </View>
        </View>
      </View>
      <Pressable style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
          <Text  style={styles.textButtonLogin}>Finalizar Cadastro</Text>
      </Pressable>
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
  contentCenter:{
    backgroundColor:'#fff',
    margin: 30,
    borderRadius: 12
  },
  contentForm:{
    marginTop:40
  },  
  textInformation:{
    fontSize: 22,
    marginBottom:10,
    fontWeight:'bold',
    color:'#333333',
    alignItems: 'center'
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 0,
    padding: 16,
    paddingLeft:0,
    fontWeight:'400',
    fontSize:16
  },
  textInputElement:{
    fontWeight:'bold',
    color: '#8A8383',
    marginTop:16
  },
  buttonLogin:{
    width: 350,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    margin: 15,
    marginBottom:10,
    backgroundColor: '#5F93FB',
  },
  textButtonLogin:{
    color: '#fff',
    fontWeight:'700',
    fontSize:18
  }
});
