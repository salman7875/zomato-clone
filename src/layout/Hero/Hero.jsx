import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import SearchIcon from '@mui/icons-material/Search'
import './hero.scss'
import Collections from '../Collections/Collections'
import Newsletter from '../Newsletter/Newsletter'

const Hero = () => {
  return (
    <>
      <header className='hero'>
        <img
          src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'
          alt='Hero section img'
        />
        <div className='wrapper'>
          <nav>
            <div className='logo'>
              <PhoneIphoneIcon className='icon' />
              Get the App
            </div>
            <ul>
              <li>
                <a href='#'>Investor Relations</a>
              </li>
              <li>
                <a href='#'>Add restaurent</a>
              </li>
              <li>
                <a href='#'>Log in</a>
              </li>
              <li>
                <a href='#'>Sign up</a>
              </li>
            </ul>
          </nav>

          <div className='heading'>
            <img
              src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'
              alt='Zomato logo'
              className='zomato'
            />
            <p>Discover the best food & drinks in Mumbai</p>
            <div className='input-con'>
              <SearchIcon className='icon' />
              <input
                type='text'
                placeholder='Search for restaurent, cuisine or a dish'
              />
            </div>
          </div>
        </div>
      </header>

      <section className='sections'>
        <div className='wrapper'>
          <article className='hor-card'>
            <img
              src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
              alt='card-img'
            />
            <h2>Order Online</h2>
            <p>Stay home and order to your doorstep</p>
          </article>
          <article className='hor-card'>
            <img
              src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
              alt='card-img'
            />
            <h2>Order Online</h2>
            <p>Stay home and order to your doorstep</p>
          </article>
          <article className='hor-card'>
            <img
              src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
              alt='card-img'
            />
            <h2>Order Online</h2>
            <p>Stay home and order to your doorstep</p>
          </article>

          <Collections />
        </div>
        <Newsletter />
      </section>
    </>
  )
}

export default Hero
