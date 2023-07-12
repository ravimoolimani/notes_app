import React from "react";
import styles from "./Displaychat.module.css";
import bg from "./assets/design.png";
import lockk from "./assets/lock.svg";

function Viewchat({ isVisible }) {
  return (
    <div className={`${styles.sectionright} ${isVisible ? "" : styles.invisible}`}>
      <img src={bg} alt="sample" className={styles.design_img} />
      <p className={styles.heading}>Pocket Notes</p>

      <div className={styles.para_container}>
        <p className={styles.para1}> </p>
        Send and receive messages without keeping your phone online.
        <p className={styles.para2}>
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      <div className={styles.lock_wrapper}> 
        <img src={lockk} alt="lock"  className={styles.lock_img}/>
        <p className={styles.lock_text}>end-to-end encrypted</p>
      </div>
    </div>
  );
}

export default Viewchat;