
import './Navbar.css';

const Navbar = () => {
  return (
   
    <div className="nav">

      <div className="nav-logo"> Ev-Land </div>

      <ul className="nav-menu"> {/* This is for the nav bar*/}

        <li className='nav-home'>Home</li>
        <li className='nav-explore'>Explore</li>
        <lic className='nav-about'>About</lic>
        <li className='nav-contact'>Contact</li>
        
      </ul>

    </div>
  )
}

export default Navbar;