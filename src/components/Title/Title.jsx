import React from 'react'
import './Title.css'

const Title = ({subTitle,title}) => {
    return (
        <div className='title'>
            <h1>{subTitle}</h1>
            <p>{title}</p>
        </div>
    )
}

export default Title
