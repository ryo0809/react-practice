import React, { useState } from "react";
import "./style.css";

export const App = () => {

    const [todoText, setTodoText] = useState('');

    const [imcompleteTodos, setImcompleteTodos] = useState([
        'あああああ',
        'いいいいい'
    ]);

    const [completeTodos, setCompleteTodos] = useState(['ううううう']);

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

    return (
        <>
            <div className="input-area">
                <input id="input-form" placeholder="TODOを入力" valie={todoText} onChange={inputTodoText} />
                <button onClick={addTodoText}>追加</button>
            </div>
            <div className="imcomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    { imcompleteTodos.map((todo) => {
                        return (
                            <div key={todo} className="list-row">
                                <li className="list-title">{todo}</li>
                                <button>完了</button>
                                <button>削除</button>
                            </div>
                        );
                    }) }
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    { completeTodos.map((todo) => {
                        return (
                            <div key={todo} className="list-row">
                                <li className="list-title">ううううう</li>
                                <button>戻す</button>
                            </div>
                        );
                    }) }
                </ul>
            </div>
        </>
    );
};
