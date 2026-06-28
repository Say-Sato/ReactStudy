import { useState, type ChangeEvent} from "react";

function App() {
  /* 画面に表示する値 */
  const [displayName, setDisplayName] = useState("");
   /* 入力中の値 */
  const [inputName, setInputName] = useState("");

  /* displayNameに画面に表示する値を入力する */
  const handleClick = () => {
    /* 入力中の値を代入 */
    setDisplayName(inputName)
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

      <p>入力した名前：{displayName}</p>
    </>
  );
}

export default App;