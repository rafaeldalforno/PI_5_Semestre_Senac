import { StyleSheet, View, Text, Image } from 'react-native';

import PratoMenu from '../components/PratoMenu.jsx';

export default function TelaCardapio(){
    
    const bigMac = {
        nome: 'Big Mac',
        descricao: 'Hambueguer, alface americana, queijo cheddar ...',
        preco: 'Preço: R$ 30,00'
    }

    const duploQuart = {
        nome: 'Duplo Quarteirão',
        descricao: 'Dois hambúrgueres, mostarda, alface americana, queijo cheddar ...',
        preco: 'Preço: R$ 30,00'
    }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image 
          style={styles.logo}
          source={require('../assets/imagens/logo.png')} 
        />
        <Text style={styles.text}>{'Menu do Restaurante'}</Text>
      </View>
      <View style={styles.prato}>
        <PratoMenu pratoMenu={bigMac} />
        <PratoMenu pratoMenu={duploQuart} />
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
    flexDirection: 'row'
  },

  prato: {
    padding: 5
  },

  logo: {
    margin: 10,
    width: 100,
    height: 100
  },

  text: {
    fontSize: 18,
    padding: 30
  }
});