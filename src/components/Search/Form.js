import React from 'react'

function Form(props) {
	return (
		<form onSubmit={props.getRecipie}>
			<input type="text" name="search-input" />
			<button>Search!</button>
		</form>
	)
}

export default Form
