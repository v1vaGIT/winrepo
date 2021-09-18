import React, {useState} from "react";
import { View, Text, TextInput, Button } from 'react-native';

export const Feedback = () => {
  const [mailInput, setMailInput] = useState('')
  const [commentInput, setCommentInput] = useState('')

  const onSubmit = () => {

  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ backgroundColor: '#707070', width: 60, height: 60, borderRadius:50, marginBottom: 5 }} />
      <Text>Ефимов И. А.</Text>
      <TextInput 
        text={mailInput}
        onChange={setMailInput}
        placeholder='Введите почту'
      />
      <TextInput 
        text={commentInput}
        onChange={setCommentInput}
        placeholder='Введите комментарий'
      />
      <Button
        title='Отправить'
        onPress={onSubmit}
        color='#EA2A2A'
      />
    </View>
  )
}