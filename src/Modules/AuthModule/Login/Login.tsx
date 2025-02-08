import { Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URLS } from '../../../Constants/END_POINTS';
import { emailValidation } from '../../../Constants/VALIDATIONS';
import { useDispatch } from 'react-redux'
import { getCustomerAccessToken } from '../../../redux/customerTokenSlice';




const Login: React.FC = () => {
    const navigate = useNavigate();
    const forgetPassword = () => {
        navigate('/forget-password');
    };

    interface FormInputs{
        email:string;
        password:string;
    }

 
    const { register,handleSubmit,formState:{errors}} = useForm<FormInputs>({defaultValues: {email:"",password:""}});
    const dispatch = useDispatch()

           

    const submit :SubmitHandler<FormInputs> = async (data) => {
    try {

            const response = await axios.post(BASE_URLS.login,data);

            // localStorage.setItem('customerAccessToken',response?.data?.data.accessToken);
            dispatch(getCustomerAccessToken(response?.data?.data.accessToken)); 

            toast.success(response?.data?.message, {
                theme: "colored"
            });

            navigate("/dashboard/home");

  
            // setTimeout(() =>{

            // }, 2000);   
    } catch (err) {
        console.log(err);
        toast.error("Login Failed!",{
            theme:"colored"
        });
    }

    }
    return (
        <Box sx={{ textAlign:"start" }}>
            <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}}>
                Welcome back!
            </Typography>
           <Typography component="h5" variant="h5" fontWeight="bold">
                Login to your account
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit(submit)}>
                <FormGroup>
                    <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}} >
                        Email
                    </Typography>
                </FormGroup>    
                <TextField id="filled-basic" label="email" variant="filled" type='email' autoComplete='email' 
                    placeholder='john@gmail.com' sx={{width:"400px",padding:"0"}}
                    error={!!errors?.email} 
                    helperText={errors.email ? errors.email.message : ""}
                    {...register('email',emailValidation)}
                    />
                <FormGroup>
                    <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}}>
                        Password
                    </Typography>
                    <TextField id="filled-basic" label="password" placeholder='********' type='password' autoComplete='password' variant="filled" 
                    sx={{width:"400px",padding:"0"}} 
                    error={!!errors?.password} 
                    helperText={errors.password ? errors.password.message : ""}
                    {...register('password',{required:"Password is required"})}></TextField>
                    

                    <Grid container alignItems="center">
                        <FormControlLabel control={<Checkbox />} label="Remmember me" sx={{color: "#6251DD" }}/>

                        <Typography component="p" variant="body2" sx={{ color: "#6251DD",cursor:"pointer"}} onClick={ forgetPassword}>
                            Forget password?
                        </Typography>
                    </Grid>
            



                </FormGroup>


                <Button variant="contained" type="submit"
                sx={{ backgroundColor: "#EF6B4A",color:"white" ,width:"100%" ,padding:"8px 0" ,marginTop:"50px",  "&:hover":{border:"2px solid#6251DD"}}} size="large"
                >
                    Login
                </Button>
                <br/>
                <Button variant="outlined"  onClick={()=> navigate("/register")}
                sx={{ color: "#6251DD" ,width:"100%" ,padding:"8px 0",marginTop:"20px",border:"1px solid #6251DD",
                    "&:hover":{border:"2px solid#6251DD"}
                }} size="large"
                >Register</Button>
            </Box>
            


        </Box>
    );
}

export default Login;
