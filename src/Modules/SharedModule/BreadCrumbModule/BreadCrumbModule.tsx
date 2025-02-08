import { Box, Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbModule = () => {
    return (
      <Box sx={{ backgroundColor:"red" ,m:-1}}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mt:4 }}>
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
        </Breadcrumbs>
      </Box>
    );
}

export default BreadCrumbModule;
