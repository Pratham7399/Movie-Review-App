import './Hero.css'
//import React from   'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';




const Hero= ({movies}) => {
    return (
        <div className='movie-carousel-conatiner'>
            <Carousel>{
                movies.map((movies) =>{
                    return(
                        <Paper>
                            <div className='movie-card-conatiner'>
                                <div className='movie-card'>
                                    <div className='movie-detail'>
                                                <div className='movie-poster'>
                                                    <img src={movie.poster} alt=""/>
                                                </div>
                                                <div className='movie-title'>
                                                    <h4>{movie.title}</h4>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )              
               })
                }
            </Carousel>
                
        </div>
    )

}

export default Hero