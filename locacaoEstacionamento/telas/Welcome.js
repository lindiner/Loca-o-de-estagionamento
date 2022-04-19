import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Button
        title="Sou novo"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button
        title="Já tenho cadastro"
        onPress={() => navigation.navigate('Login')}
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
