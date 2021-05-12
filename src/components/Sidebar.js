import "./Sidebar.css";
import logo from "../logo.svg";
import iconDark from "../icon-dark.svg";
import avatar from "../avatar.png";

function Sidebar() {
  return (
    <aside className="Sidebar">
      <div className="Sidebar-logo">
        <img className="Sidebar-logo-img" src={logo} alt="Logo" />
        <div className="box-1"></div>
        <div className="box-2"></div>
      </div>
      <div className="Sidebar-bottom">
        <img src={iconDark} alt="Dark Mode" />
        <span className="Sidebar-divider"></span>
        <img src={avatar} alt="Avatar" />
      </div>
    </aside>
  );
}

export default Sidebar;
