const initState = {
    todo_todo_addMainInput: '',
    todo_todo_addSubInput: '',
    todo_todo_addMainModelOpen: false,
    todo_todo_addMainErrMessage: '',
    todo_todo_visible:true,
    todo_todo_data: [{
        id: 1,
        modalOpen: false,
        color: 'mediumblue',
        mouseMove: true,
        mainTask: '41',
        subTask: [],
        errMessage: '',
        detailState:false
    }, {
        id: 2,
        modalOpen: false,
        color: 'mediumblue',
        mouseMove: true,
        mainTask: '441',
        subTask: ['12', '21'],
        errMessage: '',
        detailState:false
    }, {
        id: 3,
        modalOpen: false,
        color: 'mediumblue',
        mouseMove: true,
        mainTask: '412',
        subTask: ['1'],
        errMessage: '',
        detailState:false
    }]
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
                todo_todo_addMainErrMessage: '',
                todo_todo_addMainInput: ''
            })

        case 'TODO_HANDLE_TODO_ADD_MAIN_OPEN':
            return Object.assign({}, state, {
                todo_todo_addMainModelOpen: true,
                todo_todo_addMainInput: ''
            })

        case 'TODO_HANDLE_TODO_ADD_SUB_CANCEL':
            let resultttt = state.todo_todo_data.map((val) => {
                if (val.id === action.whoOpen.id) {
                    val.modalOpen = false
                    val.errMessage = ''
                    return val
                } else {
                    return val
                }
            })

            return Object.assign({}, state, {
                todo_todo_data: resultttt,
                todo_todo_addSubInput: ''
            })

        case 'TODO_HANDLE_TODO_ADD_SUB_OPEN':
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


        case 'TODO_ADD_TODO_MAINTASK':
            let nowId = state.todo_todo_data.length
            if (state.todo_todo_addMainInput === '') {
                return Object.assign({}, state, {
                    todo_todo_addMainErrMessage: '主任務名稱不得為空白',
                })
            } else {

                let reesult = state.todo_todo_data.map((val) => {
                    if (val.mainTask === state.todo_todo_addMainInput) {
                        return 'Repeat'
                    } else {
                        return 'OK'
                    }
                })

                let checkReesult = reesult.every((content) => {
                    return content === 'OK'
                })
                if (!checkReesult) {
                    return Object.assign({}, state, {
                        todo_todo_addMainErrMessage: '主任務名稱不得重複'
                    })
                } else {
                    return Object.assign({}, state, {
                        todo_todo_data: [...state.todo_todo_data, {
                            id: nowId + 1,
                            modalOpen: false,
                            color: 'mediumblue',
                            mouseMove: true,
                            mainTask: state.todo_todo_addMainInput,
                            subTask: [],
                            errMessage: '',
                            detailState:false
                        }],
                        todo_todo_addMainModelOpen: false,
                        todo_todo_addMainInput: ''
                    })
                }
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
            if (state.todo_todo_addSubInput === '') {
                let result = state.todo_todo_data.map((val) => {
                    if (val.id === action.addMainTask.id) {
                        val.errMessage = '子任務名稱請勿空白'
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
            } else {
                let result = state.todo_todo_data.map((val) => {
                    if (val.id === action.addMainTask.id) {
                        let check = val.subTask.map((content) => {
                            if (content === state.todo_todo_addSubInput) {
                                return 'Repeat'
                            } else {
                                return 'OK'
                            }
                        })
                        let repeat = check.every((content) => {
                            return content === 'OK'
                        });
                        if (!repeat) {
                            val.errMessage = '子任務名稱已重複'
                            return val
                        } else {
                            val.subTask.push(state.todo_todo_addSubInput)
                            val.modalOpen = false
                            return val
                        }
                    } else {
                        return val
                    }
                })
                return Object.assign({}, state, {
                    todo_todo_data: result,
                    todo_todo_addSubModelOpen: false,
                    todo_todo_addSubInput: ''
                })
            }

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

        case 'TODO_HANDLE_TODO_MOUSE_MOVE':
            let resulttt = state.todo_todo_data.map((val) => {
                if (val.id === action.whoMove.id) {
                    val.mouseMove = false
                    val.color = 'firebrick'
                    return val
                } else {
                    return val
                }
            })

            return Object.assign({}, state, {
                todo_todo_data: resulttt,
            })


        case 'TODO_HANDLE_TODO_MOUSE_LEAVE':

            let todo_whoLeave = state.todo_todo_data.map((val) => {
                if (val.id === action.whoLeave.id) {
                    val.mouseMove = true
                    val.color = 'mediumblue'
                    return val
                } else {
                    return val
                }
            })

            return Object.assign({}, state, {
                todo_todo_data: todo_whoLeave,
            })

case 'TODO_HANDLE_TODO_DETAIL':
        let resultt2 = state.todo_todo_data.map((val) => {
            if (val.id === action.whoHidden.id) {
                (val.detailState)? val.detailState=false: val.detailState=true
                return val
            } else {
                return val
            }
        })

        return Object.assign({}, state, {
            todo_todo_data: resultt2,
        })


        default:
            return state
    }
}

export default Reducer