import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoButton from "./TodoButton";

const Todo = ({todo, deleteTodo, toggleComplete, toggleEdit}) => 
(
    <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => toggleEdit(todo.title, todo.todoIndex)}>
            <Text style={todo.completed ? styles.completed: null}>{todo.title}</Text>
        </TouchableOpacity>
        <View style={styles.todoButtons}>
            <TodoButton name="close" onPress={() => deleteTodo(todo.todoIndex)} color="red" />
            <TodoButton name="check" onPress={() => toggleComplete(todo.todoIndex)} color="green"/>
        </View>
    </View>
);

const styles = StyleSheet.create(
    {
        todoContainer:
        {
            backgroundColor: 'rgba(207, 253, 255, 1)',
            padding: 10,
            borderBottomColor:'lightgrey',
            borderBottomWidth:0.7,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems: 'center',
            elevation:15
        },
        completed:
        {
            textDecorationLine:'line-through'
        },
        todoButtons:
        {
            flexDirection: 'row'
        }
    });

export default Todo;