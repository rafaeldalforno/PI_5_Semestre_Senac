import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, Image, Touchable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function TelaCategorias(){
    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Image 
            style={styles.logo}
            source={require('../assets/imagens/logoatual.png')} 
          />
          <Text style={styles.text}>Categorias: </Text>
        </View>
        <View style={styles.categorias}>
            <View style={styles.linhas}>
                <TouchableOpacity>
                    <Image style={styles.categoria} source={require('../assets/imagens/Brasileira.jpg')} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.categoria} source={require('../assets/imagens/Japonesa.jpg')} 
                    />
                </TouchableOpacity> 
            </View>

            <View style={styles.linhas}>
                <TouchableOpacity>
                    <Image style={styles.categoria} source={require('../assets/imagens/Chinesa.jpg')} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.categoria} source={require('../assets/imagens/Pizza.jpg')} 
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.linhas}>
                <TouchableOpacity>
                    <Image style={styles.categoria} source={require('../assets/imagens/Hamburger.jpg')} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Restaurantes')}}>
                    <Image style={styles.categoria} source={require('../assets/imagens/Hamburger.jpg')} 
                    />
                </TouchableOpacity> 
            </View>
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

    categorias: {
        flexDirection: 'column'
    },

    linhas: {
        flexDirection: 'row',
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    categoria: {
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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