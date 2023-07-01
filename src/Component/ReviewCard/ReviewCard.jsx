import DirectionsIcon from '@mui/icons-material/Directions'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import ShareIcon from '@mui/icons-material/Share'
import './reviewCard.scss'

const ReviewCard = () => {
  return (
    <div className='review'>
      <div className='wrapper'>
        <div className='img-container'>
          <img
            src='https://b.zmtcdn.com/data/pictures/2/18140652/23bd06978e60b84719ed49f64438ad16.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'
            alt='Big-food img'
          />
        </div>
        <div className='info'>
          <h1>Cafe National</h1>
          <p className='category'>
            Chinese, Shawarma, Mughlai, North Indian, Seafood, Biryani
          </p>
          <p className='location'>Mahalaxmi, Mumbai</p>
          <p className='time'>
            <span>Opens in 16 minutes</span> - 12noon - 1am (Today)
          </p>
        </div>
        <div className='actions'>
          <button>
            <DirectionsIcon className='icon' />
            Direction
          </button>
          <button>
            <BookmarkAddIcon className='icon' />
            Bookmark
          </button>
          <button>
            <ShareIcon className='icon' />
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
