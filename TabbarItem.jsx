import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TabbarItem = ({type, title, setType}) => 
(
    <TouchableHighlight 
        style={[styles.item, type === title ? styles.selected : null]}
        onPress={setType}
        >
        <Text style={[styles.itemText, type === title ? styles.bold : null]}>
            {title}
        </Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create(
    {
        item:
        {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        },
        itemText: 
        {
            color: '#777777',
            fontSize: 16
        },
        bold:
        {
            fontWeight:'bold'
        },
        selected: 
        {
            backgroundColor: 'lightgrey'
        }
    });

export default TabbarItem;