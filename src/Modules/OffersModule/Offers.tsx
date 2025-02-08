import {  Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import unsplash from '@assets/imgs/offers/Unsplash.png' 






const Offers = () => {
    const Item = styled(Box)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        }));

    return (
        <Box sx={{m:{xs:2,sm:4 ,md:6,xl:10}, p:{xs:1,sm:1 ,md:5,xl:10}, backgroundColor:'#FCEBEA' ,borderRadius:'20px'}}>
       
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Scrollbar, A11y,EffectCube]}
                    // spaceBetween={50}
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
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',  
                                    backgroundColor:'#FCEBEA' ,
                                    pb:20                     
                                }}
                            >
                                <Grid  container spacing={2} sx={{ width: '100%', height: '100%', }}>
                                    <Grid item sm={12} md={8}  sx={{textAlign:'left' }}> 
                                        <Item sx={{ display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",height:"100%",color: THEMECOLOR.mainColor,
                                            mr: { xs: 2, sm: 2, md: 10 },
                                            ml: { xs: 2, sm: 2, md: 10 },
                                            mt: { xs: 2, sm: 2, md: 10 }}}>
                                            <Typography variant="h4" sx={{ color: THEMECOLOR.mainColor,fontWeight:{xs:'600',sm:'600',md:'700'},fontSize:{xs:'25px',sm:'25px',md:'45px'},lineHeight:{xs:'40px',md:'66px'}}}>
                                                All books are 50% off now! Don't miss such a deal!
                                            </Typography>
                                            <Typography component="p" sx={{ color:THEMECOLOR.mainColor,mb:4,
                                                    fontSize: '18px',
                                                    fontWeight: '400',
                                                    lineHeight: '32px',
                                                    letterSpacing: '0.02em',
                                                    }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                                            </Typography>
                                    
                                            <Grid  container spacing={2} sx={{ width: {xs:'100%',sm:'100%',md:'50%'}, height: '100%' ,mb:{xs:5,sm:5,md:15} }}>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center'}}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px'}}>
                                                        786
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        DAYS
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px' }} >
                                                        01
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        HOUR
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px' }} >
                                                        27
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        MIN
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px'}} >
                                                        55
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        SEC
                                                    </span>
                                                </Grid>
                                            </Grid>
                                        </Item>
                                    </Grid>

                                 <Grid 
            item 
            sm={12} 
            md={4} 
            sx={{ 
                mt: { xs: 2, sm: 2, md: 10 }, 
                width: { xs: '100%', sm: '100%', md: '70%' }, 
                textAlign: 'center' 
            }}
        >
            <Item>
                <img 
                    src={unsplash} 
                    style={{ 
                        width: '90%',
                        height: 'auto' ,
                        margin:'auto',
                    }} 
                    alt="slider image" 
                />
            </Item>
        </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>


                                  <SwiperSlide>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',  
                                    backgroundColor:'#FCEBEA' ,
                                    pb:20                     
                                }}
                            >
                                <Grid  container spacing={2} sx={{ width: '100%', height: '100%', }}>
                                    <Grid item sm={12} md={8}  sx={{textAlign:'left' }}> 
                                        <Item sx={{ display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",height:"100%",color: THEMECOLOR.mainColor,
                                            mr: { xs: 2, sm: 2, md: 10 },
                                            ml: { xs: 2, sm: 2, md: 10 },
                                            mt: { xs: 2, sm: 2, md: 10 }}}>
                                            <Typography variant="h4" sx={{ color: THEMECOLOR.mainColor,fontWeight:{xs:'600',sm:'600',md:'700'},fontSize:{xs:'25px',sm:'25px',md:'45px'},lineHeight:{xs:'40px',md:'66px'}}}>
                                                All books are 50% off now! Don't miss such a deal!
                                            </Typography>
                                            <Typography component="p" sx={{ color:THEMECOLOR.mainColor,mb:4,
                                                    fontSize: '18px',
                                                    fontWeight: '400',
                                                    lineHeight: '32px',
                                                    letterSpacing: '0.02em',
                                                    }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                                            </Typography>
                                    
                                            <Grid  container spacing={2} sx={{ width: {xs:'100%',sm:'100%',md:'50%'}, height: '100%' ,mb:{xs:5,sm:5,md:15} }}>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center'}}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px'}}>
                                                        786
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        DAYS
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px' }} >
                                                        01
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        HOUR
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px' }} >
                                                        27
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        MIN
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px'}} >
                                                        55
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        SEC
                                                    </span>
                                                </Grid>
                                            </Grid>
                                        </Item>
                                    </Grid>

                                 <Grid 
            item 
            sm={12} 
            md={4} 
            sx={{ 
                mt: { xs: 2, sm: 2, md: 10 }, 
                width: { xs: '100%', sm: '100%', md: '70%' }, 
                textAlign: 'center' 
            }}
        >
            <Item>
                <img 
                    src={unsplash} 
                    style={{ 
                        width: '90%',
                        height: 'auto' ,
                        margin:'auto',
                    }} 
                    alt="slider image" 
                />
            </Item>
        </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>


        <SwiperSlide>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',  
                                    backgroundColor:'#FCEBEA' ,
                                    pb:20                     
                                }}
                            >
                                <Grid  container spacing={2} sx={{ width: '100%', height: '100%', }}>
                                    <Grid item sm={12} md={8}  sx={{textAlign:'left' }}> 
                                        <Item sx={{ display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",height:"100%",color: THEMECOLOR.mainColor,
                                            mr: { xs: 2, sm: 2, md: 10 },
                                            ml: { xs: 2, sm: 2, md: 10 },
                                            mt: { xs: 2, sm: 2, md: 10 }}}>
                                            <Typography variant="h4" sx={{ color: THEMECOLOR.mainColor,fontWeight:{xs:'600',sm:'600',md:'700'},fontSize:{xs:'25px',sm:'25px',md:'45px'},lineHeight:{xs:'40px',md:'66px'}}}>
                                                All books are 50% off now! Don't miss such a deal!
                                            </Typography>
                                            <Typography component="p" sx={{ color:THEMECOLOR.mainColor,mb:4,
                                                    fontSize: '18px',
                                                    fontWeight: '400',
                                                    lineHeight: '32px',
                                                    letterSpacing: '0.02em',
                                                    }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                                            </Typography>
                                    
                                            <Grid  container spacing={2} sx={{ width: {xs:'100%',sm:'100%',md:'50%'}, height: '100%' ,mb:{xs:5,sm:5,md:15} }}>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center'}}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px'}}>
                                                        786
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        DAYS
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px' }} >
                                                        01
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        HOUR
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px' }} >
                                                        27
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        MIN
                                                    </span>
                                                </Grid>
                                                <Grid item sm={3} md={3}  sx={{textAlign:'center' }}> 
                                                    <span style={{ color:THEMECOLOR.redColor,fontWeight:'700',fontSize:'26px'}} >
                                                        55
                                                    </span>
                                                    
                                                    <Divider sx={{ width:'0' }} />
                                                    <span style={{ color:'black',fontWeight:'500',fontSize:'16px'}} >
                                                        SEC
                                                    </span>
                                                </Grid>
                                            </Grid>
                                        </Item>
                                    </Grid>

                                 <Grid 
            item 
            sm={12} 
            md={4} 
            sx={{ 
                mt: { xs: 2, sm: 2, md: 10 }, 
                width: { xs: '100%', sm: '100%', md: '70%' }, 
                textAlign: 'center' 
            }}
        >
            <Item>
                <img 
                    src={unsplash} 
                    style={{ 
                        width: '90%',
                        height: 'auto' ,
                        margin:'auto',
                    }} 
                    alt="slider image" 
                />
            </Item>
        </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>
                    
        
                </Swiper>
            
  
        </Box>
    );
}

export default Offers;

