import React from "react";
import Inputchat from "./chat";

function InputchatContainer({
     createdGroups, selectedGroupIndex }) {
  if (selectedGroupIndex !== null) {
    const group = createdGroups[selectedGroupIndex];
    const { groupName, selectedColor, selectedImage } = group;

    return (
      <Inputchat
        groupName={groupName}
        selectedColor={selectedColor}
        selectedImage={selectedImage}
      />
    );
  }

  return null;
}

export default InputchatContainer;