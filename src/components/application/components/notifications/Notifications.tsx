import React from 'react'
import NotificationTag from './NotificationTag'

function Notifications() {
    const data = [
        {
            name: 'Girinath Nataraj',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            comment:
                'Egestas sed sit quam mattis vitae eu egastas sed sit quam mattis sem at et.',
            time: '1hr',
        },
        {
            name: 'Girinath Nataraj',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            comment:
                'Egestas sed sit quam mattis vitae eu egastas sed sit quam mattis sem at et.',
            time: '1hr',
        },
        {
            name: 'Girinath Nataraj',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            comment:
                'Egestas sed sit quam mattis vitae eu egastas sed sit quam mattis sem at et.',
            time: '1hr',
        },
        {
            name: 'Girinath Nataraj',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            comment:
                'Egestas sed sit quam mattis vitae eu egastas sed sit quam mattis sem at et.',
            time: '1hr',
        },
        {
            name: 'Girinath Nataraj',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            comment:
                'Egestas sed sit quam mattis vitae eu egastas sed sit quam mattis sem at et.',
            time: '1hr',
        },
        {
            name: 'Girinath Nataraj',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            comment:
                'Egestas sed sit quam mattis vitae eu egastas sed sit quam mattis sem at et.',
            time: '1hr',
        },
        {
            name: 'Girinath Nataraj',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            comment:
                'Egestas sed sit quam mattis vitae eu egastas sed sit quam mattis sem at et.',
            time: '1hr',
        },
    ]
    return (
        <div className="notifications-main">
            {data.map((noti: any, i: number) => {
                return (
                    <NotificationTag
                        key={i}
                        name={noti.name}
                        comment={noti.comment}
                        time={noti.time}
                        img={noti.image}
                    />
                )
            })}
        </div>
    )
}

export default Notifications
