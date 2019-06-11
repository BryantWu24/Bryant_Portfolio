import React, { Component } from 'react'
import { Grid, Menu, Container, Image, Dropdown, Icon } from 'semantic-ui-react'
import Logo from './img/Logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomePage from './homepage/index'
import Resume from './resume/index'
import TodoList from './todolist/index'

class Index extends Component {

    render() {
        return (
            <Router>
                <Grid >
                    <Grid.Row only='computer'>
                        <Grid.Column witdh={16}>
                            <Menu borderless    >
                                <Container text>
                                    <Menu.Item>
                                        <Image style={{ width: '5VW' }} src={Logo} alt='logo' />
                                    </Menu.Item>


                                    <Menu.Item header> <Link to="/">Bryant's Portfolio </Link></Menu.Item>

                                    <Menu.Menu position='right'>
                                        <Dropdown text='Works' pointing className='link item'>
                                            <Dropdown.Menu>
                                                <Link to="/todolist">
                                                    <Dropdown.Item>TodoList</Dropdown.Item>
                                                </Link>
                                                <Link to="/resume">
                                                    <Dropdown.Item>Resume</Dropdown.Item>
                                                </Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu.Menu>
                                </Container>
                            </Menu>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid.Row>
                    <div style={{ background: 'ivory', width: '85VW', height: '90VH' }}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/todolist" component={TodoList} />
                        <Route path="/resume" component={Resume} />
                    </div>
                </Grid.Row>
            </Router >
        )
    }
}


export default Index