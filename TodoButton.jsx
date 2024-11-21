import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoButton = ({name, color, onPress}) => 
(
    <TouchableHighlight style={styles.todoButton} onPress={onPress}>
        <Icon name={name} size={15} color={color} />
    </TouchableHighlight>
);

const styles = StyleSheet.create
({
    todoButton:
    {
        borderRadius: 50,
        backgroundColor: 'white',
        padding:5,
        height:25,
        width:25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    }
});

export default TodoButton;