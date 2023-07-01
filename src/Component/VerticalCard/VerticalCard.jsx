import './verticalCard.scss'

const VerticalCard = () => {
  return (
    <div className='vertical'>
      <img
        src='https://b.zmtcdn.com/data/dish_photos/1b7/a43e9839145bd36fc65997bb764fe1b7.jpg'
        alt='food-img'
      />
      <div className='info'>
        <p className='title'>Charcoal Eats - Biryani & Beyo...</p>
        <span className='rating'>4.1 ⭐</span>
      </div>
      <div className='more-info'>
        <p className='types'>Biryani, Kebab, Rolls..</p>
        <p className='price'>$250 for one</p>
      </div>
      <span className='time'>31 min</span>
    </div>
  )
}

export default VerticalCard
