import {AddItemForm} from "./AddItemForm";
import {action} from '@storybook/addon-actions'

export default {
    title:'AddItemForm Component',
    component:AddItemForm
}

const callback=action('Button was pressed');


export const AddItemFormBasic=(props:any)=>{
    return <AddItemForm addItem={callback}/>
}
