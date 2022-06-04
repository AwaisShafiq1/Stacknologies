import React from 'react';
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import { Switch , Route , Redirect } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
// import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <NavBar/>
    
    <Switch>
      <Route exact path = "/Home" component={Home} />
      <Route exact path = "/Services"  component={Services} />
      <Route exact path = "/Contact" component={Contact} />
      <Route exact path = "/About" component={About} />  
      <Redirect to="/Home"/>
   </Switch> 
   <Footer />

    
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Navigate replace to="/Home" />} />
        </Routes>
       </Router>
      <Navigate to="/dashboard" replace={true} />  */}
        
           
{/* For the Sake of Checking */}
{/* 
      
        <Home/>
        <About/>
        <Contact/>
        <Services/> */}



    </div>
  );
}

// const App = () =>{
//   return <h1>Hello there</h1>
// }



export default App;
