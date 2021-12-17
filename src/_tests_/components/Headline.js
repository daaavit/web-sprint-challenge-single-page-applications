import React from 'react'
import Pizza from './Pizza.jpg'
import './headline.css'

export default function Headline() {
    return (
        <div className='headline'>
           <div><h4>Our Best Selling Pizza</h4></div>
           <div><img width={500} height={150} src={Pizza} alt='Pizza pic' /></div>
        </div>
    )
}
