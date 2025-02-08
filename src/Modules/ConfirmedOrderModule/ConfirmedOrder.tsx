import { Box, Button, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { THEMECOLOR } from '@constants/THEME_COLORS';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmedOrder = () => {
    const  navigate = useNavigate();

    const location = useLocation();
    const { response } = location.state as { response: object };
    console.log(response)
    return (
        <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center',mt:14 }}>
            <Paper elevation={3} sx={{ height: { xs: "100vh", sm: "100vh", md: "80vh" ,xl:"70vh" } ,
             width: { xs: "60vw", sm: "60vw", md: "40vw" ,xl:"40vw"}  ,m:5 , display:'flex',justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
                <CheckCircleIcon  sx={{ color:THEMECOLOR.orangeColor ,fontSize: 55, fontWeight: "bold"}}/>
         
                <Typography component="p" sx={{ textTransform:'capitalize',fontWeight:'bold',fontSize:'30px' }}>
                    order confirmed
                </Typography>
                   
                <Typography component="p" variant="body2" sx={{ fontSize:'14px' ,textWrap:"wrap" ,m:2}}>
                    Your order has been placed successfully.Thank you for shopping with us.
                </Typography>

                <Typography component="p" sx={{mt:5,mb:5 ,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Typography component="p" variant="body2" sx={{ fontSize:'16px',fontWeight:'500'}}>
                        Order Number : 
                    </Typography>
                    <Typography component="p" variant="body2" sx={{ fontSize:'12px',fontWeight:'400'}}>
                        {response.data._id}
                    </Typography>

                    <Typography component="p" variant="body2" sx={{ fontSize:'16px',fontWeight:'500'}}>
                        Total Amount : 
                    </Typography>
                    <Typography component="p" variant="body2" sx={{ fontSize:'12px',fontWeight:'400'}}>
                        {response.data.total} $ 
                    </Typography>
                    <Button variant="outlined"  onClick={()=> navigate("/dashboard")}
                    sx={{ color: "#6251DD" ,width:"100%" ,padding:"8px 20px",marginTop:"20px",border:"1px solid #6251DD",
                        "&:hover":{border:"2px solid#6251DD"}
                    }} size="large"
                    >Back to home</Button>
                    
                </Typography>
                </Paper>
        </Box>
    );
}

export default ConfirmedOrder;
