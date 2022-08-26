import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import SignUp from './SignUp';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Navbar from "./components/Navbar";

import "./app.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {

  const apiBackend = process.env.REACT_APP_BACKEND;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch(`${apiBackend}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject.user)
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <Container maxWidth="sm">
      <Navbar user={user} />
      <Box sx={{ my: 4 }}>
        <UserAuthContextProvider>
          <SignUp />
        </UserAuthContextProvider>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with styled-components
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
