import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro!!</Text>
      <Button
        title="Criar e Entrar"
        onPress={() => navigation.navigate('Home')}
      />
      <StatusBar style="auto" />
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
});
