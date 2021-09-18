import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ProgressBarAndroidBase } from 'react-native';

async function request(url, method = 'GET', data = null) {
	try {
		const headers = {}
		let body
		if (data) {
			headers['Content-Type'] = 'application/json'
			body = JSON.stringify(data)
		}
		const res = await fetch(url, {
			method,
			headers,
			body
		})
		return await res.json()
	} catch(e) {

	}
}

const OnPassport = ({ navigation }) => {
	const [text, onChangeText] = useState('')
	const onSubmit = async () => {
		const res = await request('/api/auth/loginTickets', 'POST', { NumberOfTicket: text })
		alert(res)
		if (res) {
			navigation.navigate('train')
		}
	}
	return (
		<View>
			<Text style={{textAlign: 'center'}}>Последние 4 цифры номера паспорта</Text>
			<TextInput style={styles.inputStyle}
				onChangeText={onChangeText}
				placeholder='00 00'
				value={text}
			/>
			<TouchableOpacity style={styles.confirm} onPress = {() => onSubmit}>
				<View>
					<Text style={styles.label}>
						ПОДТВЕРДИТЬ
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const OnTicket = ({ navigation }) => {
	const [text, onChangeText] = useState('')
	const onSubmit = async () => {
		const res = await request('/api/auth/login', 'POST', { NumberOfTicket: text })
		alert(res)
		if (res) {
			navigation.navigate('train')
		}
	}
	return (
		<View>
			<Text style={{textAlign: 'center'}}>Билет №</Text>
			<TextInput style={styles.inputStyle}
				onChangeText={onChangeText}
				placeholder='000000000000'
				value={text}
			/>
			<TouchableOpacity style={styles.confirm} onPress = {() => onSubmit}>
				<View>
					<Text style={styles.label}>
						ПОДТВЕРДИТЬ
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export const Auth = ({ navigation }) => {
	const [firstButtonDisabled, setFirstButtonDisabled] = useState(false)

	const switchStyle1 = firstButtonDisabled ? styles.switchNotActive : styles.switchActive
	const switchStyle2 = !firstButtonDisabled ? styles.switchNotActive : styles.switchActive

	if (firstButtonDisabled) {
		return (
			<View style={{ justifyContent: 'center', flex: 1 }}>
				<Text style = {styles.auth_text}>Доступный способ авторизации</Text>
				<View style={styles.row}>
				<TouchableOpacity style={styles.button} onPress={() => setFirstButtonDisabled(!firstButtonDisabled)}>
					<View style={switchStyle1}>
						<Text style={styles.label}>По паспорту</Text>
					</View>
					<View style={switchStyle2}>
						<Text style={styles.label}>По билету</Text>
					</View>
				</TouchableOpacity>
				<OnTicket nav={navigation} />
				</View>
				
			</View>
		)
	}
	else {
		return (
			<View style={{ justifyContent: 'center', flex: 1 }}>
				<Text style = {styles.auth_text}>Доступный способ авторизации</Text>
					<View style={styles.row}>
						<TouchableOpacity style={styles.button} onPress={() => setFirstButtonDisabled(!firstButtonDisabled)}>
							<View style={switchStyle1}>
								<Text style={styles.label}>По паспорту</Text>
							</View>
							<View style={switchStyle2}>
								<Text style={styles.label}>По билету</Text>
							</View>
						</TouchableOpacity>
						<OnPassport />
					</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	switchActive: {
		backgroundColor: '#EA2A2A',
		width: '50%'
	},
	switchNotActive: {
		backgroundColor: '#fff',
		width: '50%'
	},
	

	button: {
		padding: 10,		
		width: "100%",
		textAlign: "center",
		flexDirection: 'row',
		justifyContent: 'center',
		
	},
	auth_text:{
		textAlign:'center'
	},
	label:{
		paddingTop: 5,
		paddingBottom: 5,
		textAlign: 'center',
	},
	row:{
		textAlign: 'center',
		padding: 8
	},
	confirm: {
		paddingTop: 10,
		borderRadius: 5,
		backgroundColor: '#EA2A2A'
	},
	inputStyle: {
		margin: 16,
		height: 42,
		borderColor: "pink",
		borderWidth: 1,
		textAlign: 'center'
		},

})