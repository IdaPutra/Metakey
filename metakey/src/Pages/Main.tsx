import React from 'react';
import '../style.css';
import logo from '../logo.svg';
import Navbar from "../Components/Navbar"
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Bar_Chart from '../Components/Bar_Chart';
import Pie_Chart from '../Components/Pie_Chart';
import Histogram from '../Components/Histogram';
Chart.register(...registerables);

function Main() {


  return (
    <>
    <Navbar/>
    <div className="Main">
  <div className='row'>

    <div className='col-8'>
   <div className='row'>
   <Bar_Chart/>
   </div>
   <div className='row'>
   <Histogram/>
   </div>
 
      </div>
     
      <div className='col-4'>


      <div className='row'>
      <div className='right_card' >
      <p className="card-title"> Welcome Back !</p>
      <div className="card" style={{width:"80%",height:"80%",padding:"5%"}}>
<p style={{fontSize:"17px"}}>This dashboard shows stats on the unique holders of an NFT metakey using multiple charts.</p>
<img src="https://assets-global.website-files.com/62196607bf1b46c300301846/62196607bf1b465d9a301ed3_5f46bd5424fa71052301839e_how%2520to%2520give%2520a%2520presentation%2520in%2520a%2520meeting.jpeg" style={{width:"60%",margin:"0 auto"}}></img>
    </div>
      </div>
      </div>



      <div className='row'>
    <Pie_Chart/>
      </div>

    </div>
  
       
  </div>

    

      


      
    </div>
    </>
    
  );
}

export default Main;

