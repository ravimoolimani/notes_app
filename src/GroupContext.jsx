import React, { createContext, useState } from "react";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [createdGroups, setCreatedGroups] = useState([]);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(null);

  return (
    <GroupContext.Provider value={{ createdGroups, selectedGroupIndex, setCreatedGroups, setSelectedGroupIndex }}>
      {children}
    </GroupContext.Provider>
  );
};