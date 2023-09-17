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

    const onUpdate = (targetId) => {
        setTodo(
            todo.map((it) =>
                it.id === targetId ? {...it, isDone: !it.isDone } : it
            )
        )
    }

    const onDelete = (targetId) => {
        /* 클릭된 요소를 제외 한 새 배열로 리스트 리렌더링 */
        setTodo(todo.filter((it)  => it.id !== targetId));
    };

    return (
    <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
    );
}

export default App;
