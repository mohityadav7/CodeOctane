import React from 'react'
import Navbar from './Navbar'
import Contests_Descriptions from './Contests_Descriptions.js'

  const Contests_lists = () =>{
    
    return(
        <div className="Contests-lists">
        <div class="container-fluid">
        {/*====Navbar=====*/}
        
         <Navbar />
        {/*====Main Body======*/}
        
        <div class="container-fluid"  className="Contests-List-Badge">
        <h2 className="Contests-List-Badge-Text">Contests</h2>
        </div>
        
        {/*====Cards Area=====*/}
        
        <div class="row row-fluid">
        <div class="col-sm-8">
        <h2 className="Contests-Upcoming">Upcoming</h2><br/>
        
        <div class="row row-fluid">
        
        {/*----Card1-------*/}
        
        <div class="col-sm-6">
          
             <div className="Contact-card1">
             
             
             <h4 className="Contest-card-heading">Code for YMCA</h4> 
             <p className="Contests-card-heading-details">ICPC style mock challenge and something
             something<br/>Starts In</p> 
              <h4 className="Contests-clock">XX-XX-XX</h4>
             </div>
       
        </div>
        
        {/*----Card2-------*/}
        
        <div class="col-sm-6">
            <div>
            <div className="Contact-card2">
             
             
             <h4 className="Contest-card-heading">Code Cadet</h4> 
            <p className="Contests-card-heading-details">ICPC style mock challenge and something
            something<br/>Starts In</p> 
             <h4 className="Contests-clock">XX-XX-XX</h4>
             </div>
             </div>
            
        </div></div><h2 className="Contests-Upcoming">Live Contests</h2><br />
        
        <div class="row row-fluid">
        
        {/*----Card3-------*/}
        
        <div class="col-sm-6">
            
            <div className="Contact-card3">
             
            
            <h4 className="Contest-card-heading">Code Because Single</h4> 
            <p className="Contests-card-heading-details">ICPC style mock challenge and something
            something<br/>Starts In</p> 
             <h4 className="Contests-clock">XX-XX-XX</h4>
             </div>
            
        </div>
       
        {/*----Card4-------*/}
        
        <div class="col-sm-6">
          
          <div className="Contact-card4">
             
             
             <h4 className="Contest-card-heading">Dont Ever Code</h4> 
             <p className="Contests-card-heading-details">ICPC style mock challenge and something
            something<br/>Starts In</p> 
              <h4 className="Contests-clock">XX-XX-XX</h4>
             
             </div>
        </div>
        </div>
        </div>
        
        {/*======Left COntainer=======*/}
        <div class="col-sm-4">
        <h2 className="Contests-Performers">Top Performers</h2>
        
        
        <img id="Contests-list-prize-image1" src="/images/png/1st.png" alt="prize icon" />
        <h2 className="Contests-performer-name1">Sahil Singla</h2>
        <div class="row">
        <div class="col-sm-6">
        <img id="Contests-list-prize-image2" src="/images/png/2nd.png" alt="prize icon" />
         <h2 className="Contests-performer-name2">Mohit Yadav</h2>
        </div>
        <div class="col-sm-6">
        <img id="Contests-list-prize-image3" src="/images/png/3rd.png" alt="prize icon" />
         <h2 className="Contests-performer-name3">Aayush Tyagi</h2>
        </div>
        </div>
        
        <h2 className="Contests-Performers">Past Contests</h2>
        <div>
        {/*====Previous Contests Cards=======*/}
        
        <div className="Contests-card1">
             
             <div className="Contact-container">
             <h4 className="Past-Contests-name">Code Circuit</h4>
             
             </div></div>
        <div className="Contests-card2">
             
             <div className="Contact-container">
             <h4 className="Past-Contests-name">Code For Date</h4>
             
             </div></div>
        <div className="Contests-card3">
             
             <div className="Contact-container">
             <h4 className="Past-Contests-name">Code For Drinks</h4>
             
             </div></div>
        
        </div>
        </div>
        </div>
        </div></div>
        );}

export default Contests_lists;