import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({inputValue, inputChange, inputSubmit}) => 
    (
        <View style={styles.inputContainer}>
            <TextInput 
            placeholderTextColor="#CACACA"
            placeholder="What needs to be done?"
            selectionColor="#666666"
            style={styles.input}
            value={inputValue}
            onChangeText={inputChange}
            onSubmitEditing={inputSubmit} />
        </View>
    );

const styles = StyleSheet.create
({
    input:
    {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        elevation:15
    }
});

export default Input;