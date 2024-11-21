import React from "react";
import { StyleSheet, Text } from "react-native";

const Heading = () =>
(
    <Text style={styles.text}>
        todos
    </Text>
)

const styles = StyleSheet.create(
    {
        text:
        {
            fontSize: 48,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'rgba(234, 148, 252, 1)',
            marginBottom: 20
        }
    }
);

export default Heading;