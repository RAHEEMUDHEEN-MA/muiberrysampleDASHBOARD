import {
  Box,
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  CircularProgress
} from '@mui/material';
import { VerifyMember } from 'api/VerifyMember';
// import { Box } from '@mui/system'
import React, { useState } from 'react';
import VerifiedAnimation from './Animation/verifiedAnimation.json';
import Lottie from 'lottie-react';

const SubVerifyCard = ({ data, visibility,verified,setVerified }) => {
  console.log('prop data at final', data.data);
  console.log('visibility', visibility.setOpen);
  const [loading, setloading] = useState(false);
  // const [verified, setVerified] = useState(false);
  console.log('loading:', loading, 'verified:', verified);
  //   const setVisibilty=visibility.set

  const handleVerify = (id) => {
    console.log('clicked');
    VerifyMember(id);

    setloading(true);
    setTimeout(() => {
      setloading(false);
      setVerified(true);
    }, 1000);
  };
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardContent>
        <Stack gap={2} padding={1} sx={{ marginBottom: '20px', alignItems: 'center' }} direction="row" justifyContent="centre">
          <Avatar sx={{ height: 80, width: 80 }} src={data.data.profileUrl} />

          <Stack gap={0} sx={{ textAlign: 'start' }}>
            <Stack direction="row" sx={{alignItems:"center"}}>
            <Typography sx={{ color: '#0009' }} variant="h3">
              {' '}
              {data.data.firstName} {data.data.lastName}
            </Typography>
           
           {verified&& <Lottie style={{ position: 'relative' }} animationData={VerifiedAnimation} loop={false} />}
         
 
            </Stack>
            <Typography sx={{ color: '#0004' }} variant="h5">
              {' '}
              {data.data.country} ,{data.data.city}
            </Typography>
          </Stack>
        </Stack>

        {/* --------------------------- */}

        <Stack component="form" spacing={2}>
          <Stack direction="row" spacing={4}>
            <TextField required value={data.data.email} label="Email" type="email" />
            <TextField required value={data.data.phone} label="Phone" pattern="[[0-9]{10}" type="tel" />
          </Stack>
          <Stack gap={4} direction="row">
            <TextField required value={data.data.gender} label="Gender" />

            <FormControlLabel value={data.data.married} control={<Checkbox checked={data.data.married} />} label="Married" />
          </Stack>
          <TextField required value={data.data.dob} label="Date of Birth" />

          <Stack spacing={2} direction="row">
            <TextField required value={data.data.country} label="Country" />

            <TextField required value={data.data.city} label="City" />
          </Stack>

          <TextField value={data.data.address} label="Address" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={visibility}>
          Close
        </Button>
        <Button  disabled={verified} sx={{ height: '30px' }} onClick={() => handleVerify(data.data.id)} variant="contained" size="small">
          {/* {loading?      <CircularProgress />:"Verify"?!loading&&verified?"Verified"} */}
          {loading ? <CircularProgress color="inherit" size={15} /> : !loading && verified ? 'Verified' : 'Verify'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default SubVerifyCard;
