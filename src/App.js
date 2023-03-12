import React, { useState } from 'react';

const App = () => {

// 상수 변수 함수 상태 
// const text = "HELLO WORLD"

const [text, setText] = useState("")

//함수 정의(버튼동작)
const submitHandler = () => {
  setText("helloworld")
}

// HTML 자리 
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={submitHandler}>데이타 입력</button>

  
    </div>
  );
};

export default App;