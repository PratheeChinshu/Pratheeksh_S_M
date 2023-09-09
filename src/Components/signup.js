// import React from 'react'
import "./Login.css"
 import {Link} from "react-router-dom";
// const Signup=()=>{
// import React, { useRef, useState } from 'react';
// import "./Login.css"
// import {Link} from "react-router-dom";
// import image1 from './Crave Crafters.png';
// import {
//       MDBBtn,
//       MDBContainer,
//       MDBRow,
//       MDBCol,
//       MDBInput
//     } from 'mdb-react-ui-kit';
    
//     const Signup = () => {
//       const errorMessage = useRef()
    
//       const [Name, setName] = useState()
//       const [email, setEmail] = useState()
//       const [password, setPassword] = useState()
    
//       async function handlesubmit(e) {
//         e.preventDefault()
//         await fetch('http://localhost:4000/api/auth/register', {
//           method: 'POST',
//           headers: {
//             "Content-Type": "application/json",
//             "x-access-token": "token-value",
//           },
//           body: JSON.stringify({
//             Name: `${Name}`,
//             email: `${email}`,
//             password: `${password}`
//           })
//         })
//           .then((res) => (res.json()))
//           .then((json) => {
//             //throwing error if email is not unic
//             if (json['message'] === 'duplicate') {
//               errorMessage.current.innerHTML = 'An user is already registered with this email'
//               errorMessage.current.style.color = 'red'
//             } else {
//               errorMessage.current.innerHTML = `We'll never share your email with anyone else.`
//               errorMessage.current.style.color = 'initial'
//               window.location.href = '/login'
//             }
//           })
//       }
    
//       return (
//         <div>
//           <MDBContainer fluid>
//             <MDBRow>
    
//               <MDBCol sm='6'>
    
//                 <div className='d-flex flex-row ps-5 pt-5'>
//                   <img src={image1} style={{ height: 220, width: 400, justifyContent: "center" }} alt="Logo" className="me-3" />
//                 </div>
    
//                 <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
    
//                   <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Sign Up</h3>
    
//                   <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Name' id='formControlLg' type='text' size="lg" onChange={(e) => setName(e.target.value)} />
                
//                   <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
//                   <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
//                   <div className="form-text mx-5 mb-4 ps-2" ref={errorMessage}>We'll never share your email with anyone else.</div>
//                   <div className="d-grid gap-2">
//                     <MDBBtn className="mb-4 px-5 mx-5" color='info' size='lg' onClick={(e) => handlesubmit(e)}>Sign Up</MDBBtn>
//                   </div>
//                   <p className='ms-5'>Already have an account? <a href="/login" className="link-info">Log in here</a></p>
    
//                 </div>
//               </MDBCol>
//               <MDBCol sm='6' className='d-none d-sm-block px-0'>
//                 <img
//                   src="https://assets.epicurious.com/photos/6362d443105688a4b1411056/3:4/width_1024/Epicurious-Id-portal-Image.png"
//                   alt="Signup"
//                   className="w-100"
//                   style={{ objectFit: 'cover', objectPosition: 'left' }}
//                 />
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </div>
//       );
//     }
    
// export default Signup;

// import React, { useRef, useState } from 'react';


// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput
// } from 'mdb-react-ui-kit';

// const Signup = () => {
//   const errorMessage = useRef()

//   const [Name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()

//   async function handlesubmit(e) {
//     e.preventDefault()
//     await fetch('http://localhost:4000/api/auth/register', {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token": "token-value",
//       },
//       body: JSON.stringify({
//         Name: `${Name}`,
//         email: `${email}`,
//         password: `${password}`
//       })
//     })
//       .then((res) => (res.json()))
//       .then((json) => {
//         if (json['message'] === 'duplicate') {
//           errorMessage.current.innerHTML = 'An user is already registered with this email'
//           errorMessage.current.style.color = 'red'
//         } else {
//           errorMessage.current.innerHTML = `We'll never share your email with anyone else.`
//           errorMessage.current.style.color = 'initial'
//           window.location.href = '/login'
//         }
//       })
//   }

//   return (
//     <div>
//            <MDBContainer fluid>
//              <MDBRow>
    
//                <MDBCol sm='6'>
    
                 
    
//                  <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
    
//                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Sign Up</h3>
    
//                    <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Name' id='formControlLg' type='text' size="lg" onChange={(e) => setName(e.target.value)} />
                
//                    <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
//                    <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
//                    <div className="form-text mx-5 mb-4 ps-2" ref={errorMessage}>We'll never share your email with anyone else.</div>
//                    <div className="d-grid gap-2">
//                      <MDBBtn className="mb-4 px-5 mx-5" color='info' size='lg' onClick={(e) => handlesubmit(e)}>Sign Up</MDBBtn>
//                    </div>
//                    <p className='ms-5'>Already have an account? <a href="/login" className="link-info">Log in here</a></p>
    
//                 </div>
//                </MDBCol>
               
//              </MDBRow>
//              </MDBContainer>
//          </div>
//   );
// }

// export default Signup;


import React, { useRef, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

const Signup = () => {
  const errorMessage = useRef();
  const [Name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handlesubmit(e) {
    e.preventDefault();
    await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify({
        Name: `${Name}`,
        email: `${email}`,
        password: `${password}`
      })
    })
      .then((res) => (res.json()))
      .then((json) => {
        if (json['message'] === 'duplicate') {
          errorMessage.current.innerHTML = 'An user is already registered with this email';
          errorMessage.current.style.color = 'red';
        } else {
          errorMessage.current.innerHTML = `We'll never share your email with anyone else.`;
          errorMessage.current.style.color = 'initial';
          window.location.href = '/login';
        }
      });
  }

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm='6'>
            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', color: 'cyan' }}>Sign Up</h3>
              <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Name' id='formControlLg' type='text' size="lg" onChange={(e) => setName(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-150' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
              <div className="form-text mx-5 mb-4 ps-2" ref={errorMessage} style={{ color: 'cyan' }}>We'll never share your email with anyone else.</div>
              <div className="d-grid gap-2">
                <MDBBtn className="mb-4 px-5 mx-5" color='info' size='lg' onClick={(e) => handlesubmit(e)}>Sign Up</MDBBtn>
              </div>
              <p className='ms-5'>Already have an account? <a href="/login" className="link-info">Log in here</a></p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Signup;

