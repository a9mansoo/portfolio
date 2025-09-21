import { MenuItem, MenuList } from "@mui/material";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router";
import { motion } from "motion/react";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

function PageMenu({ positionY, setTheme }) {
  const menuItems = [
    { id: 1, label: "Home", link: "/home" },
    { id: 2, label: "Career", link: "/career" },
    { id: 3, label: "Projects", link: "/projects" },
  ];

  return (
    <AppBar
      position="fixed"
      component={motion.div}
      animate={{ y: positionY }}
      transition={{ duration: 0.5, type: "easeIn" }}
    >
      <Toolbar disableGutters>
        <MenuList>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {menuItems.map((item) => (
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
                key={item.id}
              >
                <MenuItem>
                  <Tooltip title={item.label}>
                    <Typography>{item.label}</Typography>
                  </Tooltip>
                </MenuItem>
              </Link>
            ))}
          </Box>
        </MenuList>

        <Box
          sx={{
            ml: "auto",
            mr: "5px",
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LightModeIcon fontSize="small" />
            <Tooltip title="Mode">
              <Switch onChange={setTheme} />
            </Tooltip>
            <NightlightRoundIcon fontSize="small" />
          </Box>
          <Tooltip title="Github">
            <a href="https://github.com/a9mansoo" target="_blank">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <a href="https://www.linkedin.com/in/ayaan-m27/" target="_blank">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export { PageMenu };
