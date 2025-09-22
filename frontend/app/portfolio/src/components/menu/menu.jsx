import { MenuItem, MenuList, Menu } from "@mui/material";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { menuLinks } from "./menuinfo";
import * as Icons from "@mui/icons-material";

function PageMenu({ positionY, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuItems = [
    { id: 1, label: "Home", link: "/home" },
    { id: 2, label: "Career", link: "/career" },
    { id: 3, label: "Projects", link: "/projects" },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { pathname } = useLocation();

  useEffect(() => {
    handleMenuButtonClose();
  }, [pathname]);

  const handleMenuButtonClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuButtonClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      component={motion.div}
      animate={{ y: positionY }}
      transition={{ duration: 0.5, type: "easeIn" }}
    >
      <Toolbar disableGutters>
        {isMobile ? (
          <>
            <IconButton onClick={(e) => handleMenuButtonClick(e)}>
              <MenuIcon />
            </IconButton>
            <Menu
              open={menuOpen}
              onClose={handleMenuButtonClose}
              anchorEl={anchorEl}
            >
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
            </Menu>
          </>
        ) : (
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
        )}
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
          {menuLinks.map((item) => {
            let Icon = Icons[item.icon];
            return (
              <Tooltip title={item.tooltip} key={item.id}>
                <a href={item.link} target="_blank">
                  <IconButton>
                    <Icon />
                  </IconButton>
                </a>
              </Tooltip>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export { PageMenu };
