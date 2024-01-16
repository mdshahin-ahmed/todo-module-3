import TodoCard from "./TodoCard";

import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  // from local state
  //   const { todos } = useAppSelector((state) => state.todos);

  //   from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p> There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full  space-y-3 rounded-lg">
          {todos?.data?.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
