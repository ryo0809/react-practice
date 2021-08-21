import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {

    const [todoText, setTodoText] = useState('');

    const [imcompleteTodos, setImcompleteTodos] = useState([]);

    const [completeTodos, setCompleteTodos] = useState([]);

    const inputTodoText = (event) => {
        setTodoText(event.target.value);
    }

    const addTodoText = (event) => {
        // todoTextが未入力の場合は設定しない
        if (todoText === '') return;
        const newTodos = [...imcompleteTodos, todoText];
        // 追加したいTODOを設定し、入力値はリセットさせる
        setImcompleteTodos(newTodos);
        setTodoText('');
        const inputForm = document.getElementById('input-form');
        if (inputForm !== null) {
            inputForm.value = '';
        }
    }

    const deteleTodo = (index) => {
        const newTodos = [...imcompleteTodos];
        newTodos.splice(index, 1);
        setImcompleteTodos(newTodos);
    }

    const completeTodo = (index) => {
        const newImcompleteTodos = [...imcompleteTodos];
        newImcompleteTodos.splice(index, 1);
        setImcompleteTodos(newImcompleteTodos);

        const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
        setCompleteTodos(newCompleteTodos);
    }

    const BackTodo = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setImcompleteTodos(newImcompleteTodos);
    }

    return (
        <>
            <InputTodo
                todoText={todoText}
                onChange={inputTodoText}
                onClick={addTodoText}
            />
            <IncompleteTodos
                imcompleteTodos={imcompleteTodos}
                completeTodo={completeTodo}
                deteleTodo={deteleTodo}
            />
            <CompleteTodos
                completeTodos={completeTodos}
                BackTodo={BackTodo}
            />
        </>
    );
};
