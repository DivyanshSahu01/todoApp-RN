import React from "react";
import { StyleSheet, View } from "react-native";
import TabbarItem from "./TabbarItem";

const Tabbar = ({type, setType}) => 
(
    <View style={styles.Tabbar}>
        <TabbarItem type={type} title={'All'} setType={() => setType('All')} />
        <TabbarItem type={type} title={'Pending'} setType={() => setType('Pending')} />
        <TabbarItem type={type} title={'Completed'} setType={() => setType('Completed')} />
    </View>
);

const styles = StyleSheet.create(
    {
        Tabbar:
        {
            height: 70,
            flexDirection: 'row',
            borderTopWidth: 1,
            borderTopColor: '#dddddd'
        }
    });

export default Tabbar;