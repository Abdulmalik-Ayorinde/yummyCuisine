import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Form from './Form'
import Nav from '../Home/Nav'

class Result extends Component {
	constructor() {
		super()
		this.state = {
			recipie: [],
		}
		this.getRecipie = this.getRecipie.bind(this)
		this.truncateString = this.truncateString.bind(this)
	}

	truncateString(str, num) {
		if (str.length <= num) {
			return str
		}
		return str.slice(0, num) + '...'
	}

	async getRecipie(e) {
		e.preventDefault()

		const input_value = e.target['search-input'].value
		const getMeal = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${input_value}`
		)
		const MealData = await getMeal.json()
		this.setState({ recipie: MealData.meals })
		console.log(this.state.recipie)
	}

	render() {
		const Recipe = this.state.recipie.map((item) => {
			var description = item.strInstructions
			var name = item.strMeal
			return (
				<div className="result-container" key={item.idMeal}>
					<div className="img-div">
						<img src={item.strMealThumb} alt={item.strMeal} />
					</div>

					<div className="result-div">
						<h3>{this.truncateString(name, 25)}</h3>
						<p>{this.truncateString(description, 450)}</p>
						<button>
							<Link
								to={{
									pathname: `/recipe/${item.idMeal}`,
									state: { recipe_id: item.idMeal },
								}}
							>
								View Recipe
							</Link>
						</button>
					</div>
				</div>
			)
		})
		console.log(this.state.recipie)

		return (
			<div>
				<Nav />
				<h1>Search For a Recipe</h1>
				<Form getRecipie={this.getRecipie} />
				<div className="main-result-container">
					{this.state.recipie.length > 0 && <h1>Results</h1>}
					{Recipe}
				</div>
			</div>
		)
	}
}

export default Result
