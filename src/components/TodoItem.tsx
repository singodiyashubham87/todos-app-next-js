"use client";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  completed,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li key={id} className="flex gap-4 border p-2 justify-between">
      <div className="flex gap-2">
        <input
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className={`flex items-center gap-2 text-gray-400 peer-checked:line-through text-xl`}
        >
          {title}
        </label>
      </div>
      <button className="text-gray-400 px-1 border border-gray-400 rounded-md hover:bg-gray-400 hover:text-gray-900">
        X
      </button>
    </li>
  );
}
