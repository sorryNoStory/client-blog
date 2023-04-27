import React from 'react';
import classes from './head.module.css';
import mainimg from './main-img.jpeg';

const Head = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
          <img src={mainimg} alt='mainIm'/>
        </div>
        <div className={classes.textWrapper}>
          <h1>Welcome to our blog website</h1>
          <p>Here you can publish and update your own blog in a variety of categories. Whether you're passionate about nature, design, music, programming, or just want to share some fun stories, we have a category for you.</p>
        </div>
      </div>
    </div>
  )
}

export default Head;