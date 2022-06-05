import React from 'react';
const Todos = ({ list, deleteTodo }) => {
	const todoList = list.length ? (
		list.map(eachItem => {
			return (
				<div key={eachItem.id} className="collection-item">
					<span onClick={() => { deleteTodo(eachItem.id) }}>
						{eachItem.data}
					</span>
				</div>
			)
		})
	): (
		<p className="center">You have no todos left! Yay </p>
	)
	return (
		<div className="todos collection">
			{todoList}
		</div>
	)
}
export default Todos;
