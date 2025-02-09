import { Box, Typography, Card, CardContent, Paper, Skeleton} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Pagination,Grid } from 'swiper/modules';
import { useEffect } from 'react';

import book1 from"@assets/imgs/books/book3 4.png"
import styles from './BookList.module.css';
import AddToCart from '../AddToCartModule/AddToCart.tsx';
import { useAppDispatch, useAppSelector } from '@redux/hook.ts';
import { actGetProducts, removeProducts } from '@redux/products/productsSlice.ts';
import Loading from '@feedBack/Loading/Loading.tsx';

const BooksList: React.FC = () => {
  
    const {loading,error,value} = useAppSelector((state) => state.products)

   


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

    // const swiper = useSwiper();

    return (
        <Box sx={{ mt: 10, mb: 10 }} >
        <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={5}
            pagination={{
                clickable: true,
                renderBullet: function (index, className) 
                {
                return `<span class="${className} ${styles['swiper_pagination_bullet']}">${index + 1}</span>`
                }
            }}
            grid={{
                rows: 2,
                fill: "row",
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
    
            className="swiper_container"
        >

            <Loading status={loading} error={error}>
                {value.map((book) => (
                    <Box key={book._id} sx={{ pb:20 }}>
                        <SwiperSlide key={book._id}>
                            <Box sx={{ display:"flex" ,justifyContent:"center"}}>
                                <Card sx={{ minWidth: 150, boxShadow: 'none',  }}>
                                    <CardContent>
                                        <Paper className={`${styles.paper}`} elevation={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',position:'relative' }}>
                                            {!loading ? 
                                            <Skeleton variant="rectangular" width={210} height={400} />  :
                                            <img src={book1} className={`${styles.book_img}`} alt={book.name} />
                                            }
                                        </Paper>
                                        <AddToCart book={book._id} quantity={1} />

                                        
                                        <Typography gutterBottom component="p" sx={{ textAlign: 'center', fontWeight: 600, mt: 3 }}>
                                            {book.name}
                                        </Typography>
                                        {/* <Typography component="p" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                                            {book.description}
                                        </Typography> */}
                                        <Typography component="p" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                                            {book.author}
                                        </Typography>
                                        <Typography component="p" sx={{ textAlign: 'center', color: '#ED553B',fontWeight:700,fontSize:'22px',lineHeight:'26.6px' }}>
                                            ${book.price.toFixed(2)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </SwiperSlide>
                    </Box>
                ))}
 
            </Loading>
            <Typography component="div" sx={{display:'flex', justifyContent:'space-around' }} >
                {/* <Button className={styles.book_nav_prev} onClick={() => swiper.slidePrev()}><ArrowBackIcon sx={{width:'16px',height:'16px',mt:1}}/></Button> */}
                <Typography component="div" className={styles.swiper_pagination}></Typography>
                {/* <Button className={styles.book_nav_next} onClick={() => swiper.slideNext()}><ArrowForwardIcon sx={{width:'16px',height:'16px',mt:1}}/></Button> */}
            </Typography>
        </Swiper>
        </Box>
    )
}

export default BooksList;
