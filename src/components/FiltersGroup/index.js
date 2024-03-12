import './index.css'

const FiltersGroup = props => {
  const {each, categoryChoosing} = props
  const {name, categoryId} = each
  const sendingData = () => {
    categoryChoosing(categoryId)
  }

  return (
    <div className="filters-group-container">
      <button onClick={sendingData} className="disappearbutton">
        <p>{name}</p>
      </button>
    </div>
  )
}

export default FiltersGroup
