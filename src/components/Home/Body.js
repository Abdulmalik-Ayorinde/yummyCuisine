import React from 'react'

import Nav from './Nav'
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button'

function Body() {
	return (
		<header>
			<Nav />
			<div
				className="main-content"
				// style={{ backgroundImage: 'url(/background.png)' }}
			>
				<img className="big-image" src="/img/big-image.png" alt="big-img" />
				<div>
					<h2 className="main-text">
						Your
						<br /> Faviourite
						<br /> Dishes Broken <br />
						Down Into <br />
						Recipies <span>|</span>
					</h2>
					<div className="cta-container">
						<button className="cta-btn">
							<Link className="cta-btn-link" to="/result">
								Search Food
							</Link>
						</button>
						<button className="cta-btn">
							<Link className="cta-btn-link" to="/category">
								Categories
							</Link>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Body
