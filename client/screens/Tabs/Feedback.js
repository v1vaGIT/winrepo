import React, {useLayoutEffect, useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const Feedback = () => {
  const [mailInput, setMailInput] = useState('')
  const [commentInput, setCommentInput] = useState('')

  const onSubmit = () => {
    alert('Вы молодец!')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.header}>
        <View style={styles.headerOne}>
          <Image source={require('../../assets/news/Logo.jpg')} style={styles.logoHeader}/>
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.textHeader}>Обратная связь</Text>
        </View>
      </View>
      <Image source={require('../../assets/avatar.png')} style={{ width: 80, height: 80, borderRadius:50, marginBottom: 5 }} />
      <Text style={{ fontSize: 26}}>Ефимов И. А.</Text>
      <TextInput 
        style={styles.mailInput}
        text={mailInput}
        onChange={setMailInput}
        placeholder='Введите почту'
      />
      <TextInput 
        style={styles.commentInput}
        text={commentInput}
        onChange={setCommentInput}
        placeholder='Введите комментарий'
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Отправить</Text>
      </TouchableOpacity>
      <Text style={styles.appealText}>
        Мы прислушиваемся к каждому отзыву. Ваше мнение очень важно для нас. Опишите ваше впечатление от поездки
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mailInput: {
    width: '90%',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 35
  },
  commentInput: {
    width: '90%',
    height: '25%',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10
  },
  button: {
    backgroundColor: '#EA2A2A',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18
  },
  appealText: {
    fontSize: 18,
    textAlign: 'center',
    width: '80%'
  },
  header: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    start: 0,
    flexDirection: "row"
  },
  headerOne: {
    flex: 1, 
    alignItems: 'center',
  },
  headerTwo: {
    flex: 5,
    alignItems: 'flex-start'
  },
  logoHeader: {
    width: 30,
    height: 30,
    marginTop: '74%',
  },
  textHeader: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 19,
    marginTop: '16%',
  }
})