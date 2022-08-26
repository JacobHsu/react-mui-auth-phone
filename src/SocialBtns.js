import GoogleIcon from '@mui/icons-material/Google';
export default function SocialBtns() {

  const google = () => {
    const apiBackend = process.env.REACT_APP_BACKEND;
    window.open(`${apiBackend}/auth/google`, '_self');
  };
  return (
    <div className="loginButton google" onClick={google}>
      <GoogleIcon />
    </div>
  );
}
