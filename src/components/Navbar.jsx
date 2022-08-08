import * as React from 'react';

import {Link} from 'react-router-dom';
const Navbar = ({}) =>{
      return (
            <div className='Navbar'>
                  <div className='Navhead'>
                        <span className='new_nav_head'>Dev</span>Challenges.io
                  </div>
                  <div className='Navlink'>
                  <Link to='/Color'> color</Link>
                  <Link to='/Typography1'>Typography</Link>
                  <Link to='/Spaces'>Spaces</Link>
                  <Link to='/Button_nav'>Button</Link>
                  <Link to='/Inputsnav'>Inputs</Link>
                  <Link to='/Grid_nav'>Grids</Link>
                  </div>
            </div>
      );
}

export default Navbar;