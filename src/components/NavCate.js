import React, { useState } from 'react'

const NavCate = () => {

    const [toggle, setIsToggle] = useState(true)

    const setToggle = () => {
        setIsToggle(!toggle)
    }

    return (
        <div className="nav-cate" onClick={setToggle}>
            <span className={toggle ? `` : 'active'}>
                kham pha
            </span>
            <span className={!toggle ? `` : 'active'}  onClick={setToggle}>
               Theo doi
            </span>
        </div>
    )
}

export default NavCate
