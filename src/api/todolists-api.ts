import axios from "axios";


const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "9705a30f-7ff0-4d58-8108-73f0fdcd4766"
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    ...settings
})
export type TodoListType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}

type ResponseType<D={}> = {
    resultCode: number,
    messages: Array<string>,
    data: D
}
export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type GetTasksResponse = {
    error: string | null,
    totalCount: number,
    item: TaskType[]
}


export const todolistsAPI = {
    getTodolists() {
        const promise = instance.get<Array<TodoListType>>('todo-lists')
        return promise;
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{
            item: TodoListType
        }>>('todo-lists', {title: title})
        return promise;

    },
    deleteTodolist(id: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${id}`)
        return promise;

    },
    updateTodolist(title: string, id: string) {
        let promise = instance.put<ResponseType>(`todo-lists/${id}`, {title: title},)
        return promise;

    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTasks(todolistId:string,taskId:string){
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)    }
}

