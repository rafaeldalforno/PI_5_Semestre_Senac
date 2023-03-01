import {StyleSheet, Text, View, Alert, Button} from 'react-native';

export default function PratoMenu({pratoMenu}){

    return(
        <View style={styles.card}>
            <View style={styles.pratoMenu}>
                <Text style={styles.nomePrato}>{pratoMenu.nome}</Text>
                <Text style={styles.descricao}>{pratoMenu.descricao}</Text>
            </View>
            <View style={styles.preco}>
                <Text style={styles.preco}>{pratoMenu.preco}</Text>
            </View>
            <View style={styles.botao}>
                <Button
                    title="Avaliar"
                    onPress={() => Alert.alert('Abriu a Página de Avaaliar!')} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({  
    card:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 20,
        height: 120,
        backgroundColor: '#CAFFB7',
        borderRadius: 10,
    },

    pratoMenu:{
        margin: 2,
        width: 130,
        height: 100
    },

    nomePrato: {
      color: '#000',
      fontSize: 16
    },
  
    descricao: {
      color: '#4f4f4f',
      fontSize: 12
    },

    botao: {
        margin: 10
    },

    preco: {
        margin: 10,
        fontSize: 14,
        flexDirection: 'row',
        color: 'green'
    }
  });