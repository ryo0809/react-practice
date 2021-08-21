import React, { useState } from "react";
import "./style.css";

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
            <div className="input-area">
                <input id="input-form" placeholder="TODOを入力" valie={todoText} onChange={inputTodoText} />
                <button onClick={addTodoText}>追加</button>
            </div>
            <div className="imcomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    { imcompleteTodos.map((todo, index) => {
                        return (
                            <div key={todo} className="list-row">
                                <li className="list-title">{todo}</li>
                                <button onClick={() => completeTodo(index)}>完了</button>
                                <button onClick={() => deteleTodo(index)}>削除</button>
                            </div>
                        );
                    }) }
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    { completeTodos.map((todo, index) => {
                        return (
                            <div key={todo} className="list-row">
                                <li className="list-title">{todo}</li>
                                <button onClick={() => BackTodo(index)}>戻す</button>
                            </div>
                        );
                    }) }
                </ul>
            </div>
        </>
    );
};
