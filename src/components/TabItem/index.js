import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveImage, isActive} = props
  const {buttonText, imageUrl, imageAltText} = tabDetails

  const displayActiveImage = () => {
    setActiveImage(imageUrl, imageAltText)
  }

  const activeBtnClassName = isActive ? 'active-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={` tab-button ${activeBtnClassName}`}
        onClick={displayActiveImage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
