import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper.css';
import 'swiper/modules/bundle.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import book1 from "@assets/imgs/books/book3 4.png"
import book2 from "@assets/imgs/books/book4 4.png"
import book3 from "@assets/imgs/books/book16 1.png"
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TopCategories from '@topCategoriesModule/TopCategories';
import { lazy, Suspense } from 'react';
const SwiperNavigation = lazy(() => import('@modules/SwiperNavButtonsModule/SwiperNavButtons'));
import FeaturedBooks from '@featuredBooksModule/FeaturedBooks';
import Offers from '@offersModule/Offers';
import Subscribe from '@subscribeModule/Subscribe';
import styles from "./Home.module.css"
import NewRelease from '@newReleaseModule/NewRelease';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import LatestArticles from '@latestArticlesModule/LatestArticles';





const Home = () => {
    const Item = styled(Box)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        }));


    // const pagination = {
    // clickable: true,
    // renderBullet: function (index: number, className: string) {
    //     return `<span class="${className}"><div class="circle"></div></span>`;
    // },
    // };


    return (
        <Box sx={{ pl:-1,pr:-1,ml:-1,mr:-1 ,mt:-1}}>
            <Box sx={{ pt:12}}>    
                <Swiper
                    className={styles.swiper_container}
                    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCube]}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={1}
                    effect="cube"
                    cubeEffect={{shadow: false}}
                    >
        
                        <SwiperSlide className={styles.customSlide}>
                            <Box 
                                sx={{
                                    background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)', 
                                    height:{ xs:'60vh', md:'75vh'},
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff', // Text color for better visibility
                                
                                }}
                            >

                                <Grid container spacing={2}>
                                    <Grid item sm={12} md={8}> 
                                        <Item sx={{ display:"flex",justifyContent:{xs:'center',md:'satrt'},alignItems:"start",flexDirection:"column",color: THEMECOLOR.mainColor,
                                            mr: { xs: 4,sm:25},
                                            ml: { xs: 4,sm:25} }}>
                                            <Typography variant="h3" component="h3" sx={{ textTransform:"capitalize",fontWeight:"bold",fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>ipsum dolor si</Typography>

                                            <Typography component="p" sx={{fontWeight:400, fontSize: {xs:18,sm:18,md:20},mt:5 ,mb:5 ,textAlign:"left"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
                                            </Typography>

                                            <Button variant="outlined" sx={{ fontSize:{xs:16,md:20} ,p:{xs:1,md:2},color:THEMECOLOR.mainColor}} endIcon={<ArrowForwardIcon/>}>READ MORE</Button>
                                        </Item>
                                    </Grid>
                                    <Grid item sm={12} md={4} sx={{ display:{xs:'none',md:'flex'},justifyContent:"center",alignItems:"center" }}> 
                                        <Item>
                                            <img src={ book1 } width={"70%"} alt="slider image"/>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide className={styles.customSlide}>
                            <Box 
                                sx={{
                                    background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)', 
                                    height:{ xs:'60vh', md:'75vh'},
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff', // Text color for better visibility
                                
                                }}
                            >

                                <Grid container spacing={2}>
                                    <Grid item sm={12} md={8}> 
                                        <Item sx={{ display:"flex",justifyContent:{xs:'center',md:'satrt'},alignItems:"start",flexDirection:"column",color: THEMECOLOR.mainColor,
                                            mr: { xs: 4,sm:25},
                                            ml: { xs: 4,sm:25} }}>
                                            <Typography variant="h3" component="h3" sx={{ textTransform:"capitalize",fontWeight:"bold",fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>ipsum dolor si</Typography>

                                            <Typography component="p" sx={{fontWeight:400, fontSize: {xs:18,sm:18,md:20},mt:5 ,mb:5 ,textAlign:"left"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
                                            </Typography>

                                            <Button variant="outlined" sx={{ fontSize:{xs:16,md:20} ,p:{xs:1,md:2},color:THEMECOLOR.mainColor}} endIcon={<ArrowForwardIcon/>}>READ MORE</Button>
                                        </Item>
                                    </Grid>
                                    <Grid item sm={12} md={4} sx={{ display:{xs:'none',md:'flex'},justifyContent:"center",alignItems:"center" }}> 
                                        <Item>
                                            <img src={ book2 } width={"70%"} alt="slider image"/>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>

                                     <SwiperSlide className={styles.customSlide}>
                            <Box 
                                sx={{
                                    background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)', 
                                    height:{ xs:'60vh', md:'75vh'},
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff', // Text color for better visibility
                                
                                }}
                            >

                                <Grid container spacing={2}>
                                    <Grid item sm={12} md={8}> 
                                        <Item sx={{ display:"flex",justifyContent:{xs:'center',md:'satrt'},alignItems:"start",flexDirection:"column",color: THEMECOLOR.mainColor,
                                            mr: { xs: 4,sm:25},
                                            ml: { xs: 4,sm:25} }}>
                                            <Typography variant="h3" component="h3" sx={{ textTransform:"capitalize",fontWeight:"bold",fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>ipsum dolor si</Typography>

                                            <Typography component="p" sx={{fontWeight:400, fontSize: {xs:18,sm:18,md:20},mt:5 ,mb:5 ,textAlign:"left"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
                                            </Typography>

                                            <Button variant="outlined" sx={{ fontSize:{xs:16,md:20} ,p:{xs:1,md:2},color:THEMECOLOR.mainColor}} endIcon={<ArrowForwardIcon/>}>READ MORE</Button>
                                        </Item>
                                    </Grid>
                                    <Grid item sm={12} md={4} sx={{ display:{xs:'none',md:'flex'},justifyContent:"center",alignItems:"center" }}> 
                                        <Item>
                                            <img src={ book3 } width={"70%"} alt="slider image"/>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>


                        <Suspense fallback="Loading Please Wait ...">
                            <SwiperNavigation />
                        </Suspense>
            
                </Swiper>
                        
            
        
            </Box>
            <TopCategories></TopCategories>
            <NewRelease></NewRelease>
            <FeaturedBooks></FeaturedBooks>
            <Offers></Offers>
            <Subscribe></Subscribe>
            <LatestArticles></LatestArticles>
        </Box>
    );
}

export default Home;

