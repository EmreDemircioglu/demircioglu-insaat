import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [
  { name: "Projeler", to: "/projects" },
  { name: "Hizmetler", to: "/services" },
  { name: "Hakkımızda", to: "/about" },
];
const contact = { name: "İletişim", to: "/contact" };

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (to?: string) => {
    setAnchorElNav(null);
    if (to) {
      /* empty */
    }
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Brand */}
        <Typography
          variant="h6"
          noWrap
          component={Link}
          color="textPrimary"
          to="/"
          sx={{ fontWeight: "bold" }}
        >
          Demircioğlu İnşaat
        </Typography>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 3,
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.to}
              sx={{ color: "text.primary", textTransform: "none" }}
            >
              {page.name}
            </Button>
          ))}
          <Button
            color="inherit"
            component={Link}
            to={contact.to}
            sx={{ textTransform: "none", borderRadius: 0 }}
          >
            {contact.name}
          </Button>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="open drawer"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={() => handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                component={Link}
                to={page.to}
                onClick={() => handleCloseNavMenu(page.to)}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
            <MenuItem
              component={Link}
              to={contact.to}
              onClick={() => handleCloseNavMenu("/contact")}
            >
              <Button variant="outlined" color="inherit">
                {contact.name}
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
