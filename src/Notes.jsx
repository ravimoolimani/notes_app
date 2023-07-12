import React, { useContext, useEffect } from "react";
import styles from "./Notes.module.css";
import Popup from "./Popup";
import { useState } from "react";
import { GroupContext } from "./GroupContext";

function Createnotes({ handleGroupClick }) {
  const { createdGroups, selectedGroupIndex } = useContext(GroupContext);
  const { setCreatedGroups, setSelectedGroupIndex } = useContext(GroupContext);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const storedGroups = localStorage.getItem("createdGroups");
    if (storedGroups) {
      setCreatedGroups(JSON.parse(storedGroups));
    }
  }, [setCreatedGroups]);

  const handleCreate = (groupName, selectedColor, selectedImage) => {
    const newGroup = {
      groupName,
      selectedColor,
      selectedImage,
    };

    setCreatedGroups([...createdGroups, newGroup]);
    setShowModal(false);
    setGroupName("");
    setSelectedColor("");
    setSelectedImage("");
  };

  useEffect(() => {
    localStorage.setItem("createdGroups", JSON.stringify(createdGroups));
  }, [createdGroups]);

  const handleGroupNameClick = (index) => {
    setSelectedGroupIndex(index);
    handleGroupClick();
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className={styles.title}>
      <h1>Pocket Notes</h1>
      {!isMobile && (
        <buttton onClick={() => setShowModal(true)}>
          <p className={styles.btn_text}>+ Create Notes group</p>
        </buttton>
      )}

      {showModal && (
        <Popup
          groupName={groupName}
          selectedColor={selectedColor}
          selectedImage={selectedImage}
          onSubmit={handleCreate}
          setGroupName={setGroupName}
          setSelectedColor={setSelectedColor}
          setSelectedImage={setSelectedImage}
        />
      )}

      {createdGroups.map((group, index) => (
        <div className={styles.group_container} key={index}>
          <div className={`${styles["group-circle"]} `}>
            <span>{group.groupName.slice(0, 2).toUpperCase()}</span>
            {group.selectedImage && (
              <div className={styles["pink-container"]}>
                <img
                  src={group.selectedImage}
                  alt="Selected"
                  className={`${styles.selectedImage} ${
                    selectedGroupIndex === index
                      ? styles["pink-color-image"]
                      : ""
                  }`}
                  onClick={() => handleGroupNameClick(index)}
                />
              </div>
            )}
          </div>
          {!isMobile && (
            <span
              className={`${styles.grp_name} ${
                selectedGroupIndex === index ? styles["pink-color"] : ""
              }`}
              onClick={() => handleGroupNameClick(index)}
            >
              {group.groupName}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Createnotes;