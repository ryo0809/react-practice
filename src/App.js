import React from "react";

const App = () => {
    const onClickButton = () => {
        alert("クリック");
    };
    const ContentStyle = {
        color: "blue",
        fontSize: "18px"
    };
    return (
        <>
            <h1 stlye={ContentStyle}>見出し</h1>
            <p stlye={ContentStyle}>見出し</p>
            <p>文章</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};

export default App;
