import './newsletter.scss'

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <div className='wrapper'>
        <img
          src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png'
          alt='mobile image'
        />
        <div className='details'>
          <h1>Get the Zomato App</h1>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>
          <input type='radio' id='Email' className='email' />
          <span className='email-r'>Email</span>
          <input type='radio' id='Phone' className='phone' />
          <span className='phone-r'>Phone</span>
          <div className='box'>
            <input type='text' placeholder='Email' />
            <button>Share App Link</button>
          </div>
          <span>Download app from</span>
          <div className='button'>
            <img
              src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'
              alt='playstore button'
            />
            <img
              src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'
              alt='apple store button'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
