import type { Todo } from "./../types/Todo";

type TodoItemProps = {
    // todo
    todo: Todo;
    // 削除処理
    handleDelete: (deleteId: number) => void;
    // チェック処理
    handleToggleCompleted:  (completedId: number) => void;
}

/* propsを分割代入 */
function TodoItem({
  todo,
  handleDelete,
  handleToggleCompleted,
}: TodoItemProps) {

  return (
    <>
        <li>
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
    </>
  );
}

export default TodoItem;