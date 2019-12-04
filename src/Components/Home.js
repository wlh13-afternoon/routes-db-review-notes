import React from 'react'
import '../App.css'
import axios from 'axios'

export default function Home (props){
    console.log(props)
    
        return(
            <div className='Home'>
                {props.products.map((el, i) => (
                    <div key={i} className='products'>
                        <h2>{el.product_name}</h2>
                        <img src={el.image} alt=""/>
                        <h3>${el.price}</h3>
                        <div>
                            <button>Edit</button>
                            <button onClick={() => props.delete(el.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        )
}