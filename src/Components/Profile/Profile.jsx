import React from 'react'
import styles from "./profile.module.css"
import images1 from "../../images/dp-photo.jpg"
const Profile = () => {
  return (
    <div className={styles.profile}>
      <div>
        <img src={images1}/>
        <h2>Dine Copper</h2>
        <p>dinecopper@gmail.com</p>
        <div className={styles.post}>
          <div>
            <p>15</p>
            <p>Posts</p>
          </div>

          <div>
            <p>02</p>
            <p>Upcomming</p>
          </div>
        </div>

        <button>send</button>
      </div>

      <div className={styles.file}>
        <h1>Files/Documents</h1>
        <p>Checkup with result</p>
        <p>Checkup with result</p>
        <p>Checkup with result</p>
      </div>
    </div>
  )
}

export default Profile