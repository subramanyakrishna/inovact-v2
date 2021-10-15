import React from 'react'
interface UserProp {
    user: {
        id: string
        name: string
        avatar: string
        designation: string
    }
    handleClick(_id: string): any
    rightText: string
}

const User: React.FC<UserProp> = ({ user, handleClick, rightText }) => {
    return (
        <div className={'privacy-settings-mid-block-box-user'}>
            <div className={'privacy-settings-mid-block-box-user-left'}>
                <img
                    src={user.avatar}
                    className={'privacy-settings-mid-block-box-user-left-img'}
                />
                <div
                    className={'privacy-settings-mid-block-box-user-left-text'}
                >
                    <div
                        className={
                            'privacy-settings-mid-block-box-user-left-text-name paragraph-primary text-style--bold text-color--black'
                        }
                    >
                        {user.name}
                    </div>
                    <div
                        className={
                            'privacy-settings-mid-block-box-user-left-text-desig text-color--black'
                        }
                    >
                        {user.designation}
                    </div>
                </div>
            </div>

            <div
                className={
                    'privacy-settings-mid-block-box-user-right text-style--bold'
                }
                onClick={() => handleClick(user.id)}
            >
                {rightText}
            </div>
        </div>
    )
}
export default User
