import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux'
import { tambahNama } from '../redux/action'

const formNama = ({navigation}) => {
  
    const [nama,setNama] = useState('');
    const dispatch = useDispatch();
    const submitNama = (nama) => dispatch(tambahNama(nama));
    return (
      <View style={styles.container}>
        <TextInput placeholder='Masukkan Nama Anda' value={nama} style={styles.textInput}  onChangeText={(nama) => setNama(nama)}/>
        <TouchableOpacity style={styles.btn} onPress={() => {submitNama(nama);setNama('');Alert.alert('nama',nama)}}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate('List')}>
          <Text style={styles.textButton}>Daftar Nama</Text>
        </TouchableOpacity>
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn:{
    marginBottom: 16,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10

  },
  textButton:{
    fontSize: 22,
    color: '#fff'
  },
  textInput:{
    fontSize: 24,
    marginBottom: 32,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#61dafb'
  },
  textTitle:{
    fontSize: 50,
    marginBottom:30,
    color: 'darkblue'
  }
})

export default formNama;