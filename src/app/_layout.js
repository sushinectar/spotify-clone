import '../../global.css';

import React from "react";
import { ThemeProvider } from '../components/themeContext';
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}