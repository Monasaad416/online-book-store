import { Box, Breadcrumbs, Typography,Grid, Divider, TableContainer, TableHead, TableRow, TableCell, TableBody, Table ,Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCallback, useEffect, useState } from 'react';
import { useAppSelector,useAppDispatch } from '@redux/hook';
import actGetCartItems from '@redux/cart/actions/actGetCartItems';
import book1 from"@assets/imgs/books/book3 4.png"
import actChangeItemQty from '@redux/cart/actions/actChangeItemQty';
import { AddressElement, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BASE_URLS } from '@constants/END_POINTS';
import DeleteIcon from '@mui/icons-material/Delete';
import actDeleteItem from '@redux/cart/actions/actDeleteItem';
import { removeCartProductsInfo } from '@redux/cart/cartSlice';
import styles from './Cart.module.css';


const Cart: React.FC = () => {

  const dispatch = useAppDispatch();
  const [cartItems, setCartItems] = useState<{ book: string; quantity: number}[]>([]);
  const { _id,items, loading, total, productsInfo } = useAppSelector((state) => state.cart);//_id is cart id
  const {accessToken} = useAppSelector((state) => state.customerAccessToken);
  const navigate = useNavigate();

  //console.log(accessToken)

  // Fetch cart items on mount
  useEffect(() => {
    dispatch(actGetCartItems());


    // unmount
      return () => {
          dispatch(removeCartProductsInfo());
      };

  }, [dispatch]);

  // Initialize cartItems
  useEffect(() => {
    setCartItems(items);
    //console.log('Book cartItems:', items);
  }, [items]);

const handleIncrement = useCallback( (book: string) => {
  setCartItems(prevItems => {
    // Update the quantities
    const newCartItems = prevItems.map(item =>
      item.book === book ? { ...item, quantity: item.quantity + 1 } : item
    );

    // Create a new array with only book and quantity properties
    const updatedItems = newCartItems.map(item => ({
      book: item.book,
      quantity: item.quantity
    }))

    //console.log(updatedItems);
    dispatch(actChangeItemQty({ cartId: _id, items: updatedItems }));
    toast.success('item updated successfully', {
                theme: "colored"
            })

    return updatedItems;
  });
},[dispatch,_id]);

const handleDecrement = useCallback((book: string) => {
  setCartItems(prevItems => {
    const newCartItems = prevItems.map(item =>
      item.book === book ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );


    const updatedItems = newCartItems.map(item => ({
      book: item.book,
      quantity: item.quantity
    }));
     dispatch(actChangeItemQty({cartId:_id,items:updatedItems}));
        toast.success('item updated successfully', {
                theme: "colored"
            })
    return updatedItems;
  });
},[dispatch,_id]);


const handleDeleteItem = useCallback((book: string) => {

  setCartItems(prevItems => {
    const newCartItems = prevItems.filter(item =>
      item.book !== book);

     dispatch(actDeleteItem({book}));
     toast.success('Item deleted successfully', {
                theme: "colored"
            })
     dispatch(actGetCartItems());
    return newCartItems;
  });
},[dispatch]);



const stripe = useStripe();
const elements = useElements();
const {
  handleSubmit,
} = useForm();
// e: FormEvent
const handleSubmitForm = async () =>{
  //  e.preventDefault;
  if(!stripe || !elements) {
    return;
  }

  const cardElement = elements.getElement(CardElement);
  const addressElement = elements.getElement(AddressElement);

  if(!cardElement || !addressElement) {
    return;
  }

  const address = await addressElement.getValue();
   const {error,token} = await stripe.createToken(cardElement);

  

  if(error) {
    toast.error(error.message, {
        theme: "colored"
    });
  } else {
    if(address.complete === true) {
  
          const data = {
            token: token.id,
            delivery_address: {
              country: address?.value?.address?.country,
              city: address?.value?.address?.city,
              state: address?.value?.address?.state,
              building: 1,
              street: "street",
              floor: 1,
              appartment: 1,
              mobile: address?.value?.phone,
              additional_info: 'additional info',
              location:{
                  type:"Point",
                  coordinates: [30.0444,31.2357]
                  
              }
            }
          }
        try {
        

          console.log(data,_id);
          const response = await axios.post(
          BASE_URLS.createOrder(_id), 
            data,
            {
              headers: {
                "Authorization": `Bearer ${accessToken}`,
              }
            }
          );
  
          console.log(response);
          navigate('/dashboard/confirmed-order',{ state: { response: response.data } });
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error('Error:', error);
          } else {
            console.error('Unexpected Error:', error);
          }
        }
      

      }
  }
}
  if (loading === 'pending') {
    return <div>Loading...</div>;
  }


  // Check if cartItems is defined and not empty
if (cartItems && cartItems.length === 0) {
  return <div>No items in the cart.</div>;
}

const taxRate = 0.14;
const tax = parseFloat((total * taxRate).toFixed(2));
const totalCost = total+tax;

//console.log(taxRate,tax,totalCost)

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
                <Breadcrumbs aria-label="breadcrumb"  sx={{ pt:{xs:20,md:12},color:THEMECOLOR.mainColor,textTransform:'uppercase', fontWeight:'500',fontSize:'20px',lineHeight:'32px' }}>
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
                            p:{xs:0,md:4}

                        }}
                    >
                        <Typography sx={{textTransform:'capitalize',pr:3,pl:3,fontSize: '20px',fontWeight: 500,lineHeight: '32.78px'}} component="p">products details</Typography>
                        <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>

                        <TableContainer>
                            <Table sx={{ minWidth:{ xs:'300px',md:'650px'}}} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell sx={{width:'2%',display:{xs:'none',md:'inline-block'} }}>Ser.</TableCell>
                                    <TableCell sx={{width:'30%' ,fontSize:{xs:'12px'}}}>Book</TableCell>
                                    <TableCell sx={{width:'15%',display:{xs:'none',md:'inline-block'}}}>Name</TableCell>
                                    <TableCell sx={{width:'8%' ,fontSize:{xs:'12px'}}}>Amount</TableCell>
                                    <TableCell sx={{width:'15%' ,fontSize:{xs:'12px'}}}> Cost</TableCell>
                                    <TableCell sx={{width:'15%' ,fontSize:{xs:'12px'}}}>Subtotal</TableCell>
                                    <TableCell sx={{width:'15%' ,fontSize:{xs:'12px'}}}>Delete Item</TableCell>
                                </TableRow>
                                </TableHead>
                      <TableBody>
                        {productsInfo.length > 0 ? (
                          productsInfo.map((product, index) => {
                            // Safely find the cart item corresponding to the product
                            const foundedItem = cartItems?.find(item => item.book === product.book);

                            return (
                              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ display:{xs:'none',md:'inline-block'} }}>{index + 1}</TableCell>
                                <TableCell >
                                  <img className={styles.book_img} src={book1} alt="book" />
                                </TableCell>
                                <TableCell sx={{ fontSize:{xs:'12px',md:'14px' },display:{xs:'none',md:'inline'} }}>{product.name}</TableCell>
                                <TableCell>
                                  <div key={product.book} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <Button
                                      variant="contained"
                                      
                                      onClick={() => handleIncrement(product.book)}
                                      sx={{ fontSize: {xs:'10px',md:'20px'}, p:{xs:1,md:2},backgroundColor: THEMECOLOR.mainColor, borderRadius: '10px 0 0 10px', width: {xs:'6px',md:'10px'}, height: '15px', minWidth:{xs:'6px',md:'10px'} }}
                                    >
                                      +
                                    </Button>
                                    <Typography variant="body2"
                                     sx={{ textAlign: 'center', fontSize: {xs:'12px',md:'20px'},p:1 }}>
                                      {foundedItem?.quantity || 0}
                                    </Typography>
                                    <Button
                                      variant="contained"
                                      onClick={() => handleDecrement(product.book)}
                                      sx={{ fontSize: {xs:'10px',md:'20px'}, p:{xs:1,md:2},backgroundColor: THEMECOLOR.mainColor, borderRadius: '0 10px 10px 0 ', width: {xs:'6px',md:'10px'}, height: '15px', minWidth:{xs:'10px',md:'30px'} }}
                                    >
                                      -
                                    </Button>
                                  </div>
                                </TableCell>
                                <TableCell sx={{fontSize: {xs:'12px',md:'20px'} }}>{product.price}</TableCell>
                                <TableCell>
                                  <Typography variant="body2" sx={{ textAlign: 'center', fontSize: {xs:'12px',md:'20px'} }}>
                                    {foundedItem ? foundedItem.quantity * product.price : (product.quantity || 0) * product.price}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <DeleteIcon onClick={() => handleDeleteItem(product.book)} sx={{ fontSize: '25px', color: 'rgb(211, 47, 47)', p: 0, m: 0 }}/>
                                </TableCell>
                              </TableRow>
                     
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} align="center">
                              No items in the cart.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>


                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
        
          
                  <Grid item xs={12} sm={12} md={5} sx={{textAlign:'center'}}>
                          <form onSubmit={handleSubmit(handleSubmitForm)}>
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
                              <Typography component='span' sx={{textTransform:'capitalize',pr:{xs:1,md:3},pl:{xs:1,md:3},fontSize:{xs:'14px',md: '20px'},fontWeight: 500,lineHeight: '32.78px'}}>total</Typography>
                              <Typography component='span' sx={{ textTransform:'capitalize',pr:{xs:1,md:3},pl:{xs:1,md:3},fontSize:{xs:'14px',md: '20px'},fontWeight: 500,lineHeight: '32.78px' }}>{total} $</Typography>
                          </Typography>

                          <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>
                          <Typography component="div" sx={{ mr:3,ml:3, display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                              <Typography component='span' sx={{textTransform:'capitalize',pr:{xs:1,md:3},pl:{xs:1,md:3},fontSize:{xs:'14px',md: '20px'},fontWeight: 500,lineHeight: '32.78px'}}>Tax</Typography>
                              <Typography component='span' sx={{ textTransform:'capitalize',pr:{xs:1,md:3},pl:{xs:1,md:3},fontSize:{xs:'14px',md: '20px'},fontWeight: 500,lineHeight: '32.78px' }}>{tax} $</Typography>
                          </Typography> 

                          <Divider sx={{ width: '95%',height: '0.3px' ,backgroundColor:'#BEBEBE', m:'auto'}}/>
                          <Typography component="div" sx={{ mr:3,ml:3, display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                              <Typography component='span' sx={{textTransform:'capitalize',pr:{xs:1,md:3},pl:{xs:1,md:3},fontSize:{xs:'14px',md: '20px'},fontWeight: 500,lineHeight: '32.78px'}}>Total Cost</Typography>
                              <Typography component='span' sx={{ textTransform:'capitalize',pr:{xs:1,md:3},pl:{xs:1,md:3},fontSize:{xs:'14px',md: '20px'},fontWeight: 500,lineHeight: '32.78px' }}>{totalCost} $</Typography>
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

                          <Typography component="div" sx={{mt:4}}>


                          <AddressElement
                            options={{
                              mode: 'shipping',
                              fields: {
                                phone: 'always', // Ensure this is correctly set to 'always'
                              },
                            }}
                          />
                          </Typography>
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
                          <Typography component="div" sx={{mt:4}}>
                            <CardElement/>
                          </Typography>
                          
                      </Box>

                      <Button type="submit" variant="contained" size='large' sx={{fontSize:{xs:'12px',sm:'14px',md:'20px'},mt:3,width:{xs:'50%',md:'90%'}, borderRadius:0,backgroundColor:THEMECOLOR.orangeColor,mr:{md:4},ml:{md:4}}}  endIcon={<AddShoppingCartIcon />}>
                          Procced
                      </Button>
                    </form>
                  </Grid>
               




                
            </Grid>
         
        </Box>
    );
}

export default Cart;
