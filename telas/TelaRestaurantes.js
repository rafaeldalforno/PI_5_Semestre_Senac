import { StyleSheet, View, Text, Image } from 'react-native';

import Restaurante from '../components/Restaurante.jsx';

export default function TelaRestaurantes(){
    
  const mcDonalds = {
        nome: 'Mc Donalds',
        endereco: 'Rua: xxxxxxxx, Nº: nnnn',
        nota: 5
  }

  const burgerKing = {
    nome: 'Burger King',
    endereco: 'Rua: xxxxxxxx, Nº: nnnn',
    nota: 5
}

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image 
          style={styles.logo}
          source={require('../assets/imagens/logoatual.png')} 
        />
        <Text style={styles.text}>Cardápios Próximo ao seu CEP: </Text>
      </View>
      <View style={styles.restaurantes}>
        <Restaurante restaurante={mcDonalds} />
        <Restaurante restaurante={burgerKing} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE899',
  },

  cabecalho: {
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  restaurantes: {
    padding: 5
  },

  text: {
    fontSize: 22
  },

  logo: {
    margin: 10,
    width: 200,
    height: 100
  }
});