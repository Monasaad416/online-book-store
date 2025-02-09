import { Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import featured_book from "@assets/imgs/featured_books/book.png"
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import SwiperNavButtons from '@swiperNavButtons/SwiperNavButtons.tsx';




const FeaturedBooks = () => {
    const Item = styled(Box)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        }));

    const mainColor= "#393280";
    return (
        <Box sx={{ pl:-1,pr:-1,ml:-1,mr:-1 ,mt:-4,pt:4 ,width:'100%'}}>
            <Box>
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Scrollbar, A11y,EffectCube]}
                    slidesPerView={1}
                    pagination={{
                        // el: '.custom_pagination',
                        clickable: true,
                    }}
                    // scrollbar={{ draggable: true }}
                    effect="cube"
                    cubeEffect={{shadow: false}}
                    >
                        <SwiperSlide>
                            <Box 
                                sx={{
                                    background: 'linear-gradient(78.83deg, #FBEEEE 50%, #F7FFFE 100%)', display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',   
                                    pb:20                       
                                }}
                            >

                                <Grid container spacing={2} sx={{ width: '100%', height: '100%' }}>
                                    <Grid item sm={12} md={6} sx={{textAlign:'right' }}>
                                        <Item sx={{ width:{sm:"65%",md:"95%", m:{sm:10}} }}>
                                            <img src={ featured_book } width="50%" alt="slider image"/>
                                        </Item>
                                    </Grid>
                                    <Grid item sm={12} md={6}  sx={{textAlign:'left' }}> 
                                        <Item sx={{ display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",height:"100%",color: mainColor,
                                            mr: { xs: 5, sm: 5, md: 10 },
                                            ml: { xs: 5, sm: 5, md: 10 },
                                            mt: { xs: 5, sm: 5, md: 10 },}}>
                                            <Typography variant="h3" component="h3" sx={{ textTransform:"capitalize",fontWeight:"bold",fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                                                featured book
                                            </Typography>
                                            <Divider 
                                                sx={{ 
                                                    backgroundColor: THEMECOLOR.redColor,  
                                                    height: '0.8px', 
                                                    width: { xs: '25%', sm: '2%', md: '10%' } ,
                                                     mt:5
                                                }} 
                                            />

                                            <Typography variant="h6" component="h6" sx={{ color:THEMECOLOR.grayColor,textTransform:"uppercase",fontWeight: '500',
                                                lineHeight: '15.73px',
                                                letterSpacing: '0.16em',
                                                textAlign: 'left',
                                                fontSize: '13px' ,mt:2}}>
                                                by timbur hood
                                            </Typography>

                                            <Typography component="p" sx={{color:THEMECOLOR.mainColor,
                                                fontSize: '28px',
                                                fontWeight: '600',
                                                lineHeight: '33.89px',
                                                textAlign: 'left',mt:4,mb:4,
                                                textTransform:"capitalize"}}>
                                                Birds gonna be happy
                                            </Typography>

                                            <Typography component="p" sx={{ color:THEMECOLOR.grayColor,mb:4,
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                lineHeight: '33.28px',
                                                letterSpacing: '0.02em',
                                                textAlign: 'left',
                                                }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                                            </Typography>

                                            <Typography component="p" sx={{ color:THEMECOLOR.redColor,
                                                fontSize: '23px',
                                                fontWeight: '700',
                                                lineHeight: '27.84px',
                                                textAlign: 'left',
                                                }}>
                                                $45
                                            </Typography>
                                            <Button variant="outlined" sx={{ textTransform:'uppercase',fontSize:{xs:16,sm:16,md:20} ,fontWeight:'400',pt:{xs:1,sm:1,md:2},pb:{xs:1,sm:1,md:2},pr:{xs:2,sm:2,md:3},pl:{xs:2,sm:2,md:3},color:THEMECOLOR.mainColor,mt:{xs:4,sm:4,md:10} ,mb:{xs:5,sm:5,md:10} }} endIcon={<ArrowForwardIcon/>}>view more</Button>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>

                        </SwiperSlide>

                        <SwiperSlide>
                            <Box 
                                sx={{
                                    background: 'linear-gradient(78.83deg, #FBEEEE 50%, #F7FFFE 100%)', display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',                          
                                }}
                            >
                                <Grid container spacing={2} sx={{ width: '100%', height: '100%' }}>
                  
                                    <Grid item sm={12} md={6} sx={{textAlign:'right' }}>
                                        <Item sx={{ width:{sm:"65%",md:"95%", m:{sm:10}} }}>
                                            <img src={ featured_book } width="70%" alt="slider image"/>
                                        </Item>
                                    </Grid>
                                    <Grid item sm={12} md={6}  sx={{textAlign:'left' }}> 
                                        <Item sx={{ display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",height:"100%",color: mainColor,
                                            mr: { xs: 5, sm: 5, md: 10 },
                                            ml: { xs: 5, sm: 5, md: 10 },
                                            mt: { xs: 5, sm: 5, md: 10 },}}>
                                            <Typography variant="h3" component="h3" sx={{ textTransform:"capitalize",fontWeight:"bold",fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                                                featured book
                                            </Typography>
                                            <Divider 
                                                sx={{ 
                                                    backgroundColor: THEMECOLOR.redColor,  
                                                    height: '0.8px', 
                                                    width: { xs: '25%', sm: '2%', md: '10%' } ,
                                                     mt:5
                                                }} 
                                            />

                                            <Typography variant="h6" component="h6" sx={{ color:THEMECOLOR.grayColor,textTransform:"uppercase",fontWeight: '500',
                                                lineHeight: '15.73px',
                                                letterSpacing: '0.16em',
                                                textAlign: 'left',
                                                fontSize: '13px' ,mt:2}}>
                                                by timbur hood
                                            </Typography>

                                            <Typography component="p" sx={{color:THEMECOLOR.mainColor,
                                                fontSize: '28px',
                                                fontWeight: '600',
                                                lineHeight: '33.89px',
                                                textAlign: 'left',mt:4,mb:4,
                                                textTransform:"capitalize"}}>
                                                Birds gonna be happy
                                            </Typography>

                                            <Typography component="p" sx={{ color:THEMECOLOR.grayColor,mb:4,
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                lineHeight: '33.28px',
                                                letterSpacing: '0.02em',
                                                textAlign: 'left',
                                                }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                                            </Typography>

                                            <Typography component="p" sx={{ color:THEMECOLOR.redColor,
                                                fontSize: '23px',
                                                fontWeight: '700',
                                                lineHeight: '27.84px',
                                                textAlign: 'left',
                                                }}>
                                                $45
                                            </Typography>
                                            <Button variant="outlined" sx={{ textTransform:'uppercase',fontSize:{xs:16,sm:16,md:20} ,fontWeight:'400',pt:{xs:1,sm:1,md:2},pb:{xs:1,sm:1,md:2},pr:{xs:2,sm:2,md:3},pl:{xs:2,sm:2,md:3},color:THEMECOLOR.mainColor,mt:{xs:4,sm:4,md:10} ,mb:{xs:5,sm:5,md:10} }} endIcon={<ArrowForwardIcon/>}>view more</Button>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>
                        <SwiperNavButtons />
            
        
                </Swiper>
            </Box>
  
        </Box>
    );
}

export default FeaturedBooks;

