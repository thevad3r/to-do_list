import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список задач</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: 16,
        backgroundColor: "#111",
    },
    text: {
        fontWeight: 700,
        color: "#eee",
    },
});