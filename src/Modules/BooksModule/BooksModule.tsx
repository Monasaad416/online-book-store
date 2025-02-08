import { Box, Breadcrumbs, Typography ,Grid, Divider,TextField, Button, FormControl, Select, MenuItem} from '@mui/material';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BooksList from '@booksList/BooksList';
import { useAppDispatch } from '@redux/hook';
import { actGetProducts, removeProducts } from '@redux/products/productsSlice';

const BooksModule: React.FC = () => {



     
    // const {loading,error,value} = useAppSelector((state) => state.products)
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


  const [priceClicked, setPriceClicked] = useState(false);
  const [productTypeClicked, setProductTypeClicked] = useState(false);
  const [availabilityClicked, setAvailabilityClicked] = useState(false);
  const [brandClicked, setBrandClicked] = useState(false);
  const [colorClicked, setColorClicked] = useState(false);
  const [materialClicked, setMaterialClicked] = useState(false);

    const priceIcon = priceClicked ? '-' : '+'; 
    const productTypeIcon = productTypeClicked ? '-' : '+'; 
    const availabilityIcon = availabilityClicked ? '-' : '+'; 
    const brandIcon = brandClicked ? '-' : '+'; 
    const colorIcon = colorClicked ? '-' : '+'; 
    const materialIcon = materialClicked ? '-' : '+'; 

    const handleTogglePrice = () => {
        setPriceClicked((prev) => !prev);
    }

    const handleToggleProductType = () => {
        setProductTypeClicked((prev) => !prev);
    };

    const handleToggleAvailability = () => {
        setAvailabilityClicked((prev) => !prev);
    };

    
    const handleToggleBrand= () => {
        setBrandClicked((prev) => !prev);
    };

    
    const handleToggleColor = () => {
        setColorClicked((prev) => !prev);
    };

    
    const handleToggleMaterial = () => {
        setMaterialClicked((prev) => !prev);
    };

    


   
    return (
        <Box sx={{ ml:-1,mr:-1}}>
            {/* Breadcrumb start */}
            <Box 
                sx={{
                    background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)',  
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: THEMECOLOR.mainColor,
                    p:3
                
                }}
            >
                <Breadcrumbs aria-label="breadcrumb"  sx={{ color:THEMECOLOR.mainColor,textTransform:'uppercase', fontWeight:'500',fontSize:'20px',lineHeight:'32px' }}>
                    <Link color="inherit" to="/dashboard/home">
                        Home
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>Products</Typography>
                </Breadcrumbs>
            </Box>
            {/* Breadcrumb end */}
            <Grid container spacing={2} sx={{ p:3 ,mt:{xs:17,md:3} }}>
                <Grid item xs={12} sm={12} md={2}>
                    {/* price filter */}
                    <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between',width:'100%'}}>
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:14,md:16} }} >
                            Price
                        </Typography>
                        <Typography variant="body2" onClick={handleTogglePrice}
                        sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:20,md:30},mb:1 }}
                        >
                            {priceIcon}
                        </Typography>
                    </Typography>                
                    {priceClicked ? <Typography >
                        <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between',mt:3}}>
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontSize: '16px',fontWeight: '700',lineHeight:'32px',mr:1}}>$</Typography>
                        <Typography>
                            <TextField sx={{borderRadius:0}} size="small"/>
                        </Typography>

                        <Typography variant="body2" sx={{ color:'text.secondary',fontSize: '16px',fontWeight: '700',lineHeight:'32px',mr:2,ml:2}}>to</Typography>
                        
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontSize: '16px',fontWeight: '700',lineHeight:'32px',mr:1}}>$</Typography>
                        <Typography>
                          <TextField sx={{borderRadius:0}} size="small"/>
                        </Typography>
                        </Typography>

                        <Typography component="div">

                         <Button variant="contained" size="large" sx={{ width:'100%', backgroundColor:THEMECOLOR.mainColor,color:'#fff',
                            borderRadius:0,mt:5,fontWeight:500,fontSize:'16px',mb:1 }}>Filter</Button>
                        </Typography>
                        
                    </Typography> :''}
                    <Divider sx={{ height:'5px',width:'100%',color:'#E0E0E0',mb:{xs:2,sm:2,md:3}}} />


                    {/* product type filter */}
                    <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between' ,mt: priceClicked ? 5: 0 }} >
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:14,md:16} ,mb:{xs:2,sm:2,md:3} }} >
                            Product Type
                        </Typography>
                        <Typography variant="body2" onClick={handleToggleProductType}
                        sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:20,md:30},mb:1 }}
                        >
                            {productTypeIcon}
                        </Typography>
                    </Typography>
   
                    {productTypeClicked ? <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between',mt:3}}>
                        <Typography>
                             <FormControl sx={{ m: 1, minWidth: 260}}>
                                <Select
                                    // value={type}
                                    // onChange={handleChangeType}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='type1'>Type1</MenuItem>
                                    <MenuItem value='type2'>Type2</MenuItem>
                                    <MenuItem value='type3'>Type3 </MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Typography> :''}
                    <Divider sx={{ height:'5px',width:'100%',color:'#E0E0E0',mb:{xs:2,sm:2,md:3}}} />

                   {/* availability filter */}
                    <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between' ,mt: productTypeClicked ? 5: 0 }} >
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:14,md:16} ,mb:{xs:2,sm:2,md:3} }} >
                            Availability
                        </Typography>
                        <Typography variant="body2" onClick={handleToggleAvailability}
                        sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:20,md:30},mb:1 }}
                        >
                            {availabilityIcon}
                        </Typography>
                    </Typography>           
                    {availabilityClicked ? <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between',mt:3}}>
                        <Typography>
                             <FormControl sx={{ m: 1, minWidth: 260}}>
                                <Select
                                    // value={type}
                                    // onChange={handleChangeType}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='yes'>Yes</MenuItem>
                                    <MenuItem value='no'>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Typography> :''}
                    <Divider sx={{ height:'5px',width:'100%',color:'#E0E0E0',mb:{xs:2,sm:2,md:3}}} />

                    {/* brand filter */}
                    <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between' ,mt: availabilityClicked ? 5: 0 }} >
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:14,md:16} ,mb:{xs:2,sm:2,md:3} }} >
                            Brand
                        </Typography>
                        <Typography variant="body2" onClick={handleToggleBrand}
                        sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:20,md:30},mb:1 }}
                        >
                            {brandIcon}
                        </Typography>
                    </Typography>                         
                    {brandClicked ? <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between',mt:3}}>
                        <Typography>
                             <FormControl sx={{ m: 1, minWidth: 260}}>
                                <Select
                                    // value={type}
                                    // onChange={handleChangeType}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='brand1'>Brand1</MenuItem>
                                    <MenuItem value='brand2'>Brand2</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Typography> :''}
                    <Divider sx={{ height:'5px',width:'100%',color:'#E0E0E0',mb:{xs:2,sm:2,md:3}}} />

                    {/* color filter */}
                    <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between' ,mt: brandClicked ? 5: 0 }} >
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:14,md:16} ,mb:{xs:2,sm:2,md:3} }} >
                            Color
                        </Typography>
                        <Typography variant="body2" onClick={handleToggleColor}
                        sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:20,md:30},mb:1 }}
                        >
                            {colorIcon}
                        </Typography>
                    </Typography>
         
                    {colorClicked ? <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between',mt:3}}>
                        <Typography>
                             <FormControl sx={{ m: 1, minWidth: 260}}>
                                <Select
                                    // value={type}
                                    // onChange={handleChangeType}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='color'>Color1</MenuItem>
                                    <MenuItem value='color2'>Color2</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Typography> :''}

                    <Divider sx={{ height:'5px',width:'100%',color:'#E0E0E0',mb:{xs:2,sm:2,md:3}}} />

                    {/* material filter */}
                    <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between' ,mt: colorClicked ? 5: 0 }} >
                        <Typography variant="body2" sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:14,md:16} ,mb:{xs:2,sm:2,md:3} }} >
                            Material
                        </Typography>
                        <Typography variant="body2" onClick={handleToggleMaterial}
                        sx={{ color:THEMECOLOR.mainColor,fontWeight:{xs:400,md:500},fontSize:{xs:20,md:30},mb:1 }}
                        >
                            {materialIcon}
                        </Typography>
                    </Typography>
         
                    {materialClicked ? <Typography component="div" sx={{ display: 'flex', justifyContent:'space-between',mt:3}}>
                        <Typography>
                             <FormControl sx={{ m: 1, minWidth: 260}}>
                                <Select
                                    // value={type}
                                    // onChange={handleChangeType}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='material1'>Material1</MenuItem>
                                    <MenuItem value='material2'>Material2</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Typography> :''}


    
                  
                   
    
      
                </Grid>
        
                <Grid item xs={12} sm={12} md={10}>
                    {/* <Grid container>
                        <Grid item sm={12} md={3}  sx={{  }}>
                            <Typography component="div" sx={{ display:'flex',justifyContent:'center' }}>
                                <Typography variant='body1' sx={{ color:THEMECOLOR.mainColor, fontWeight:{xs:'400',md:'500'},fontSize:{xs:'14px',md:'18px'},lineHeight:'32px', }}>Sort from : A-Z</Typography>
                                 <KeyboardArrowDownIcon sx={{color: 'text.secondary',fontSize:'28px',ml:1,mt:0.3}}/>
                            </Typography> 
                        </Grid>
                         <Grid item sm={12} md={3} >
                            <Typography component="div" sx={{ display:'flex',justifyContent:'center' }}>
                                <Typography variant='body1' sx={{ color:THEMECOLOR.mainColor, fontWeight:{xs:'400',md:'500'},fontSize:{xs:'14px',md:'18px'},lineHeight:'32px', }}>Showing 1 - {value.length >= 6 ? 6 : value.length} of {value.length} result</Typography>
                                 <KeyboardArrowDownIcon sx={{color: 'text.secondary',fontSize:'28px',ml:1,mt:0.3}}/>
                            </Typography> 
                        </Grid>
                        <Grid item sm={12} md={3} >
                            <Typography component="div" sx={{ display:'flex',justifyContent:'center' }}>
                                <Typography variant='body1' sx={{ color:THEMECOLOR.mainColor, fontWeight:{xs:'400',md:'500'},fontSize:{xs:'14px',md:'18px'},lineHeight:'32px', }}>Show : {value.length >= 6 ?  value.length : 6}</Typography>
                                 <KeyboardArrowDownIcon sx={{color: 'text.secondary',fontSize:'28px',ml:1,mt:0.3}}/>
                            </Typography> 
                        </Grid> 
                         <Grid item sm={12} md={3} sx={{ fontWeight:{xs:'400',md:'500'},fontSize:{xs:'14px',md:'18px'},lineHeight:'32px' }}>
                            <Typography component="div" sx={{ display:'flex',justifyContent:'center' }}>
                                <WidgetsIcon sx={{color:THEMECOLOR.redColor,fontSize:'35px',mt:2}}/>
                                <MenuIcon sx={{fontSize:'35px',mt:2}}/>
                            </Typography>
                        </Grid> *
                    </Grid> */}

                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} >
                            <BooksList/>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Box>

    );
}

export default BooksModule;
