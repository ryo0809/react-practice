import React from 'react';

const style = {
    listRow: {
        display: 'flex',
        alignItems: 'center'
    },
    listTitle: {
        marginRight: '8px'
    },
    title: {
        textAlign: 'center',
        marginTop: 0,
        fontWeight: 'bold',
        color: '#666'
    },
    imcompleteArea: {
        width: '400px',
        minHeight: '200px',
        backgroundColor: '#c6ffe2',
        margin: '8px',
        padding: '8px',
        borderRadius: '8px'
    }
}

export const IncompleteTodos = (props) => {
    const { imcompleteTodos, completeTodo, deteleTodo } = props;
    return (
        <div style={style.imcompleteArea}>
            <p style={style.title}>未完了のTODO</p>
            <ul>
                { imcompleteTodos.map((todo, index) => {
                    return (
                        <div key={todo} style={style.listRow}>
                            <li style={style.listTitle}>{todo}</li>
                            <button onClick={() => completeTodo(index)}>完了</button>
                            <button onClick={() => deteleTodo(index)}>削除</button>
                        </div>
                    );
                }) }
            </ul>
        </div>
    );
}