import { Link } from "react-router-dom";
import "./Header.css";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoIcon from "../../assets/icons/Logo-Icon.png";

function Header() {
  return (
    <header>
      <div className='HeaderTitle'>
        <img src={LogoIcon} alt='' />
        <h1>Tienda de Muebles</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <div className='HeaderNavigationIcons'>
        <Link>
          <Person2OutlinedIcon />
        </Link>
        <Link>
          <SearchOutlinedIcon />
        </Link>
        <Link>
          <FavoriteBorderOutlinedIcon />
        </Link>
        <Link to='/cart'>
          <ShoppingCartOutlinedIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
