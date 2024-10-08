import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="./" style={{ display: "flex", alignItems: "center" }}>
      <YouTubeIcon sx={{ fontSize: 45, color: "#FC1503" }} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
