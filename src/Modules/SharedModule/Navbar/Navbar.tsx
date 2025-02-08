import { AppBar, Badge, Box, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import logo from '../../../assets/imgs/footer/sample logo 1.png'
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon.tsx';
import useScroll from 'src/hooks/useScroll.ts';


const Navbar = () => {

    const scrolled = useScroll();
    
    return (
    <Box sx={{ pl:-1,pr:-1,ml:-1,mr:-1 ,mt:-1}}>
        <AppBar position="static" sx={{ 
                    backgroundColor: '#393280', 
                    pr: { xs: 2, sm: 20, lg: 30 },
                    pl: { xs: 2, sm: 20, lg: 30 },
                }}>
            <Toolbar>
                <img src={logo} alt="logo" srcSet={`${logo}?w=150&h=150&mb=2&fit=crop&auto=format&dpr=2 2x`}/>
                <IconButton
    
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml:{sm:1,xs:1,md:3} }}
                >
                    <LocalPhoneIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontSize:{xs:12,sm:14,md:20}}}>
                    +91 8374902234
                </Typography>
                <IconButton
    
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <FacebookIcon />
                </IconButton>

                <IconButton
    
                    edge="start"
                    color="inherit"
                    aria-label="menu"

                >
                    <InstagramIcon />
                </IconButton>

                <IconButton
    
                    edge="start"
                    color="inherit"
                    aria-label="menu"

                >
                    <LinkedInIcon />
                </IconButton>

                <IconButton
    
                    edge="start"
                    color="inherit"
                    aria-label="menu"

                >
                    <TwitterIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <AppBar position="fixed" sx={{ mt: scrolled ? {xs:0,md:0 } : 7, backgroundColor: '#FFF',color:"#393280" 
                    ,pr: { xs: 1, sm: 2, lg: 3 },
                    pl: { xs: 1, sm: 2, lg: 3 }, boxShadow:false}}
                    >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,listStyleType:"none" }}>
                            <Link to="/dashboard/home" style={{ textDecoration: 'none' }}>  
                                <Typography component="li" sx={{m:{xs:1,md:2}, fontWeight:"normal",fontSize:{xs:18,sm:18,md:25}}}>Home</Typography>
                            </Link>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Link to="/dashboard/books" style={{ textDecoration: 'none' }}>
                                <Typography component="li" sx={{m:{xs:1,md:2}, fontWeight:"normal",fontSize:{xs:18,sm:18,md:25}}}>Books</Typography>
                            </Link>
                            
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Link to="/dashboard/new-release" style={{ textDecoration: 'none' }}> 
                                <Typography component="li" sx={{m:{xs:1,md:2}, fontWeight:"normal",fontSize:{xs:18,sm:18,md:25,textWrap:'nowrap'}}}>New Release</Typography>
                            </Link>
                            <Link to="/dashboard/new-release" style={{ textDecoration: 'none' }}> 
                                <Typography component="li" sx={{m:{xs:1,md:2}, fontWeight:"normal",fontSize:{xs:18,sm:18,md:25,textWrap:'nowrap'}}}>Blog</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                    <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,listStyleType:"none" }}>
                        <Link to="/dashboard/my-profile" style={{ textDecoration: 'none' }}>
                            <IconButton
                
                                edge="start"
                                aria-label="menu"
                                title='profile'
                                sx={{ m: {xs:1,sm:1,md:2}, fontSize: {xs:20,sm:20,md:25}, fontWeight: "bold" ,color:"#393280"}}
                            >
                                <Person2OutlinedIcon />
                            </IconButton>

                        </Link>
                        <Link to="/dashboard/my-orders" style={{ textDecoration: 'none' }}>
                            <IconButton
                
                                edge="start"
                                aria-label="menu"
                                title='orders'
                                sx={{ m: {xs:1,sm:1,md:2}, fontSize: {xs:20,sm:20,md:25}, fontWeight: "bold" ,color:"#393280"}}
                            >
                            <ListAltIcon />
                            </IconButton>
                            
                        </Link>
                            <Divider orientation="vertical" variant="middle" flexItem />
                        <Link to="/dashboard/cart" style={{ textDecoration: 'none' }}>
                            <IconButton
                    
                                    edge="start"
                                    title='cart'
                                    aria-label="menu"
                                    sx={{ m: {xs:1,sm:1,md:2}, fontSize: {xs:20,sm:20,md:25}, fontWeight: "bold" ,color:"#393280"}}
                                >
                                
                                <CartIcon />

                            </IconButton>
                            <Divider orientation="vertical" variant="middle" flexItem />
                        </Link>   
                        <Link to="/dashboard/wishlist" style={{ textDecoration: 'none' }}>    
                            <IconButton
                    
                                    edge="start"
                                     title='wishlist'
                                    aria-label="menu"
                                    sx={{ m: {xs:1,sm:1,md:2}, fontSize: {xs:20,sm:20,md:25}, fontWeight: "bold" ,color:"#393280"}}
                                >
                                <Badge badgeContent={4} color="error">
                                    <FavoriteBorderOutlinedIcon />
                                </Badge >  
                            </IconButton>
                        </Link> 
                            <Divider orientation="vertical" variant="middle" flexItem />
                        <Link to="/logout" style={{ textDecoration: 'none' }}>    
                            <IconButton
                    
                                    edge="start"
                                    title='logout'
                                    aria-label="menu"
                                    sx={{ m: {xs:1,sm:1,md:2}, fontSize: {xs:20,sm:20,md:25}, fontWeight: "bold" ,color:"#393280"}}
                                >
                                <LogoutOutlinedIcon />
                            </IconButton>
                        </Link> 
                    </Box>
                    </Grid>
                </Grid>    
            </Toolbar>
        </AppBar>
    </Box>
    );
}

export default Navbar;
