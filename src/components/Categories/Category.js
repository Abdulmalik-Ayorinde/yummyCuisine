import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Home/Nav'

class Category extends Component {
	constructor() {
		super()
		this.state = {
			categories: [],
		}
		// this.truncateString = this.truncateString.bind(this)
	}

	// truncateString(str, num) {
	// 	if (str.length <= num) {
	// 		return str
	// 	}
	// 	return str.slice(0, num) + '...'
	// }

	async componentDidMount() {
		const getMeal = await fetch(
			`https://www.themealdb.com/api/json/v1/1/categories.php`
		)
		const categoryData = await getMeal.json()
		this.setState({ categories: categoryData.categories })
		console.log(this.state.categories)
	}

	render() {
		const CategoryList = this.state.categories.map((item) => {
			var description = item.strCategoryDescription
			var name = item.strCategory
			return (
				<div className="result-container" key={item.idCategory}>
					<div className="img-div">
						<img src={item.strCategoryThumb} alt={item.strCategory} />
					</div>

					<div className="result-div">
						<h3>{name}</h3>
						<p>{description}</p>
						<button>
							<Link
								to={{
									pathname: `/result`,
								}}
							>
								Search
							</Link>
						</button>
					</div>
				</div>
			)
		})
		console.log(this.state.categories)

		return (
			<div className="main-result-container">
				<Nav />
				{CategoryList}
			</div>
		)
	}
}

export default Category
