import React from "react";
import PropTypes from "prop-types";
import styles from "./Popup.module.css";
import voilet from "./assets/voilet.svg";
import pink from "./assets/pink.svg";
import florescent from "./assets/flor.png";
import orange from "./assets/orange.svg";
import blue from "./assets/blue.svg";
import lblue from "./assets/light_blue.svg";


// receives several props,
const PopupBox = ({
  groupName,
  selectedColor,
  onSubmit,
  setGroupName,
  setSelectedImage,
  selectedImage,
}) => {
  const handleCreate = () => {
    onSubmit(groupName, selectedColor, selectedImage);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.modal}>
        <h2 className={styles.modalHeading}>Create New Notes Group</h2>
        <div className={styles.lab}>
          <label  className={styles.labelll}>Group Name:</label>
          <input
            id="group-name"
            type="text"
            placeholder="Enter your group name..."
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className={styles.input_mob}
          />
          <br />

          <div className={styles.col_wrapper}>
            <label  className={styles.lab_color}>
              Choose colour:
            </label>
            <div className={styles.diff_color}>
              <img
                src={voilet}
                className={styles.col}
                onClick={() => handleImageClick(voilet)}
              />
              <img
                src={pink}
                className={styles.col}
                onClick={() => handleImageClick(pink)}
              />
              <img
                src={florescent}
                className={styles.col}
                onClick={() => handleImageClick(florescent)}
              />
              <img
                src={orange}
                className={styles.col}
                onClick={() => handleImageClick(orange)}
              />
              <img
                src={blue}
                className={styles.col}
                onClick={() => handleImageClick(blue)}
              />
              <img
                src={lblue}
                className={styles.col}
                onClick={() => handleImageClick(lblue)}
              />
            </div>
          </div>
        </div>

        <button className={styles.createButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};



export default PopupBox;