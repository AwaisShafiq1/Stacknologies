import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

function Services() {
  return (
    
    <>
            <div className='my-10 pt-3'>
                
                 <h1 className='text-center my-6'>Our Services</h1>
                 <hr className='w-25 mx-auto' />

            </div>

        <div className="container-fluid">
           <div className="row">
                <div className="col-10 mx-auto">
                    <div className='row gy-4 my-4'>

{/* Trick point Fetching Data through .map method by Calling API */}
        {
            Sdata.map((val , ind) => {
                return  <Card 
                key={ind}
                imgsrc = {val.imgsrc}
                title = {val.title} 
                 />
            })
        }
    </div>
        </div>
        </div>
        </div>

    </>






  )
}

export default Services