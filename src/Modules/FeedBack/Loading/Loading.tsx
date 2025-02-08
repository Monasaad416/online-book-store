import { THEMECOLOR } from '@constants/THEME_COLORS';
import { TLoading } from '@customTypes/shared';
import { Typography } from '@mui/material';
import React from 'react';


type LoadingProps ={
    status: TLoading;
    error: null | string;
    children: React.ReactNode;
}
const Loading = ({status,error,children} : LoadingProps) => {
    if(status === 'pending') {
        return <Typography component="p" sx={{color:THEMECOLOR.mainColor,fontSize:'20px',fontWeight:"600",textAlign:'center'}}>Loading...</Typography>
    }

    if(status === 'failed') {
        return <p>{error}</p>
    }
     
    return (
        <>{children}</>
            
    );
}

export default Loading;
