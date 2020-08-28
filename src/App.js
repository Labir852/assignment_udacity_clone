import React from 'react';
import './App.css';
import Header from './Components/Header';
import TopBanner from './Components/TopBanner';
import CourseCard from './Components/CourseCard';



function App() {

  return (
    <div className="App">
      <Header></Header>
      <TopBanner></TopBanner>
      <CourseCard></CourseCard>
    </div>
  );
}

export default App;
