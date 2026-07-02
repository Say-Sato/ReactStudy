import "./App.css";
import { useState, type ChangeEvent} from "react";

type Todo = {
    // ユニークなid
    id: number;
    // 値
    name: string;
    // 完了フラグ
    completed: boolean;
};

// シーケンスid
let id = 0;

function App() {
  /* 画面に表示する配列 */
  const [todos, setTodos] = useState<Todo[]>([]);
   /* 入力中の値 */
  const [inputName, setInputName] = useState("");

  /* todosに画面に表示する値を追加する */
  const handleAdd = () => {
    /* 入力中の値を配列に追加 */
        setTodos(todos => [...todos, { id: id++, name: inputName, completed: false}]);
    /* 入力中の値を空にする */
    setInputName("")
  };

    /* todoの完了状態を更新する */
  const handleToggleCompleted = (completedId: number) => {
    /* 引数で指定したtodoの状態を完了または未完了に変更する*/
    setTodos(todos.map((todo) => 
      todo.id === completedId ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  /* todoを削除する */
  const handleDelete = (deleteId: number) => {
    /* 新規に配列を作成しtodosを更新する */
    setTodos(
      /* filterで削除するidと一致しないもののみTodosに残す */
      todos => todos.filter((todo) => todo.id !== deleteId)
    )
  };

    /* inputNameに入力中の値を反映する */
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    /* テキストが変更されるごとに入力中の値を更新する */
    setInputName(event.target.value)
  };


  return (
  <div className="app">
    <h1>タスクを入力してください。</h1>

    <input
      type="text"
      className="name"
      value={inputName}
      onChange={handleInput}
    />

    <input
      type="button"
      className="name-button"
      value="追加"
      onClick={handleAdd}
    />

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>

        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              handleToggleCompleted(todo.id);
            }}
          />

          <p className={todo.completed ? "completed" : ""}>{todo.name}</p>

          <input
            type="button"
            className="delete-button"
            value="削除"
            onClick={() => {
              handleDelete(todo.id);
            }}
          />
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;