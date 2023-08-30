import { NavLink } from 'react-router-dom';
import './aside.css'



function Aside() {
    return (
        <aside>
            <ul className='list'>
              <li><NavLink className='list-link' to="/profile">Profile</NavLink></li>
              <li><NavLink className='list-link' to="/dialogs">Mesages</NavLink></li>
              <li><NavLink className='list-link' to=''>News</NavLink></li>
              <li><NavLink className='list-link' to=''>Music</NavLink></li>
              <li><NavLink className='list-link' to='/find'>Find user</NavLink></li>
              <li><NavLink className='list-link' to=''>Settings</NavLink></li>
            </ul>
          </aside>
    );
}

export default Aside