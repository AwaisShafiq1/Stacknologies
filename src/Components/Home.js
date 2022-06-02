import React from 'react';
import './Home.css';
import web from '../emptystreet.svg';
import Common from './Common';




function Home() {
  return (
    <>
        
        <Common

        name = "Enhance Your Skills With" 
        imgsrc = {web}
        visit = '/Services'
        btnname = "Get Started"
        
        />

    </>
  )
}

export default Home