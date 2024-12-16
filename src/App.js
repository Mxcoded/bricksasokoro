import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import MainScreen from './screens/MainScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import MenuScreen from './screens/MenuScreen';
import BookScreen from './screens/BookScreen';
import BookRoomsScreen from './screens/BookRoomsScreen';
import RoomsScreen from './screens/RoomsScreen';
import GalleryScreen from './screens/GalleryScreen';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/aboutus" element={<AboutUsScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/book" element={<BookScreen />} />
        <Route path="/bookrooms" element={<BookRoomsScreen />} />
        <Route path="/rooms" element={<RoomsScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
      </Routes>
    </div>
  );
}

export default App;