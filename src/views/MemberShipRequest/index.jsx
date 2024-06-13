import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  InputAdornment,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MainCard from 'ui-component/cards/MainCard';
import { getRequest } from 'api/Requests';
import { Box } from '@mui/system';
import VerificationCard from 'ui-component/cards/VerificationCard/VerificationCard';

const MemberShipRequests = () => {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getRequest().then((resp) => {
      setRequests(resp);
      console.log(resp);
    });
  }, []);

  const handleRowClick = () => {};

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredRequests = requests.filter((req) => `${req.firstName} ${req.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()));

  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  const paginate = (_, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainCard>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '20px' }}>
        <Typography variant="h3" sx={{ padding: '10px', color: '#0009' }}>
          Requests
        </Typography>
        <TextField
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          size="small"
          placeholder="search"
        />
      </Box>
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Profile</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Country & City</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRequests.map((request) => (
              <TableRow
                onClick={handleRowClick}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f0f0f2',
                    cursor: 'pointer'
                  }
                }}
                key={request.id}
              >
                <TableCell>
                  <Avatar src={request.profileUrl} />
                </TableCell>
                <TableCell>
                  {request.firstName} {request.lastName}
                </TableCell>
                <TableCell align="left">{request.phone}</TableCell>
                <TableCell align="left">{request.email}</TableCell>
                <TableCell align="left">
                  {request.country}, {request.city}
                </TableCell>
                <TableCell align="right">
                  {/* {request.membership_status} */}
                  <VerificationCard data={request} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px'
        }}
      >
        <Pagination count={Math.ceil(filteredRequests.length / itemsPerPage)} page={currentPage} onChange={paginate} color="primary" />
      </Box>
    </MainCard>
  );
};

export default MemberShipRequests;
