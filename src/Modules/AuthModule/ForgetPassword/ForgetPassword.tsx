import { Button, FormGroup, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URLS } from '../../../Constants/END_POINTS';

interface FormInputs{
    email:string;
}

const ForgetPassword: React.FC = () => {
    const navigate = useNavigate();
    const { register,handleSubmit,formState:{errors}} = useForm<FormInputs>({defaultValues: {email:""}});

    const submit :SubmitHandler<FormInputs> = async (data) => {
    try {
            //console.log(data);
            const response = await axios.post(BASE_URLS.forgetPassword,data);
            console.log(response?.data?.data);
           

            navigate("/reset-password");

            toast.success(response?.data?.message, {
                theme: "colored"
            });
            // setTimeout(() =>{
            //   
            // }, 2000);   
    } catch (error) {
        console.log(error);
        toast.error(error,{
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
                Forget Password !!
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit(submit)}>
                <FormGroup>
                    <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}} >
                        Email
                    </Typography>
                </FormGroup>    
                <TextField id="filled-basic" label="email" variant="filled" type='email' autoComplete='email' 
                    placeholder='john@gmail.com' sx={{padding:"0"}}
                    fullWidth
                    error={!!errors?.email} 
                    helperText={errors.email ? errors.email.message : ""}
                    {...register('email',{required:"Email is required" ,
                        pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                        message:"please enter a valid email address"}
                    })}
                    />

                <Button variant="outlined" type="submit"
                sx={{ color: "#6251DD" ,width:"100%" ,padding:"8px 0",marginTop:"20px",border:"1px solid #6251DD",
                    "&:hover":{border:"2px solid#6251DD"}
                }} size="large"
                >Send</Button>
            </Box>
            


        </Box>
    );
}

export default ForgetPassword;
