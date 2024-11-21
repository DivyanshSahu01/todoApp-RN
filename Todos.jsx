import React from "react";
import {View, Text, StyleSheet } from "react-native";
import Todo from "./Todo";

const Todos = ({type, todos, deleteTodo, toggleComplete, toggleEdit}) => 
{
    const getVisibleTodos = (todos, type) =>
    {
        switch(type)
        {
            case 'All':
                return todos
            case 'Pending':
                return todos.filter((todo) => !todo.completed)
            default:
                return todos.filter((todo) => todo.completed)
        }
    }

    todos = getVisibleTodos(todos, type)

    return <View style={styles.todosContainer}>
            {todos.map((todo, i) => <Todo todo={todo} key={i} deleteTodo={deleteTodo} toggleComplete={toggleComplete} toggleEdit={toggleEdit}/>)}
        </View>
};

const styles = StyleSheet.create(
    {
        todosContainer:
        {
            marginTop:30
        }
    });

export default Todos;