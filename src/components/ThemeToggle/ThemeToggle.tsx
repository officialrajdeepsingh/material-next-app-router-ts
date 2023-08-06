"use client"

import  React,{ useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

// import SVG ICONS from icons-material
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// import theme toggle context
import { ThemeToggleContext } from './ThemeToggleContext';

export function ThemeToggle() {

  // check theme is dark or light
  const theme = useTheme();

  // useContect Hook get value https://react.dev/reference/react/useContext
  const themeToggle = useContext(ThemeToggleContext);

  return (
      <IconButton sx={{ ml: 1 }} onClick={themeToggle.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  );
}

