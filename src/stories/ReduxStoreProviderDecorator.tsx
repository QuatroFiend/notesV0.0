import {Provider} from "react-redux";
import {AppRootStateType, store} from "../state/store";
import {v1} from "uuid";
import {useReducer} from "react";
import {todolistsReducer} from "../state/todolists-reducer";
import {tasksReducer} from "../state/tasks-reducer";
import {combineReducers, createStore, legacy_createStore} from "redux";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
})


const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ],

    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
}

export const storyBookState=legacy_createStore(rootReducer,initialGlobalState as AppRootStateType);
export const ReduxStoreProviderDecorator = (storyFN: any) => {
    return <Provider store={storyBookState}>{storyFN()}</Provider>
}