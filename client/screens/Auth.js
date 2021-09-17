import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const OnPassport = () => {
	const [text, onChangeText] = useState('')
	return (
		<View>
			<Text>Последние 4 цифры номера паспорта</Text>
			<TextInput 
				onChangeText={onChangeText}
				placeholder='00 00'
				value={text}
			/>
		</View>
	)
}

const OnTicket = ({ navigation }) => {
	const [text, onChangeText] = useState('')
	const onSubmit = () => {
		navigation.navigate('tabs')
	}
	return (
		<View>
			<Text>Билет №</Text>
			<TextInput 
				onChangeText={onChangeText}
				placeholder='000000000000'
				value={text}
			/>
			<Button 
				title='Подтвердить'
				color='#EA2A2A'
				onPress={onSubmit}
			/>
		</View>
	)
}

export const Auth = ({ navigation }) => {
	const [firstButtonDisabled, setFirstButtonDisabled] = useState(false)

	const switchStyle1 = firstButtonDisabled ? styles.switchNotActive : styles.switchActive
	const switchStyle2 = !firstButtonDisabled ? styles.switchNotActive : styles.switchActive

	if (firstButtonDisabled) {
		return (
			<View>
				<Text>Доступный способ авторизации</Text>
				<TouchableOpacity onPress={() => setFirstButtonDisabled(!firstButtonDisabled)}>
					<View style={switchStyle1}>
						<Text>По паспорту</Text>
					</View>
					<View style={switchStyle2}>
						<Text>По билету</Text>
					</View>
				</TouchableOpacity>
				<OnTicket nav={navigation} />
			</View>
		)
	}
	else {
		return (
			<View>
				<Text>Доступный способ авторизации</Text>
				<TouchableOpacity onPress={() => setFirstButtonDisabled(!firstButtonDisabled)}>
					<View style={switchStyle1}>
						<Text>По паспорту</Text>
					</View>
					<View style={switchStyle2}>
						<Text>По билету</Text>
					</View>
				</TouchableOpacity>
				<OnPassport />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	switchActive: {
		backgroundColor: '#EA2A2A'
	},
	switchNotActive: {
		backgroundColor: '#fff',
	}
})