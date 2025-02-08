
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import img1 from '@assets/imgs/articles/Rectangle 44.png';
import img2 from '@assets/imgs/articles/Rectangle 38.png';
import img3 from '@assets/imgs/articles/Rectangle 45.png';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



const LatestArticles = () => {

    return (
        <Box sx={{
                background: '#F7FCFC',
                 display: 'flex',
                 flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color:'#7A7A7A',
                pt:{xs:2,sm:2,md:4}, mt:{xs:2,sm:2,md:4}                             
            }}
        >
                    <Typography component='p' variant='h4' sx={{
                
                        fontSize: '13px',
                        fontWeight: '500',
                        lineHeight: '15.73px',
                        letterSpacing: '0.12em',
                        textAlign: 'center',
                        mb:{xs:2,sm:2,md:4}}}>Read our articles
                    </Typography>

                    <Typography component='p' variant='h4' sx={{

                        fontSize: {xs:'30px',sm:'30px',md:'48px'},
                        fontWeight: '400',
                        lineHeight: '58.1px',
                        letterSpacing: '0.12em',
                        textAlign: 'center',color:'#173F5F'}}>Latest Articles
                    </Typography>


                    <Grid container spacing={2} sx={{ width: '100%', height: '100%' ,mt:{xs:2,sm:2,md:4}}}>
                        <Grid item sm={12} md={4} >
                            <img src={ img1 } width="90%" alt="latest article"/>
                            <Typography component='p' sx={{
                
                                fontSize: '15px',
                                fontWeight: '40',
                                lineHeight: '18.15px',
                                mb:{xs:2,sm:2,md:4},
                                textAlign:'left',mt:2}}>2 aug, 2021
                            </Typography>
                                
                            <Typography component='p' sx={{

                                fontSize: {xs:'20px',sm:'20px',md:'26px'},
                                fontWeight: '400',
                                lineHeight: '43.16px',
                                color:'#173F5F'}}>
                                    Reading books always makes the moments happy
                            </Typography>

                            <Divider sx={{ width: '100%',height:'1px',color:'#C8C8C8' ,mt:1}}></Divider>
                            <Typography component='div' sx={{textAlign:'right',mt:1}}>
                                <FacebookTwoToneIcon sx={{color:'#173F5F', mr:2}}  />
                                <TwitterIcon sx={{color:'#173F5F', mr:2}}  />
                                <InstagramIcon sx={{color:'#173F5F', mr:2}}  />
                            </Typography>
                        </Grid>

                        <Grid item sm={12} md={4} >
                          <img src={ img2 } width="90%" alt="latest article"/>
                            <Typography component='p' sx={{
                                                fontSize: '15px',
                                fontWeight: '40',
                                lineHeight: '18.15px',
                                mb:{xs:2,sm:2,md:4},
                                textAlign:'left',mt:2}}>2 aug, 2021
                            </Typography>
                                
                            <Typography component='p' sx={{

                                fontSize: {xs:'20px',sm:'20px',md:'26px'},
                                fontWeight: '400',
                                lineHeight: '43.16px',
                                color:'#173F5F'}}>
                                    Reading books always makes the moments happy
                            </Typography>

                            <Divider sx={{ width: '100%',height:'1px',color:'#C8C8C8' ,mt:1}}></Divider>
                            <Typography component='div' sx={{textAlign:'right',mt:1}}>
                                <FacebookTwoToneIcon sx={{color:'#173F5F', mr:2}}  />
                                <TwitterIcon sx={{color:'#173F5F', mr:2}}  />
                                <InstagramIcon sx={{color:'#173F5F', mr:2}}  />
                            </Typography>
                        </Grid>

                        <Grid item sm={12} md={4} >     
                            <img src={ img3 } width="90%" alt="latest article"/>
                            <Typography component='p' sx={{
                
                                fontSize: '15px',
                                fontWeight: '40',
                                lineHeight: '18.15px',
                                mb:{xs:2,sm:2,md:4},
                                textAlign:'left',mt:2}}>2 aug, 2021
                            </Typography>
                                
                            <Typography component='p' sx={{

                                fontSize: {xs:'20px',sm:'20px',md:'26px'},
                                fontWeight: '400',
                                lineHeight: '43.16px',
                                color:'#173F5F'}}>
                                    Reading books always makes the moments happy
                            </Typography>

                            <Divider sx={{ width: '100%',height:'1px',color:'#C8C8C8' ,mt:1}}></Divider>
                            <Typography component='div' sx={{textAlign:'right',mt:1}}>
                                <FacebookTwoToneIcon sx={{color:'#173F5F', mr:2}}  />
                                <TwitterIcon sx={{color:'#173F5F', mr:2}}  />
                                <InstagramIcon sx={{color:'#173F5F', mr:2}}  />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography component='div' sx={{textAlign:'center'}}>
                        <Button variant="outlined" sx={{ textTransform:'uppercase',fontSize:{xs:16,sm:16,md:20} ,fontWeight:'400',pt:{xs:1,sm:1,md:2},pb:{xs:1,sm:1,md:2},pr:{xs:2,sm:2,md:3},pl:{xs:2,sm:2,md:3},color:THEMECOLOR.mainColor,mt:{xs:4,sm:4,md:10} ,mb:{xs:5,sm:5,md:10} }} endIcon={<ArrowForwardIcon/>}>read all articles</Button>
                    </Typography>

     
        </Box>
    );
}

export default LatestArticles;

