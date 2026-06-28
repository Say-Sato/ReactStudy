import { useState, type ChangeEvent} from "react";

function App() {
  /* 画面に表示する配列 */
  const [todos, setTodos] = useState<string[]>([]);
   /* 入力中の値 */
  const [inputName, setInputName] = useState("");

  /* todosに画面に表示する値を追加する */
  const handleClick = () => {
    /* 入力中の値を配列に追加 */
        setTodos(todos => [...todos, inputName]);
    /* 入力中の値を空にする */
    setInputName("")
  };

    /* inputNameに入力中の値を反映する */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    /* テキストが変更されるごとに入力中の値を更新する */
    setInputName(event.target.value)
  };

  
  return (
    <>
      <h1>名前を入力してください。</h1>

      <input
        type="text"
        className="name"
        value={inputName}
        onChange={handleChange}
      />
      <input
        type="button"
        className="name-button"
        value="変更"
        onClick={handleClick}
      />
      /* 配列から値を取り出す（todosの各要素をtodoとする） */
      {todos.map((todo) => (
          <p>入力した名前：{todo}</p>
      ))}
    </>
  );
}

export default App;