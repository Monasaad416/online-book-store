import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Box } from '@mui/material';

const MasterLayout = () => {
    return (
        <Box sx={{ m:0 ,p:0}}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </Box>
    );
}

export default MasterLayout;
