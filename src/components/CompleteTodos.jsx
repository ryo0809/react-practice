import React from 'react';

const style = {
    listRow: {
        display: 'flex',
        alignItems: 'center'
    },
    listTitle: {
        marginRight: '8px'
    },
    completeArea: {
        width: '400px',
        minHeight: '200px',
        backgroundColor: '#ffffe0',
        margin: '8px',
        padding: '8px',
        borderRadius: '8px'
    },
    title: {
        textAlign: 'center',
        marginTop: 0,
        fontWeight: 'bold',
        color: '#666'
    }
}

export const CompleteTodos = (props) => {
    const { completeTodos, BackTodo } = props;
    return (
        <div style={style.completeArea}>
            <p style={style.title}>完了のTODO</p>
            <ul>
                { completeTodos.map((todo, index) => {
                    return (
                        <div key={todo} style={style.listRow}>
                            <li style={style.listTitle}>{todo}</li>
                            <button onClick={() => BackTodo(index)}>戻す</button>
                        </div>
                    );
                }) }
            </ul>
        </div>
    );
}