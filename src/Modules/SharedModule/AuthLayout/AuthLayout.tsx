import { Outlet } from 'react-router-dom';
import picture from '../../../assets/imgs/Picture.png'
import logo from '../../../assets/imgs/Logo.png'
import { Grid } from '@mui/material';



const AuthLayout = () => {
    return (
      
        <Grid container sx={{ p:-1,m:-1 }}>
            <Grid item md={6} xs={12} >
                <img
                    src={picture}
                    alt="login"
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover', 
                    }}
                />
            </Grid>
            <Grid item md={6} xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
                <img
                    src={logo}
                    alt="logo"
                />
                <Outlet/>
            </Grid>
        </Grid>



       
    );
}

export default AuthLayout;
