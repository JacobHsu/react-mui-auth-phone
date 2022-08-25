import GoogleIcon from '@mui/icons-material/Google';
export default function SocialBtns() {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };
  return (
    <div className="loginButton google" onClick={google}>
      <GoogleIcon />
    </div>
  );
}
