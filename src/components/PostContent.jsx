import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import postInfo from '../img/info.svg'

const postContent = ({ id, title, body }) => {
  return (
    <div className='header__posts_main'>
      <div className="header__posts_content">
        <h3 className="header__posts_title">{title}</h3>
        <hr />
        <p className="header__posts_body">{body}</p>
      </div>
      <div className="header__posts_btns">
        <Link to={`/posts/${id}`} className='header__post_info'>
          <img className='header__post_info_icon' src={postInfo} alt="info"/>
        </Link>
        <Button id={id} />
      </div>
    </div>
  )
}

export default postContent;
