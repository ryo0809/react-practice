import React from 'react';

const style = {
    inputArea: {
        width: '400px',
        backgroundColor: '#c1ffff',
        margin: '8px',
        padding: '8px',
        borderRadius: '8px',
    }
}

export const InputTodo = (props) => {
    const { todoText, onChange, onClick } = props;
    return (
        <div style={style.inputArea}>
            <input
                id="input-form"
                placeholder="TODOを入力"
                value={todoText}
                onChange={onChange}
            />
            <button onClick={onClick}>追加</button>
        </div>
    );
}