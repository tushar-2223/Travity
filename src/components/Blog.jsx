import React from 'react'
import Header from '../assets/Header'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Blog() {

    const BlogCard = [
        {
            id: '1',
            title: 'Top 10 Temples to Visit in Varanasi',
            image: 'https://www.tourmyindia.com/blog//wp-content/uploads/2023/02/Varanasi-Religious-Tourism-Popular-Temples-to-Visit-in-Varanasi.jpg',
            description: 'Varanasi, also known as Banaras or Kashi, is one of the oldest cities in the world and is considered to be one of the most religious places in India. It is located on the banks of the Ganges River and is home to many fam',
            avatar: 'T'
        },
        {
            id: '2',
            title: 'Top 10 Temples to Visit in Udaipur',
            image: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-City-Palace-Udaipur-Rajasthan.jpg',
            description: ' Udaipur, which is popularly known as the ‘City of Lakes,’ casts its spell and everyone gets mesmerised by it! It wouldn’t be incorrect if we label Udaipur as one of the most romantic places in India. The serene lak',
            avatar: 'N'
        },
        {
            id: '2',
            title: 'Ganga Vilas Cruise',
            image: 'https://www.tourmyindia.com/blog//wp-content/uploads/2023/01/Ganga-Vilas-River-Cruise.jpg',
            description: ' World’s longest river cruise, MV Ganga Vilas Cruise operated by Antara Luxury River Cruises, has started its journey from Varanasi, one of the ancient cities and popular tourist destinations of India. The maiden journe',
            avatar: 'P'
        },
    ]




    return (
        <>
            <Header title="Our Blog" />

            <div className='pb-10 px-2 md:px-0'>
            <div className='md:mx-[7rem] md:p-5 border-2 rounded-xl flex justify-around flex-wrap'>
                {
                    BlogCard.map((item, index) => (
                        <>
                            <Card sx={{ maxWidth: 345 }} key={index} className="m-5">
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {item.avatar}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={item.title}
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={item.image}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <h1 className='ml-[140px] cursor-pointer font-semibold'>Read more</h1>
                                </CardActions>
                            </Card >
                        </>
                    ))
                }

                </div>
            </div>
        </>
    )
}

export default Blog