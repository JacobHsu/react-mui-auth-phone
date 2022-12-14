import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import SocialBtns from './SocialBtns';

import CountDownButton from './components/button/CountDownButton';

import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/material.css'
import './style/material.css';

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";


import { useUserAuth } from "./context/UserAuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const { setUpRecaptha } = useUserAuth();

  const [number, setNumber] = useState('');
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(`+${number}`);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      alert('login')
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  id="phone"
                  label="phone"
                  name="phone"
                  autoComplete="phone"
                  size="small"
                /> */}
                <PhoneInput
                  onlyCountries={['tw', 'de', 'es']}
                  localization={{
                    Taiwan: '台灣',
                    Germany: 'Deutschland',
                    Spain: 'España',
                  }}
                  value={number}
                  placeholder="請輸入手機號碼"
                  onChange={(phone) => setNumber(phone)}
                />
                { !flag && <div id="recaptcha-container"></div> }
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '2px 4px',
                    alignItems: 'center',
                    height: 44,
                    width: 395,
                    border: '1px solid #cacaca',
                    boxShadow: 'none',
                    '&:hover': {
                      borderColor: '#000',
                    },
                  }}
                >
                  <TextField
                    margin="dense"
                    // type="number"
                    variant="standard"
                    value={otp}
                    style={{
                      marginLeft: 8,
                    }}
                    InputProps={{
                      disableUnderline: true,
                      //startAdornment: InputAdornmentImg(outToken.iconPath),
                    }}
                    placeholder="請輸入 6 位數驗證碼"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <CountDownButton getOtp={getOtp} title="發送驗證碼" />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                verifyOtp(e)
              }}
            >
              登入 / 註冊
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>

          <SocialBtns />
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
