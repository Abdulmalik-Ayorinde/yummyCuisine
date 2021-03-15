import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Nav from './Home/Nav'

class List extends Component {
	state = {
		singleRecipie: [],
	}

	async componentDidMount() {
		const id = this.props.location.state.recipe_id
		const get_id = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		)
		const resp = await get_id.json()

		// this.setState({ singleRecipie: resp })
		this.setState({ singleRecipie: resp.meals[0] })
		console.log(this.state.singleRecipie)
	}

	render() {
		const mealDisplay = this.state.singleRecipie
		return (
			<div>
				<Nav />
				<h3 className="special-heading">{mealDisplay.strMeal}</h3>
				<section className="top-Section">
					<img
						className="meal-image"
						src={mealDisplay.strMealThumb}
						alt={mealDisplay.strMeal}
					/>

					<div className="ingridents">
						<h3>Ingridents</h3>
						<ul>
							<li>
								{mealDisplay.strIngredient1}
								<span className="quantity">{mealDisplay.strMeasure1}</span>
							</li>
							<li>
								{mealDisplay.strIngredient2}
								<span className="quantity">{mealDisplay.strMeasure2}</span>
							</li>
							<li>
								{mealDisplay.strIngredient3}
								<span className="quantity">{mealDisplay.strMeasure3}</span>
							</li>
							<li>
								{mealDisplay.strIngredient4}
								<span className="quantity">{mealDisplay.strMeasure4}</span>
							</li>
							<li>
								{mealDisplay.strIngredient5}
								<span className="quantity">{mealDisplay.strMeasure5}</span>
							</li>
							<li>
								{mealDisplay.strIngredient6}
								<span className="quantity">{mealDisplay.strMeasure6}</span>
							</li>
							<li>
								{mealDisplay.strIngredient7}
								<span className="quantity">{mealDisplay.strMeasure7}</span>
							</li>
							<li>
								{mealDisplay.strIngredient8}
								<span className="quantity">{mealDisplay.strMeasure8}</span>
							</li>
							<li>
								{mealDisplay.strIngredient9}
								<span className="quantity">{mealDisplay.strMeasure9}</span>
							</li>
							<li>
								{mealDisplay.strIngredient10}
								<span className="quantity">{mealDisplay.strMeasure10}</span>
							</li>
							<li>
								{mealDisplay.strIngredient11}
								<span className="quantity">{mealDisplay.strMeasure11}</span>
							</li>
							<li>
								{mealDisplay.strIngredient12}
								<span className="quantity">{mealDisplay.strMeasure12}</span>
							</li>
							<li>
								{mealDisplay.strIngredient13}
								<span className="quantity">{mealDisplay.strMeasure13}</span>
							</li>
							<li>
								{mealDisplay.strIngredient14}
								<span className="quantity">{mealDisplay.strMeasure14}</span>
							</li>
							<li>
								{mealDisplay.strIngredient15}
								<span className="quantity">{mealDisplay.strMeasure15}</span>
							</li>
							<li>
								{mealDisplay.strIngredient16}
								<span className="quantity">{mealDisplay.strMeasure16}</span>
							</li>
							<li>
								{mealDisplay.strIngredient17}
								<span className="quantity">{mealDisplay.strMeasure17}</span>
							</li>
							<li>
								{mealDisplay.strIngredient18}
								<span className="quantity">{mealDisplay.strMeasure18}</span>
							</li>
							<li>
								{mealDisplay.strIngredient19}
								<span className="quantity">{mealDisplay.strMeasure19}</span>
							</li>
							<li>
								{mealDisplay.strIngredient20}
								<span className="quantity">{mealDisplay.strMeasure20}</span>
							</li>
						</ul>
					</div>
				</section>

				<div className="steps">
					<h3>Making Process</h3>
					<p className="steps">{mealDisplay.strInstructions}</p>
					<Link to="/">
						<button>Go Home</button>
					</Link>
				</div>
			</div>
		)
	}
}

export default List
