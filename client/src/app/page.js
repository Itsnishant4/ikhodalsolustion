'use client'
import * as React from 'react';
import Head from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import "./globals.css";
import Content from './components/content';
import Footer from './components/footer';
export default function Home() {
  return (
    <div>
      {<Head/>}
      {<Hero />}
      {<Projects />}
      {<Content/>}
      {<Footer/>}
      
    </div>
  )}
