import React from "react";
import TraderRecipesModal from "./TraderRecipesModal";
import TaySwiftModal from "./TaySwiftModal";
import MovieModal from "./MovieModal"
import Navigation from "./Navigation";
import { Card} from "react-bootstrap";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import '../App.css'

function Projects() {


    const [isProjectOneOpen, setIsProjectOneOpen] = useState(false)

  

    const closeProjectOneModal = () =>{
        setIsProjectOneOpen(false)
    }


    const [isProjectTwoOpen, setIsProjectTwoOpen] = useState(false)

  

    const closeProjectTwoModal = () =>{
        setIsProjectTwoOpen(false)
    }


    const [isProjectThreeOpen, setIsProjectThreeOpen] = useState(false)

  

    const closeProjectThreeModal = () =>{
        setIsProjectThreeOpen(false)
    }

    return (
        <div>
            <Navigation />
            
                <h1 style={{ fontFamily: 'Londrina Outline', fontSize:75, textAlign: 'center',color: 'rgb(64, 14, 50)'}}>
                <Typewriter
                            onInit={(greeting) => {
                                 greeting.typeString("Portfolio Projects").start()}}/> 
                </h1>
            
            
                <div style={{display:'flex', alignItems: 'center', justifyContent:'center',paddingLeft: '10%', paddingRight:'10%', paddingTop:'2%', paddingBottom: '10%'}}>
                    <div className="projectsDiv" style={{padding:30}}>

                        <Card  className='projectCard' style={{ width: '100%', margin: '10px', padding:10}} onClick={(e)=>{
                            setIsProjectOneOpen(true)
                        }}>
                            <Card.Title style={{fontFamily: 'Jost'}}>TraderRecipes</Card.Title>
                            <Card.Body>
                                <img className="projectImg" alt='traderpic' src='./traderhome.png'></img>
                            </Card.Body>
                        </Card>

                        <Card  className='projectCard' style={{ width: '100%', margin: '10px',padding:10 }} onClick={(e)=>{
                            setIsProjectTwoOpen(true)
                        }}>
                            <Card.Title style={{fontFamily: 'Jost'}}>TSwift Trivia</Card.Title>
                            <Card.Body>
                                <img className="projectImg" src='./images/tayswifttrivia.jpg' alt='tswift' ></img>
                            </Card.Body>
                        </Card>

                        <Card className='projectCard' style={{ width: '100%', margin: '10px' ,padding:10 }} onClick={(e)=>{
                            setIsProjectThreeOpen(true)
                        }}>
                            <Card.Title style={{fontFamily: 'Jost'}}>Movie Site</Card.Title>
                            <Card.Body>
                                <img className="projectImg"  alt='moviepic' src='./images/moviesite.jpg'></img>
                            </Card.Body>
                        </Card>

                    </div>
                    <div>
                 
                </div>
                </div>
                <TraderRecipesModal isOpen={isProjectOneOpen} closeModal ={closeProjectOneModal} ></TraderRecipesModal>
                <TaySwiftModal isOpen={isProjectTwoOpen} closeModal ={closeProjectTwoModal}></TaySwiftModal>
                <MovieModal isOpen={isProjectThreeOpen} closeModal ={closeProjectThreeModal}></MovieModal>
                  
              
            
        </div>
    )
}

export default Projects;