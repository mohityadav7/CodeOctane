import React from 'react'
import Navbar from './Navbar'


const Contests_Descriptions = () =>{
    
    return(
    
    <div class="Contests_Decriptions">
        <Navbar /><br/>
        <div>
        <div class="container-fluid"  className="Contests_Badge">
  
    <h2 className="Contests_Badge_Text">Contests</h2>
  
        </div>
        </div>
    <div class="row">
    <div class="col-sm-7">
        <h1 className="Contest_Heading">Code For YMCA</h1>
        <h3 className="Contests_Time">Time left for contest:</h3>
        
        <h3 className="Contests_Welcome">Welcome to the 1st Code For YMCA Contest</h3>
        
        <h3 className="Contests_Instructions_Heading">
        <ul>
        <li>Instructions</li></ul>
        </h3>
        <div className="Contests_Instructions_Text">
        <ol>
        <li>The penalty time has been changed from 10 minutes to 5 minutes for each wrong submission. </li>
        
        <li>All submissions will be run through a plagiarism checker. </li>
        
        <li>Any detected plagiarism will result in immediate disqualification + 3 weeks account ban. Cheating will NOT be tolerated in any way, shape, or form.</li>
        </ol>
        </div>
        </div>
        
        <div class="col-sm-5">
        <br/>
                <div class="container-fluid">      
                <button    className="Contests-register-button" onClick={() => { window.location.href = 'https://www.google.com' }}>Register</button>
        </div>
        <h3 className="Contests_Prizes">Prizes</h3>
        
        <div class="row">
            <div class="col-sm-4">
                <img id="Contests-prize-image1" src="/images/png/1st.png" alt="prize icon" />
            </div>
            <div class="col-sm-8">
        <h3 className="Contests-Goodies1">1000 Rupees + Goodies</h3>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
                <img id="Contests-prize-image2" src="/images/png/2nd.png" alt="prize icon" />
            </div>
            <div class="col-sm-8">
        <h3 className="Contests-Goodies2">800 Rupees + Goodies</h3>
            </div>
            </div>
        <br/>
        <h3 className="Contests_Announcements">Announcements</h3>
        <br/>
        <h3 className="Contests_Instructions_Text">Users must <a href="www.google.com">register</a> to participate. We hope you enjoy this contest!
        </h3>
        
        
        </div>
        </div>
        </div>
    );
    
}

export default Contests_Descriptions;