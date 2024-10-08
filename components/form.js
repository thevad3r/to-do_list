import React, { useState } from "react";
import { StyleSheet, TextInput, Pressable, View, Text } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput 
                style={styles.input} 
                onChangeText={onChange} 
                placeholder="Впишите задачу..."
            />
            <Pressable 
                style={styles.button}
                onPress={() => addHandler(text)}
            >
                <Text style={styles.text}>Добавить задачу</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 16,
        backgroundColor: "#222",
        color: "#eee",
        placeholderTextColor: "#bbb",
    },
    button: {
        padding: 16,
        backgroundColor: "#333",
    },
    text: {
        textAlign: "center",
        color: "#eee",
        fontWeight: 600,
    },
});