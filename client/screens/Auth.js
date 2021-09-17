import React from "react";
import { View, Text, TextInput } from 'react-native';
import { SwitchButton } from "../components/SwitchButton";

const OnPassport = () => {
	return (
		<View>
			<Text>Последние 4 цифры номера паспорта</Text>
			<TextInput 

			/>
		</View>
	)
}

const Auth = () => {
	const firstOption = {
		name: 'По паспорту',
		component: OnPassport
	}
	return (
		<View>
			<Text>Доступный способ авторизации</Text>
			<SwitchButton firstOption={} />
		</View>
	)
}