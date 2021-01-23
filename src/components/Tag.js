import React from 'react' 

const Tag = ({text = "Viet gi do de"}) => {
    return (
        <div className="c-tag">
            {text}
        </div>
    )
}


export default Tag
