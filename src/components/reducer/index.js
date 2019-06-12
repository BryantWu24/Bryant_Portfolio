const initState = {
    todo_todo_addMainInput: '',
    todo_todo_addSubInput: '',
    todo_todo_addMainModelOpen: false,
    todo_todo_addSubModelOpen: false,
    todo_todo_data: []
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'TODO_HANDLE_TODO_ADD_MAIN_INPUT':
            return Object.assign({}, state, {
                todo_todo_addMainInput: action.input
            })
        case 'TODO_HANDLE_TODO_ADD_MAIN_CANCEL':
            return Object.assign({}, state, {
                todo_todo_addMainModelOpen: false,
                todo_todo_addMainInput: ''
            })

        case 'TODO_HANDLE_TODO_ADD_MAIN_OPEN':
            return Object.assign({}, state, {
                todo_todo_addMainModelOpen: true,
                todo_todo_addMainInput: ''
            })

        case 'TODO_HANDLE_TODO_ADD_SUB_CANCEL':
            return Object.assign({}, state, {
                todo_todo_addSubModelOpen: false,
                todo_todo_addSubInput: ''
            })

        case 'TODO_HANDLE_TODO_ADD_SUB_OPEN':

            console.log('asd', action.whoOpen)


            let resultt = state.todo_todo_data.map((val) => {
                if (val.id === action.whoOpen.id) {
                    val.modalOpen = true
                    return val
                } else {
                    return val
                }
            })

            return Object.assign({}, state, {
                todo_todo_data: resultt,
                todo_todo_addSubInput: ''
            })

            // return Object.assign({}, state, {
            //     todo_todo_addSubModelOpen: true,
            //     todo_todo_addSubInput: ''
            // })


        case 'TODO_ADD_TODO_MAINTASK':
            let nowId = state.todo_todo_data.length
            if (state.todo_todo_addMainInput === '') {
                return state
            } else {
                return Object.assign({}, state, {
                    todo_todo_data: [...state.todo_todo_data, {
                        id: nowId + 1,
                        modalOpen: false,
                        mainTask: state.todo_todo_addMainInput,
                        subTask: []
                    }],
                    todo_todo_addMainModelOpen: false,
                    todo_todo_addMainInput: ''
                })
            }

        case 'TODO_DELETE_TODO_SUBTASK':
            let afterDeleteData = state.todo_todo_data.map((val) => {
                let result = val.subTask.filter((value) => value !== action.deleteTask)
                val.subTask = result
                return val
            })
            return Object.assign({}, state, {
                todo_todo_data: afterDeleteData
            })

        case 'TODO_ADD_TODO_SUBTASK':
            console.log(action.addMainTask)
            let result = state.todo_todo_data.map((val) => {
                if (val.id === action.addMainTask.id) {
                    val.subTask.push(state.todo_todo_addSubInput)
                    val.modalOpen=false
                    return val
                } else {
                    return val
                }
            })
            return Object.assign({}, state, {
                todo_todo_data: result,
                todo_todo_addSubModelOpen: false,
                todo_todo_addSubInput: ''
            })


        case 'TODO_HANDLE_TODO_ADD_SUB_INPUT':
            return Object.assign({}, state, {
                todo_todo_addSubInput: action.input
            })


        case 'TODO_DELETE_TODO_MAINTASK':
            let afterDelete = state.todo_todo_data.filter((value) => {
                return value !== action.deleteTask
            })
            return Object.assign({}, state, {
                todo_todo_data: afterDelete
            })

        default:
            return state
    }
}

export default Reducer