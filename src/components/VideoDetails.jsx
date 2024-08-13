import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import "../index.css";

import { Videos } from ".";
import { videoDetailsAPI } from "../utils/fetchAPI";
import { suggestedVidsAPI } from "../utils/fetchAPI";

const VideoDetails = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [suggestedVids, setSuggestedVids] = useState(null);

  useEffect(() => {
    videoDetailsAPI(id).then((data) => {
      if (data) {
        setVideoDetail(data?.items[0]);
      }
    });
    suggestedVidsAPI(id).then((data) => {
      if (data) setSuggestedVids(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight="100%" sx={{ background: "#000" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        {videoDetail && (
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold">
                {videoDetail.snippet.title}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>

                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {videoDetail?.statistics?.viewCount}
                    <span style={{ marginLeft: "8px" }}>views</span>
                  </Typography>

                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {videoDetail?.statistics?.likeCount}
                    <span style={{ marginLeft: "8px" }}>likes</span>
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {suggestedVids && (
            <Videos videos={suggestedVids} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
