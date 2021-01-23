import React from 'react'
import {Icon} from 'rsuite'

const BottomNavBar = () => {
    return (
        <div className='bottom-nav'>
            <Icon icon="home"/>
            <Icon icon="play"/>
            <Icon icon="plus" className="m-add-icon"/>
            <Icon icon="bell"/>
            <Icon icon="user"/>
        </div>
    )
}

export default BottomNavBar
