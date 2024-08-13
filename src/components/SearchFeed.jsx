import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./";
import { searchAPI } from "../utils/fetchAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    searchAPI(searchTerm).then((data) => setVideos(data?.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "85vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        <span>Search Results For: </span>
        <span style={{ color: "#FC1503" }}> {searchTerm} </span>
        <span> Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
