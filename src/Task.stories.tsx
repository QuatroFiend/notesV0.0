
import {action} from '@storybook/addon-actions'
import {Task} from "./Task";

export default {
    title:'Task Component',
    component:Task,
}

const changeTaskStatus=action('Status was changed');
const changeTaskTitle=action('Title was changed');
const removeTask=action('Task was removed');


export const TaskBasic=()=>{
    return<> <Task
    removeTask={removeTask}
    changeTaskTitle={changeTaskTitle}
    changeTaskStatus={changeTaskStatus}
    task={{id:'1',isDone:true,title:'CSS'}}
    todolistId={"todolistId1"}
    />
    <Task
        removeTask={removeTask}
        changeTaskTitle={changeTaskTitle}
        changeTaskStatus={changeTaskStatus}
        task={{id:'2',isDone:false,title:'HTML'}}
        todolistId={"todolistId2"}
    />
    </>
}
