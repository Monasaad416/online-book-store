import { actGetCartItems } from "@redux/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useEffect } from "react";


export const useGetCartItemststs = ()=>{
    const dispatch = useAppDispatch();

    useEffect(() => {
    // mount
    dispatch(actGetCartItems());
    }, [dispatch]);

    const {productsInfo} = useAppSelector((state) => state.cart);
    return productsInfo;

} 