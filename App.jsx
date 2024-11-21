import React, { Component } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import Heading from "./Heading";
import Input from "./TextInput";
import Todos from "./Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'uuid-random';
import Tabbar from "./Tabbar";
let editingIndex = -1;

class App extends Component 
{
	constructor()
	{
		super();
		
		this.state = 
		{
			inputText: '',
			todos: [],
			type:'Pending'
		};

		this.toggleEdit = this.toggleEdit.bind(this);
		this.setType = this.setType.bind(this);
	}

	async componentDidMount() 
	{
		let todos = await AsyncStorage.getItem('todos');
		todos = JSON.parse(todos);
		if(todos !== null)
		{
			this.setState({...this.state, todos});
		}
	}

	inputChange(newText)
	{
		this.setState({inputText: newText});
	}

	toggleEdit(todoTitle, index)
	{
		editingIndex = index;
		this.setState({...this.state, inputText: todoTitle});
	}

	submitTodo()
	{
		const inputText = this.state.inputText.trim()
		if(inputText == "")
		{
			return;
		}

		const duplicateTodos = this.state.todos.filter((todo) => todo.title == inputText);

		if(duplicateTodos.length > 0)
		{
			Alert.alert('Alert', 'Same todo already exists', [
			{
				text: 'Ok'
			},
			]);

			return;
		}

		let todos;
		if(editingIndex == -1)
		{
			const todo = 
			{
				title: inputText,
				todoIndex: uuid(),
				completed: false
			};
			todos = [...this.state.todos, todo];
		}
		else
		{
			todos = this.state.todos.map((todo) => 
			{
				if(todo.todoIndex === editingIndex)
				{
					todo.title = this.state.inputText;
				}

				return todo;
			});
		}

		this.setState({inputText: '', todos});
		editingIndex = -1;
		AsyncStorage.setItem('todos', JSON.stringify(todos));
	}

	deleteTodo(index)
	{
		let todos = this.state.todos.filter((todo) => todo.todoIndex !== index);
		this.setState({...this.state, todos});
		AsyncStorage.setItem('todos', JSON.stringify(todos));
	}

	toggleComplete(index)
	{
		let todos = this.state.todos.map((todo) => 
		{
			if(todo.todoIndex === index)
			{
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({...this.state, todos});
		AsyncStorage.setItem('todos', JSON.stringify(todos));
	}

	setType(Type)
	{
		this.setState({type:Type});
	}
	
	render() 
	{
		return (
		<View style={styles.container}>
			<ScrollView style={styles.App}>
				<Heading />
				<Input inputValue={this.state.inputText} inputChange={(text) => this.inputChange(text)} inputSubmit={() => this.submitTodo()}/>
				<Todos type={this.state.type} toggleComplete={(index) => this.toggleComplete(index)} todos={this.state.todos} deleteTodo={(index) => this.deleteTodo(index)} toggleEdit={this.toggleEdit}/>
			</ScrollView>
			<Tabbar type={this.state.type} setType={this.setType}/>
		</View>);
	}
}

const styles = StyleSheet.create(
	{
		container:
		{
			flex:1
		},
		App:
		{
			padding:30,
			backgroundColor:'rgba(251, 255, 169, 1)'
		}
	}
);

export default App;