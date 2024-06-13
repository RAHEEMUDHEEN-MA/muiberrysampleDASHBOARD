import { Backdrop, Button, Card, CardActions, CardContent, CardMedia,  Typography } from '@mui/material';
import React, { useState } from 'react';
// import Card from './Card';
import { Box } from '@mui/system';
import SubCard from '../SubCard';
import SubVerifyCard from './SubVerifyCard';
import { useNavigate } from 'react-router-dom';

const VerificationCard = (data) => {
  // console.log("prop data from backdrop",data.data);
  const [open, setOpen] = useState(false);
  const [isverified, setisVerified] = useState(false);

  const handleClose = () => {
    setOpen(false); 
    if (isverified) {
      window.location.reload(); 
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Box>
        <Button onClick={handleOpen}>Verify</Button>{' '}
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} >
        {open && <SubVerifyCard data={data} visibility={handleClose} verified={isverified} setVerified={setisVerified} />}
        </Backdrop>
      </Box>
    </div>
  );
};

export default VerificationCard;
