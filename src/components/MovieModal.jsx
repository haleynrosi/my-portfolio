import React from "react";
import { Modal, Box } from "@mui/material";
import { Card, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 
function MovieModal(props){

    const modalInfo = [
        {
            src: './moviehome.png',
            name: 'Home Page'

        },
        {
            src: './moviesearch.png',
            name: 'Movie Search Engine'

        },
        {
            src: './moviewatchlist.png',
            name: 'Movie Watched List and Watch Wishlist'

        },
        {
            src: './movienight1.png',
            name: 'Movie Night - Now Playing'

        },
        {
            src: './movienight2.png',
            name: 'Movie Night- Popular Movies'

        },
        {
            src: './contactmovie.png',
            name: 'Contact Page'

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



    const renderMovieTrivia = () =>{
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
                
                <Card.Title style={{textAlign:'center', fontFamily: 'Jost'}}>Movie Me</Card.Title>
                <Card.Text style={{textAlign:'center', fontFamily: 'Jost'}}>Movie Me is a website that uses a public movie API to allow
                users to search for all movies and shows by their title. The search function will display all the options based on the text used to
                submit the search. Users have the option to add movies to two different lists, watched and watch wishlist. Movie Me has a Movie
                Night feature as well that gives user's three categories to pick from and it will generate a random movie for them to watch. 
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
                       {renderMovieTrivia()}
                    </Carousel>
                </Card.Body>
                <Button onClick={props.closeModal} style={{backgroundColor:'white', border:'none', color:'black'}}><img alt='closeimage' style={{width:'20px'}} src='./close.svg'></img></Button>
            </Card>
        </Box>
    </Modal>
    )
}

export default MovieModal; 