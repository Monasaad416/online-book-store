import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Box, Typography } from '@mui/material';


import { THEMECOLOR } from '@constants/THEME_COLORS';
import { useEffect } from 'react';
import  actGetCategories  from '@redux/categories/actions/actGetCategories.ts'
import { useAppDispatch, useAppSelector } from '@redux/hook.ts';
import Loading from '@feedBack/Loading/Loading.tsx';
import book1 from "@assets/imgs/books/book3 4.png"
import book2 from "@assets/imgs/books/book4 4.png"
import book3 from "@assets/imgs/books/book16 1.png"

const TopCategories: React.FC = () => {

    // const [categories, setCategories] = useState<Category[]>([]); // Typed state

    // const gtAllCategories = async () => {
    //     try {
    //         const response = await axios.get<Category[]>(BASE_URLS.categories);
    //         setCategories(response.data); // Handle your data here
    //     } catch (error) {
    //         console.error("Error fetching categories:", error);
    //     }
    // };
    const  images =[book1, book2, book3]
    const {loading,error,value} = useAppSelector((state) => state.categories)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // mount
        if(value.length === 0) {
            const promise = dispatch(actGetCategories());
            //unmount
            return () => promise.abort();
        }
    }, [dispatch,value]);

   // console.log(value);
    return (
        <Box sx={{ mt: {xs:2,md:10}, mb: {xs:2,md:10}, ml:2}}>
            <Box  sx={{ mt:10 ,mr:{xs:3,md:10}}}>
                <Typography
                    variant="body1"
                    sx={{ color: THEMECOLOR.redColor, fontSize: '20px', mr: { sm: 1, md: 5 }, ml: { sm: 1, md: 5 } }}
                >
                    ___categories
                </Typography>
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                        color: THEMECOLOR.mainColor,
                        textAlign: 'left',
                        mt: {md:2},
                        mb: {md:2},
                        fontWeight: 'bold',
                        mr: { xs: 1, md: 5 },
                        ml: { xs: 1, md: 5 },
                        fontSize: { xs: "20px", md: '20px', xl: '40px' },
                        lineHeight: { xs: '25px', md: '40px', xl: '44px' }
                    }}
                >
                    Explore our Top Categories
                </Typography>
            </Box>

            <Box sx={{ mr: { sm: 1, md: 15 }, ml: { sm: 1, md: 15 } }} >

                <Loading status={loading} error={error}>
                    <Swiper
                        modules={[ Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        pagination={{ clickable: true }} 
                    >
                        {Array.from({ length: Math.ceil(value.length / 3) }).map((_, slideIndex) => (
                            <SwiperSlide key={slideIndex} >
                                <Box display="flex" justifyContent="center" sx={{ mr:{xs:5,md:20},ml:{xs:5,md:20},mt:5,mb:5,pb:10 }}>
                                    {value.slice(slideIndex * 3, slideIndex * 3 + 3).map((cat,index) => (
                                        <img key={index} src={images[index]} alt="top_category" width="30%"/>       
                                    ))}
                                </Box>
                            </SwiperSlide>
                        )) } 
                    </Swiper>
                </Loading>    
            </Box>
        </Box>
    );
};

export default TopCategories;
