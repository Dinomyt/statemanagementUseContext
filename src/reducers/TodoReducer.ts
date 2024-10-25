export interface Todo {
    id: number;
    title:string;
}

interface AddTodo {
    type: 'ADD';
    todo: Todo;
}

interface DeleteTodo {
    type: 'DELETE';
    todoId:number;
}

export type TodoAction = AddTodo | DeleteTodo;

const todoReducer = (todos:Todo[], action:TodoAction): Todo[] => {
    switch(action.type) {
        case 'ADD':
            return [action.todo, ...todos];

        case 'DELETE':
            return todos.filter((t) => t.id !== action.todoId )    
    }
}
export default todoReducer