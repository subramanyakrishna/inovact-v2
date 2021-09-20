import React from 'react'
import like from 'images/feed/post/like.svg'
import comment from 'images/feed/post/comment.svg'
import share from 'images/feed/post/share.svg'
import { Link } from 'react-router-dom'
import Photos from './Photos'

function Post({ post, openTeamMember, openRequestJoin }: any) {
    return (
        <div className="post">
            <div className="post__author">
                <img
                    className="post__author__avatar"
                    src={post.avatar}
                    alt=""
                />
                <div className="post__author__text">
                    <h1 className="post__author__text__name">{post.author}</h1>
                    <p className="post__author__text__time">
                        {post.time} hrs ago
                    </p>
                </div>
            </div>
            <div className="post__text">
                {post.title ? (
                    <h1 className="post__text__title">{post.title}</h1>
                ) : null}
                <p className="post__text__desc">
                    {post.type === 1
                        ? post.description.substring(0, 150)
                        : post.description}{' '}
                    {post.type === 1 ? (
                        <Link to={`/posts/${post.id}`}>Read more</Link>
                    ) : null}
                </p>
            </div>
            {post.tags ? (
                <div className="post__tags">
                    {post.tags?.map((tag: string, idx: number) => {
                        return post.type === 1 ? (
                            idx < 4 ? (
                                <p key={idx} className="post__tags__item">
                                    {tag}
                                </p>
                            ) : null
                        ) : (
                            <p key={idx} className="post__tags__item">
                                {tag}
                            </p>
                        )
                    })}
                    {post.type === 1 ? (
                        <Link
                            className="post__tags__item"
                            to={`/posts/${post.id}`}
                        >
                            + {post.tags?.length - 4} more
                        </Link>
                    ) : null}
                </div>
            ) : null}
            {post.images ? (
                <div className="post__images">
                    <Photos images={post.images} />
                </div>
            ) : null}
            <div className="post__footer">
                <div className="post__footer__likes">
                    <img src={like} alt="" />
                    <p className="post__footer__likes__num">{post.numLikes}</p>
                </div>
                <div className="post__footer__comments">
                    <img src={comment} alt="" />
                    <p className="post__footer__comments__num">
                        {post.numComments}
                    </p>
                </div>
                <div className="post__footer__share">
                    <img src={share} alt="" />
                </div>
                {post.type === 1 ? (
                    <>
                        <p className="post__footer__team__text" onClick={openTeamMember}>Team Members</p>
                        <p className="post__footer__team__request" onClick={openRequestJoin}>Join Team</p>
                    </>
                ) : (
                    <div className="post__footer__team__empty"></div>
                )}
            </div>
        </div>
    )
}

export default Post

/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
 obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
 tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
 quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
 sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
 recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
 minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
 quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
 fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
 consequuntur! Commodi minima excepturi repudiandae velit hic maxime
 doloremque. Quaerat provident commodi consectetur veniam similique ad 
 earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
 fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
 suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
 modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
 totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
 quasi aliquam eligendi, placeat qui corporis! */
