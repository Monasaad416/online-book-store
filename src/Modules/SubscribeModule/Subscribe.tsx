
import { Box, Container, Grid,Typography,Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import EmailIcon from '@mui/icons-material/Email';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { THEMECOLOR } from '@constants/THEME_COLORS';


const Subscribe = () => {

        const Item = styled(Box)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        }));


        

    return (
        <Box sx={{ p:-1,m:-1,bgcolor:'#FCEBEA',height:'60vh' }}>
            <Container maxWidth="md" sx={{ bgcolor: THEMECOLOR.orangeColor}}>
                <Typography component="div" sx={{ display: 'flex','justifyContent': 'center',alignItems: 'center',flexDirection:'column'}}>
                    <Typography component="h3" sx={{ m:{xs:1,sm:1,md:8},fontWeight:{xs:'400',sm:'400',md:'700'},fontSize:{xs:'24px',sm:'24px',md:'56px'},lineHeight:'67.2px',color:'white'}}>
                        Subscibe to Our Newsletter
                    </Typography>
                    <Typography component="p" sx={{ mb:5,mr:{xs:1,sm:1,md:10},ml:{xs:1,sm:1,md:10},fontWeight:{xs:'300',sm:'300',md:'500'},
                                fontSize:{xs:'16px',sm:'16px',md:'20px'},
                                lineHeight:{xs:'30px',sm:'30px',md:'41.6px'},
                                color:'white',textAlign:'center'}}>
                        Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.
                    </Typography>
                    <Box sx={{ backgroundColor:'white',
                        mb:{xs:-3,md:-7},
                        width:'65%',
                        mr:{xs:1,sm:1,md:6},
                        ml:{xs:1,sm:1,md:6},
                        pt:2,pb:2,
                        textAlign:'center'}}>
                               <Grid container spacing={2} sx={{ width: '100%', height: '100%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Grid item sm={1} md={2} >
                                        <Item>
                                            <EmailIcon sx={{ color:'#6C777C',border:'1px solid #bfc4c6' ,p:1,ml:{xs:1,sm:1,md:3},mr:{xs:1,sm:1,md:3} }}/>
                                        </Item>
                                    </Grid>
                                    <Grid item sm={9} md={6}> 
                                        <Item>
                                           <FormControl>
                                            <Input
                                                placeholder="youremail123@gmail.com"
                                                variant="soft"
                                                sx={{ bgcolor:'transparent' }}
                                            />
                                           </FormControl>  
                                        </Item>
                                    </Grid>
                                    <Grid item sm={12} md={4} sx={{ textAlign:'center'}}> 
                                        <Item>
                                              <Button  sx={{ borderRadius:0,textTransform:'uppercase',fontSize:'16px' ,fontWeight:'700',lineHeight:'19.36px',color:'white',
                                                backgroundColor: THEMECOLOR.orangeColor,pt:2,pb:2,pl:3,pr:3 }}>subscribe</Button>
                                        </Item>
                                    </Grid>
                                </Grid>
                    </Box>
                </Typography>

                
            </Container>
        </Box>

    );
}

export default Subscribe;

