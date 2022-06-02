import React from "react";
import { NavLink } from 'react-router-dom';

function Common(props) {
    return (
      <>
          <section id='header' className=" d-flex align-items-center ">
          <div className="container-fluid nav_lg">
          <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row">
                  <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
  
                      <h1 className='my-4'>
                          {props.name}
                          <strong style={{color: '#3698db'}}> Stacknologies</strong>
                      </h1>
  
                      <h2>
                          We are the experienced developers with Porfolios
                      </h2>
  
                      <div className='mt-3'>

                          <NavLink to={props.visit} className="btn btn-get-started">
                             {props.btnname}
                          </NavLink>
                      </div>
  
                  </div>
  
                  <div className='col-lg-6 order-1 order-lg-2 header_img'>

                      <img src={props.imgsrc} className="img-fluid animated" alt='emptystreet' />

                  </div>
  
  
  
              </div>
              </div>
          </div>
          </div>
  
          </section>
      
      
      
      
      
      </>
    )
  }
  
  export default Common