import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logoutStart } from "../../context/authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
    return () => window.onscroll = null;
  };

  const handleLogOut = () => {
    dispatch(logoutStart());
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
            <div className="left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                  alt="netflix logo"
                />
                <Link to={'/'} className="link">
                  <span>Homepage</span>
                </Link>
                <Link to={'/series'} className="link">
                  <span>Series</span>
                </Link>
                <Link to={'/movies'} className="link">
                  <span>Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My list</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={handleLogOut}>Log out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
