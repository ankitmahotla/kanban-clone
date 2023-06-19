"use client";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Container({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ ml: { md: "260px", xs: "65px" }, flex: 1 }}>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
}
