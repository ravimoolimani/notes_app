import React, { useContext, useState, useEffect } from "react";
import styles from "./chatinput.module.css";
import { GroupContext } from "./GroupContext";
import enter from "./assets/enter.png";

function NoteInput() {
  const { createdGroups, selectedGroupIndex } = useContext(GroupContext);

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Load messages from local storage
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    // Save messages to local storage
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleEnterClick = () => {
    if (inputText.trim() !== "") {
      const group = createdGroups[selectedGroupIndex];
      const { groupName } = group;
      const currentDate = new Date();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = monthNames[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();
      const currentTime = currentDate.toLocaleTimeString();

      const newMessage = {
        text: inputText,
        date: `${month} ${day}, ${year}`,
        time: currentTime,
        groupName: groupName,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEnterClick();
    }
  };    
// localStorage.clear()    


  if (selectedGroupIndex !== null) {
    const group = createdGroups[selectedGroupIndex];
    const { groupName, selectedColor, selectedImage } = group;

    const groupMessages = messages.filter(
      (message) => message.groupName === groupName
    );

    
    return (
      <>
        <div className={styles.right_side}>


          <div className={styles.top}>
            <div className={styles.in_top}>
              <span className={styles.title}>
                {group.groupName.slice(0, 2).toUpperCase()}
              </span>
              <p>{selectedColor}</p>
              {selectedImage && (
                <img
                  src={selectedImage}
                  className={styles.circle_img}
                  alt="Selected"
                />
              )}
              <h2 className={styles.enter_text}>{groupName}</h2>
            </div>
          </div>

          <div className={styles.text_wrapper}></div>
            <div className={styles.cursor}>
              {groupMessages.map((message, index) => (
                <div key={index} className={styles.message}>
                  <div className={styles.t_data_time}>
                    <p className={styles.t_time}>{message.time}</p>
                    <p className={styles.t_date}>{message.date}</p>
                  </div>
                  <div className={styles.t_msg_wrap}>
                    <p className={styles.t_msg}>{message.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.input_box}>
          <input
            type="text"
            className={styles.type_text}
            placeholder="Enter your text here..........."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <img
            src={enter}
            alt=""
            className={styles.enter}
            onClick={handleEnterClick}
          />
        </div>
      </>
    );
  }

  return null;
}

export default NoteInput;