import React, { useEffect } from 'react'
import Header from '../assets/Header'
import HotelIcon from '@mui/icons-material/Hotel';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';

export const Services = () => {
    return (
        <div>
            <Header title="Our Services" />

            <div className='max-w-screen overflow-x-auto my-5 scrollbar-hide mx-10 border-2 rounded-xl p-2'>
                <div className=' track '>
                    <div className='flex w-max'>
                        <Card sx={{ maxWidth: 400 }} className="mx-6 ">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 300 }}
                                    image="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
                                    alt="jaipur"
                                />
                                <CardContent>
                                    <h1 className='text-2xl font-bold'>
                                        AI planner
                                    </h1>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 400 }} className="mx-6">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 300 }}
                                    image="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
                                    alt="jaipur"
                                />
                                <CardContent>
                                    <h1 className='text-2xl font-bold'>
                                        Hotel Booking
                                    </h1>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                        
                        <Card sx={{ maxWidth: 400 }} className="mx-6">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 300 }}
                                    image="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
                                    alt="jaipur"
                                />
                                <CardContent>
                                    <h1 className='text-2xl font-bold'>
                                        Fligt Booking
                                    </h1>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 400 }} className="mx-6">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 300 }}
                                    image="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
                                    alt="jaipur"
                                />
                                <CardContent>
                                    <h1 className='text-2xl font-bold'>
                                        India Tours
                                    </h1>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 400 }} className="mx-6">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 300 }}
                                    image="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
                                    alt="jaipur"
                                />
                                <CardContent>
                                    <h1 className='text-2xl font-bold'>
                                        Book vacation
                                    </h1>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 400 }} className="mx-6">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 300 }}
                                    image="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
                                    alt="jaipur"
                                />
                                <CardContent>
                                    <h1 className='text-2xl font-bold'>
                                        ExploreBblog
                                    </h1>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Explore Blog</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>



    )
}
