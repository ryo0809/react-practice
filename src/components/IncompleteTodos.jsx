import React from 'react';

export const IncompleteTodos = (props) => {
    const { imcompleteTodos, completeTodo, deteleTodo } = props;
    return (
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
    );
}