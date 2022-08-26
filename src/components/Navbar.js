
const Navbar = ({ user }) => {
  const logout = () => {
    const apiBackend = process.env.REACT_APP_BACKEND;
    window.open(`${apiBackend}/auth/logout`, "_self");
  };
  return (
    <div className="navbar">
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <div className="link" to="login">
          Login
        </div>
      )}
    </div>
  );
};

export default Navbar;
