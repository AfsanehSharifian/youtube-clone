import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { searchAPI } from "../utils/fetchAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchAPI(selectedCategory).then((data) => setVideos(data?.items));
  }, [selectedCategory]);

  return (
    <>
      <Stack flexDirection={{ sx: "column", md: "row" }}>
        <Box
          sx={{
            height: { sx: "auto", md: "89vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
        <Box p={2} sx={{ overflow: "auto", height: "84vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{
              color: "white",
            }}
          >
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
      <Typography
        className="copyright"
        variant="body2"
        sx={{ color: "#fff", textAlign: "center" }}
      >
        copyright 2024
      </Typography>
    </>
  );
};

export default Feed;
