import { StyleSheet, View, Text, Image, Touchable, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native';

export default function TelaCategorias(){
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Image 
            style={styles.logo}
            source={require('../assets/imagens/logoatual.png')} 
          />
          <Text style={styles.text}>Cadastro: </Text>
        </View>
        <View style={styles.formulario}>
            <TextInput placeholder='Seu Nome...' style={styles.input} onChangeText={text=>setNome(text)} />

            <TextInput placeholder='Seu CPF...' style={styles.input} onChangeText={text=>setCpf(text)} />

            <TextInput placeholder='Seu CEP...' style={styles.input} onChangeText={text=>setCep(text)} />

            <TextInput placeholder='Seu Email...' style={styles.input} onChangeText={text=>setEmail(text)} />

            <TextInput secureTextEntry={true} placeholder='Sua Senha...' style={styles.input} onChangeText={text=>setSenha(text)} />

            <TouchableOpacity style={styles.btnCadastro} onPress={() => {navigation.navigate('Categorias')}}>
                <Text>CADASTRAR</Text>
            </TouchableOpacity>
            
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
      marginTop: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },

    formulario: {
        padding: 20,
    },

    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
    },

   btnCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        backgroundColor: '#3E97FF',
        borderRadius: 20,
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