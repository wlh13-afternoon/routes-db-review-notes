import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default class Header extends React.Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div className='Header'>
                <div><h5>Rob's Super Convenient Convenince Store</h5></div>
                <div className='buttons'><Link to='/'><button>Home</button></Link>
                <Link to='/add'><button>Add</button></Link></div>
            </div>
        )
    }
}