import React from 'react'
import style from "./sidebar.module.css"
import Profile from '../Profile/Profile'
import Decription from '../Decription/Decription'
const Sidebar = () => {
  return (
    <div>
    <div className={style.sidebar}>
        
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#posts">Posts</a>
  <a href="#folder">Folder</a>
</div>

<div className={style.content}>
  
   <Profile/>
   <Decription/>

</div>
</div>
  )
}

export default Sidebar