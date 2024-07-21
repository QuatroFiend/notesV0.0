
import {action} from '@storybook/addon-actions'
import {Task} from "./Task";
import {EditableSpan} from "./EditableSpan";

export default {
    title:'EditableSpan Component',
    component:EditableSpan,
}

const callBack=action('Value was changed');



export const EditableSpanBasic=()=>{
    return <EditableSpan value={'start value'} onChange={callBack}/>
}
