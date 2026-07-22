import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
    return () => window.onscroll = null;
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png
                " alt="netflix logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
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
                        <span>Log out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
