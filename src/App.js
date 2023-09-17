import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "Do React",
        createDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "Do React 2",
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "Do React 2",
        createDate: new Date().getTime(),
    },
]

function App() {
    /*
    * todo - mockTodo
    */
    const [todo, setTodo] = useState(mockTodo);

    const idRef = useRef(3);

    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        /* newItem을 포함한 새 배열을 만들어 State 변수 todo 업데이트 */
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    };


    return (
    <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} />
    </div>
    );
}

export default App;
