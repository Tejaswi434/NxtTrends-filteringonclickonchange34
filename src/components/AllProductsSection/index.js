import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].optionId,
    category: categoryOptions[0].name,
    star: ratingsList[0].ratingId,
    inputData: '',
    apistatus: 'initial',
  }

  componentDidMount() {
    this.getProducts()
  }

  fetchingDataThroughInput = async event => {
    if (event.key === 'Enter') {
      const {inputData} = this.state
      console.log('hello')
      const jwtToken = Cookies.get('jwt_token')

      const apiUrl = `https://apis.ccbp.in/products?title_search=${inputData}`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = fetchedData.products.map(product => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }))
        this.setState({
          productsList: updatedData,
          isLoading: false,
        })
      }
    }
  }

  filteringOnInput = event => {
    const {inputData} = this.state

    this.setState({inputData: event.target.value})
  }

  categoryChoosing = async value => {
    console.log(value)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products?category=${value}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  getProducts = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {activeOptionId} = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state

    // TODO: Add No Products View
    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  four = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/products?rating=4'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  third = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/products?rating=3'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  second = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/products?rating=2'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  first = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/products?rating=1'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  clearFilter = () => {
    this.getProducts()
  }
  // TODO: Add failure view

  render() {
    const {isLoading, inputData} = this.state
    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <div className="columning">
          <div>
            <br />
            <br />
            <input
              type="search"
              placeholder="Search"
              onChange={this.filteringOnInput}
              onKeyDown={this.fetchingDataThroughInput}
              value={inputData}
            />
            <h1>Category</h1>
            {categoryOptions.map(each => (
              <FiltersGroup
                each={each}
                key={each.id}
                categoryChoosing={this.categoryChoosing}
              />
            ))}
          </div>
          <div>
            <br />
            <br />
            <button type="button" className="btnList" onClick={this.four}>
              <img
                src={ratingsList[0].imageUrl}
                alt={`rating ${ratingsList[0].ratingId}`}
                className="starsImage"
              />
            </button>
            <br />
            <br />
            <button type="button" onClick={this.third}>
              <img
                src={ratingsList[1].imageUrl}
                alt={`rating ${ratingsList[1].ratingId}`}
                className="starsImage"
              />
            </button>
            <br />
            <br />
            <button type="button" onClick={this.second}>
              <img
                src={ratingsList[2].imageUrl}
                className="starsImage"
                alt={`rating ${ratingsList[2].ratingId}`}
              />
            </button>
            <br />
            <br />
            <button type="button" onClick={this.first}>
              <img
                src={ratingsList[3].imageUrl}
                alt={`rating ${ratingsList[3].ratingId}`}
                className="starsImage"
              />
            </button>
          </div>
          <button onClick={this.clearFilter} type="button">
            "Clear Filters"
          </button>
        </div>
        <div>{this.renderProductsList()}</div>
      </div>
    )
  }
}

export default AllProductsSection
