import { TAddToCart } from '@customTypes/AddToCartProps';
import { TDecodedToken } from '@customTypes/decodedToken';
import { Button} from '@mui/material';
import { actGetCartItems, addToCart } from '@redux/cart/cartSlice'
import { actAddNewItemToCart } from '@redux/cart/newCartItemSlice'
import { useAppDispatch, useAppSelector } from '@redux/hook.ts';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';


const AddToCart: React.FC <TAddToCart> = ({ book, quantity =1} ) => {
  

    // const {loading,error,items} = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch() 


    const {accessToken} = useAppSelector((state) => state.customerAccessToken);
            const decodedUserToken = accessToken? jwtDecode<TDecodedToken>(accessToken) : null;
  


     const handleAddToCart = async () => {
        if(accessToken){
            if (accessToken && decodedUserToken) {
                dispatch(addToCart({book:book , customerId: decodedUserToken.sub})); 
                dispatch(actAddNewItemToCart( {book:book , quantity: quantity}));
                toast.success('New item addedd to cart successfully', {
                    theme: "colored"
                });
                dispatch(actGetCartItems());
            }
        } else {
            toast.error('Please login to continue shopping');
        }
        //     navigate("/dashboard/cart");
    };

    return (

        <Button  className='add_to_cart' onClick={() => handleAddToCart()} variant="contained" sx={{
            backgroundColor: '#ED553B',
            borderRadius: 0 ,
            position:'absolute',
            top: '40%',
            left: '49%',
            transform: 'translate(-50%, -50%)',
            opacity: 1,
            transition: 'opacity 0.3s ease', pt:1,pb:1,pr:4,pl:4}}>Add To Cart</Button>

    )
}

export default AddToCart;
