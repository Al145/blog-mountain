import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../img/delete.svg';
import edit from '../img/edit.svg';

const Buttons = ({ id }) => {
  const deletePost = async (id) => {
    return await axios
      .delete(`https://bloggy-api.herokuapp.com/posts/${id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Link to={'/edit-post/' + id} className='header__post_edit'>
        <img className='header__post_edit_icon' src={edit} alt="edit"/>
      </Link>
      <div className='header__post_delete'>
        <img onClick={() => deletePost(id)} className='header__post_delete_icon' src={deleteIcon} alt="deleteIcon"/>
      </div>
    </>
  );
};

export default Buttons;
