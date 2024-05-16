import React from "react";
import { CssBaseline, Box, Container, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import SystemMetrics from "./components/SystemMetrics";
import EventHistory from "./components/EventHistory";
import EnvironmentVariables from "./components/EnvironmentVariables";
import { useTabContext } from "./TabContext";

const App2 = () => {
    const { selectedTab } = useTabContext();
    console.log(selectedTab);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: "#f8f8f8",
                    p: 3,
                    overflowY: "auto",
                    height: "100vh",
                }}
            >
                <Header />
                <Container maxWidth="xl">
                    <Overview />
                    {selectedTab === 0 ? (
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <SystemMetrics />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <EventHistory />
                            </Grid>
                        </Grid>
                    ): selectedTab === 1 ? (
                        <EnvironmentVariables />
                    ) : null}
                </Container>
            </Box>
        </Box>
    );
};

export default App2;
