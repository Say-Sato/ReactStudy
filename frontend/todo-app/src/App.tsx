import { useState } from "react";
import type { ChangeEvent } from "react";

function App() {
  /* 変数nameにsetNameを利用して値を入れる */
  const [name, setName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1>名前を入力してください。</h1>

      <input
        type="text"
        className="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <p>入力した名前：{name}</p>
    </>
  );
}

export default App;