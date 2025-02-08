
import { Box, Grid,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { THEMECOLOR } from '../../../Constants/THEME_COLORS';
import logo from '../../../assets/imgs/footer/sample logo 1.png'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const Footer = () => {

        const Item = styled(Box)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        }));


        

    return (
        <Box sx={{ p:-1,m:-1,bgcolor:THEMECOLOR.orangeColor ,color:'#fff',
             display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Grid container spacing={2} sx={{ width: '90%',mt:{xs:2,sm:2,md:8} }} >
                <Grid item sm={12} md={4} sx={{ pl:2 ,pr:3}} >
                    <Item sx={{textAlign:'left' }}>
                        <img src={logo} alt="logo" width="20%"/>
                        <Typography sx={{ fontWeight:'400',fontSize:'18px' }}>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
                    </Item>
                    <Typography component='div' sx={{mt:3,display:'flex',justifyContent:'space-between'}} >
                        <FacebookTwoToneIcon sx={{fontSize:'40px',color:'#fff'}}  />
                        <TwitterIcon sx={{fontSize:'40px',color:'#fff', mr:2}}  />
                        <YouTubeIcon sx={{fontSize:'40px',color:'#fff', mr:2}}  />
                        <LinkedInIcon sx={{fontSize:'40px',color:'#fff', mr:2}}  />
                    </Typography>

                </Grid>

                <Grid item sm={12} md={4} sx={{ pl:2 }} >
                    <List
                        sx={{ width: '100%', maxWidth: 360,textTransform:'uppercase',fontWeight:'600',fontSize:'24px',lineHeight:'29.05px' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" sx={{ color:'#fff',bgcolor:THEMECOLOR.orangeColor }} id="nested-list-subheader">
                            COMPANY
                            </ListSubheader>
                        }
                        >
                        <ListItemButton>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                         <ListItemButton>
                            <ListItemText primary="About Us" />
                        </ListItemButton>
                           <ListItemButton>
                                <ListItemText primary="Books" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="New Release" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Contact Us" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Blog" />
                            </ListItemButton>
                      
                    </List>
                </Grid>

                  <Grid item sm={12} md={4} sx={{ pl:2 }} >
                    <List
                        sx={{ width: '100%', maxWidth: 360,textTransform:'uppercase',fontWeight:'600',fontSize:'24px',lineHeight:'29.05px' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" sx={{ color:'#fff',bgcolor:THEMECOLOR.orangeColor }} id="nested-list-subheader">
                            IMPORTANT LINKS
                            </ListSubheader>
                        }
                        >
                        <ListItemButton>
                            <ListItemText primary="Privacy Policy" />
                        </ListItemButton>
                         <ListItemButton>
                            <ListItemText primary="FAQs" />
                        </ListItemButton>
                           <ListItemButton>
                                <ListItemText primary="Terms Of Services" />
                            </ListItemButton>
                    </List>
                </Grid>

            </Grid>

            <Grid container spacing={2} sx={{ width: '90%',mt:{xs:2,sm:2,md:4} , pb:4}} >
                <Grid item sm={12} md={6} sx={{ pl:2 ,pr:3}} >
                    <Typography component='div' sx={{ fontWeight:'700',fontSize:'18px'  }}>
                        © 2022 Arihant. All Rights Reserved
                    </Typography>

                </Grid>
                <Grid item sm={12} md={6} sx={{ pl:2 ,pr:3}} >
                    <Typography component='div'  sx={{ fontWeight:'700',fontSize:'18px'  }}>
                        Privacy | Terms of Service
                    </Typography>

                </Grid>


            </Grid>
        </Box>

    );
}

export default Footer;

