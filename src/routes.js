import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Add from './Components/Add'
import Edit from './Components/Edit'

export default (
    <Switch>
        <Route path='/add' component={Add}/>
        <Route path='/edit' component={Edit}/>
    </Switch>
)