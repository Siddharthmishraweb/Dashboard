
import React from "react";
import { CssBaseline, Box, Container, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import SystemMetrics from "./components/SystemMetrics";
import EventHistory from "./components/EventHistory";
import { TabProvider } from "./TabContext"; // Correct import path
import { TabContext, useTabContext } from "./TabContext";
import App2 from "./App2";



const App = () => {
  return (

        <TabProvider> 
          <App2 />
        </TabProvider>

  );
};

export default App;
