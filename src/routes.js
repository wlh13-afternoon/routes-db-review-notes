import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Edit from './Components/Edit'

export default (
    <Switch>
        
        <Route path='/edit' component={Edit}/>
    </Switch>
)