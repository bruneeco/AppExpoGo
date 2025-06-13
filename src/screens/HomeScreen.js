import React from "react";
import { View, Text, Button, StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40E0D0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttoncontainer: {
        backgroundcolor: '#060270',
        margin: 10,
        witdh: windowWidth * 0.5,
        borderradius: 5,
    },
});
