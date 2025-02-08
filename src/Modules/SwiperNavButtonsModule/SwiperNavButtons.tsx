import { useSwiper } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button } from '@mui/material';
import styles from './SwiperNavButtons.module.css'
const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box component="div" className={styles.swiper_nav_btns}>
      <Button className={styles.prev} onClick={() => swiper.slidePrev()}><ArrowBackIcon sx={{width:'16px',height:'16px',mt:1}}/></Button>
      <Button className={styles.next} onClick={() => swiper.slideNext()}><ArrowForwardIcon sx={{width:'16px',height:'16px',mt:1}}/></Button>
    </Box>
  );
};

export default SwiperNavButtons;