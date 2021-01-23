import React from 'react'

const UserItem = ({img, user}) => {
    return (
        <div className="user-item">
            <div className="user-avatar">
            <img src="https://static.riviu.co/320/image/2020/10/11/ee822cd4090761a4f4d03c29557ccd28_output.jpeg" alt=""/>

            </div>
            <div>
            <span>Nguyễn Hoàng Minh</span>
            <span>@mincheenguyen • người theo dõi</span>
            </div>
        </div>
    )
}

export default UserItem
