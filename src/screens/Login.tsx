import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, Image, TextInput, View } from 'react-native'
// import tw from '../../tailwind';
const Login: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <Text style={styles.title}>COSGrid MZA</Text>
            <Image
                source={require("../../assets/logo.png")}
                alt="Loading..."
                style={styles.logo}
            />
            <View style={styles.inputBox}>
                <Text style={tw`font-bold`}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                ></TextInput>
            </View>
            <View style={styles.inputBox}>
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                ></TextInput>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#F5F5F5',

    },
    logo: {
        width: 250,
        height: 70,
        marginHorizontal: 'auto'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    inputBox: {


        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 5,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    statusIcon: {
        fontSize: 48,
        textAlign: 'center',
        marginBottom: 10,
    },
    connected: {
        color: '#34C759',
    },
    disconnected: {
        color: '#FF3B30',
    },
    status: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    pingResult: {
        marginTop: 15,
        fontSize: 16,
    },
});

export default Login