import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='footerContent'>
        <div className='footerLocation'>
          <h2>Furniro.</h2>
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className='footerLinksSection'>
          <h5>Links</h5>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='footerLinksSection'>
          <h5>Help</h5>
          <a href=''>Payment Options</a>
          <a href=''>Returns</a>
          <a href=''>Privacy Policies</a>
        </div>
        <div className='footerLinksSection'>
          <h5>Newsletter</h5>
          <div>
            <input type='text' placeholder='Enter Your Email Address' />{" "}
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className='footerCopyRights'>2023 furino. All rights reverved</div>
    </footer>
  );
}

export default Footer;
