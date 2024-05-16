
import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const useTabContext = () => useContext(TabContext);

const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

export { TabContext, TabProvider };
