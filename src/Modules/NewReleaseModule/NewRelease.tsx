import React, { useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/modules/bundle.css';
import book1 from"@assets/imgs/books/book3 4.png"
import { THEMECOLOR } from '@constants/THEME_COLORS';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { actGetProducts, removeProducts } from '@redux/products/productsSlice';
import AddToCart from '@modules/AddToCartModule/AddToCart';



const NewRelease: React.FC = () => {

    const {value} = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch()

        useEffect(() => {
        // mount
        const promise = dispatch(actGetProducts());

        // unmount
        return () => {
            dispatch(removeProducts());
            promise.abort();
        };
    }, [dispatch]);





    return (
        <Box sx={{ width: '100%', height: '100%', mt: 10, mb: 10, backgroundColor: '#FFE6E6' ,}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',mb:10 }}>
                <Typography component="p" sx={{ textTransform: 'uppercase', color: '#7A7A7A', mt: 5 }}>
                    Some quality items
                </Typography>
                <Typography component="p" sx={{ fontSize: {xs:'32px',md:'48px'}, fontWeight: '600', lineHeight: '58.09px', textAlign: 'center', mt: 3, color: THEMECOLOR.mainColor }}>
                    New Release Books
                </Typography>
            </Box>

            <Box sx={{ mr:{xs:5,md:30},ml:{xs:5,md:30}}}>
                <Swiper
                        modules={[Pagination, Scrollbar, A11y]}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween:2,
                            },
                        }}  
                    >
                        {value.map((book,slideIndex) => (
                            <SwiperSlide key={slideIndex}>
                                <Box sx={{display:"flex", justifyContent:"center",alignItems:'center',backgroundColor: '#FFE6E6',pb:20}}>
        
                                    <Box key={book._id} sx={{ boxShadow: 'none',backgroundColor: '#FFE6E6' }}>
                            
                                            <Typography>
                                            <img src={book1} alt="new-release" className="book_img"  />
                                            </Typography>
                                            <Typography component="p" sx={{ color: THEMECOLOR.mainColor,textAlign:'center', fontSize: '26px',fontWeight: '600',mt:3,lineHeight: '26.63px',textTransform:"capitalize"}}>
                                                {book.name}
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign:'center' ,color: 'text.secondary', fontSize: 14 }}>
                                                {book.author}
                                            </Typography>
                                            <Typography component="p" sx={{
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                lineHeight: '30px',
                                                letterSpacing: '1px',
                                                textAlign: 'center',
                                                textUnderlinePosition: 'from-font',
                                                textDecorationSkipLink: 'none',
                                                color:THEMECOLOR.orangeColor
                                                }}>
                                            $ {book.price}

                                            </Typography>
                            
                                            <AddToCart book={book._id} quantity={1}/>
                                    </Box>
                            
                                </Box>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default NewRelease;