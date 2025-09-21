import { MenuItem, MenuList } from "@mui/material";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router";

function PageMenu() {
  const menuItems = [
    { label: "Home", link: "/home" },
    { label: "Career", link: "/career" },
    { label: "Projects", link: "/projects" },
  ];

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <MenuList>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {menuItems.map((item) => (
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem>
                  <Typography>{item.label}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Box>
        </MenuList>

        <Box sx={{ ml: "auto", mr: "5px" }}>
          <Tooltip title="Github">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export { PageMenu };
