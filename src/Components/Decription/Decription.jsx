import React from 'react'
import styles from "./decription.module.css"
const Decription = () => {
  return (
    <div className={styles.description}>

         {/* first */}
        <div className={styles.first}>

        <div>
          <p>Gender</p>
          <p>Female</p>
        </div>

        <div>
        <p>Birthday</p>
          <p>Feb 24, 1997</p>
        </div>

        <div>
            <p>Phone</p>
            <p>123333334568</p>
        </div>

        <div>
             <p>Phone</p>
            <p>123333334568</p>
        </div>

        <div>
        <p>Phone</p>
            <p>123333334568</p>
        </div>

        <div>
        <p>Phone</p>
            <p>123333334568</p>
        </div>

        </div>
        



        {/* second */}

        <div className={styles.second}>
            <div>Upcomiong Appintments</div>
            <div>Past Appintments</div>
            <div>Medical Records</div>
        </div>






        {/* Third */}
        <div className={styles.third}>

        <div>
            <h3>Rootcanal treatment</h3>
            <h3>Rootcanal treatment</h3>
        </div>

        <div className={styles.last}>

          <div>
            <p>26th Nov</p>
            <p>26th Nov</p>
          </div>
        
          {/* <div className={styles.empty}></div> */}
           
          <div>
            <p>26th Nov</p>
            <p>26th Nov</p>
          </div>
           
          {/* <div className={styles.empty}></div> */}

          <div>
            <p>26th Nov</p>
            <p>26th Nov</p>
          </div>
        </div>

        <div className={styles.last2}>

<div>
  <p>26th Nov</p>
  <p>26th Nov</p>
</div>

{/* <div className={styles.empty}></div> */}
 
<div>
  <p>26th Nov</p>
  <p>26th Nov</p>
</div>
 
{/* <div className={styles.empty}></div> */}

<div>
  <p>26th Nov</p>
  <p>26th Nov</p>
</div>
</div>

        </div>

    </div>
  )
}

export default Decription