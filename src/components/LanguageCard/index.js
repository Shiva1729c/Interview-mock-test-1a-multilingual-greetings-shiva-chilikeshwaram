import './index.css'

const LanguageCard = props => {
  const {activeImageUrl, activeImageAltText} = props

  return (
    <div className="card-image-item">
      <img
        src={activeImageUrl}
        alt={activeImageAltText}
        className="language-image"
      />
    </div>
  )
}

export default LanguageCard
