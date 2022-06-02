import React, { useState } from 'react';





const Contact = () => {

    const [data,setData]  =useState({
        
        fullname:'',
        phone:'',
        email:'',
        password:''
         


    });

    const InputEvent = (event) => {
        const {name ,  value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
                
            }
        })
    }

    const formSubmit = (e)=>{
        e.preventDefault();
        alert( `My Full Name is ${data.fullname}.
        My Phone Number is ${data.phone}.
        My Email is ${data.email}.
        My Password is ${data.password}`)
    }; 



  return (
    <>
    <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
        <hr className='w-25 mx-auto'/>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
  <form onSubmit={formSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input type="name" 
                 class="form-control" 
                 name='fullname'
                 value={data.fullname}
                 onChange={InputEvent} 
                 placeholder="Enter your Full Name" 
                 />
                
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Phone</label>
                <input type="number" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                 name='phone'
                 value={data.phone}
                 onChange={InputEvent}
                placeholder="Enter your Phone Number" 
                />
                
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                 name='email'
                 value={data.email}
                 onChange={InputEvent} 
                placeholder="Enter email" 
                />
                
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                 name='password'
                 value={data.password}
                 onChange={InputEvent}
                placeholder="Enter your Password" 
                />
            </div>
            <br/>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <br/>
            <button class="btn btn-outline-primary" type="submit">Submit </button>
            </form>

    </div>

  </div>
</div>
    

    
    
    
    </>
  )

  }
export default Contact