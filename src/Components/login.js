import React, { useRef, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

const Login = () => {
  const errorMessage = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handlesubmit(e) {
    e.preventDefault();
    await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((res) => (res.json()))
      .then((json) => {
        if (json['message'] !== 'ok') {
          errorMessage.current.innerHTML = 'Invalid email ID or password';
          errorMessage.current.style.color = 'red';
        } else {
          errorMessage.current.innerHTML = `We'll never share your email with anyone else.`;
          errorMessage.current.style.color = 'initial';
          window.location.href = '/TaskList';
        }
      });
  }

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm='6'>
            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', color: 'cyan' }}>Log in</h3>
              <MDBInput wrapperClass='mb-3 mx-5 w-150' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-3 mx-5 w-150' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
              <p className="small mb-5 pb-lg-3 ms-5">
                <div className="form-text ps-2 mb-4" ref={errorMessage} style={{ color: 'cyan' }}>We'll never share your email with anyone else.</div>
                <MDBBtn className="mb-4 w-100" color='info' size='lg' onClick={(e) => handlesubmit(e)}>Login</MDBBtn>
                <p className='ms-3' style={{ color: 'cyan' }}>Don't have an account? <a href="/signup" className="link-info">Register here</a></p>
              </p>
              
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;



