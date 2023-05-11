import React from "react";
import Navigation from "./Navigation";
import { Card, Col, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import '../App.css'

function About() {







    return (
        <div>
            <Navigation />

            <h1 style={{ fontFamily: 'Londrina Outline', fontSize: 75, textAlign: 'center', color: 'rgb(64, 14, 50)' }}>
                <Typewriter
                    onInit={(greeting) => {
                        greeting.typeString("About Me").start()
                    }} />
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '15%', paddingRight: '15%', paddingTop: '2%', paddingBottom: '10%' }}>






                <Card style={{ borderRadius: 10, padding: 15, fontFamily: 'Jost', marginBottom: 30 }}>
                    <h3 style={{ textAlign: 'center', color: 'rgb(64, 14, 50)' }}>My Bio</h3>
                    <Row style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Col>
                        <Card.Img src="./images/coverpic.jpg" style={{ objectFit: 'scale-down', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}></Card.Img>
                        </Col>
                        <Col>
                        <Card.Body style={{ maxHeight: 'fit-content', textAlign: 'center', padding: 30 }} >

                            My name is Haley and I currently reside in Phoenix, AZ. I am a recent graduate from DigitalCrafts
                            Web Bootcamp where my cohort focused on JavaScript, ReactJS, NodeJS, and SQL technologies. Before DigitalCrafts, I spent four years as a technical recruiter and specifically
                            recruited Software Engineers and Mobile Developers for various companies; my role in recruiting played a huge part in leading me down the path of Fullstack Web Development.
                            I am most confident in my ReactJS and JavaScript skills, and have demonstrated experience designing and implementing the frontend. Though I consider myself stronger with frontend
                            technologies, I am very passionate about backend development and am continuing to grow my comfortability working with the server side.

                        </Card.Body>
                        </Col>
                    </Row>
                </Card>







                <Card style={{ padding: 15, borderRadius: 10, fontFamily: 'Jost', marginBottom: 30 }}>
                    <h3 style={{ textAlign: 'center', color: 'rgb(64, 14, 50)', marginBottom: 20 }}>My Technical Toolkit</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <Card.Title style={{ textAlign: 'center', color: 'rgb(166, 31, 105)' }}>Programming Languages</Card.Title>
                        <br></br>

                        <Row>
                            <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Card.Text >JavaScript</Card.Text>
                                <Card.Img style={{ width: '60px', alignContent: 'center' }} src='./jslogo.svg'></Card.Img>
                            </Col>

                            <Col style={{ alignContent: 'center' }}>
                                <Card.Text>HTML5</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./html5.svg'></Card.Img>
                            </Col>

                            <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Card.Text>CSS3</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./css3.svg'></Card.Img>
                            </Col>
                        </Row>



                        <br></br>

                        <Card.Title style={{ textAlign: 'center', color: 'rgb(166, 31, 105)' }}>Libraries</Card.Title>
                        <br></br>
                        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Col>
                                <Card.Text>ReactJS</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./reactjs.svg'></Card.Img>
                            </Col>

                            <Col>
                                <Card.Text>Redux</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./reactjs.svg'></Card.Img>
                            </Col>

                            <Col>
                                <Card.Text>NodeJS</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./nodejs.svg'></Card.Img>
                            </Col>

                            <Col>
                                <Card.Text>ExpressJS</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./express.svg'></Card.Img>
                            </Col>
                            <Col>
                                <Card.Text>Bootstrap</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./bootstrap.svg'></Card.Img>
                            </Col>
                            <Col>
                                <Card.Text>MaterialUI</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./materialui.svg'></Card.Img>
                            </Col>
                        </Row>


                        <br></br>


                        <Card.Title style={{ textAlign: 'center', color: 'rgb(166, 31, 105)' }}>Databases</Card.Title>
                        <br></br>
                        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col>
                                <Card.Text>postgresql</Card.Text>
                                <Card.Img style={{ width: '60px' }} src='./postgresql.svg'></Card.Img>
                            </Col>
                        </Row>

                    </div>
                </Card>

                <Card style={{ padding: 15, borderRadius: 10, fontFamily: 'Jost' }}>
                    <h3 style={{ textAlign: 'center', color: 'rgb(64, 14, 50)',  marginBottom: 20 }}>My Contact Information</h3>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', margin:'auto' }}>
                        <Col >
                            <Card.Link href="mailto:haleynfisher018@gmail.com?subject=Example%20Subject&body=Example%20Body">
                                <Card.Img style={{ width: '60px' }} src='./email.svg'></Card.Img>
                            </Card.Link>
                            <Card.Text>Email</Card.Text>
                        </Col>

                        <Col >
                            <Card.Link href="https://www.linkedin.com/in/haley-fishe4-/">
                                <Card.Img style={{ width: '60px' }} src='./linkedin.svg'></Card.Img>
                            </Card.Link>
                            <Card.Text>Linkedin</Card.Text>
                        </Col>

                        <Col >
                            <Card.Link href='https://github.com/haleynrosi'>
                                <Card.Img style={{ width: '60px' }} src='./github.svg'></Card.Img>
                            </Card.Link>
                            <Card.Text>Github</Card.Text>
                        </Col>

                        <Col  >
                            <Card.Link href='./HaleyFisherResume2023.pdf'>
                                <Card.Img style={{ width: '60px' }} src='./resume.svg'></Card.Img>
                            </Card.Link>
                            <Card.Text>Resume</Card.Text>
                        </Col>
                    </Row>
                </Card>
            </div>




        </div>

    )
}

export default About;