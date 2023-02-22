import React from 'react'
import Header from '../assets/Header'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function PopDestination() {


  const PopDestination = [
    {
      id: '1',
      title: 'Agra',
      image: 'https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg',
    },
    {
      id: '2',
      title: 'Jaipur',
      image: 'https://images.thrillophilia.com/image/upload/s--aT91QNX5--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/013/602/original/1471702122_jaipur.jpg.jpg',
    },
    {
      id: '3',
      title: 'Udaipur',
      image: 'https://m.economictimes.com/thumb/msid-70104165,width-1200,height-900,resizemode-4,imgsize-1445127/jaipur_gettyimages.jpg',
    },
    {
      id: '4',
      title: 'Goa',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1',
    },
    {
      id: '5',
      title: 'kutch',
      image: 'https://chaloghumane.com/wp-content/uploads/2021/09/kachchh-tourist-places.jpg',
    },
    {
      id: '6',
      title: 'Puri,Odisa',
      image: 'https://static.toiimg.com/photo/85067832.cms',
    },
    {
      id: '7',
      title: 'Assam',
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/assam-tourist-places.jpg',
    },
  ]


  return (
    <div className='overflow-auto '>

      <Header title="Popular Destination" />

      <div className='max-w-screen overflow-x-auto my-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-4'>
        <div className='flex w-max '>


          {PopDestination.map((item, index) => (
            <>
              <Card sx='' className="mx-2 md:mx-5 w-[290px] md:w-[345px]" key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 300 }}
                    image={item.image}
                    alt="jaipur"
                  />
                  <CardContent>
                    <h1 className='text-2xl font-bold pb-2'>
                      {item.title}
                    </h1>
                    <h6 className='text-[15px] '>
                      Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series of artificial lakes and is known for its lavish royal residences
                    </h6>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">Learn More</Button>
                  <Button size="small">Check our Plan</Button>
                </CardActions>
              </Card>
            </>
          ))}

        </div>
      
      </div>
      <div className='text-center'>
          <h1 className='my-4 font-semibold text-xl cursor-pointer'>show more <ArrowOutwardIcon/></h1>
        </div>
      </div>
  )
}

export default PopDestination