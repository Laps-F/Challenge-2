import { View, Image, StyleSheet, KeyboardTypeOptions, TextInput } from "react-native";

type InputProps = {
    label: string,
    keyboardType: KeyboardTypeOptions | undefined,
    value: any,
    image: string,
    error: boolean,
    onUpdateValue(arg: string): void,
}

function MyInput({label, keyboardType, value, image, onUpdateValue, error}: InputProps): JSX.Element {

    var icon;

    if(image === 'mail')
        icon = require('../assets/icon_mail.png');
    if(image === 'lock')
        icon = require('../assets/icon_lock.png');
    if(image === 'user')
        icon = require('../assets/icon_user.png');

    return (
        <View style={[styles.inputContainer, {borderWidth: error? 1 : 0, borderColor: error? 'red' : undefined}]}>
            <Image 
                style={styles.image}
                source={icon}
            />

            <TextInput 
                style={styles.input}
                placeholder={label}
                placeholderTextColor="#A8A8A8"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType={keyboardType}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default MyInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        backgroundColor: "#656262",
        borderRadius: 150 / 2,
        overflow: "hidden",
        margin: 10,
    },

    image: {
        marginTop: 10,
        marginHorizontal: 10,
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },

    input: {
        flex: 1,
        backgroundColor: '#656262',
        marginTop: 10,
    },
});