import { Box, Typography, Card, CardContent, Paper,} from '@mui/material';
import {  SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import book1 from"@assets/imgs/books/book3 4.png"
import styles from '@Book.module.css';
import AddToCart from '@addToCartModule/AddToCart';
// import { increment } from '@redux/counterSlice.ts'
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import AddToCart from '@addToCartModule/AddToCart.tsx';




interface IProps {_id:string ;
                    name:string ;
                    description:string ;
                    author:string ;
                    price:number ; 
                    category:string 
                };
const Book: React.FC<IProps> = (props) => {

    const{_id, name, description ,author ,price,category} = props;

   
    // const [basketItem, setBasketItem] = useState([]);
    // const navigate = useNavigate();


 

    // const { register,handleSubmit} = useForm<FormInputs>({defaultValues: {book_id:"",quantity:1}});


    // const addBasketItem :SubmitHandler<FormInputs>= async (data) => {
    //     try {

    
    //         console.log(data);
    //         const response = await axios.post(BASE_URLS.addBasketItem,data, {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`
    //                 }
    //             });


    //             localStorage.setItem('customerAccessToken',response?.data?.data.accessToken);

    //         console.log(response.data.data);
    //        //setBasketItem(response);
    //         //setBooks(response.data.data);
    //     } catch (error) {
    //         console.error("Add To Cart Error:", error);
    //     }
    // };





    //  const handleAddToCart = ({book_id, quantity }: FormInputs) => {
   
    //     dispatch(increment()); 
    //     addBasketItem({book_id, quantity});

    //     navigate("/dashboard/cart");
    // };



    // useEffect(() => {
    //     // addBasketItem(customerAccessToken <FormInput>); // Call the function when the component mounts
    // }, [basketItem]);

    // if (books.length === 0) {
    //     return <Typography variant="h6">No books available.</Typography>;
    // }
    return (
            <SwiperSlide key={_id}>
                <Box display="flex" justifyContent="center" flexDirection='column'>
                    <Card sx={{ minWidth: 150, boxShadow: 'none', m: 2 }}>
                        <CardContent>
                            <Paper className={`${styles.paper}`} elevation={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "320px" }}>
                                <img src={book1} className={`${styles.book_img}`} alt={name} style={{ width: '100%' }} />
                            </Paper>
                            {/* <Typography component="div" className={`${styles.add_to_cart}`} sx={{ textAlign: 'center', mt: 2 }}>

                                <TextField type='hidden'
                                    defaultValue={_id}
                                    {...register('book_id')}
                                    />
                                    <TextField type='hidden'
                                    defaultValue="1"
                                    {...register('quantity')}
                                    />
                                <Button     onClick={() => 
                                            handleAddToCart({
                                                book_id: _id,
                                                quantity: 1,   
                                            })
                                } variant="contained" sx={{backgroundColor: '#ED553B', borderRadius: 0 }}>Add To Cart</Button>
                            </Typography>
                            
                            */}


                              <AddToCart _id={_id} quantity={1}/> 

                            
                           <Typography gutterBottom component="p" sx={{ textAlign: 'center', fontWeight: '600', mt: 3 }}>
                                {name}
                            </Typography>
                            <Typography component="p" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                                {author}
                            </Typography>
                            <Typography component="p" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                                {category}
                                {description}
                            </Typography>
                            <Typography component="p" sx={{ textAlign: 'center', color: '#ED553B',fontWeight:700,fontSize:'22px',lineHeight:'26.6px' }}>
                                ${price.toFixed(2)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </SwiperSlide>
            )


}

export default Book;
