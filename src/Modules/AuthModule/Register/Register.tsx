import { Button, FormControl, FormGroup, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URLS } from '../../../Constants/END_POINTS';
import { emailValidation , firstNameValidation , lastNameValidation,passwordValidation ,roleValidation} from '../../../Constants/VALIDATIONS';




const Register: React.FC = () => {
    const navigate = useNavigate();

    interface FormInputs{
        first_name:string;
        last_name:string;
        role:string;
        email:string;
        password:string;

    }

    const { register,handleSubmit,formState:{errors}} = useForm<FormInputs>({defaultValues: {email:"",password:""}});

    const submit :SubmitHandler<FormInputs> = async (data) => {
    try {
            const response = await axios.post(BASE_URLS.register,data);
            localStorage.setItem('userAccessToken',response?.data?.data?.accessToken);

            toast.success(response?.data?.message, {
                theme: "colored"
            });

            navigate("/login");

  
            // setTimeout(() =>{

            // }, 2000);   
    } catch (err) {
        console.log(err);
        toast.error("Register Failed!",{
            theme:"colored"
        });
    }

}
    return (
        <Box sx={{ textAlign:"start" }}>
            <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}}>
                Create New Account
            </Typography>
           <Typography component="h5" variant="h5" fontWeight="bold">
                Register 
            </Typography>

            <Box component="form" noValidate  onSubmit={handleSubmit(submit)}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}> {/* Adjust the size here */}
                    <FormGroup>
                        <Typography component="p" variant="subtitle1" sx={{ mt: 5, color: "gray" }}>
                            FirstName
                        </Typography>
                        <TextField 
                            id="filled-basic" 
                            label="First Name" 
                            variant="filled" 
                            type='text' 
                            autoComplete='first_name' 
                            placeholder='john' 
                            sx={{ width: "100%", padding: "0" }} // Use 100% to fill the container
                            error={!!errors?.first_name} 
                            helperText={errors.first_name ? errors.first_name.message : ""}
                            {...register('first_name', firstNameValidation)}
                        />
                    </FormGroup>
                </Grid>

                <Grid item xs={12} md={6}> {/* Adjust the size here */}
                    <FormGroup >
                        <Typography component="p" variant="subtitle1" sx={{ mt: 5, color: "gray" }}>
                            LastName
                        </Typography>
                        <TextField 
                            id="filled-basic" 
                            label="Last Name" 
                            variant="filled" 
                            type='text' 
                            autoComplete='last_name' 
                            placeholder='john' 
                            sx={{ width: "100%", padding: "0" }} // Use 100% to fill the container
                            error={!!errors?.last_name} 
                            helperText={errors.last_name ? errors.last_name.message : ""}
                            {...register('last_name', lastNameValidation)}
                        />
                    </FormGroup>
                </Grid>
            </Grid>

                <FormGroup>
                    <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray" }} >
                        Email
                    </Typography>
         
                <TextField id="filled-basic" label="email" variant="filled" type='email' autoComplete='email' 
                    placeholder='john@gmail.com' sx={{width:"500px",padding:"0"}}
                    error={!!errors?.email} 
                    helperText={errors.email ? errors.email.message : ""}
                    {...register('email',emailValidation)}
                    />
               </FormGroup>
                <FormGroup>
                    <Typography component="p" variant="subtitle1" sx={{ mt: 5 ,color:"gray"}}>
                        Password
                    </Typography>
                    <TextField id="filled-basic" label="password" placeholder='********' type='password' autoComplete='password' variant="filled" 
                    sx={{width:"500px",padding:"0"}} 
                    error={!!errors?.password} 
                    helperText={errors.password ? errors.password.message : ""}
                    {...register('password',passwordValidation)}></TextField>
                </FormGroup>

                <FormGroup>
                    <FormControl variant="filled" sx={{ marginTop: "30px", width: '500px' }} error={!!errors.role}>
                        <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            {...register('role', roleValidation)} // Register role with validation
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Admin'}>Admin</MenuItem>
                            <MenuItem value={'Customer'}>Customer</MenuItem>
                        </Select>
                        {/* Use FormHelperText to display error messages */}
                        {errors.role && <FormHelperText>{errors.role.message}</FormHelperText>}
                    </FormControl>
                 </FormGroup>

                    <Button variant="contained" type="submit"
                    sx={{ backgroundColor: "#EF6B4A",color:"white" ,width:"100%" ,padding:"8px 0" ,marginTop:"50px",  "&:hover":{border:"2px solid#6251DD"}}} size="large"
                    >
                        Register
                    </Button>
                    <br/>
                    <Button variant="outlined"  onClick={()=> navigate("/login")}
                    sx={{ color: "#6251DD" ,width:"100%" ,padding:"8px 0",marginTop:"20px",border:"1px solid #6251DD",
                        "&:hover":{border:"2px solid#6251DD"}
                    }} size="large"
                    >Login</Button>
            </Box>
            


        </Box>
    );
}

export default Register;
