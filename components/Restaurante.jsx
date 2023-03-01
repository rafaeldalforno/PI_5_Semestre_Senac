import {StyleSheet, Text, View, Alert, Button, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function Restaurante({restaurante}){
    const navigation = useNavigation()
    
    return(
        <View style={styles.cardRest}>
            <View style={styles.restaurante}>
                <Text style={styles.nomeRest}>{restaurante.nome}</Text>
                <Text style={styles.endRest}>{restaurante.endereco}</Text>
            </View>
            <View style={styles.nota}>
                <Text style={styles.nomeRest}>{restaurante.nota}</Text>
                <AntDesign name="star" size={24} color="gold" />
            </View>
            <View style={styles.botao}>
                <TouchableOpacity>
                    <Button
                        title="Ver Menu"
                        onPress={() => {navigation.navigate('Cardapio')}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({  
    cardRest:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 20,
        backgroundColor: '#CAFFB7',
        borderRadius: 10,
    },

    restaurante:{
        margin: 2,
        width: 150,
        height: 60
    },

    nomeRest: {
      color: '#000',
      fontSize: 20
    },
  
    endRest: {
      color: '#4f4f4f',
      fontSize: 14
    },

    botao: {
        margin: 10
    },

    nota: {
        margin: 10,
        flexDirection: 'row',
    }
  });