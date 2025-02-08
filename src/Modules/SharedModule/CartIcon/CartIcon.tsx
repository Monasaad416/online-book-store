
import { Badge } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import { useGetCartItemststs } from 'src/hooks/useGetCartItems';




const getTotLCartCount = createSelector((state: RootState) => state.cart.productsInfo || [] , (productsInfo)=> {
//console.log(productsInfo)

    const totalQty = productsInfo.reduce((acc, product) => acc + (product.quantity ||0 ), 0);
        return totalQty;
});



const CartIcon = () => {
    const totalQty = useSelector(getTotLCartCount);

    //console.log(totalQty);



    useGetCartItemststs();



    return (
        <Badge badgeContent={totalQty} color="error">
                <LocalMallOutlinedIcon />
        </Badge>
    );
}

export default CartIcon;
