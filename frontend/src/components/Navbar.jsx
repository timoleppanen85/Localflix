import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";

const settings = ["Profile", "Settings", "Logout"];
const icons = [<AccountCircleIcon />, <SettingsIcon />, <LogoutIcon />];

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mx: 2,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}>
                        Localflix
                    </Typography>
                </Box>
                <Box>
                    <IconButton onClick={handleMenu}>
                        <MenuIcon color="primary" sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {settings.map((setting, index) => (
                            <MenuItem
                                component="a"
                                href={`/${setting.toLowerCase()}`}
                                key={setting}
                                onClick={handleClose}
                                sx={{
                                    mr: 2,
                                    // justifyContent: "space-between",
                                    width: 125,
                                }}>
                                {icons[index]}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {setting}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
