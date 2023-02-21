import React from 'react'
import Header from '../assets/Header'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Marquee from "react-fast-marquee";

const ServiceItem = [
    {
        id: '1',
        title: 'AI Planner',
        image: 'https://cdn.dribbble.com/users/1766465/screenshots/14502878/media/ba92064dd5bac7f0eadf35e515df14b5.png?compress=1&resize=400x300',
    },
    {
        id: '2',
        title: 'Hotel Booking',
        image: 'https://img.freepik.com/premium-vector/building-hotel-beach-vector-illustration-design_24877-21896.jpg',
    },
    {
        id: '3',
        title: 'Flight Booking',
        image: 'https://media.cntraveler.com/photos/622a652bd55b99732c8d3500/16:9/w_2991,h_1682,c_limit/GettyImages-1150104511.jpg',
    },
    {
        id: '5',
        title: 'India Tour',
        image: 'https://img.freepik.com/premium-vector/travel-illustration-india-landscape_1085-2139.jpg?w=2000',
    },
    {
        id: '6',
        title: 'Book vacation',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/002/531/003/small_2x/swimming-in-the-summer-free-vector.jpg',
    },
    {
        id: '7',
        title: 'Explore Blog',
        image: 'https://media.istockphoto.com/id/1205613046/photo/top-view-of-modern-office-workspace.jpg?b=1&s=170667a&w=0&k=20&c=bWOA9d-nbIlSYT8ukXiJTAgMre8hbYjr5gKNarNbIGE='
    }
]



export const Services = () => {
    return (
        <div>
            <Header title="Our Services" />

            <div className='max-w-screen overflow-x-auto py-5 scrollbar-hide md:mx-10 border-2 rounded-xl p-2'>
                 {/* <div className='carousel__slider'> */}
                    <Marquee className='carousel__list flex w-max' speed={60} gradientColor='false'> 
                        {
                            ServiceItem.map((item, index) => (
                                <>
                                    <Card sx={{ maxWidth: 400 }} className="mx-6 " key={index}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                sx={{ height: 300, width: 300 }}
                                                image={item.image}
                                                alt="aiplanner"
                                            />
                                            <CardContent>
                                                <h1 className='text-2xl font-bold'>
                                                    {item.title}
                                                </h1>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </>
                            ))
                        }
                     {/* </div> */}
                </Marquee> 
            </div>
        </div>



    )
}
