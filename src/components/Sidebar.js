import "./Sidebar.css";
import logo from "../logo.svg";
import iconDark from "../icon-dark.svg";
import avatar from "../avatar.png";

function Sidebar() {
  return (
    <aside class="Sidebar">
      <div class="Sidebar-logo">
        <img class="Sidebar-logo-img" src={logo} alt="Logo" />
        <div class="box-1"></div>
        <div class="box-2"></div>
      </div>
      <div class="Sidebar-bottom">
        <img src={iconDark} alt="Dark Mode" />
        <span class="Sidebar-divider"></span>
        <img src={avatar} alt="Avatar" />
      </div>
    </aside>
  );
}

export default Sidebar;
