export const todo_handleTodoAddMainInput = (val) => {
    return {
        type: 'TODO_HANDLE_TODO_ADD_MAIN_INPUT',
        input: val.target.value
    }
}

export const todo_handleTodoAddMainCancel = () => {
    return {
        type: 'TODO_HANDLE_TODO_ADD_MAIN_CANCEL'
    }
}
export const todo_handleTodoAddMainOpen = () => {
    return {
        type: 'TODO_HANDLE_TODO_ADD_MAIN_OPEN'
    }
}

export const todo_addTodoMainTask = () => {
    return {
        type: 'TODO_ADD_TODO_MAINTASK',
    }
}

export const todo_deleteTodoSubTask = (val) => {
    return {
        type: 'TODO_DELETE_TODO_SUBTASK',
        deleteTask: val
    }
}

export const todo_addTodoSubTask = (val) => {
    return {
        type: 'TODO_ADD_TODO_SUBTASK',
        addMainTask: val
    }
}

export const todo_handleTodoAddSubInput = (val) => {
    return {
        type: 'TODO_HANDLE_TODO_ADD_SUB_INPUT',
        input: val.target.value
    }
}

export const todo_handleTodoAddSubCancel = () => {
    return {
        type: 'TODO_HANDLE_TODO_ADD_SUB_CANCEL'
    }
}
export const todo_handleTodoAddSubOpen = (val) => {
    return {
        type: 'TODO_HANDLE_TODO_ADD_SUB_OPEN',
        whoOpen:val
    }
}

export const todo_deleteTodoMainTask =(val)=>{
    return{
        type:'TODO_DELETE_TODO_MAINTASK',
        deleteTask:val
    }
}