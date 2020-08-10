import React from 'react'

export default (props) => {

	return (
		<div>
			<button onClick={props.onIncreaseContador}>+</button>
			<button onClick={props.onDecreaseContador}>-</button>
		</div>
	);
};