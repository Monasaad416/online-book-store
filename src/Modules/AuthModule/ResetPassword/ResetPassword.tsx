import { Button, FormGroup, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const ResetPassword: React.FC = () => {
    const navigate = useNavigate();

    interface FormInputs{
        email:string;
        password:string;
        otp:string;
    }


    const { register,handleSubmit,formState:{errors}} = useForm<FormInputs>({defaultValues: {email:"",password:"",otp:""}});

    const submit :SubmitHandler<FormInputs> = async (data) => {
    try {
            const response = await axios.post('https://upskilling-egypt.com:3007/api/auth/login',data);
            localStorage.setItem('userAccessToken',response?.data?.data?.accessToken);
           

            navigate("/dashboard/home");

            toast.success(response?.data?.message, {
                theme: "colored"
            });
            // setTimeout(() =>{
            //   
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
                Reset your account
            </Typography>

            <Box component="form" noValidate  onSubmit={handleSubmit(submit)}>
                <FormGroup>
                    <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}} >
                        Email
                    </Typography>
                </FormGroup>    
                <TextField id="filled-basic" label="email" variant="filled" type='email' autoComplete='email' 
                    placeholder='john@gmail.com' sx={{width:"400px",padding:"0"}}
                    error={!!errors?.email} 
                    helperText={errors.email ? errors.email.message : ""}
                    {...register('email',{required:"Email is required" ,
                        pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                        message:"please enter a valid email address"}
                    })}
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
                    
                </FormGroup>

                <FormGroup>
                    <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}}>
                        OTP
                    </Typography>
                    <TextField id="filled-basic" label="otp" placeholder='********' type='text' autoComplete='otp' variant="filled" 
                    sx={{width:"400px",padding:"0"}} 
                    error={!!errors?.otp} 
                    helperText={errors.otp ? errors.otp.message : ""}
                    {...register('otp',{required:"otp is required"})}></TextField>
                    
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

export default ResetPassword;
