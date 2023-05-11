import React from "react";
import 'bootstrap'
import Navigation from "./Navigation";
import { Card } from "react-bootstrap";
import '../App.css'
import Typewriter from "typewriter-effect";


function Home() {
  

  return (
    <div>

      

      <Navigation />

      <div style={{ height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>


          <Card style={{ border: 'none', width: '70%', margin: '10%' }}>
            <Card.Title style={{ fontFamily: 'Londrina Outline', fontSize: 90,textAlign: 'center', color: 'rgb(64, 14, 50)' }}>  
            <Typewriter 
            onInit={(greeting) => {
              greeting.typeString("Hi, I'm Haley Fisher.").pauseFor(1000).typeString('</br><span">Fullstack Web Developer.</span>').start();
            }}
            options={{ html: true}}/> 
            </Card.Title>
          </Card>

          </div>

     
      
    </div>
  )
}
export default Home;