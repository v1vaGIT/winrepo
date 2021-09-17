import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

export const SwitchButton = ( firstOption, secondOption) => {
	const [fIsActive, setFIsActive] = useState(firstOption.name)
	const fPressHandler = () => {
		setFIsActive(firstOption.name)
	}
	return (
		<View>
			<TouchableOpacity onPress={fPressHandler} >
				<Text>{firstOption.name}</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text>{secondOption.name}</Text>
			</TouchableOpacity>
		</View>
	)
}
