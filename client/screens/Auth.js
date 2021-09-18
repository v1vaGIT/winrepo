import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

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

const OnPassport = ({ onSubmit }) => {
	const [text, onChangeText] = useState('')
	return (
	<View>	
		<Text style={{textAlign: 'center', fontFamily: 'GothamPro-Medium'}}>Последние 4 цифры номера паспорта</Text>
			<TextInput style={styles.inputStyle}
				onChangeText={onChangeText}
				placeholder='0000'
				value={text}
		/>
		<TouchableOpacity style={styles.confirm} onPress = {onSubmit}>
			<View>
				<Text style={styles.ok}>
					ПОДТВЕРДИТЬ
				</Text>
			</View>
		</TouchableOpacity>
	</View>
	)
}

const OnTicket = ({ onSubmit }) => {
	const [text, onChangeText] = useState('')
	return (
		<View>
			<Text style={{textAlign: 'center', fontFamily: 'GothamPro-Medium'}}>Билет №</Text>
			<TextInput style={styles.inputStyle}
				onChangeText={onChangeText}
				placeholder='000000000000'
				value={text}
			/>
			<TouchableOpacity style={styles.confirm} onPress = {onSubmit}>
				<View>
					<Text style={styles.ok}>
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

	const onSubmit = async () => {
		const res = await request('https://localhost:5000/api/auth/login', 'POST', {email: 'skorikivdanila@mail.ru', password: 'danila2'})
		navigation.navigate('tabs')
	}

	if (firstButtonDisabled) {
		return (
			<View style={{ justifyContent: 'center', flex: 1 }}>
				<View style={styles.header}>
        <View style={styles.headerOne}>
          <Image source={require('../assets/news/Logo.jpg')} style={styles.logoHeader}/>
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.textHeader}>ПОПУТЧИК</Text>
        </View>
      </View>
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
				<OnTicket onSubmit={onSubmit} />
				</View>
				
			</View>
		)
	}
	else {
		return (
			<View style={{ justifyContent: 'center', flex: 1 }}>
				<View style={styles.header}>
        <View style={styles.headerOne}>
          <Image source={require('../assets/news/Logo.jpg')} style={styles.logoHeader}/>
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.textHeader}>ПОПУТЧИК</Text>
        </View>
      </View>
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
						<OnPassport onSubmit={onSubmit}/>
					</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	switchActive: {
		backgroundColor: '#EA2A2A',
		width: '50%',
		borderRadius: 30
	},
	switchNotActive: {
		backgroundColor: '#fff',
		width: '50%',
		borderRadius: 30
	},
	ok: {
		textAlign: 'center',
		fontFamily: 'GothamPro-Medium',
		fontSize: 20,
		color: '#fff',
		paddingBottom: 10
	},

	button: {		
		width: "100%",
		textAlign: "center",	
		fontFamily: 'GothamPro-Medium',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderRadius: 30,
		marginBottom: 20
	},
	auth_text:{
		textAlign:'center',
		fontFamily: 'GothamPro-Medium',
		fontSize: 28,
		marginBottom: 50
		

	},
	label:{
		paddingTop: 5,
		paddingBottom: 7,
		textAlign: 'center',
		fontFamily: 'GothamPro-Medium',
		color: '#000',
		fontSize: 20
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
		fontFamily: 'GothamPro-Medium',
		textAlign: 'center'
		},
		//-------------------------Header-------------------------//
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
			fontSize: 20,
			marginTop: '16%',
		  }

});