import React from "react";
import Navigation from "./Navigation";
import { Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import '../App.css'

function About() {







    return (
        <div>
            <Navigation />

            <h1 style={{ fontFamily: 'Londrina Outline', fontSize: 70, textAlign: 'center' }}>
                    <Typewriter
                        onInit={(greeting) => {
                            greeting.typeString("About Me").start()
                        }} />
                </h1>

            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '15%', paddingRight:'15%', paddingTop:'2%', paddingBottom: '10%'}}>

               
               



                <Card  style={{ borderRadius: 10, padding: 15, fontFamily: 'Jost', marginBottom:30}}>
                    <h3 style={{textAlign: 'center'}}>The Developer</h3>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems:'center'}}>
                        <Card.Img src="./images/coverpic.jpg" style={{ height: '90%', maxWidth: '50%', objectFit:'scale-down', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}></Card.Img>
                        <Card.Body style={{ height:'100%', textAlign: 'center', fontSize: 15, padding: 60}} >

                            My name is Haley and I currently reside in Phoenix, AZ. I am a recent graduate from DigitalCrafts
                            Web Bootcamp where my cohort focused on JavaScript, ReactJS, NodeJS, and SQL technologies. Before DigitalCrafts, I spent four years as a technical recruiter and specifically
                            recruited Software Engineers and Mobile Developers for various companies; my role in recruiting played a huge part in leading me down the path of Fullstack Web Development.
                            I am most confident in my ReactJS and JavaScript skills, and have demonstrated experience designing and implementing the frontend. Though I consider myself stronger with frontend
                            technologies, I am very passionate about backend development and am continuing to grow my comfortability working with the server side.

                        </Card.Body>
                    </div>
                </Card>







                <Card  style={{ padding: 15, borderRadius: 10, fontFamily: 'Jost',marginBottom:30 }}>
                    <h3 style={{textAlign: 'center'}}>My Technical Toolkit</h3>
                    <div style={{ padding: 30 }}>
                        <Card.Title style={{textAlign: 'center'}}>Programming Languages</Card.Title>
                        <br></br>
                        <Card.Body style={{ display: 'flex', height: '30%', justifyContent: 'center'}}>
                            <Card.Img style={{ width: '10%', margin: 'auto' }} src='./jslogo.svg'></Card.Img>
                            <Card.Img style={{ width: '10%' , margin: 'auto'}} src='./html5.svg'></Card.Img>
                            <Card.Img style={{ width: '10%',  margin: 'auto' }} src='./css3.svg'></Card.Img>
                        </Card.Body>
                        <br></br>
                        <Card.Title style={{textAlign: 'center'}}>Libraries</Card.Title>
                        <br></br>
                        <Card.Body style={{ display: 'flex', height: '30%', justifyContent: 'space-around', alignContent: 'center' }}>
                            <Card.Img style={{ width: '10%' }} src='./reactjs.svg'></Card.Img>
                            <Card.Img style={{ width: '10%' }} src='./nodejs.svg'></Card.Img>
                            <Card.Img style={{ width: '10%' }} src='./bootstrap.svg'></Card.Img>
                        </Card.Body>
                        <br></br>
                        <Card.Title style={{textAlign: 'center'}}>Databases</Card.Title>
                        <br></br>
                        <Card.Body style={{ display: 'flex', height: '30%', justifyContent: 'space-around', alignContent: 'center' }}>
                            <Card.Img style={{ width: '10%' }} src='./postgresql.svg'></Card.Img>
                        </Card.Body>
                    </div>
                </Card>

                <Card style={{ padding: 15, borderRadius: 10, fontFamily: 'Jost',marginBottom:30 }}>
                    <h3 style={{textAlign: 'center'}}>My Contact Information</h3>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Card.Link style={{ width: '75px', margin:20 }} href="mailto:haleynfisher018@gmail.com?subject=Example%20Subject&body=Example%20Body">
                    <Card.Img  src='./email.svg'></Card.Img>
                    </Card.Link>
                    <Card.Link style={{ width: '75px', margin:20 }} href="https://www.linkedin.com/in/haley-fishe4-/">
                    <Card.Img src='./linkedin.svg'></Card.Img>
                    </Card.Link>
                    <Card.Link style={{ width: '75px', margin:20 }} href='https://github.com/haleynrosi'>
                    <Card.Img src='./github.svg'></Card.Img>
                    </Card.Link>
                    <Card.Link style={{ width: '75px', margin:20 }} href='./HaleyFisherResume2023.pdf'>
                    <Card.Img  src='./resume.svg'></Card.Img>
                    </Card.Link>
                    </div>
                </Card>
            </div>


å


        </div>

    )
}

export default About;