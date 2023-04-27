import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import womanImg from '../../assets/woman.jpg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { request } from '../../utils/fetchApi';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await request('/auth/logout', 'POST');
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/">YourBlog</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}><a href='/'>Home</a></li>
          <li className={classes.listItem}><a href='#footer'>About</a></li>
          <li className={classes.listItem}><a href='#footer'>Contacts</a></li>
          <li className={classes.listItem}><a href='#categories'>Categories</a></li>
        </ul>
        <div className={classes.right}>
          <img
            onClick={() => setShowModal((prev) => !prev)}
            src={womanImg}
            className={classes.img}
          />
          {showModal && (
            <div className={classes.modal}>
              <Link to="/create">Create</Link>
              <span onClick={handleLogout}>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
