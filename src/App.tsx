import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home';
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
      {/* <Route path="/meetmaeve" element={<MeetMaeve />} />
      <Route path="/volunteers" element={<Volunteers />} />
      <Route path="/endorsements" element={<Endorsements />} />
      <Route path="/communityevents" element={<CommunityEvents />} /> */}
      {/* <Route path="/meetmaeve" element={<MeetMaeve />} />
      <Route path="/meetmaeve/:id" element={<MeetMaeve />} /> */}
    </Routes>
  );
}
