import { NavLink } from 'react-router-dom';
import logoo from './logo.png';

const Nav = () => (
  <div className="nav">
    <nav className="same">
      <h1 className="heading">
        <img src={logoo} className="App-logoo" alt="logoo" width="70px" height="70px" />
        Space Traveller&apos;s Hub
      </h1>
      <ul className="nav-link">
        <NavLink activeClassName="selected" to="/">Rockets</NavLink>
        <NavLink activeClassName="selected" id="mission" to="/missions">Missions</NavLink>
        <NavLink activeClassName="selected" to="/dragon">Dragon</NavLink>
        <NavLink activeClassName="selected" to="/myprofile">My Profile</NavLink>
      </ul>
    </nav>
  </div>
);

export default Nav;
