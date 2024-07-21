import {useEffect, useState} from "react";
import axios from "axios";
import {todolistsAPI} from "../api/todolists-api";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "9705a30f-7ff0-4d58-8108-73f0fdcd4766"
    }
}
export const GetToDoList = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((res) => {
                debugger;
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}


export const CreateToDolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist("bla bla")
            .then((res) => {
                debugger;
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}


export const DeleteToDolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '6a39422f-9c4e-4d9a-acdc-5bf38a3577bf';
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                debugger;
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const UpdateToDolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '6a4d4994-4c29-4b74-8068-9520883be704'
        todolistsAPI.updateTodolist("hello test", todolistId)
            .then((res) => {
                debugger;
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "443d795b-0a6b-4a61-a176-b67afa5c1901"
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data.item)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "443d795b-0a6b-4a61-a176-b67afa5c1901"
        const taskId='';
        todolistsAPI.deleteTasks(todolistId,taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
