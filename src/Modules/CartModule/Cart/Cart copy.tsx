import { Box, Breadcrumbs, Typography,Grid, Divider, TableContainer, TableHead, TableRow, TableCell, TableBody, Table ,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect } from 'react';
// import { AddressElement, CardElement, useElements, useStripe  } from '@stripe/react-stripe-js';

import { useAppSelector,useAppDispatch } from '@redux/hook';
import actGetProductsByItems from '@redux/cart/actions/actGetCartItems';

const Cart: React.FC = () => {

const {items} = useAppSelector((state) => state.cart);

const dispatch = useAppDispatch();

useEffect(() => {
    // mount

    const promise = dispatch(actGetProductsByItems());
    // unmount
    return () => {
        promise.abort();
    };
}, [dispatch,items]);

// console.log(cartItems);

    // useEffect(() => {
    //     getBasketItems(); // Call the function when the component mounts
    // }, []);

    // const stripe = useStripe();
    // const elements = useElements();



    //  const { handleSubmit,formState:{errors}} = useForm({defaultValues: {email:"",password:""}});


    // const submit :SubmitHandler<any> = async (event:FormEvent) => {
    // // We don't want to let default form submission happen here,
    // // which would refresh the page.
    // event.preventDefault();

    // if (!stripe || !elements) {
    //   // Stripe.js hasn't yet loaded.
    //   // Make sure to disable form submission until Stripe.js has loaded.
    //   return;
    // }

    // const cardElement =  elements.getElement(CardElement);
    // const addressElement = elements.getElement(AddressElement);
    // const address = await addressElement?.getValue();
    // const {error,token} = await stripe.createToken(cardElement);

    // console.log(token);

    // const result = await stripe.confirmPayment({
    //   //`Elements` instance that was used to create the Payment Element
    //   elements,
    //   confirmParams: {
    //     return_url: "https://example.com/order/123/complete",
    //   },
    // });

    // if (result.error) {
    //   // Show error to your customer (for example, payment details incomplete)
    //   console.log(result.error.message);
    // } else {
    //   // Your customer will be redirected to your `return_url`. For some payment
    //   // methods like iDEAL, your customer will be redirected to an intermediate
    //   // site first to authorize the payment, then redirected to the `return_url`.
    // }
    // };



    return (
        // onSubmit={handleSubmit(submit)}
        <Box sx={{ ml:-1,mr:-1, color: THEMECOLOR.mainColor}} >
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
                    <Typography sx={{ color: 'text.primary' }}>Cart</Typography>
                </Breadcrumbs>
            </Box>
            {/* Breadcrumb end */}

            <Grid container spacing={2} sx={{ p:3 }}>
                <Grid item xs={12} sm={12} md={7}>        
                    <Box 
                        sx={{
                            background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)',  
                            borderRadius:'16px',
                            textAlign:'left',
                            p:4

                        }}
                    >
                        <Typography sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}} component="p">products details</Typography>
                        <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>

                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Num</TableCell>
                                    <TableCell>Book</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Cost</TableCell>
                                    <TableCell>Subtotal</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {/* {cartItems.map((row,index) => (
                                    <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        ss
                                    </TableCell>
                                    <TableCell align="right">rr</TableCell>
                                    <TableCell align="right">tt</TableCell>
                                    <TableCell align="right">aa</TableCell>
                                    <TableCell align="right">bb</TableCell>
                                    </TableRow>
                                ))} */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
        
                <Grid item xs={12} sm={12} md={5}>
                    <Box 
                        sx={{
                            background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)',  
                            borderRadius:'16px',
                            textAlign:'left',
                            m:4,
                            p:4
                        }}
                    >
                        <Typography sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}} component="p">cart total cost</Typography>
                        <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>
                        <Typography component="div" sx={{ mr:3,ml:3, display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <Typography component='span' sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}}>total</Typography>
                            <Typography component='span' sx={{ textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px' }}>36 $</Typography>
                        </Typography>

                        <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>
                        <Typography component="div" sx={{ mr:3,ml:3, display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <Typography component='span' sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}}>Tax</Typography>
                            <Typography component='span' sx={{ textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px' }}>1.6 $</Typography>
                        </Typography> 

                        <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>
                        <Typography component="div" sx={{ mr:3,ml:3, display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <Typography component='span' sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}}>Total Cost</Typography>
                            <Typography component='span' sx={{ textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px' }}>37.6 $</Typography>
                        </Typography> 
                    </Box>

                    <Box 
                        sx={{
                            background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)',  
                            borderRadius:'16px',
                            textAlign:'left',
                            p:4,
                            mr:4,ml:4,
                        }}
                    >
                        <Typography sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}} component="p">Shipping Data</Typography>
                        <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>
                        {/* <AddressElement options={{
                            mode: "shipping",
                            fields: {
                                phone: 'always',
                            },
        
                        }} /> */}


                
                    </Box>


                    <Box 
                        sx={{
                            background: 'linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)',  
                            borderRadius:'16px',
                            textAlign:'left',
                            m:4,
                            p:4
                        }}
                    >
                        <Typography sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}} component="p">payment info</Typography>
                        <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>
                        {/* <CardElement /> */}
                        
                    </Box>



                 




                    <Button variant="contained" size='large' sx={{fontSize:'20px',mt:3,width:'100%', borderRadius:0,backgroundColor:THEMECOLOR.orangeColor}}  endIcon={<AddShoppingCartIcon />}>
                        Procced
                    </Button>
                </Grid>
            </Grid>





   
        </Box>
    );
}

export default Cart;
