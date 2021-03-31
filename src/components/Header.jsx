import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <img className="header__logo" src={logo} alt="logo" />
        <Link to='/' className="header__title">Mountain blog</Link>
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li">Home</li>
            <li className="header__li">Posts</li>
            <li className="header__li">About</li>
            <li className="header__li">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="header__content">
        <img className="header__img" src="https://images.unsplash.com/photo-1579691099788-42394ae932d8" alt="pic" />
      </div>
      <h1 className="header__title_posts">POSTS</h1>
      <hr className="header__hr" />
      <div className="header__addPost">
        <Link to='/create-post' className='header__addPost_btn' href='#'>
          Tell About Something...
        </Link>
      </div>
    </header>
  )
}

export default Header
