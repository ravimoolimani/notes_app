import React from "react";
import Notes from "./Notes";
import Viewchat from "./Displaychat";
import Inputchat from "./chat";

import styles from "./App.module.css";
import { useState } from "react";
import { GroupProvider } from "./GroupContext";

export default function App() {
  const [isGroupClicked, setGroupClicked] = useState(false);

  const handleGroupClick = () => {
    setGroupClicked(true);
  };

  return (
    <GroupProvider>
      <div className={styles.heading}>
        <Notes handleGroupClick={handleGroupClick} />
        {!isGroupClicked && <Viewchat handleGroupClick={handleGroupClick} />}
        {isGroupClicked && <Inputchat />}
      </div>
    </GroupProvider>
  );
}