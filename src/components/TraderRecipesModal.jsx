import React from "react";
import { Modal, Box } from "@mui/material";
import { Card, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 
function TraderRecipesModal(props){

    const modalInfo = [
        {
            src: './TraderHome.png',
            name: 'Home Page'

        },
        {
            src: './trader-login-modal.png',
            name: 'Sign In'

        },
        {
            src: './trader-sign-up-form.png',
            name: 'Account Creation'

        },
        {
            src: './trader-post-recipe.png',
            name: 'Submit Recipe'

        },
        {
            src: './trader-search-recipe.png',
            name: 'Search Engine'

        },
        {
            src: './trader-updated-dashboard.png',
            name: 'User DashBoard'

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



    const renderTraderRecipes = () =>{
        return  modalInfo.map((item, i)=>{
            return (
                <Card key={i} style={{margin: 10, maxWidth: '100%' , height: '100%', fontFamily: 'Jost', alignItems:'center'}}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Img style={{height:'300px', width:'400px', objectFit:'scale-down'}} alt={item.name} src={item.src}></Card.Img>
                
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
                
                <Card.Title style={{textAlign:'center', fontFamily: 'Jost'}}>TraderRecipes</Card.Title>
                <Card.Text style={{textAlign:'center', fontFamily: 'Jost'}}>TraderRecipes is a socail media platform that I created with my partner
                    Hunter Reese for our capstone project. This web application allows users to create an account,
                    sign in to that account, search recipes, submit recipes, and save them all based on inventory 
                    specific to Trader Joes. We used ReactJS, NodeJS, ExpressJS, SQL, and AWS for this project. 
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
                       {renderTraderRecipes()}
                    </Carousel>
                </Card.Body>
                <Button onClick={props.closeModal} style={{backgroundColor:'white', border:'none', color:'black'}}><img style={{width:'20px'}} alt='close' src='./close.svg'></img></Button>
            </Card>
        </Box>
    </Modal>
    )
}

export default TraderRecipesModal; 