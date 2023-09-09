import React, { useEffect, useState } from 'react';
//import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Home.css';
import { Link } from 'react-router-dom'; 

const Home = (props) => {
  const [latestTasks, setLatestTasks] = useState([]);

  useEffect(() => {
    try {
      fetch('http://localhost:4000/api/task/all-tasks', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => {
          res = res.sort((a, b) => b.updatedAt - a.updatedAt)
          setLatestTasks(res)
          console.log(props.name)
        })
    } catch {
      console.log('fail to fetch');
    }
  }, [])

  return (
    <>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <marquee direction="right" class="wall"> <i>Please Click on Sign up button to access our Service </i> </marquee>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
            <h1 align="center" class="wall">Welcome to the Education Task Manager Application</h1>
            <h3 align="center" class="wall"> We support you to make your tasks easy</h3>
        </>
  );
}

export default Home;