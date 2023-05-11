import React from "react";
import { Modal, Box } from "@mui/material";
import { Card, Button} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 
function TaySwiftModal(props){

    const modalInfo = [
        {
            src: './tayhome.png',
            name: 'Home Page'

        },
        {
            src: './taytrivia.png',
            name: 'Trivia Options'

        },
        {
            src: './fact-trivia.png',
            name: 'Fact Trivia Game Card and Timer'

        },
        {
            src: './lyric-trivia.png',
            name: 'Lyric Trivia Game Card and Timer'

        },
        {
            src: './fact-key.png',
            name: 'Fact Trivia Key'

        },
        {
            src: './lyric-key.png',
            name: 'Lyric Trivia Key'

        },
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };



    const renderTayTrivia = () =>{
        return  modalInfo.map((item, i)=>{
            return (
                <Card key={i} style={{margin: 10, maxWidth: '100%' , height: '100%', fontFamily: 'Jost', alignItems:'center'}}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Img style={{height:'300px', maxWidth:'450px'}} alt={item.name} src={item.src}></Card.Img>
                
            </Card>
       
            )
        })
    }

    return(
        <Modal
        open={props.isOpen}
        onClose={props.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
    >
        <Box style={{width: '80%'}} >
            <Card style={{padding:20}}>
                
                <Card.Title style={{textAlign:'center', fontFamily: 'Jost'}}>Taylor Swift Trivia</Card.Title>
                <Card.Text style={{textAlign:'center', fontFamily: 'Jost'}}>Taylor Swift Trivia is a web app designed to be a
                trivia game based on Taylor Swift songs and facts about her. The app has two options for games to play and runs on a timer
                that flips a trivia card every interval for the user to guess. Once the game has gone through the entire deck, the screen show
                the answer key for each game. 
                </Card.Text>
                <Card.Body>
                    <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            width='100%'>
                       {renderTayTrivia()}
                    </Carousel>
                </Card.Body>
                <Button onClick={props.closeModal} style={{backgroundColor:'white', border:'none', color:'black'}}><img alt='close' style={{width:'20px'}} src='./close.svg'></img></Button>
            </Card>
        </Box>
    </Modal>
    )
}

export default TaySwiftModal; 