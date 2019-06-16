import React, { Component } from 'react'
import { Grid, Image, Divider, Header, Icon, Checkbox, Modal, Button, Input, Message } from 'semantic-ui-react'
import Background from '../img/Todo_background.jpg'
import { connect } from 'react-redux'
import {
    todo_handleTodoAddMainInput, todo_handleTodoAddMainCancel, todo_handleTodoAddMainOpen, todo_addTodoMainTask,
    todo_deleteTodoSubTask, todo_addTodoSubTask, todo_handleTodoAddSubInput, todo_handleTodoAddSubOpen, todo_handleTodoAddSubCancel,
    todo_deleteTodoMainTask, todo_handleTodoMouseMove, todo_handleTodoMouseLeave,todo_handleTodoDetail
} from '../action'

class Index extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row only='computer'>
                    <Grid.Column width={16}>
                        <Image style={{ width: '100VW', height: '40VH' }} src={Background} alt='back'></Image>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='computer'>
                    <Grid.Column width={16}>
                        <div style={{ paddingLeft: '5em', paddingTop: '3em' }}>
                            <span style={{ fontSize: '4em' }}>TodoList</span>
                            <Divider></Divider>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='computer' column={3}>
                    <Grid.Column width={6} >
                        <div style={{ paddingLeft: '6em', }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '2.5em' }} >To-Do</span>
                                <Modal
                                    trigger={<Icon name='add' size='big' onClick={this.props.handleTodoAddMainOpen} />}
                                    open={this.props.todo_mainModalOpen}
                                    onClose={this.props.handleTodoAddMainCancel}
                                    basic
                                    size='small'>
                                    <Header icon='edit' content='新增 To-Do 主任務' />
                                    <Modal.Content>
                                        {
                                            (this.props.todo_mainErrMessage === '') ?
                                                ''
                                                :
                                                <Message negative>

                                                    <Message.Header><Icon name='exclamation triangle'></Icon>{this.props.todo_mainErrMessage}</Message.Header>
                                                </Message>
                                        }
                                        <span style={{ fontSize: '2em' }}> 主任務名稱&nbsp;&nbsp;</span> <Input
                                            onChange={this.props.handleTodoAddMainInput}
                                            value={this.props.todo_mainInput} />
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='red' onClick={this.props.handleTodoAddMainCancel} inverted>
                                            <Icon name='cancel' /> Cancel
                                         </Button>
                                        <Button color='green' onClick={this.props.addTodoMainTask} inverted>
                                            <Icon name='checkmark' /> Add
                                         </Button>
                                    </Modal.Actions>
                                </Modal>
                            </div>
                            <Divider />
                            {
                                this.props.data.map((val, index) => {
                                    if (val.subTask.length === 0) {
                                        return (
                                            <div key={index} style={{ display: 'flex', alignItems: 'center', background: val.color, height: '30px',borderTop: '0.1em #DDD dotted' }}
                                                onMouseMove={() => this.props.handleTodoMouseMove(val)}
                                                onMouseLeave={() => this.props.handleTodoMouseLeave(val)}>
                                                <div hidden={val.mouseMove}                                                 >
                                                    <Modal
                                                        trigger={<Icon name='add' style={{ color: '#AAA' }}  onClick={() => this.props.handleTodoAddSubOpen(val)} />}
                                                        open={val.modalOpen}
                                                        onClose={this.props.handleTodoAddMainCancel}
                                                        basic
                                                        size='small'>
                                                        <Header icon='edit' content={`新增 ${val.mainTask} 子任務`} />
                                                        <Modal.Content>
                                                            {
                                                                (val.errMessage === '') ?
                                                                    ''
                                                                    :
                                                                    <Message negative>

                                                                        <Message.Header><Icon name='exclamation triangle'></Icon>{val.errMessage}</Message.Header>
                                                                    </Message>
                                                            }
                                                            <span style={{ fontSize: '2em' }}> 子任務名稱&nbsp;&nbsp;</span> <Input
                                                                onChange={this.props.handleTodoAddSubInput}
                                                                value={this.props.todo_subInput} />
                                                        </Modal.Content>
                                                        <Modal.Actions>
                                                            <Button color='red' onClick={() => this.props.handleTodoAddSubCancel(val)} inverted>
                                                                <Icon name='cancel' /> Cancel
                                                            </Button>
                                                            <Button color='green' onClick={() => { this.props.addTodoSubTask(val) }} inverted>
                                                                <Icon name='checkmark' /> Add
                                                            </Button>
                                                        </Modal.Actions>
                                                    </Modal>
                                                    <Icon name='minus' style={{ color: '#AAA' }}
                                                        onClick={() => { this.props.deleteTodoMainTask(val) }}
                                                    ></Icon>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.5VW' }}>
                                                    <Checkbox label={<label style={{ fontSize: '1.7em', color: 'white' }}>{val.mainTask}</label>} />
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={index} style={{ background: val.color, borderTop: '0.1em #DDD dotted'
                                        }}
                                                onMouseMove={() => this.props.handleTodoMouseMove(val)}
                                                onMouseLeave={() => this.props.handleTodoMouseLeave(val)}>
                                                <div style={{ display: 'flex', alignItems: 'center', height: '30px',justifyContent:'space-between' }}>
                                                    <div style={{display:'flex'}}>
                                                        <div hidden={val.mouseMove}>
                                                            <Modal
                                                                trigger={<Icon name='add' style={{ color: '#AAA' }} onClick={() => this.props.handleTodoAddSubOpen(val)} />}
                                                                open={val.modalOpen}
                                                                onClose={() => this.props.handleTodoAddSubCancel(val)}
                                                                basic
                                                                size='small'>
                                                                <Header icon='edit' content={`新增 ${val.mainTask} 子任務`} />
                                                                <Modal.Content>
                                                                    {
                                                                        (val.errMessage === '') ?
                                                                            ''
                                                                            :
                                                                            <Message negative>

                                                                                <Message.Header><Icon name='exclamation triangle'></Icon>{val.errMessage}</Message.Header>
                                                                            </Message>
                                                                    }
                                                                    <span style={{ fontSize: '2em' }}> 子任務名稱&nbsp;&nbsp;</span> <Input
                                                                        onChange={this.props.handleTodoAddSubInput}
                                                                        value={this.props.todo_subInput} />
                                                                </Modal.Content>
                                                                <Modal.Actions>
                                                                    <Button color='red' onClick={() => this.props.handleTodoAddSubCancel(val)} inverted>
                                                                        <Icon name='cancel' /> Cancel
                                                                </Button>
                                                                    <Button color='green' onClick={() => { this.props.addTodoSubTask(val) }} inverted>
                                                                        <Icon name='checkmark' /> Add
                                                                </Button>
                                                                </Modal.Actions>
                                                            </Modal>
                                                            <Icon name='minus' 
                                                                style={{ color: '#AAA' }}
                                                                onClick={() => { this.props.deleteTodoMainTask(val) }}
                                                            ></Icon>
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.5VW' }}>
                                                            <Checkbox label={<label style={{ fontSize: '1.5em', color: 'white' }}>{val.mainTask}</label>} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Icon name={(val.detailState)?'eye':'eye slash'} style={{ color: '#DDD' }}  onClick={()=>{this.props.handleTodoDetailState(val)}}/>
                                                    </div>
                                                </div>

                                                {
                                                    val.subTask.map((subVal, idx) => {
                                                        return (
                                                            <div key={idx} hidden={val.detailState} >
                                                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1.5em', height: '30px', borderTop: '0.1em #DDD dotted' }} >
                                                                <div hidden={val.mouseMove} >
                                                                 <Icon name='minus' style={{ color: '#AAA' }}  onClick={() => { this.props.deleteTodoSubTask(subVal) }}></Icon>
                                                                </div>
                                                                <div  style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.5VW' }}>
                                                                    <Checkbox label={<label style={{ fontSize: '1.5em', color: 'white' }}>{subVal}</label>} />
                                                                </div>
                                                            </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        )
                                    }

                                })
                            }

                        </div>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <div >
                        
                    </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div >

                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.todo_todo_data,
        todo_mainInput: state.todo_todo_addMainInput,
        todo_mainModalOpen: state.todo_todo_addMainModelOpen,
        todo_subInput: state.todo_todo_addSubInput,
        todo_subModalOpen: state.todo_todo_addSubModelOpen,
        todo_mainErrMessage: state.todo_todo_addMainErrMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTodoAddMainInput: (val) => {
            dispatch(todo_handleTodoAddMainInput(val))
        },
        handleTodoAddMainCancel: () => {
            dispatch(todo_handleTodoAddMainCancel())
        },
        handleTodoAddMainOpen: () => {
            dispatch(todo_handleTodoAddMainOpen())
        },
        addTodoMainTask: () => {
            dispatch(todo_addTodoMainTask())
        },
        deleteTodoSubTask: (val) => {
            dispatch(todo_deleteTodoSubTask(val))
        },
        addTodoSubTask: (val) => {
            dispatch(todo_addTodoSubTask(val))
        },
        handleTodoAddSubInput: (val) => {
            dispatch(todo_handleTodoAddSubInput(val))
        },
        deleteTodoMainTask: (val) => {
            dispatch(todo_deleteTodoMainTask(val))
        },
        handleTodoAddSubCancel: (val) => {
            dispatch(todo_handleTodoAddSubCancel(val))
        },
        handleTodoAddSubOpen: (val) => {
            dispatch(todo_handleTodoAddSubOpen(val))
        },
        handleTodoMouseMove: (val) => {
            dispatch(todo_handleTodoMouseMove(val))
        },
        handleTodoMouseLeave: (val) => {
            dispatch(todo_handleTodoMouseLeave(val))
        },
        handleTodoDetailState: (val)=>{
            dispatch(todo_handleTodoDetail(val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)