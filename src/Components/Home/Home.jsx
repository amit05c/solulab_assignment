import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Profile from '../Profile/Profile'
import Decription from '../Decription/Decription'
import style from "./home.module.css"
const Home = () => {
  return (
    <div>
        <Sidebar/>
        <div className={style.content}>
  
   <Profile/>
   <Decription/>

</div>

    </div>
  )
}

export default Home