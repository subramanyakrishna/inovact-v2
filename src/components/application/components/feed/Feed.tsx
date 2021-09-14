import React, { useState } from 'react'
import LeftNavBar from './components/leftnav/LeftNavBar'
import CreatePost from './components/center/CreatePost'
import RightNavBar from 'components/application/components/feed/components/rightnav/RightNavBar'
import Post from './components/center/Post'
import { postData } from './components/center/postData'
import UploadProject from './components/modals/UploadProject/UploadProject';

function Feed() {
    const [posts, setPosts] = useState<postData[]>([
        {
            id: '1',
            type: 1,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            author: 'Jane Doe',
            time: 10,
            title: 'Project Title',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
 obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 nihil, eveniet aliquid culpa officia aut!`,
            tags: [
                'OOP',
                'JavaScript',
                'HTML',
                'CSS',
                'ReactJS',
                'NodeJS',
                'MongoDB',
            ],
            images: [
                'https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80',
                'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
            ],
            numLikes: 250,
            numComments: 250,
            completion: 80,
        },
        {
            id: '2',
            type: 2,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            author: 'Jane Doe',
            time: 10,
            title: 'Idea Title',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
 obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 nihil, eveniet aliquid culpa officia aut!`,
            tags: [
                'OOP',
                'JavaScript',
                'HTML',
                'CSS',
                'ReactJS',
                'NodeJS',
                'MongoDB',
            ],
            numLikes: 250,
            numComments: 250,
        },
        {
            id: '3',
            type: 3,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            author: 'Jane Doe',
            time: 10,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
 obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 nihil, eveniet aliquid culpa officia aut!`,
            numLikes: 250,
            numComments: 250,
        },
    ])

    const [showOverlay, setShowOverlay] = useState(false);

    const openModal = ()=>{
        setShowOverlay(true);
    }
    const closeModal = ()=>{
        setShowOverlay(false);
    }
    
    return (
        <div>
            {
                showOverlay &&
                <div>
                    <div className="modal_overlay"></div>
                    <UploadProject closeModal={closeModal}/>
                </div>
            }
            
            <div className="feed__content">
                <div className="feed__content__left">
                    <LeftNavBar />
                </div>
                <div className="feed__content__center">
                    <CreatePost openModal={openModal}/>
                    {posts.map((post, idx) => {
                        return <Post key={idx} post={post} />
                    })}
                </div>
                <div className="feed__content__right">
                    <RightNavBar />
                </div>
            </div>

        </div>
        
    )
}

export default Feed;
