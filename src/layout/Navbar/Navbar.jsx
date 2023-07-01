import SearchIcon from '@mui/icons-material/Search'
import logo from '../../assets/zomato.avif'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <img src={logo} alt='zomato logo' />
          <div className='input-con'>
            <SearchIcon />
            <input
              type='text'
              placeholder='Search for restaurent, cuisine or a dish'
            />
          </div>
        </div>
        <div className='right'>
          <a href='#'>Log in</a>
          <a href='#'>Sign up</a>
        </div>
      </div>
      <hr />
    </nav>
  )
}

export default Navbar
