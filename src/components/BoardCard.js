import React from 'react'

const BoardCard = ({title, children}) => {
    return (
        <div className="boardcard-container h-100" >
            <h1 className="p-1">{title}</h1>
            <div className="list-item h-100">
                {children}
            </div>
        </div>
    )
}

export default BoardCard
