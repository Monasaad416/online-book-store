import { Box, Typography} from '@mui/material';
import { Swiper } from 'swiper/react';
import 'swiper/css/bundle';
import {Pagination,Grid } from 'swiper/modules';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hook.ts';
import { actGetProducts } from '../../redux/products/productsSlice.ts';
import Book from "../Book/Book.tsx"


const BooksList: React.FC = () => {



  
    const {value} = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch()

 

    useEffect(() => {
        const promise = dispatch(actGetProducts()); // Call the function when the component mounts
        //unmount 
        return () =>  promise.abort();
    
    }, [dispatch]);


    // const accessToken = useSelector((state: RootState) => state.customerAccessToken.value);
    // console.log(accessToken);



    if (value.length === 0) {
        return <Typography variant="h6">No books available.</Typography>;
    }
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
        <Swiper
            modules={[Grid, Pagination]}
            pagination={{ clickable: true }}
            grid={{
                rows: 2, // Specify 2 rows
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                   // slidesPerGroup: 1,
                },
                640: {
                    slidesPerView: 2,
                    //slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 3,
                    //slidesPerGroup: 3,
                },
            }}
            spaceBetween={30} // Space between slides
            className="swiper-container"
        >
           { value.length > 0  ? (value.map((book) => (
              <Book {...book}/>
            ))):  (
                <p className="text-muted">Loading...</p>
            )
        }

        </Swiper>
        </Box>
    )
}

export default BooksList;
