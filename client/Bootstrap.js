import * as Font from 'expo-font'

export async function bootstrap() {
    await Font.loadAsync({
        'GothamPro-Light': require('./assets/fonts/GothamPro-Light.ttf'),
        'GothamPro-Medium': require('./assets/fonts/GothamPro-Medium.ttf'),
    })
}