import axios from 'axios';


const AxiosErrorHandler = (error:unknown) => {
    if (axios.isAxiosError(error)) {
        return (error.response?.data.message || error.message);
      } else {
        //if axios cannot handle error
        return ("An unexpected error");
      }

}

export default AxiosErrorHandler;
